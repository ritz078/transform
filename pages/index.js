import React, { PureComponent } from 'react'
import plugin from '../utils/babel-plugin-js-to-prop-types'

import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const ConversionPanel = dynamic(import('../components/ConversionPanel'))

const defaultText = `// Enter the object you want to convert in the 
// following form
// 
// const x = your_object
// 
// You need to assign your object to a variable (for now.)

const x = {
  foo: 'bar',
  ids: [1, 2, 3]
}
`

export default class Main extends PureComponent {
  getTransformedValue = (newValue) => {
    const {code} = babelTransform(newValue, {
      presets: ['es2015'],
      plugins: [plugin]
    })
    return code
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          url={this.props.url}
          getTransformedValue={this.getTransformedValue}
          name={'prop_types'}
          defaultText={defaultText}
        />
      </Layout>
    )
  }
}
