import React, { Fragment, PureComponent } from "react";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";
import { markdown } from "markdown";

// Example text from https://en.wikipedia.org/wiki/Markdown#Example
const defaultText = `Heading
=======

## Sub-heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line
produces a line break.

Text attributes _italic_,
**bold**, \`monospace\`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. wash
  2. rinse
  3. repeat

A [link](http://example.com).

![Image](Image_icon.png)

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
`;

export default class extends PureComponent {
  getTransformedValue = text => markdown.toHTML(text);

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="Markdown"
          rightTitle="HTML"
          getTransformedValue={this.getTransformedValue}
          defaultText={defaultText}
          leftMode="markdown"
          rightMode="html"
          url={this.props.url}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
