import { useState } from "react"
import http from '../http';
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    const [input, setInput] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values,[name]:value}))
    }

    const submitForm = () => {
        console.log(input);
        http.post('users', input).then(res => {
            navigate('/');
        })
    }
     

    return <>
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control mb-2" value={input.name || ''}  onChange={handleChange}/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control mb-2" value={input.email || ''}  onChange={handleChange}/>
                        
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control mb-2" value={input.password || ''}  onChange={handleChange}/>
                        
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}