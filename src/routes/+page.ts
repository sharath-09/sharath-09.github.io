import type { PageLoad } from './$types';
import imageSrc from '$lib/assets/headshot.webp';

export const load: PageLoad = ({ params }) => {
	return {
		imageSrc
	};
};