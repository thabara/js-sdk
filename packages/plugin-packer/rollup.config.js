import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'dist/index.cjs',
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  plugins: [commonjs()],
}