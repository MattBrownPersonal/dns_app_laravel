import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'fuschia': '#F4207B',
                'white': '#fff',
                'purple': '#31297D',
                'lightpink': '#C92C93',
                'gray': '#CACACA',
                'black': '#000',
                'pink': '#FF3A7A'
              }
        },
    },

    plugins: [forms],
};
