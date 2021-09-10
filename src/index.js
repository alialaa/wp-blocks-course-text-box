import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/text-box', {
	edit: Edit,
	save,
} );
