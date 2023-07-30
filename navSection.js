const navSection = {
    display: "block",
    padding: "0rem 1rem",
    marginBottom: '5rem',
    textAlign: "center",
    li: {
      display: "inline-block",
      whiteSpace: "nowrap",
      a: {
        textTransform: "uppercase",
        fontSize: 6,
      },
    },
    "li:not(li:first-of-type)::before": {
      content: '"-"',
      margin: "0rem 1rem",
      display: "inline-block",
      verticalAlign: "middle",
    },
  };
  export default navSection;