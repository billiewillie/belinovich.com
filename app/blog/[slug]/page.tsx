import {Mdx} from '@/components/mdx';
import {allBlogs} from 'contentlayer/generated';

export async function generateStaticParams() {
	return allBlogs.map((post) => ({
		slug: post.slug,
	}));
}
export default async function PostPage({params}) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	return (
		<section>
			<h1 className='font-bold text-3xl font-serif mb-5'>{post.title}</h1>
			<Mdx code={post.body.code} />
		</section>
	);
}
