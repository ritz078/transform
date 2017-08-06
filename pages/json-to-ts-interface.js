import React, { PureComponent } from 'react'
import { Json2dts, toValidJSON } from 'json2dts'
import isBrowser from 'is-in-browser'
import ConversionPanel from '../components/ConversionPanel'

let brace
let AceEditor
if (isBrowser) {
  brace = require('brace').default
  AceEditor = require('react-ace').default
  require('brace/mode/json')
}

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
        name={'prop_types'}
        defaultText={defaultText}
        leftMode="json"
        pathname={this.props.url.pathname}
      />
    )
  }
}
