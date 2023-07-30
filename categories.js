const categories = {
    wrapper: {
        display: 'grid',
        gap: '1rem',
        margin: '0rem 1.5rem',
        '@media only screen and (min-width: 768px)': {
            margin: "0rem 3rem",
            gridTemplateColumns: '1fr 1fr'
        },
        '@media only screen and (min-width: 1024px)': {
            margin: "0rem 3.5rem",
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem'
        },
        '@media only screen and (min-width: 1440px)': {
            margin: "0rem 15rem",
        },
        '@media only screen and (min-width: 1600px)': {
            margin: "0rem 40rem",
        }
    }
}

export default categories
