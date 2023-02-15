import {name, about, bio} from 'lib/info';

export default function Home() {
	return (
		<main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
			<h1 className='font-bold text-3xl font-serif'>{name}</h1>
			<p className='my-5 text-neutral-800 dark:text-neutral-200'>{about()}</p>
			<p className='my-5 text-neutral-800 dark:text-neutral-200'>{bio()}</p>
		</main>
	);
}
