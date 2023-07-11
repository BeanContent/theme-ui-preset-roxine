const navbar = {
    position: 'fixed',
    top: '0rem',
    right: '0rem',
    left: '0rem',
    padding: "2rem .5rem",
    transition: '.3s ease',
    zIndex: 99999,
    wrapper: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        "> div": {
            marginTop: 'auto',
            marginBottom: 'auto',
            '@media only screen and (min-width: 1024px)': {
                marginTop: '0rem',
                marginBottom: '0rem',
            }
        },

    },
    leftBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media only screen and (min-width: 1024px)': {
            display: 'block'
        }
    },
    rightBlock: {
        '@media only screen and (min-width: 1024px)': {
            display: 'flex',
            alignItems: 'center'
        }
    },
    toggler: {
        position: 'relative',
        zIndex: 1,
        '@media only screen and (min-width: 1024px)': {
            display: 'none'
        }
    },
    logo: {
        display: 'block',
        position: "absolute",
        // width: 'auto',
        left: '0%',
        lineHeight: 0,
        transform: 'translateX(100%)',
        '@media only screen and (min-width: 375px)': {
            transform: 'translateX(120%)',

        },
        '@media only screen and (min-width: 425px)': {
            transform: 'translateX(150%)',

        },
        '@media only screen and (min-width: 768px)': {
            transform: 'translateX(300%)',

        },
        '@media only screen and (min-width: 1024px)': {
            position: 'static',
            transform: 'unset',
            padding: '2.5rem 2rem'
        },
    },
    extraMenu: {
        display: 'flex',
        "button": {
            position: 'relative',
            i: {
                fontSize: '1.4rem'
            },
            '@media only screen and (min-width: 1024px)': {
                padding: "2.5rem 2rem"
            }
        },
        '@media only screen and (min-width: 1024px)': {
            height: '100%',
            '> * > *': {
                height: '100%'
            }
        }
    },
    menuWrapper: {
        position: 'absolute',
        top: '100%',
        left: '0%',
        right: '0%',
        bg: "white",
        height: 'fit-content',
        maxHeight: '0vh',
        overflowY: 'auto',
        transition: ".4s ease-in-out",
        zIndex: 99,
        menu: {
            maxHeight: "350px",
            item: {
                "> a > i": {
                    '@media only screen and (min-width: 1024px)': {
                        display: 'none'
                    }
                },
                'a': {
                    color: 'text',
                    display: 'flex',
                    padding: '1rem 2rem',
                    fontSize: "1.2rem",
                    lineHeight: '2',
                    '@media only screen and (min-width: 1024px)': {
                        padding: '2.5rem 2rem',
                        height: '100%'

                    },
                    '@media only screen and (min-width: 2560px)': {
                        padding: '4rem 2rem',
                    }
                },
            },
            "ul": {
                background: 'rgb(248,248,248)',
                "ul": {
                    bg: 'rgb(240,240,240)',
                }
            },
            '@media only screen and (min-width: 1024px)': {
                display: 'flex',
                margin: '0rem',
                height: '100%',
                "ul": {
                    background: '#fff',
                    "ul": {
                        bg: '#fff',
                    }
                },
                'ul:hover': {
                    display: 'block'
                }
            }
        },

        '@media only screen and (min-width: 1024px)': {
            position: 'static',
            maxHeight: '100%',
            bg: 'transparent',
            height: '100%'
        },
    },
    '@media only screen and (min-width: 1024px)': {
        padding: '0rem 3rem',
    }
}

export default navbar;