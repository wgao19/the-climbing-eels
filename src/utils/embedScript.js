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
  document.body.appendChild(script);
}
