import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  external: ['@statickit/core'],
  plugins: [
    babel({
      extensions,
      include: ['src/**/*']
    }),
    nodeResolve({
      extensions,
      browser: true
    })
  ],
  output: {
    format: 'esm',
    file: 'dist/index.js'
  }
};
