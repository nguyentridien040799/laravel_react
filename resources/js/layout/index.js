//import libs
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import services actions
import { fetchUser } from '../modules/auth/service'
import { categoryListRequest } from '../modules/category/service'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

function Layout(props) {

  const { isAuthenticated, user, children, dispatch } = props

  useEffect(() => {
    if (isAuthenticated && !user.id) {
      dispatch(fetchUser())
    }

    dispatch(categoryListRequest({ url: 'api/v1/categories/published' }))
  }, [isAuthenticated])

  if (isAuthenticated) {
    return <PrivateLayout {...props}>{children}</PrivateLayout>
  }
  return <PublicLayout {...props}>{children}</PublicLayout>
}

Layout.displayName = 'Layout';

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
    categories: state.categories,
  }
}

export default withRouter(connect(mapStateToProps)(Layout))
