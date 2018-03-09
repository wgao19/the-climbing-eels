// @flow

export default cb => {
  setTimeout(() => {
    cb();
  },Math.floor(Math.random() * 20) )
};
