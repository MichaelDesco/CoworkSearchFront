import { useState } from "react";

const CreateCoworkings = () => {
    const [isCreate, setIsCreate] = useState(false);

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

            fetch("http://localhost:3005/api/coworkings",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2ODE5ODQ4ODYsImV4cCI6MTY4MTk4ODQ4Nn0._Hw05_GKhN0l4D1OO16iaQr23Lfeo8P6CcrFCb3HoAQ",
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
            })
            .then((dataJs) => (setIsCreate(true)))
            .catch((error) => console.log(error));
    };



    return (
        <div className="container-create-coworking">
            <form onSubmit={handleSubmit}>
                <h2>Create Coworking</h2>
                {isCreate && <p>Le coworking a bien été créé</p>}
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
                <button type="submit">Créer</button>
            </form>
        </div>
    )
}

export default CreateCoworkings