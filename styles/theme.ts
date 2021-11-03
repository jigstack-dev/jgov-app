import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Button: {
            baseStyle: { _focus: { boxShadow: 'none' } },
        },
    },
    colors: {
        flatgreen: {
            '500': '#2ecc71',
            '600': '#27ae60',
        },
        background: {
            '500': '#2D3758',
            '600': '#2C3756',
            '700': '#101C43',
            '900': '#05103A',
            '1000': '#00002A',
        },
        neonblu: {
            '500': '#0326F8',
        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
});
