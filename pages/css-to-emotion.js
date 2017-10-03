import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'
import { convertCssForEmotion } from 'css-in-js-generator/lib/convertCssForEmotion'

const defaultText = `
*,
*::before,
*::after {
    box-sizing: inherit;
}
@-ms-viewport {
    width: device-width;
}
@media print {
    .badge {
        border: 1px solid #000;
    }
}
select.form-control:not([size]):not([multiple]) {
    height: calc(2.25rem + 2px);
}
.alert-dismissible .close {
    position: relative;
    top: -0.75rem;
    right: -1.25rem;
    padding: 0.75rem 1.25rem;
    color: inherit;
}
.alert-link {
    font-weight: bold;
}
.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.alert-primary hr {
    border-top-color: #9fcdff;
}
.alert-primary .alert-link {
    color: #002752;
}
.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}
.badge-danger {
    color: #fff;
    background-color: #dc3545;
}
.badge-danger[href]:focus,
.badge-danger[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #bd2130;
}
.badge:empty {
    display: none;
}
.blockquote-footer {
    display: block;
    font-size: 80%;
    color: #868e96;
}
.blockquote-footer::before {
    content: "\\\\2014 \\\\00A0";
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
.display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.1;
}
.display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.1;
}
.form-control::placeholder {
    color: #868e96;
    opacity: 1;
}
`

export default class extends PureComponent {
  state = {
    isRn: false
  }

  getCode = code => {
    let finalCode = ''
    code.forEach((source, name) => {
      source =
        name === 'index.js' ? source.replace('css', 'injectGlobal') : source

      finalCode += `
      
      
      // ${name}
      ${source}`
    })

    return finalCode
  }

  getTransformedValue = code => {
    return this.getCode(convertCssForEmotion(code))
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle='CSS'
          rightTitle='Emotion'
          leftMode='css'
          rightMode='typescript'
          getTransformedValue={this.getTransformedValue}
          name={'css_to_js'}
          defaultText={defaultText}
          extensions={null}
        />
      </Layout>
    )
  }
}
