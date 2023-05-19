import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'convert.js',
  output: [
    {
      format: 'esm',
      file: 'bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};