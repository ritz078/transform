import React, { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import { Json2dts, toValidJSON } from 'json2dts'
const ConversionPanel = dynamic(import('../components/ConversionPanel'))

const defaultText = ` 
{
  "foo": "bar",
  "ids": [1, 2, 3],
  "hello": {
    "x": "lkjlj",
    "y": "kjhkjhkjh"
  }
}
`


export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue) => {
    const converter = new Json2dts()
    let text2Obj = JSON.parse(toValidJSON(newValue))
    if (typeof text2Obj !== 'object' || Array.isArray(text2Obj)) {
      throw new Error('Pass a valid JSON Object. Arrays are not acceptable even though they are valid JSON.')
    }
    converter.parse(text2Obj, 'RootJson')
    return converter.getCode()
  }

  render () {
    return (
      <ConversionPanel
        getTransformedValue={this.getTransformedValue}
        name={'ts_interface'}
        defaultText={defaultText}
        leftMode="json"
        rightMode="typescript"
        url={this.props.url}
      />
    )
  }
}
