import React, { PureComponent } from 'react'
import HTMLtoJSX from '@tsuyoshiwada/htmltojsx'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'

const converter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'MainComponent'
})

const defaultText = `<div class="hello" data-id="1">
    Hello world!
    <input type="text" name="foo">
</div>`

export default class Css2Js extends PureComponent {
  state={
    createClass: false
  }

  getTransformedValue = (newValue: string) => {
    converter.config.createClass = this.state.createClass
    return converter.convert(newValue)
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          url={this.props.url}
          leftTitle="HTML"
          rightTitle="JSX"
          leftMode="html"
          rightMode="jsx"
          getTransformedValue={this.getTransformedValue}
          name={'html_to_jsx'}
          defaultText={defaultText}
          checkboxText="Create Class"
          initialCheckboxValue={this.state.createClass}
          onCheckboxChange={(checked: boolean, cb: Function) => this.setState({createClass: checked}, cb)}
        />
      </Layout>
    )
  }
}
