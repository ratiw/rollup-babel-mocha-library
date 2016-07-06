import babel from 'rollup-plugin-babel'

var babelOptions = {
  presets: ["es2015-rollup"],
  exclude: 'node_modules/**'
}

export default {
  entry: 'src/mylib.js',
  format: 'cjs',
  dest: 'dist/mylib.js',
  plugins: [ babel(babelOptions) ]
}
