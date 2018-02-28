// @flow
export default function embedScript({
  src,
  onLoad,
}: {
  src: string,
  onLoad?: () => {},
}) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = onLoad;
  // $FlowFixMe
  document.body.appendChild(script);
}
