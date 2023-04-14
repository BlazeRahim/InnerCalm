import React from "react"


const Footer = () => {

    let footerStyle = {
        backgroundColor: "#101316",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontFamily: '"Baloo Bhai 2","Poppins",sans-serif',
        borderTop : "1px solid white"
    }
    return (
        <>
            <section className="footer" style={footerStyle}>
            ∞ Made by Team InnerCalm. 2023 
            </section>

        </>
    )
}

export default Footer