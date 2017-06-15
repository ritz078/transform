import React, { PureComponent } from 'react'
import isBrowser from 'is-in-browser'
import { transform } from 'babel-standalone'
import store from 'store2'
import {js_beautify} from 'js-beautify'
import copy from 'copy-text-to-clipboard'
import plugin from '../utils/plugin'

let brace
let AceEditor
if (isBrowser) {
  brace = require('brace').default
  AceEditor = require('react-ace').default
  require('brace/mode/javascript')
  require('brace/theme/tomorrow')
}

const defaultText = `
// Enter the object you want to convert in the following form
// const x = your_object
// You need to assign your object to a variable (for now.)

const x = {
  foo: 'bar',
  ids: [1, 2, 3]
}
`

export default class Main extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      resultValue: '',
      value: '',
      error: ''
    }
  }

  componentDidMount() {
    this.setState({
      value: store('code') || defaultText,
      resultValue: store('result') || this.getTransformedValue(defaultText).code
    })
  }

  getTransformedValue = (newValue) => {
    return transform(newValue, {
      presets: ['es2015'],
      plugins: [plugin]
    })
  }

  onChange = (newValue) => {
    try {
      const {code, ast} = this.getTransformedValue(newValue)

      this.setState({
        resultValue: code,
        error: ''
      })

      store('code', newValue)
      store('result', code)
    } catch (e) {
      this.setState({
        error: e.message
      })
    }

    this.setState({
      value: newValue
    })
  }

  prettifyCode = () => {
    this.setState({
      value: js_beautify(this.state.value)
    })
  }

  copyCode = () => {
    copy(this.state.resultValue)
  }

  render () {
    return (
      <div className="wrapper">
        <div className="header">
          Object to PropTypes
        </div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lato');
          .wrapper {
            display: flex;
            flex: 1;
            height: 100vh;
            flex-direction: column;
          }

          .header, .footer{
            height: 50px;
            width: 100%;
            font-family: 'Lato';
            font-weight: bold;
            background-color: white;
            box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
            z-index: 999;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
          }

          .header {
            color: #666;
            letter-spacing: 1.2px;
          }

          .content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: row;
          }

          .section {
            flex: 1;
            position: relative;
          }

          .right {
            border-left: 1px solid #eee;
            padding: 20px;
          }

          .error {
            color: red;
            font: 14px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
          }

          .btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #fff;
            font-size: 14px;
            padding: 8px 14px;
            z-index: 9;
            border: 0;
            border-radius: 2px;
            cursor: pointer;
            outline: none;
            border: 1px solid #eee;
          }

          .btn:hover {
            background-color: #f6f6f6;
          }

        `}</style>

        <style global jsx>{`
          *{
            margin: 0;
            padding: 0;
          }

           #code{
              width: 100% !important;
              height: 100% !important;
           }
        `}</style>

        <div className="content-wrapper">
          <div className="section left">
            {isBrowser &&
            <AceEditor
              mode="javascript"
              theme="tomorrow"
              onChange={this.onChange}
              name="code"
              value={this.state.value}
              editorProps={{$blockScrolling: true}}
              highlightActiveLine={false}
              scrollMargin={[20]}
              focus
              fontSize={14}
              wrapEnabled
            />
            }

            <button className="btn" onClick={this.prettifyCode}>Prettify</button>
          </div>
          <div className="section right">
            {isBrowser &&
            <AceEditor
              mode="javascript"
              theme="tomorrow"
              name="code"
              readOnly
              value={js_beautify(this.state.resultValue)}
              editorProps={{$blockScrolling: true}}
              scrollMargin={[20]}
              fontSize={14}
              showGutter={false}
              highlightActiveLine={false}
              wrapEnabled
            />
            }
            <button className="btn" onClick={this.copyCode}>Copy</button>
          </div>
        </div>
        <div className="footer">
          {this.state.error ? <span className="error">{this.state.error}</span> : <span>Created by <a href="https://twitter.com/ritz078">Ritesh Kumar</a></span>}
        </div>
      </div>
    )
  }
}
