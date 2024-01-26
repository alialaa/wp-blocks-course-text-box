import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ textAlignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	};
	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	};

	const classes = classnames(`text-box-align-${textAlignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__('Shadow Setting', 'text-box')}>
						<RangeControl
							label={__('Shadow Opacity', 'text-box')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Shadow', 'text-box'),
						onClick: toggleShadow,
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<div
				{...useBlockProps({
					className: classes,
				})}
			>
				<RichText
					className="text-box-title"
					onChange={onChangeText}
					value={text}
					placeholder={__('Your Text', 'text-box')}
					tagName="p"
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
