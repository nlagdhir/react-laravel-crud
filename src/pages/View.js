import { useState, useEffect } from "react"
import http from '../http';
import { useParams } from "react-router-dom";

export default function View(props) {
    const [input, setInput] = useState({});
    const {id} = useParams()

    useEffect(() => {
        fetchUser();
    },[]);

    const fetchUser = () => {
        http.get('users/'+id+"/edit").then(res => {
            console.log(res);
            setInput({
                name: res.data.name,
                email : res.data.email
            })
        })
    }

    return <>
        <div>
            <h2>View User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h2>Name</h2>
                        <p>{input.name}</p>
                        <h2>Email</h2>
                        <p>{input.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}