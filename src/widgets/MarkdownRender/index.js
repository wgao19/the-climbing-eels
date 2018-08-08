// @flow
import * as React from 'react';
import cx from 'classnames';
import marked from 'marked';
import type { Dom } from 'types/Dom';
import './style.scss';

type P = {
  loadMarkdown: Function,
} & Dom;
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
          className={cx('eels-markdown-render', this.props.className)}
          dangerouslySetInnerHTML={{ __html: marked(this.state.file) }}
        />
      )
    );
  }
}

export default MarkdownRender;
