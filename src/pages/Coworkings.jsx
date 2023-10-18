import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Coworkings = () => {
    const[coworkings, setCoworkings] = useState([]);    
    useEffect (() => {
    fetch("http://localhost:3005/api/coworkings/", {
        method: 'GET',
        mode: 'cors', // Optionally, specify the CORS mode
      })
        .then((dataJson) => dataJson.json())
        .then((dataJs) => setCoworkings(dataJs.data))
    }, []);


    return (
        <div>
            <Header />            
            <div className="container-coworkings">                
                <div className="container-coworking">
                    {coworkings.map((coworking) => {
                        return (
                            <div className="coworkings" key={coworking.id}>
                                <div className="coworking"  >
                                    <h3>{coworking.name}</h3>
                                    {/* <p>{coworking.address.number} {coworking.address.street}</p>
                                    <p>{coworking.address.postCode} {coworking.address.city}</p> */}
                                    <p>Superficie: {coworking.superficy} m²</p>
                                    {/* <p>capacité: {coworking.capacity} personnes</p> */}
                                    <p>prix:{coworking.price.day} par jour</p>
                                    <div>
                                        <Link to={`/coworkings/${coworking.id}`}>Voir plus</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
};

export default Coworkings;