// @flow

export default (cb: Function) => {
  setTimeout(() => {
    cb();
  },Math.floor(Math.random() * 20) )
};
