import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateCoworkings = () => {
    const [isUpdate, setUpdate] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        // je fais un appel fetch, vers l'url de l'api pour récupérer
        //  un coworking en fonction de l'id présent dans l'url
        fetch(`http://localhost:3005/api/coworkings/${id}`)
          .then((responseJson) => responseJson.json())
          .then((responseJs) => {
            // si j'ai une réponse de l'api, je stocke le coworking
            // renvoyé dans le state
            setUpdate(responseJs.data);
          });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const number = e.target.number.value;
        const street = e.target.street.value;
        const postCode = e.target.postCode.value;
        const city = e.target.city.value;
        const superficy = e.target.superficy.value;
        const capacity = e.target.capacity.value;
        const hour = e.target.hour.value;
        const day = e.target.day.value;
        const month = e.target.month.value;


    fetch(`http://localhost:3005/api/coworkings/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ window.localStorage.getItem("token"),
        },
        body: JSON.stringify({
            name: name,
            address: {
                number: number,
                street: street,
                postCode: postCode,
                city: city,
            },
            superficy: superficy,
            capacity: capacity,
            price: {
                hour: hour,
                day: day,
                month: month,
            },
        }),
    }).then((response) => {
        if (response.status === 200) {
        console.log("coworking modifié");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le coworking n'a pas été créé
        } else {
        console.log("erreur");
        }
    })
};

    return (
        <div className="container-create-coworking">
            <form onSubmit={handleSubmit}>
                <h2>Update Coworking</h2>
                {isUpdate && <p>Le coworking a bien été modifiée</p>}
                <div className="coworking-form">
                    <div className="create-box">
                        <h4>Adresse</h4>
                        <label>Nom
                            <input type="text" id="name"  name="name" />
                        </label>
                        <label>Numéro:
                            <input type="number" id="number" name="number" />
                        </label>
                        <label>Adresse:
                            <input type="text" id="street" name="street" />
                        </label>
                        <label>Code postal:
                            <input type="number" id="postCode" name="postCode" />
                        </label>
                        <label>Ville:
                            <input type="text" id="city"  name="city" />
                        </label>
                    </div>
                    <div className="create-box">
                        <h4>Caractéristiques</h4>
                        <label>Superficie
                            <input type="number" id="superficy" name="superficy" />
                        </label>
                        <label>Capacité
                            <input type="number" id="capacity" name="capacity" />
                        </label>
                        <label>Prix par heure
                            <input type="number" id="hour" name="hour" />
                        </label>
                        <label>Prix par jour
                            <input type="number" id="day" name="day" />
                        </label>
                        <label >Prix par mois
                            <input type="number" id="month" name="month" />
                        </label>
                    </div>
                </div>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default UpdateCoworkings;