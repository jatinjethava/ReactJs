module.exports = {
    theme: {
        extend: {
            keyframes: {
                scrollX: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                scrollX: 'scrollX 25s linear infinite',
            },
        },
    },
}