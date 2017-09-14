import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'
import defaultText from '../utils/dummy-json'
import transform from 'transform-json-types'
export default class extends PureComponent {
  getTransformedValue = code =>
    transform(code, {
      lang: 'scala'
    })

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle='JSON'
          rightTitle='Scala Case Class'
          getTransformedValue={this.getTransformedValue}
          name={'scala_case_class'}
          defaultText={defaultText}
          leftMode='json'
          rightMode='scala'
          url={this.props.url}
          prettifyRightPanel={false}
        />
      </Layout>
    )
  }
}
