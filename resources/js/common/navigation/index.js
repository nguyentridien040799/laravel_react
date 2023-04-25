// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../modules/auth/service'

// import components
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler } from 'reactstrap';
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'

class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      showNavigation: false,
      showCategory: false,
      showDropdown: false,
      isOpen: false
    }
  }
  
  toggleNavbar = () => {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }

  toggleCategory = () => {
    this.setState({
      showCategory: !this.state.showCategory,
    });
  }
  
  toggleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  }
  
  logout = e => {
    e.preventDefault()
    
    this.props.dispatch(logout())
  }
  
  render() {
    return (
      <Navbar className="navbar navbar-expand-md navbar-dark bg-primary fixed-top border-bottom">
        <Link to="/" className="navbar-brand">MyBlog</Link>
        <NavbarToggler className="navbar-toggler d-lg-none" onClick={this.toggleNavbar} />
        {
          this.props.isAuthenticated && this.props.categories
            ? <PrivateHeader user={this.props.user}
                             showNavigation={this.state.showNavigation}
                             toggleDropdown={this.toggleDropdown}
                             showCategory={this.state.showCategory}
                             toggleCategory={this.toggleCategory}
                             categories={this.props.categories}
                             showDropdown={this.state.showDropdown}
                             logout={this.logout} />
            : <PublicHeader showNavigation={this.state.showNavigation}
                            showCategory={this.state.showCategory}
                            toggleCategory={this.toggleCategory}
                            categories={this.props.categories} />
        }
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
    categories: state.categories.data
  }
}

export default connect(mapStateToProps)(Navigation)
