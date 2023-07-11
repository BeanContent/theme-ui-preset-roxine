const breadcrumb = {
    list: {
        display: 'flex'
    },
    item: {
        link: {
            color: "white",
            letterSpacing: '0.2em',
            fontSize: 9,
            "&:hover": {
                color: "emphasize"
            },


        },
        ":not(:last-child)": {
            'a::after': {
                color: 'white',
                content: '"/"',
                padding: '0rem 1rem'
            }

        }
    },

}

export default breadcrumb;