import Layout from "@/components/common/layout";
import store from "../redux/store";
import globalCss from "@/styles/global.styles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect } from "react";
import { accessTokenState } from "@/redux/login.store";

export default function App({ Component, pageProps }) {
  
  return (
    <RecoilRoot>
      <Layout>
        <Provider store={store}>
          <Global styles={globalCss} />
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </RecoilRoot>
  );
}
