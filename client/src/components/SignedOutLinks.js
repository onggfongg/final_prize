import React from 'react'
import { Link } from "react-router-dom";
// import {connect} from 'react-redux'
// import {signOut} from '../redux/authAction'

const SignedOutLinks = (props) =>{
    return (
        <li className="nav-item">
            <Link className="nav-link" to="/Login">
                Login
            </Link>
        </li>
        
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signOut: () => dispatch(signOut())
//     }
// }

export default (SignedOutLinks)