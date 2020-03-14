import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({signedIn}) {
    return (
        <nav>
            <Link to="/">Home</Link>
            {!signedIn && <Link to="/signin">Sign In</Link>}
            {signedIn && <Link to="/account">My Account</Link>}
            {signedIn && <Link to="/logout">Log Out</Link>}
		</nav>
    )
}
