import React, { useState } from "react"
import api from '../utils/Api.js'

function Signin(props) {

	const [error, setError] = useState()
	const [data, setData] = useState({
		username: "",
		password: "",
    })

    const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        api()
            .post("/api/login", data)
			.then(result => {
				console.log(result)
                localStorage.setItem("token", result.data.payload)
                props.history.push('/')
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
    }
    	
	return (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
​
			<input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
​
			<button type="submit">Sign In</button>
		</form>
	)
}

export default Signin
