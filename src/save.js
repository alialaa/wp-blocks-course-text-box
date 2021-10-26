import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
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
			tagName="h4"
			value={ text }
		/>
	);
}
