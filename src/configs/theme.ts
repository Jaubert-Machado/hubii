import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        primary: 'hsl(255, 36%, 22%)',
        secondary: 'hsl(146, 85%, 78%)',
        background: 'hsl(0, 0%, 94%)',
        placeholder: 'hsl(0, 0%, 70%)',
        text: 'hsl(0, 0%, 20%)',
        white: 'hsl(0, 0%, 100%)',
        badges: {
            pending: 'hsl(48, 100%, 45%)',
            delivered: 'hsl(121, 59%, 47%)',
            canceled: 'hsl(0, 59%, 47%)',
        },
    },
    gap: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
    },
    padding: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
    },
    borderRadius: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
    },
}
