import Layout from "@/components/common/layout";
import globalCss from "@/styles/global.styles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </Layout>
  );
}
