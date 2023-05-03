const { css } = require("@emotion/react");

const globalCss = css`
  @font-face {
      font-family: 'EF_AONE';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_AONE.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: 'EF_AONE';
    box-sizing: border-box;
  }
`;

export default globalCss;