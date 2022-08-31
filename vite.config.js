import { defineConfig } from 'vite'
import { resolve } from 'path'
// import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, 'lib/main.js'),
        // name: 'nstock', //umd로 쓸수 있는 전역변수 ex. new <name>()
        // fileName: 'main'
        formats: ['es']
      },
      rollupOptions: {
        // 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
        // external: ['vue'],
        output: {
          // 라이브러리 외부에 존재하는 디펜던시를 위해
          // UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
        //   globals: {
        //     vue: 'Vue'
        //   }
        }
      }
    }
  })