import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithlayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode //esto podría ser un JSX.Element
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithlayout
}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {

	const getLayout = Component.getLayout || ((page) => page);

	// return <Component {...pageProps} />

	return getLayout(<Component {...pageProps} />)	

}
export default MyApp
