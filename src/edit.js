import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<TextareaControl
						label="Text Area Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={ true }
						onChange={ ( v ) => console.log( v ) }
					/>
					<AnglePickerControl />
					<ColorPicker
						color={ 'F03' }
						onChangeComplete={ ( v ) => console.log( v ) }
					/>
					<ColorPalette
						colors={ [
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						] }
						onChange={ ( v ) => console.log( v ) }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>
		</>
	);
}
