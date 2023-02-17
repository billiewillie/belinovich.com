import Sidebar from '@/components/sidebar';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='ru' className='dark:text-white dark:bg-[#111010] min-w-[320px]'>
			<head />
			<body>
				<div className='min-h-screen overflow-hidden'>
					<div className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
						<Sidebar />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
