'use client'

import {
    createGlobalStyle,
    ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { theme } from '@configs/theme'
import { ReactNode } from 'react'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }
    
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    p {
        text-wrap: pretty;
    }
    h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
    }
`

type Props = {
    children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    )
}
