import { build } from 'esbuild';

build({
	bundle: true,
	minify: true,
	sourcemap: true,
	platform: 'node',
	entryPoints: ['src/index.js'],
	outfile: 'dist/index.js',
	target: 'node24',
	format: 'esm',
}).catch(() => process.exit(1));
