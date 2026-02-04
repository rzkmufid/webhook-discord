import { defineSlotRecipe } from '@pandacss/dev'

export const slider = defineSlotRecipe({
    className: 'slider',
    description: 'A slider style',
    slots: ['root', 'label', 'thumb', 'output', 'track', 'range', 'control'],
    base: {
        root: {
            width: '100%',
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2',
            fontFamily: 'sans',
        },
        control: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            height: '5',
        },
        track: {
            backgroundColor: 'zinc.200',
            borderRadius: 'full',
            flexGrow: 1,
            height: '1.5',
            position: 'relative',
        },
        range: {
            backgroundColor: 'blue.500',
            height: '100%',
            borderRadius: 'full',
            position: 'absolute',
        },
        thumb: {
            width: '5',
            height: '5',
            backgroundColor: 'white',
            borderWidth: '2px',
            borderColor: 'blue.500',
            borderRadius: 'full',
            cursor: 'pointer',
            boxShadow: 'sm',
            zIndex: 10,
            _focus: {
                outline: '2px solid',
                outlineColor: 'blue.300',
                outlineOffset: '2px',
            },
        },
        label: {
            fontWeight: 'medium',
            fontSize: 'sm',
        },
    },
})
