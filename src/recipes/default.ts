import { sva } from '../../styled-system/css'

export const discordSenderRecipe = sva({
    slots: ['root', 'tabContainer', 'tabButton', 'label', 'input', 'textarea', 'templateButtons', 'templateButton', 'button', 'status'],
    base: {
        root: {
            bg: 'white',
            p: 6,
            borderRadius: 'xl',
            boxShadow: 'sm',
            width: '100%',
            maxWidth: 'xl',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            border: '1px solid token(colors.gray.200)',
        },
        tabContainer: {
            display: 'flex',
            gap: 2,
            p: 1,
            bg: 'gray.100',
            borderRadius: 'lg',
        },
        tabButton: {
            flex: 1,
            py: 2,
            px: 4,
            borderRadius: 'md',
            fontSize: 'sm',
            fontWeight: 'medium',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: 'gray.500',
            _hover: {
                color: 'gray.700',
            },
            '&[data-active]': {
                bg: 'white',
                color: 'blue.600',
                boxShadow: 'sm',
                _hover: {
                    color: 'blue.600',
                },
            },
        },
        label: {
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: 'gray.700',
            mb: 1,
            display: 'block',
        },
        input: {
            width: '100%',
            p: 3,
            borderRadius: 'lg',
            border: '1px solid token(colors.gray.200)',
            outline: 'none',
            transition: 'border-color 0.2s',
            fontSize: 'md',
            _focus: {
                borderColor: 'blue.500',
                boxShadow: '0 0 0 2px token(colors.blue.100)',
            },
        },
        textarea: {
            width: '100%',
            p: 3,
            borderRadius: 'lg',
            bg: 'gray.900',
            color: 'gray.100',
            fontFamily: 'monospace',
            fontSize: 'sm',
            minHeight: '200px',
            border: '1px solid token(colors.gray.700)',
            outline: 'none',
            resize: 'vertical',
            _focus: {
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px token(colors.blue.500)',
            },
        },
        templateButtons: {
            display: 'flex',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
        },
        templateButton: {
            px: 2,
            py: 1,
            borderRadius: 'md',
            fontSize: 'xs',
            fontWeight: 'medium',
            bg: 'gray.100',
            color: 'gray.700',
            cursor: 'pointer',
            border: '1px solid token(colors.gray.200)',
            _hover: { bg: 'gray.200' },
        },
        button: {
            mt: 2,
            w: '100%',
            py: 3,
            px: 6,
            borderRadius: 'lg',
            fontWeight: 'bold',
            color: 'white',
            bg: 'linear-gradient(135deg, token(colors.blue.500), token(colors.purple.600))',
            cursor: 'pointer',
            transition: 'all 0.2s',
            _hover: {
                bg: 'linear-gradient(135deg, token(colors.blue.600), token(colors.purple.700))',
                transform: 'translateY(-1px)',
                boxShadow: 'md',
            },
            _active: {
                transform: 'translateY(1px)',
                boxShadow: 'sm',
            },
            _disabled: {
                opacity: 0.7,
                cursor: 'not-allowed',
                transform: 'none',
            },
        },
        status: {
            mt: 2,
            p: 3,
            borderRadius: 'md',
            fontSize: 'sm',
            fontWeight: 'medium',
            textAlign: 'center',
        },
    },
    variants: {
        active: {
            true: {
                tabButton: {
                    bg: 'white',
                    color: 'blue.600',
                    boxShadow: 'sm',
                    _hover: {
                        color: 'blue.600',
                    },
                },
            },
        },
        status: {
            success: {
                status: {
                    bg: 'green.50',
                    color: 'green.700',
                    border: '1px solid token(colors.green.200)',
                },
            },
            error: {
                status: {
                    bg: 'red.50',
                    color: 'red.700',
                    border: '1px solid token(colors.red.200)',
                },
            },
        },
    },
})