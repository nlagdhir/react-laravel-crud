import { useState, useEffect } from "react"
import http from '../http';
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
    const navigate = useNavigate();
    const [input, setInput] = useState({});
    const {id} = useParams()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values,[name]:value}))
    }

    useEffect(() => {
        fetchUser();
    },[]);

    const fetchUser = () => {
        http.get('users/'+id+"/edit").then(res => {
            setInput({
                name: res.data.name,
                email : res.data.email
            })
        })
    }

    const submitForm = () => {
        http.put('users/'+id, input).then(res => {
            navigate('/');
        })
    }

    return <>
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control mb-2" value={input.name || ''}  onChange={handleChange}/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control mb-2" value={input.email || ''}  onChange={handleChange}/>
                                          
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}