import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { omit } from 'lodash';
import blockData from '../block.json';

const v2 = {
	supports: {
		html: false,
		color: {
			background: true,
			text: true,
			gradients: true,
		},
		spacing: {
			padding: true,
		},
	},
	attributes: {
		...omit( blockData.attributes, [ 'textAlignment' ] ),
		alignment: {
			type: 'string',
			default: 'left',
		},
	},
	migrate: ( attributes ) => {
		return {
			...omit( attributes, [ 'alignment' ] ),
			textAlignment: attributes.alignment,
		};
	},
	save: ( { attributes } ) => {
		const { text, alignment, shadow, shadowOpacity } = attributes;

		const classes = classnames( `text-box-align-${ alignment }`, {
			'has-shadow': shadow,
			[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
		} );

		return (
			<RichText.Content
				{ ...useBlockProps.save( {
					className: classes,
				} ) }
				tagName="p"
				value={ text }
			/>
		);
	},
};

export default v2;
