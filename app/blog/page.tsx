import {allBlogs} from 'contentlayer/generated';
import Link from 'next/link';

export const metadata = {
	title: 'Блог',
	description: 'Мои мысли о веб-разработке',
};

export default function BlogPage() {
	return (
		<section>
			<h1 className='font-bold text-3xl font-serif mb-5'>Блог</h1>
			{allBlogs
				.sort((a, b) => {
					if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<Link href={`/blog/${post.slug}`} key={post.title}>
						<div className='w-full flex flex-col'>
							<p>{post.title}</p>
							<p>{post.publishedAt}</p>
						</div>
					</Link>
				))}
		</section>
	);
}
