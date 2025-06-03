import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import resolve from '@rollup/plugin-node-resolve'; // <--- IMPORT IT

const config = [
    {
        input: 'dist/index.js',
        output: {
            file: 'dist/bundle.js',
            format: 'cjs',
            sourcemap: true,
        },
        external: ['axios', 'os', 'url'], // These will not be bundled
        plugins: [
            resolve({         // <--- ADD IT HERE
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'] // Configure extensions to look for
            }),
            typescript()
        ],
    }, {
        input: 'dist/index.d.ts',
        output: {
            file: 'dist/bundle.d.ts',
            format: 'es'
        },
        plugins: [dts()]
    }
];
export default config;