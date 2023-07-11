const dropdown = {
    menu: {
        display: 'none',
        item: {
            position: 'relative',
            '@media only screen and (min-width: 1024px)': {
                ".dropdown__menu": {
                    position: 'absolute',
                    top: ".5rem",
                    left: '100%'
                }
            },
            "> a": {
                padding: '.5rem 2rem !important',
            }
        },
        '@media only screen and (min-width: 1024px)': {
            position: 'absolute',
            top: "100%",
            bg: 'white',
            minWidth: '200px',
            maxWidth: '300px',
            
        }
    },
    toggler: {
        justifyContent: 'space-between',

        '@media only screen and (min-width: 1024px)': {
            "&:hover": {
                "~ ul": {
                    display: 'block'
                },
            }
        }
    }
}
export default dropdown;