import flatten from 'lodash/flatten'
import find from 'lodash/find'

function GraphQLIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
      <path
        fill='#ffffff'
        d='M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z'
      />
      <path fill='#ffffff' d='M39.8 272.2h320.3v16.6H39.8z' />
      <path
        fill='#ffffff'
        d='M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z'
      />
      <path
        fill='#ffffff'
        d='M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z'
      />
      <path
        fill='#ffffff'
        d='M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z'
      />
      <path
        fill='#ffffff'
        d='M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z'
      />
      <path
        fill='#ffffff'
        d='M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9'
      />
    </svg>
  )
}

export const categorizedRoutes = [
  {
    category: 'React',
    iconName: 'icon-reactjs',
    content: [
      {
        label: 'JSON to React PropTypes',
        path: '/',
        title: 'Transform | All important transforms at one place.',
        desc:
          'An online utility to convert a JSON object to prop-types, Typescript Interface, Rust serde or flow types. It also converts your CSS into JS and HTML into JSX.'
      },
      {
        label: 'HTML to JSX',
        path: '/html-to-jsx',
        desc:
          'An online REPL for converting HTML to JSX with proper support for SVG.'
      },
      {
        label: 'CSS to JS Objects',
        path: '/css-to-js',
        desc:
          'An online REPL for converting CSS to JS object. It also gives style optimized for React Native.'
      }
    ]
  },
  {
    category: 'JavaScript',
    iconName: 'icon-javascript',
    content: [
      {
        label: 'JSON to Flow Types',
        path: '/json-to-flow-types',
        desc: 'An online REPL for converting JSON to generate Flow Types.'
      },
      {
        label: 'JSON to Typescript Interface',
        path: '/json-to-ts-interface',
        desc:
          'An online REPL for converting JSON to generate TypeScript Interface.'
      },
      {
        label: 'JSON to MobX-State-Tree Model',
        path: '/json-to-mobx-state-tree',
        desc: 'An online REPL for converting JSON to generate Mobx State Tree.'
      },
      {
        label: 'JS Object to JSON',
        path: '/js-object-to-json',
        desc: 'An online REPL for converting JS Object to JSON.'
      },
      {
        label: 'JSON Schema to TypeScript',
        path: '/json-schema-to-ts',
        desc:
          'An online REPL for converting JSON Schema to TypeScript Interface.'
      }
    ]
  },
  {
    category: 'Rust',
    iconName: 'icon-rust',
    content: [
      {
        label: 'JSON to Rust Serde',
        path: '/json-to-rust-serde',
        desc: 'An online REPL for converting JSON to Rust Serde Structs.'
      }
    ]
  },
  {
    category: 'Databases',
    iconName: 'icon-database',
    content: [
      {
        label: 'JSON to Mongoose Schema',
        path: '/json-to-mongoose',
        desc: 'An online REPL to generate Mongoose Schema from JSON.'
      },
      {
        label: 'JSON to Big Query Schema',
        path: '/json-to-big-query',
        desc: 'An online REPL to generate Big Query Schema from JSON.'
      },
      {
        label: 'JSON to MySQL',
        path: '/json-to-mysql',
        desc:
          'An online REPL to generate MySQL table generation code from JSON.'
      }
    ]
  },
  {
    category: 'Scala',
    iconName: 'icon-scala',
    content: [
      {
        label: 'JSON to Scala Case Class',
        path: '/json-to-scala-case-class',
        desc: 'An online REPL to generate Scala Case Class from JSON.'
      }
    ]
  },
  {
    category: 'GraphQL',
    icon: <GraphQLIcon />,
    content: [
      {
        label: 'GraphQL to TypeScript',
        path: '/graphql-to-typescript',
        desc:
          'An online REPL to generate TypeScript type annotations based on a GraphQL schema and query documents.'
      },
      {
        label: 'GraphQL to Flow',
        path: '/graphql-to-flow',
        desc:
          'An online REPL to generate Flow type annotations based on a GraphQL schema and query documents.'
      }
    ]
  },
  {
    category: 'Go',
    iconName: 'icon-go',
    content: [
      {
        label: 'JSON to Go Struct',
        path: '/json-to-go',
        desc: 'An online REPL to generate Go Struct from JSON.'
      }
    ]
  },
  {
    category: 'XML',
    iconName: 'icon-html',
    content: [
      {
        label: 'XML to JSON',
        path: '/xml-to-json',
        desc: 'An online REPL to generate basic JSON from a XML.'
      }
    ]
  }
]

export const routes = flatten(categorizedRoutes.map(a => a.content))

export function activeRouteData (pathname) {
  return find(routes, o => o.path === pathname)
}
