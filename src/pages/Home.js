import { useState, useEffect } from "react"
import http from "../http"
import { Link } from 'react-router-dom'

export default function Home() {  

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, [])

    const fetchAllUsers = () => {
        http.get('users').then(res => {
            setUsers(res.data);
        })
    }

    const handleDeleteUser = (id) => {
        console.log(id);
        http.delete('/users/'+id).then(res => {
            fetchAllUsers();
        })
    }

    return <>
        <h2>User Listing...</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {

                        return <tr key={user.id}>
                            <th scope="row">{++index}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-info me-1" to={{ pathname: "/view/" + user.id }}>View</Link>
                                <Link className="btn btn-primary me-1" to={{ pathname: "/edit/" + user.id }}>Edit</Link>
                                <button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(user.id)} >
                                    Delete
                                </button>
                               
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </>
}