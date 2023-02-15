import {defineDocumentType, makeSource} from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath,
	},
};

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Blog],
});
