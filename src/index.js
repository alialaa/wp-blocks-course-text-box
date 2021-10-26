import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';

registerBlockType( 'blocks-course/text-box', {
	edit: Edit,
	save,
	variations: [
		{
			name: 'blocks-course/gradient-text-box',
			title: __( 'Gradient Text Box' ),
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
} );
