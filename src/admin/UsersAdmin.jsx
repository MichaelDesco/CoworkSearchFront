import HeaderAdmin from "../components/HeaderAdmin";
import {useState , useEffect} from "react";

const Users = () => {
    const[users, setUsers] = useState([]);    
    useEffect (() => {
    fetch("http://localhost:3005/api/users/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((dataJson) => dataJson.json())
        .then((dataJs) => {setUsers(dataJs.data)
        console.log(dataJs)})
    }, []);

    // const handleDelete = (user) => {
    //     fetch(`http://localhost:3005/api/users/${user.id}`, {
    //         method: "DELETE",
    //     })
    // }

    return (
        <div>
            <HeaderAdmin />
            <div className="container-users">
                <div className="container-user">
                    {users.map((user) => {
                        return (
                            <div className="users">
                                <div className="user"  key={user.id}>
                                    <h3>{user.username}</h3>
                                    <p className="rôles">{user.roles}</p>
                                    <p>{user.mail}</p>
                                    {/* <button onClick={() => handleDelete(user)}>Delete</button> */}
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
}

export default Users;