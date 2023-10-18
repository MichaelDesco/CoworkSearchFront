import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const CoworkingsDetails = () => {

    const { id } = useParams();
    const [coworking, setCoworking] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:3005/api/coworkings/${id}`)
        .then((dataJson) => dataJson.json())
        .then((dataJs) => setCoworking(dataJs.data))
    }, [id]);

    return (
        <div>
            <Header />
            {coworking ? (
                <div className="container-details">
                    <div className="details">
                        <h3>{coworking.name}</h3>
                        <p>{coworking.address.number} {coworking.address.street}</p>
                        <p>{coworking.address.postCode} {coworking.address.city}</p>
                        <p>Superficie: {coworking.superficy} m²</p>
                        <p>capacité: {coworking.capacity} personnes</p>
                        <p>prix: {coworking.price.hour} par heure / {coworking.price.day} par jour / {coworking.price.month} par mois</p>
                    </div>
                </div>
                ) : (
                <p>Chargement...</p>
                )
            }
        </div>
    );
};

export default CoworkingsDetails;