// import libs
import {connect} from "react-redux"

// import components
import Page from "./Page"

const mapStateToProps = state => {
    return {
        meta: state.articles
    }
}

export default connect(mapStateToProps)(Page)
