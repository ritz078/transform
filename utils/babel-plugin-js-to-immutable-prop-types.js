import uniqBy from "lodash/uniqBy";
import isEmpty from "lodash/isEmpty";

/**
 * This is a babel plugin that converts an object to ImmutablePropTypes
 * @param t
 * @returns {{visitor: {ArrayExpression: (function(*)), NullLiteral: (function(*)), StringLiteral: (function(*)), NumericLiteral: (function(*)), ArrowFunctionExpression: (function(*)), FunctionExpression: (function(*)), BooleanLiteral: (function(*)), Program: (function(*, *)), ObjectExpression: (function(*))}}}
 */
export default function({ types: t }) {
  return {
    visitor: {
      ArrayExpression(path) {
        if (t.isCallExpression(path.parent)) return;
        let uniqueElements = uniqBy(path.node.elements, "type");

        if (t.isObjectExpression(uniqueElements[0])) {
          uniqueElements = [
            t.callExpression(
              t.memberExpression(
                t.identifier("ImmutablePropTypes"),
                t.identifier("mapContains")
              ),
              uniqueElements
            )
          ];
        }

        if (
          (!isEmpty(uniqueElements) && uniqueElements.length === 1) ||
          t.isCallExpression(uniqueElements)
        ) {
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                t.identifier("ImmutablePropTypes"),
                t.identifier("listOf")
              ),
              uniqueElements
            )
          );
        } else {
          path.replaceWith(t.identifier("ImmutablePropTypes.list"));
        }
      },

      NullLiteral(path) {
        path.replaceWith(t.identifier("PropTypes.any"));
      },

      StringLiteral(path) {
        if (path.parentKey === "key") return;
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
        path.replaceWith(t.identifier("PropTypes.bool"));
      },

      VariableDeclaration(path) {
        path.insertBefore(
          t.identifier(
            `import ImmutablePropTypes from 'react-immutable-proptypes'`
          )
        );
      },

      Program(path) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node);
          }
        });
      },

      ObjectExpression(path) {
        if (
          t.isVariableDeclarator(path.parent) ||
          t.isCallExpression(path.parent)
        )
          return;

        const elements = [path.node];

        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier("ImmutablePropTypes"),
              t.identifier("mapContains")
            ),
            elements
          )
        );
      }
    }
  };
}
