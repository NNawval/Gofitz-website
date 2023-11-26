import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/background-home.jpg";

function Home() {
    return(
        <>
            <Navbar />
            <div className="p-0 m-0 w-100" style={{backgroundColor: "#cccccc",backgroundPosition:"center",backgroundRepeat: "no-repeat", backgroundSize:"cover",height:"90vh", backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${background})` }}>
                {/* <img style={{height:"90vh", width:"100vw", objectFit:"cover"}} src={background} alt="bg" /> */}
            </div>
            <Footer />
        </>
    )
};

export default Home;