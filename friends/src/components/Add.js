import React, {useState} from 'react';
import api from '../utils/Api';


export default function Add(props) {
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState()
	const [data, setData] = useState({
		name: ""
    })

    const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsloading(true)
        api()
            .post("/api/friends", data)
			.then(result => {
                setIsloading(false)
				console.log("add result", result)
                props.history.push('/account')
			})
			.catch(err => {
                setIsloading(false)
				console.log(err)
				setError(err)
			})
    }

	return isLoading ? <div>Loading....</div> : (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
​
			<input type="name" name="name" placeholder="name" value={data.name} onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	)
}