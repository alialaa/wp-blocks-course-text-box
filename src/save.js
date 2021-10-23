import {
	useBlockProps,
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const {
		text,
		alignment,
		backgroundColor,
		textColor,
		customBackgroundColor,
		customTextColor,
	} = attributes;

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textClass = getColorClassName( 'color', textColor );

	const classes = classnames( `text-box-align-${ alignment }`, {
		[ textClass ]: textClass,
		[ backgroundClass ]: backgroundClass,
	} );

	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classes,
				style: {
					backgroundColor: backgroundClass
						? undefined
						: customBackgroundColor,
					color: textClass ? undefined : customTextColor,
				},
			} ) }
			tagName="h4"
			value={ text }
		/>
	);
}
