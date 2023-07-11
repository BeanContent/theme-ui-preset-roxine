const member = {
    wrapper: {
        margin: "0rem 1.5rem",
        '@media only screen and (min-width: 768px)': {
            margin: "0rem 3rem",
        },
        '@media only screen and (min-width: 1024px)': {
            margin: "0rem 3.5rem",
        },
        '@media only screen and (min-width: 1440px)': {
            margin: "0rem 15rem",
        },
        '@media only screen and (min-width: 1600px)': {
            margin: "0rem 40rem",
        }
    },
    list: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyContent: 'center',
        '@media only screen and (min-width: 768px)': {
            gridTemplateColumns: 'auto auto auto',
            gap: '1.5rem'
        }
    },
    card: {
        "&:hover": {
            '.members__card-body': {
                transform: 'translateY(-1.5rem)',
            },
            h2: {
                color: "accent"
            }
        },
        header: {
            img: {
                width: '100%',
                height: "41rem",
                objectFit: 'cover',
                objectPosition: 'center',
                '@media only screen and (min-width: 425px)': {
                    height: "49rem",
                },
                '@media only screen and (min-width: 768px)': {
                    width: '21rem',
                    height: '31rem'
                },
                '@media only screen and (min-width: 1024px)': {
                    width: '29rem',
                    height: '43.5rem'
                },
                '@media only screen and (min-width: 1024px)': {
                    width: '35rem',
                    height: '52.5rem'
                }
            },
            marginBottom: '4.5rem'
        },
        body: {
            transition: '.3s ease',
        },
        role: {
            fontWeight: 'slim',
            color: "#C1C5CD",
            fontSize: '1.4rem',
            marginBottom: "0rem"
        },
        name: {
            fontSize: 3,
            fontWeight: 'slim',

        },
        '*': {
            fontFamily: 'body',

        }
    }
}

export default member;