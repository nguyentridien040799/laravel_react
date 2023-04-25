// import libs
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import components
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import NavItem from './NavItem'
import ArticleRow from "../../modules/article/pages/list/components/ArticleRow";

// initiate Component
export default function PrivateHeader({user, showNavigation, showDropdown, toggleDropdown, showCategory, toggleCategory, logout, categories}) {
  return (
    <Collapse className="navbar-collapse" isOpen={ showNavigation }>
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
        <NavItem path="/articles">MyPage</NavItem>
        <Dropdown isOpen={ showDropdown } toggle={ toggleDropdown }>
          <DropdownToggle nav caret>
            { user.name }
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-right">
            <Link className='dropdown-item' to={ `/users/${ user.id }/edit` }>
              <span className="fa fa-user-o" title="logout" aria-hidden="true"/> Profile
            </Link>
            <DropdownItem divider/>
            <DropdownItem onClick={ e => logout(e) }>
              <span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </Collapse>
  );
}

// bind properties
PrivateHeader.displayName = 'PrivateHeader'
PrivateHeader.propTypes = {
  user: PropTypes.object.isRequired,
  showNavigation: PropTypes.bool.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  showCategory: PropTypes.bool.isRequired,
  toggleCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
}
