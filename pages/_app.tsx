import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
import 'nextra-theme-blog/style.css'
import '../styles/global.css'
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const MuIdarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},

	},
});

export default function PortfolioRebuild({ Component, pageProps }) {

	// Solution to Hydration issue with React 18: https://stackoverflow.com/a/71797054/7992303
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}
	if (typeof window === 'undefined') {
		return <></>;
	} else {
		return (
			<QueryClientProvider client={queryClient}>
				<MuiThemeProvider theme={MuIdarkTheme}>
					{/* @ts-ignore */}
					<ThemeProvider attribute="class">
						<Component {...pageProps} />
					</ThemeProvider>
				</MuiThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		)
	}
}