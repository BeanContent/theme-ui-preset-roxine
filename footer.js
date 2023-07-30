const footer = {
    background: 'primary',
    padding: "2rem 2rem",
    'a,i': {
        color: 'text',
        filter: 'contrast(.1)'

    },
    i: {
        fontSize: 'clamp(1.8rem, 2vw, 2.4rem)'
    },
    a: {
        fontSize: 6
    },
    head: {
        padding: '6rem 0rem',
        logo: {
            marginBottom: "4.5rem",
            '@media only screen and (min-width: 768px)': {
                marginBottom: '0rem'
            }
        },
        navList: {
            display: 'flex',
            gap: '2rem',
            padding: '0rem 0rem',
            marginBottom: '2rem',
            '@media only screen and (min-width: 768px)': {
                marginBottom: '0rem',
            },
            '@media only screen and (min-width: 1024px)': {
                margin: '0rem'
            }
        },
        '@media only screen and (min-width: 768px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    },
    end: {
        coppy: {
            textAlign: 'center'
        }
    },
    // RESPONSIVE FOOTER
    '@media only screen and (min-width: 768px)': {
        padding: "2rem 5rem",

    },
    '@media only screen and (min-width: 1024px)': {
        padding: "2rem 10rem",
    },
    '@media only screen and (min-width: 1440px)': {
        padding: "2rem 20rem",
    }
};
export default footer;