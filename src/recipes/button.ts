import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
    className: 'button',
    base: {
        w: '100%',
        py: 3,
        px: 6,
        borderRadius: 'lg',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        _disabled: {
            opacity: 0.7,
            cursor: 'not-allowed',
            transform: 'none',
        },
        _active: {
            opacity: 0.8,
        },
    },
    variants: {
        variant: {
            primary: {
                bg: 'blue.600',
                _hover: {
                    bg: 'blue.700',
                },
            },
            secondary: {
                bg: 'gray.100',
                color: 'gray.900',
                _hover: {
                    bg: 'gray.200',
                },
            },
            ghost: {
                bg: 'transparent',
                color: 'gray.600',
                _hover: {
                    color: 'gray.900',
                    bg: 'gray.50',
                },
            },
        },
        size: {
            sm: { px: 3, py: 1.5, fontSize: 'sm' },
            md: { px: 6, py: 3, fontSize: 'md' },
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
})
