import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	input: './src/index.ts', // 진입 경로
	output: [
		{
			file: pkg.main,
			sourcemap: true,
			format: 'cjs',
		},
		{
			file: pkg.module,
			sourcemap: true,
			format: 'esm',
		},
	],
	external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
	plugins: [
		peerDepsExternal(),
		nodeResolve({
			extensions,
		}),
		commonjs(),
		babel({
			exclude: /node_modules/,
			extensions,
			include: ['src/**/*'],
		}),
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['**/*.stories.tsx'],
		}),
		terser(),
	],
};
