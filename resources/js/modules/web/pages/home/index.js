// import libs
import {connect} from "react-redux"

// import components
import Page from "./Page"

const mapStateToProps = state => {
    return {
        meta: state.articles,
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(Page)
