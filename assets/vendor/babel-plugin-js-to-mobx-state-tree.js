import uniqBy from "lodash/uniqBy";
import isEmpty from "lodash/isEmpty";

/**
 * This is a babel plugin that converts an object to PropTypes
 * @param t
 * @returns {{visitor: {ArrayExpression: (function(*)), NullLiteral: (function(*)), StringLiteral: (function(*)), NumericLiteral: (function(*)), ArrowFunctionExpression: (function(*)), FunctionExpression: (function(*)), BooleanLiteral: (function(*)), Program: (function(*, *)), ObjectExpression: (function(*))}}}
 */
export default function BabelPluginJsToMobxStateTree({ types: t }) {
  return {
    visitor: {
      ArrayExpression(path) {
        // if (t.isCallExpression(path.parent)) return;
        let uniqueElements = uniqBy(path.node.elements, "type");

        if (t.isObjectExpression(uniqueElements[0])) {
          uniqueElements = [
            t.callExpression(
              t.memberExpression(t.identifier("t"), t.identifier("model")),
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
              t.memberExpression(t.identifier("t"), t.identifier("array")),
              uniqueElements
            )
          );
        } else {
          path.replaceWith(t.identifier("t.array"));
        }
      },

      NullLiteral(path) {
        path.replaceWith(t.identifier("t.null"));
      },

      StringLiteral(path) {
        if (path.parentKey === "key") return;
        path.replaceWith(t.identifier(`t.string`));
      },

      NumericLiteral(path) {
        path.replaceWith(t.identifier("t.number"));
      },

      ArrowFunctionExpression(path) {
        path.replaceWith(t.identifier("t.frozen"));
      },

      FunctionExpression(path) {
        path.replaceWith(t.identifier("t.frozen"));
      },

      BooleanLiteral(path) {
        path.replaceWith(t.identifier("t.boolean"));
      },

      Program(path) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node);
          }
        });
      },

      ObjectProperty(path) {
        if (t.isStringLiteral(path.node.key)) {
          path.node.key = t.identifier(path.node.key.value);
        }
      },

      ObjectExpression(path) {
        if (t.isCallExpression(path.parent)) return;

        const elements = [path.node];

        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier("t"), t.identifier("model")),
            elements
          )
        );
      }
    }
  };
}
