import { useState, useEffect } from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import { Link } from "react-router-dom";

const CoworkingsAdmin = () => {
    const[coworkings, setCoworkings] = useState([]);    
    useEffect (() => {
    fetch("http://localhost:3005/api/coworkings/")
        .then((dataJson) => dataJson.json())
        .then((dataJs) => setCoworkings(dataJs.data))
    }, []);


    const handleDelete = (coworking) => {
        fetch(`http://localhost:3005/api/coworkings/${coworking.id}`, {
            method: "DELETE",
        })
    }

    return (
        <div>
            <HeaderAdmin />            
            <div className="container-coworkings">                
                <div className="container-coworking">
                    {coworkings.map((coworking) => {
                        return (
                            <div className="coworkings">
                                <div className="coworking"  key={coworking.id}>
                                    <h3>{coworking.name}</h3>
                                    <p>{coworking.address.number} {coworking.address.street}</p>
                                    <p>{coworking.address.postCode} {coworking.address.city}</p>
                                    <p>Superficie: {coworking.superficy} m²</p>
                                    <p>capacité: {coworking.capacity} personnes</p>
                                    <p>prix:{coworking.price.day} par jour</p>
                                    <div>
                                        <button onClick={() => handleDelete(coworking)}>Delete</button>
                                        <Link to={`/admin/coworkings/${coworking.id}`}>Update</Link>
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

export default CoworkingsAdmin;