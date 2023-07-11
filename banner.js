const banner = {
  position: 'relative',
  wrapper: {
    position: 'relative',
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
  content: {
    color: "white"
  },
  title: {
    fontSize: 11,
    color: "white",
    marginBottom: '0rem'
  },
  "::before": {
    content: '""',
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    // zIndex: -1,
  },
  
};
export default banner;