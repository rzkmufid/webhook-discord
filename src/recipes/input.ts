import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
    className: 'input',
    base: {
        width: '100%',
        p: 3,
        borderRadius: 'lg',
        border: '1px solid token(colors.gray.200)',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontSize: 'md',
        bg: 'white',
        _focus: {
            borderColor: 'blue.500',
            boxShadow: '0 0 0 2px token(colors.blue.100)',
        },
        _placeholder: {
            color: 'gray.400',
        },
    },
    variants: {
        variant: {
            default: {},
            code: {
                fontFamily: 'monospace',
                bg: 'gray.900',
                color: 'gray.100',
                border: '1px solid token(colors.gray.700)',
                _focus: {
                    borderColor: 'blue.500',
                    boxShadow: '0 0 0 1px token(colors.blue.500)',
                },
            },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})
