import {uniqBy, isEmpty} from 'lodash'

/**
 * This is a babel plugin that converts an object to PropTypes
 * @param t
 * @returns {{visitor: {ArrayExpression: (function(*)), NullLiteral: (function(*)), StringLiteral: (function(*)), NumericLiteral: (function(*)), ArrowFunctionExpression: (function(*)), FunctionExpression: (function(*)), BooleanLiteral: (function(*)), Program: (function(*, *)), ObjectExpression: (function(*))}}}
 */
export default function ({types: t}) {
  return {
    visitor: {
      ArrayExpression(path) {
        if (t.isCallExpression(path.parent)) return;
        const uniqueElements = uniqBy(path.node.elements, 'type');

        const elements = [t.arrayExpression([...uniqueElements])];

        if (!isEmpty(uniqueElements)) {
          path.replaceWith(
            t.callExpression(
              t.memberExpression(t.identifier("PropTypes"), t.identifier("arrayOf")),
              elements
            )
          )
        } else {
          path.replaceWith(t.identifier('PropTypes.array'))
        }
      },

      NullLiteral(path) {
        path.replaceWith(t.identifier('PropTypes.any'))
      },

      StringLiteral(path) {
        if (path.parentKey === 'key') return;
        path.replaceWith(t.identifier(`PropTypes.string`));
      },

      NumericLiteral(path) {
        path.replaceWith(t.identifier("PropTypes.number"));
      },

      ArrowFunctionExpression(path) {
        path.replaceWith(t.identifier("PropTypes.func"));
      },

      FunctionExpression(path) {
        path.replaceWith(t.identifier("PropTypes.func"));
      },

      BooleanLiteral(path) {
        path.replaceWith(t.identifier('PropTypes.bool'))
      },

      Program(path) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node);
          }
        });
      },

      ObjectExpression(path) {
        if (t.isVariableDeclarator(path.parent) || t.isCallExpression(path.parent))
          return;

        const elements = [path.node];

        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier("PropTypes"), t.identifier("shape")),
            elements
          )
        );
      }
    }
  }
}