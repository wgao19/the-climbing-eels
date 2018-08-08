// @flow

import * as React from 'react';
import marked from 'marked';

type P = {
  loadMarkdown: Function,
};
type S = {
  file: ?string,
};

class MarkdownRender extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { file: null };
  }

  componentDidMount() {
    this.props.loadMarkdown().then(what => {
      this.setState({ file: what.default });
    });
  }

  render() {
    return (
      this.state.file && (
        <div
          className="eels-markdown-render"
          dangerouslySetInnerHTML={{ __html: marked(this.state.file) }}
        />
      )
    );
  }
}

export default MarkdownRender;
