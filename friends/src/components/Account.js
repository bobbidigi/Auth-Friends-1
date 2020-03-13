import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import api from '../utils/Api'
import Friend from './Friend'
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Account(props) {
    //font awesome icon
    const plus = <FontAwesomeIcon icon={faPlus} />

    const [friends, setFriends] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api().get("/api/friends")
        .then(results => {
            console.log(results.data)
            setFriends(results.data)
            setIsLoading(false)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return isLoading ? (<div>loading....</div>) :
        (
        <div>
            <div className="header">
            <h1>My Friends Account</h1>
            {/* <Link to="/add"><i className="fas fa fa-plus"/></Link> */}
            <Link className="plus-icon" to="/add">{plus}</Link>
            </div>
            
         {friends ? friends.map((item,index) => {
            return < Friend friend={item} key={index}/>}) : <i className="fas fa-circle-notch fa-7x" /> }  


        </div>
    )
}