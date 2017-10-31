import React, { PureComponent } from 'react'
import HTMLtoJSX from '@tsuyoshiwada/htmltojsx'
import convertSvgString from 'transform-svg-to-native'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'
import isSvg from 'is-svg'
import svgo from 'transform-svg-to-native/dist/svgo'

const converter = new HTMLtoJSX({
  createClass: false
})

const defaultText = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" version="1.1">
   <rect width="200" height="100" stroke="black" stroke-width="6" fill="green"/>
</svg>`

export default class Css2Js extends PureComponent {
  state = {
    native: false
  }

  convertHtmlToJsx = html => {
    if (isSvg(html)) {
      return new Promise(resolve => {
        svgo.optimize(html, result => {
          resolve(converter.convert(result.data))
        })
      })
    }
    return converter.convert(html)
  }

  getTransformedValue = async (newValue: string) => {
    if (this.state.native && !isSvg(newValue)) {
      throw new Error(
        'You can only convert an SVG in this mode. Try turning off the react-native-svg checkbox.'
      )
    }

    return this.state.native
      ? new Promise(resolve =>
        convertSvgString(newValue, code => resolve(code))
      )
      : this.convertHtmlToJsx(newValue)
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          url={this.props.url}
          leftTitle='HTML/SVG'
          rightTitle='JSX'
          leftMode='html'
          rightMode='jsx'
          getTransformedValue={this.getTransformedValue}
          name={'html_to_jsx'}
          defaultText={defaultText}
          checkboxText='react-native-svg'
          extensions={['.svg', '.html']}
          initialCheckboxValue={this.state.native}
          onCheckboxChange={(checked: boolean, cb: Function) =>
            this.setState({ native: checked }, cb)}
        />
      </Layout>
    )
  }
}
