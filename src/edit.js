import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
// eslint-disable-next-line
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';
import './editor.scss';

const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, alignment, style } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<div
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
			>
				<RichText
					className="text-box-title"
					onChange={ onChangeText }
					value={ text }
					placeholder={ __( 'Your Text', 'text-box' ) }
					tagName="h4"
					allowedFormats={ [] }
				/>
				<BoxControlVisualizer
					values={ style && style.spacing && style.spacing.padding }
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/>
			</div>
		</>
	);
}
