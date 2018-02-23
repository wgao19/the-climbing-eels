export default function initGoogle(cb) {
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js';

  script.onload = () => {
    gapi.load('client', cb);
  };

  document.body.appendChild(script);
}
