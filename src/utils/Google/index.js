import embedScript from '../embedScript';

export default function initGoogle(cb) {
  embedScript({
    src: 'https://apis.google.com/js/client.js',
    onLoad: () => {
      gapi.load('client', cb);
    },
  });
}
