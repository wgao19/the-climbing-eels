// @flow @format

import { h, Component } from 'preact';
const fs = require('fs');
import testMarkdown from '../__data__/test.md';
console.log(
  fs.readFileSync('./src/packages/preact-markdown/__data__/test.md', 'utf8')
);

//console.log(fs.readFileSync(testMarkdown, 'utf8'));

export default class PreactMarkdown extends Component {
  render() {
    //const article = fs.readFileSync(testMarkdown, 'utf8');
    //console.log(article);
    console.log(testMarkdown);

    return <div className="preact-markdown">hello preact markdown</div>;
  }
}
