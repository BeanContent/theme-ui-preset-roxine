const alternate = {
    item: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        wrapper: {
            padding: '0rem 3rem',
            '@media only screen and (min-width: 1200px)': {
                padding: '9.6rem rem',
                marginLeft: '8%',
                marginRight: 'auto',
                height: '100%',
                maxWidth: '50rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }
        },
        col: {
            padding: "4.2rem 0rem",
            ":first-child": {
                padding: '0rem'
            },
            '@media only screen and (min-width: 1200px)': {
                padding: '0rem',
                width: '100%',
                maxWidth: '50%',
                flex: '0rem 0rem 50%',
                flexBasis: '50%',
                minHeight: ' 0.1rem',
                textSizeAdjust: '100%',
            }
        },
        img: {
            '@media only screen and (min-width: 1200px)': {
                width: '100%',
                height: '100%',
                maxHeight: '60rem',
                objectFit: 'cover',
                objectPosition: 'center',
                verticalAlign: 'middle',
            }
        },
        title: {
            fontSize: 5,
            '@media only screen and (min-width: 1200px)': {
                marginBottom: '3rem'
            }
        },
        content: {
            textAlign: "justify",
            lineHeight: 1.2,
            fontSize: 10,
            ":not(:last-child)": {
                lineHeight: 1.8,
                marginBottom: '1rem',
            }
        },
        '@media only screen and (min-width: 1200px)': {
            flexDirection: 'row',
            ":nth-child(even)": {
                flexDirection: 'row-reverse',
                "[class*=__wrapper]": {

                    marginLeft: 'auto',
                    marginRight: '8%'
                }
            }
        }
    }
}
export default alternate;