import { css, Global } from '@emotion/react'
import { colord } from 'colord'
import { map } from 'lodash-es'
import { colors } from '@/styles'

// Chakra UI を読み込むため 既存のリセット CSS を無効化
// import 'sanitize.css'

const toRgbValues = (hex: string) => {
  const rgba = colord(hex).toRgb()

  return [rgba.r, rgba.g, rgba.b].join(', ')
}

const GlobalStyle = () => {
  const style = css`
    :root {
      ${map(colors, (hex, key) => {
        return css`
          --color-${key}: ${hex};
          --color-${key}-rgb: ${toRgbValues(hex)};
        `
      })}
    }

    html {
      padding: 0;
      margin: 0;
      line-height: 1.65;
      -webkit-tap-highlight-color: transparent;
      text-size-adjust: 100%;
      overflow-wrap: break-word;
      word-break: break-word;
      cursor: initial;
    }

    body {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      background: #fff;
      color: #333;
      font-family: -apple-system, BlinkMacSystemFont, 'ヒラギノ角ゴ Pro W3',
        Hiragino Kaku Gothic Pro, sans-serif;
    }
  `

  return <Global styles={style} />
}

export default GlobalStyle
