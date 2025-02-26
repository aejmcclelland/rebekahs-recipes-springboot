import { Poppins } from 'next/font/google';
import './globals.css';

// Load the Poppins font
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '600', '700'], // Choose the font weights you need
	variable: '--font-poppins', // Custom CSS variable
});

export default function Layout({ children }) {
	return (
		<html lang='en' className={poppins.variable}>
			<head>
				<title>Rebekah's Recipes</title>
			</head>
			<body className='min-h-screen flex flex-col font-sans'>
				<header className='p-4 bg-blue-600 text-white'>
					<h1 className='text-2xl font-bold'>Rebekah's Recipes</h1>
				</header>
				<main className='flex-1 p-4'>{children}</main>
				<footer className='p-4 bg-gray-200 text-center'>
					© 2025 Rebekah's Recipes
				</footer>
			</body>
		</html>
	);
}
