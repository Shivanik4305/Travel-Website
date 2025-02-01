import React from "react";
import jpg from './jpg.webp'; // Adjust the path if needed

const Aboutus = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" ,marginTop:"120px"}}>About India</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", padding: "20px" }}>
                <img src={jpg} style={{ height: "350px", width: "450px", borderRadius: "10px", objectFit: "cover" }} alt="Hawa Mahal" />
                <p style={{ maxWidth: "600px", fontSize: "18px", lineHeight: "1.6" }}>
                    India is a country where culture resonates, tradition speaks, beauty entices, and variety fascinates.
                    India’s religious, linguistic, and cultural diversity is unsurpassed. India is known for its rich history, 
                    many ethnicities, and enormous landscapes.
                    <br /><br />
                    In the words of Mark Twain, <i>“India is the cradle of the human race, the birthplace of human speech, 
                    the mother of history, the grandmother of legend, and the great-grandmother of tradition.”</i>
                </p>
            </div>
        </>
    );
};

export default Aboutus;
