const grid = {
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: "0",
    justifyContent: "space-evenly",
    rowGap: "2rem",
    // padding: "5rem 0",
    "@media screen and (min-width: 768px)": {
        gridTemplateColumns: "1fr 1fr",
        columnGap: "1rem",
    },
    "@media screen and (min-width:  1024px)": {
        gridTemplateColumns: "1fr  1fr  1fr",
        columnGap: "1.5rem",
    },
    col2: {
        display: "grid",
        gridTemplateColumns: "1fr",
        columnGap: "0",
        justifyContent: "space-evenly",
        rowGap: "2rem",
        padding: "0rem 0rem",
        "@media screen and (min-width: 768px)": {
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
        },
    },
    col4: {
        display: "grid",
        gridTemplateColumns: "1fr",
        textAlign: "center",
        columnGap: "0",
        padding: "0rem 0rem",
        "@media screen and (min-width: 768px)": {
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
        },
        "@media screen and (min-width: 1024px)": {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
    },
};
export default grid;