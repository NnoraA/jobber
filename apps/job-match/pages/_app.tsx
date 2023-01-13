import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from '../components/header';
import styled from 'styled-components';

const MainComponent = styled.main`
  width: 100%;
  height: calc(100% - 38px);
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to job-match!</title>
      </Head>
      <MainComponent>
        <Header />
        <Component {...pageProps} />
      </MainComponent>
    </>
  );
}

export default CustomApp;
