import {ArrowIcon, GitHubIcon} from '@/components/icons';

export const metadata = {
	title: 'Обо мне',
	description: 'Разрабатываю сайты и web приложения',
};

export default function AboutPage() {
	return (
		<section>
			<h1 className='font-bold text-3xl font-serif'>Обо мне</h1>
			<p className='my-5 text-neutral-800 dark:text-neutral-200'>Здравствуйте! Меня зовут Вадим.</p>
			<div className='prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200'>
				<p>В данный момент я работаю в Студии 54 и занимаюсь поддержкой имеющихся проектов и созданием новых программных продуктов.</p>
				<hr />
				<p>
					I'm passionate about many creative pursuits, including music, photography, videography, and of course, coding. This combination of interests
					is what ultimately led me to my current role in building developer communities.
				</p>
				<p>
					I <b>love</b> building for the web. From something as simple as a single HTML file – all the way to large Next.js applications. The web is
					incredible. Anyone can become a developer, writer, or creator – and no one has to ask for permission. You can just build.
				</p>
				<div className='flex flex-col gap-2 md:flex-row md:gap-2'>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://github.com/billiewillie'
						className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'>
						<div className='flex items-center'>
							<GitHubIcon />
							<div className='ml-3'>GitHub</div>
						</div>
						<ArrowIcon />
					</a>
				</div>
			</div>
		</section>
	);
}
