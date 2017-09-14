import { transform } from 'babel-standalone'
import jsonToProptypes from 'babel-plugin-json-to-proptypes'
import immutablePropsPlugin from '../utils/babel-plugin-js-to-immutable-prop-types'
import registerPromiseWorker from 'promise-worker/register'

registerPromiseWorker(
  message =>
    new Promise(resolve => {
      const { isImmutable, code } = message
      const plugin = isImmutable ? immutablePropsPlugin : jsonToProptypes
      const newCode = transform(code, {
        plugins: [plugin]
      }).code

      resolve(`import PropTypes from "prop-types";
    
    ${newCode}`)
    })
)
