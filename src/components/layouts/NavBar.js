import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks />;
return(
<nav className="nav-wrapper grey darken-3">      
    <div className="container">
        <div className="left-align">
        <Link to='/' className="brand-logo">SRplans</Link>
        { links }
        </div>
    </div>
</nav>
)
}

const mapStateToProps = (state) =>
{
  console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)