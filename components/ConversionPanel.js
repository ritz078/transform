import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import isBrowser from 'is-in-browser'
import { js_beautify } from 'js-beautify'
import { beauty } from 'css-beauty'
import copy from 'copy-text-to-clipboard'

const theme = 'tomorrow'

let brace
let AceEditor
if (isBrowser) {
  brace = require('brace').default
  AceEditor = require('react-ace').default

  require('brace/mode/javascript')
  require(`brace/theme/${theme}`)
  require('brace/mode/json')
  require('brace/mode/typescript')
  require('brace/mode/css')
}

export default class ConversionPanel extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    leftMode: PropTypes.string,
    rightMode: PropTypes.string
  }

  static defaultProps = {
    leftMode: 'javascript',
    rightMode: 'javascript',
    pathname: '/'
  }

  constructor (props) {
    super(props)

    this.state = {
      resultValue: '',
      value: '',
      info: '',
      infoType: ''
    }
  }

  componentDidMount () {
    const code = this.props.url.query.code || this.props.defaultText
    this.setState({
      value: code,
      resultValue: this.props.getTransformedValue(code)
    })
  }

  onChange = (newValue) => {
    try {
      const code = this.props.getTransformedValue(newValue)

      this.setState({
        resultValue: code,
        info: '',
        infoType: ''
      })

      this.setCodeInUrl(newValue)
    } catch (e) {
      this.setState({
        info: e.message,
        infoType: 'error'
      })
    }

    this.setState({
      value: newValue
    })
  }

  setCodeInUrl = (code) => {

    Router.replace({
      pathname: this.props.url.pathname,
      query: {
        code
      }
    })
  }

  toggleRight = (e) => {
    const checked = e.currentTarget.checked
    if (this.props.onRnToggle) {
      this.props.onRnToggle(checked, () => {
        this.setState({
          resultValue: this.props.getTransformedValue(this.state.value)
        })
      })
    }
  }

  prettifyCode = () => {
    const value = this.props.leftMode === 'css' ? beauty(this.state.value) : js_beautify(this.state.value)
    this.setState({
      value
    }, () => {
      this.props.url.push({
        query: {
          code: value
        }
      })
    })
  }

  copyCode = () => {
    copy(this.state.resultValue)
    this.setState({
      info: 'Code copied to clipboard.',
      infoType: 'success'
    })
  }

  render () {
    return (
      <div className="wrapper">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lato');
          .wrapper {
            display: flex;
            flex: 1;
            height: 100vh;
            flex-direction: column;
          }

          .footer{
            height: 50px;
            width: 100%;
            font-family: 'Lato';
            background-color: white;
            box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
            z-index: 999;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
          }

          .has-error {
            background-color: #e74c3c;
            box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
          }

          .has-success {
            background-color: #27ae60;
            box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
          }

          .content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: row;
          }

         .section {
            flex: 1;
            position: relative;
            height: calc(100vh - 100px);
          }

          .right {
            border-left: 1px solid #eee;
          }

          @media screen and (max-width: 1000px) {
            .content-wrapper {
              flex-direction: column;
            }
            .section {
              height: auto;
            }
            .right {
              border-top: 1px solid #eee;
            }
          }

          .info {
            color: white;
            font: 14px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
          }

          .btn {
            background-color: #2196F3;
            font-size: 14px;
            padding: 7px 14px;
            z-index: 9;
            border: 0;
            border-radius: 2px;
            cursor: pointer;
            outline: none;
            color: #fff;
            line-height: 16px;
            height: 32px;
          }

          .btn:hover {
            background-color: #2380ca;
          }

          .header {
            height: 50px;
            background-color: white;
            border-bottom: 1px solid #eee;
            display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 10px;
    z-index: 9999;
    position: relative;
          }

        `}</style>

        <style global jsx>{`
          *{
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }

           #code{
              display: flex;
              flex: 1;
              width: 100% !important;
              height: 100% !important;
           }

           .right #code {
            background-color: #fafafa;
           }

          .right .ace_content, .right, .right .ace-tomorrow {
            background-color: #fafafa;
          }

          .right .ace_scroller {
            padding: 0 20px;
          }

          .right {
            box-sizing: border-box;
            padding-bottom: 10px;
          }

          label {
                font-family: 'Lato';
    padding: 0 12px;
        cursor: pointer;

          }

          label input {
            margin-right: 4px;
    font-size: 16px;
          }
        `}</style>

        <div className="content-wrapper">
          <div className="section left">
            <div className="header">
              <button className="btn" onClick={this.prettifyCode}>Prettify</button>
            </div>
            {isBrowser &&
            <AceEditor
              mode={this.props.leftMode}
              theme={theme}
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

          </div>
          <div className="section right">
            <div className="header">
              <button className="btn" onClick={this.copyCode}>Copy</button>
              {this.props.onRnToggle &&
                <label htmlFor="#text">
                <input type="checkbox" id="#text" onChange={this.toggleRight} /> React Native
              </label>
              }
            </div>
            {isBrowser &&
            <AceEditor
              mode={this.props.rightMode}
              theme={theme}
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
          </div>
        </div>
        <div className={`footer${this.state.infoType ? ' has-' + this.state.infoType : '' }`}>
          <span className="info">{this.state.info}</span>
        </div>
      </div>
    )
  }
}
