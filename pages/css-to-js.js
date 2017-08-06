import React, { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import plugin from '../utils/css-to-js'
import Layout from '../components/Layout'
import ConversionPanel from '../components/ConversionPanel'

const defaultText = `
.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}

#content {
  flex: 1;
}

ul {
  padding: 20px 0;
  flex: 1;
}

li {
  color: whitesmoke;
  font-family: 'Lato', sans-serif;
  line-height: 44px;
  cursor: pointer;
}
`

export default class Css2Js extends PureComponent {
  getTransformedValue = (newValue) => {
    return plugin(newValue)
  }

  render () {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          url={this.props.url}
          leftMode="css"
          getTransformedValue={this.getTransformedValue}
          name={'css_to_js'}
          defaultText={defaultText}
        />
      </Layout>
    )
  }
}
