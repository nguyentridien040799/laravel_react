// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import NavItem from './NavItem'
import {Link} from "react-router-dom";

// define component name
const displayName = 'PublicHeader'

// validate properties
const propTypes = {
  showNavigation: PropTypes.bool.isRequired,
    showCategory: PropTypes.bool.isRequired,
    toggleCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

// initiate comppnent
const PublicHeader = ({ showNavigation, showCategory, toggleCategory, categories }) => (
  <Collapse className="navbar-collapse navbar-dark" isOpen={showNavigation}>
    <ul className="navbar-nav mr-auto">
        <ul className="navbar-nav">
            <Dropdown isOpen={ showCategory } toggle={ toggleCategory }>
                <DropdownToggle nav caret>
                    Category
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right">
                    {categories && categories.map((category, index) => {
                        return <DropdownItem key={index}>
                            <Link className='dropdown-item' key={index} to={`category/${category.slug}` }>
                                {category.name}
                            </Link>
                        </DropdownItem>
                    })}
                </DropdownMenu>
            </Dropdown>
        </ul>
    </ul>
    <ul className="navbar-nav">
      <NavItem path="/login">Login</NavItem>
      <NavItem path="/register">Register</NavItem>
    </ul>
  </Collapse>)

// bind properties
PublicHeader.displayName = displayName
PublicHeader.propTypes = propTypes

// export component
export default PublicHeader
