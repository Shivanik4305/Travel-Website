import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contactus = () => {
    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            backgroundColor: "white" ,
            marginTop:"80px" // Set background color to light blue
        }}>
            <div style={{ 
                textAlign: "center", 
                maxWidth: "1100px",  // Increased window size
                padding: "30px", 
                borderRadius: "10px", 
                backgroundColor: "rgba(12, 88, 132, 0.2)",  // White background for content
                boxShadow: "0px 4px 10px solid black" 
            }}>
                <h1 style={{ marginBottom: "20px" }}>Contact Us</h1>
                
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    gap: "70px" // 70px gap between sections
                }}>
                    
                    {/* Address Section */}
                    <div style={{ flex: 1 }}>
                        <FaMapMarkerAlt size={30} />
                        <h3>ADDRESS</h3>
                        <p><b>SAE Kondhwa</b><br /> Yewalewadi, Pune, 411048</p>
                    </div>

                    {/* Phone Section */}
                    <div style={{ flex: 1 }}>
                        <FaPhoneAlt size={30} />
                        <h3>PHONE</h3>
                        <p><b>Trupti Kute</b><br /> +91 7385245055</p>
                        <p><b>Shivani Katkar</b><br /> +91 9302893361</p>
                    </div>

                    {/* Email Section */}
                    <div style={{ flex: 1 }}>
                        <FaEnvelope size={30} />
                        <h3>EMAIL</h3>
                        <p><b>For more queries</b></p>
                        <p>kutetrupti123@gmail.com</p>
                        <p>shivanikatkar04@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contactus;
