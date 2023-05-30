import {atom, selector} from "recoil";

export const accessTokenState = atom({
  key:"accessTokenState",
  default:''
})


export const headerState = atom({
  key: 'headerState',
  default: {
    isLoggedIn: false,
    authToken: null,
  },
});

export const headerSelector = selector({
  key: 'headerSelector',
  get: ({ get }) => {
    const header = get(headerState);
    return header;
  },
});