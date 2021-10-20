import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={ [
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						onClick: () => console.log( 'Button 1 Clicked' ),
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						onClick: () => console.log( 'Button 2 Clicked' ),
					},
				] }
			>
				{ text && (
					<ToolbarGroup>
						<ToolbarButton
							title={ __( 'Align Left', 'text-box' ) }
							icon="editor-alignleft"
							onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title={ __( 'Align Center', 'text-box' ) }
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Align center' ) }
						/>
						<ToolbarButton
							title={ __( 'Align Right', 'text-box' ) }
							icon="editor-alignright"
							onClick={ () => console.log( 'Align Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={ __( 'More Alignments', 'text-box' ) }
							controls={ [
								{
									title: __( 'Wide', 'text-box' ),
									icon: 'align-wide',
								},
								{
									title: __( 'Full', 'text-box' ),
									icon: 'align-full-width',
								},
							] }
						/>
					</ToolbarGroup>
				) }
				<ToolbarGroup>
					<p>Group 2</p>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...useBlockProps() }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>
		</>
	);
}
