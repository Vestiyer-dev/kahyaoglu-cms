import '@styles/main.css'
import '@styles/chrome-bug.css'
import { type AppType } from "next/app";
import { AppProps } from 'next/app'
import { useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Layout } from '~/components/common';
import { api } from "~/utils/api";


const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>
const MyApp: AppType = ({ Component, pageProps }) => {
  const Layout = (Component as any).Layout || Noop
  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default api.withTRPC(MyApp);
