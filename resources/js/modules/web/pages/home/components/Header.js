import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Header({ user }) {
  return user && <header className="bg-primary text-white">
    <div className="container text-center py-4">
      <img width="125" height="125" src="https://graph.facebook.com/1243067599/picture?type=square" alt="..." className="rounded-circle mt-4 mb-3" />
      <h1>{user.name}</h1>
      <p className="lead">{user.about}</p>
      <p className="lead"><i className="fa fa-heart text-danger" />{user.position}</p>
    </div>
  </header>
}

Header.displayName = 'HomePageHeader'
Header.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)
