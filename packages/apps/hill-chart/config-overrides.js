const path = require('path')

const workdir = process.cwd()

module.exports = function override(config, env) {
  const { alias: presetAlias } = config.resolve

  console.debug(config)

  const extendedAlias = {
    '@src': path.resolve(workdir, 'src'),
    '@feature': path.resolve(workdir, 'src/features'),
    '@lib': path.resolve(workdir, 'src/lib'),
  }

  // process.exit(1)

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...presetAlias,
        ...extendedAlias,
      }
    }
  }
}
