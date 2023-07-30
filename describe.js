const describe = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "0rem 1.5rem",
        '@media only screen and (min-width: 768px)': {
            margin: "0rem 5rem",
        },
        '@media only screen and (min-width: 1024px)': {
            margin: "0rem 3.5rem",
        },
        '@media only screen and (min-width: 1440px)': {
            margin: "0rem 17rem",
        },
        '@media only screen and (min-width: 1600px)': {
            margin: "0rem 75rem",
        }
    },
    emphasize: {
        color: "emphasize"
    },
    title: {
        fontSize: 4,
        width: 'fit-content',
        textAlign: 'center',
    },
    content: {
        fontSize: 8,
        textAlign: 'justify',
        textAlignLast: 'center'
    }
}
export default describe;