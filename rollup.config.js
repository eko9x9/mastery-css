import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import autoprefixer from "autoprefixer";

import pkg from './package.json';

const lib = {
    output: [{
        sourcemap: true,
        file: pkg.main,
        name: 'MasteryCss',
        format: 'cjs',
        exports: 'named',
        strict: false,
    }]
}

export default {
    input: './src/lib/index.ts',
    output: lib.output,
    plugins: [
        commonjs({ sourceMap: true }),
        sass({ insert: true }),
        typescript({ objectHashIgnoreUnknownHack: true }),
        postcss({
            plugins: [autoprefixer()],
            sourceMap: true,
            extract: true,
            minimize: true
        }),
    ],
    external: ['react', 'react-dom']
}