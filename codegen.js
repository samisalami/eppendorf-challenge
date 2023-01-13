module.exports = {
  schema: 'schema.graphql',
  documents: [
    'src/**/*.graphql',
    '!schema.graphql'
  ],
  noRequire: true,
  overwrite: true,
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3
      }
    },
    'libs/repository/src/lib/generated/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};
