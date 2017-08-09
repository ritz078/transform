import React, { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import { Json2dts, toValidJSON } from '../utils/json-to-ts-flow'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'
import defaultText from '../utils/dummy-json'

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue) => {
    const converter = new Json2dts()
    let text2Obj = JSON.parse(toValidJSON(newValue))
    if (typeof text2Obj !== 'object' || Array.isArray(text2Obj)) {
      throw new Error('Pass a valid JSON Object. Arrays are not acceptable even though they are valid JSON.')
    }
    converter.parse(text2Obj, 'props')
    return converter.getCode(true)
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Flow Types"
          getTransformedValue={this.getTransformedValue}
          name={'ts_interface'}
          defaultText={defaultText}
          leftMode="json"
          rightMode="typescript"
          url={this.props.url}
        />
      </Layout>
    )
  }
}
