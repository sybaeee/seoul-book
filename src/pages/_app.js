import Layout from "@/components/common/layout";
import store from "../redux/store";
import globalCss from "@/styles/global.styles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Global styles={globalCss} />
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
