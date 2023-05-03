import {connect} from "react-redux";
import Category from "../../../../category/Category";

// import components
import Page from './Page'

const mapStateToProps = () => {
    const category = new Category({})

    return {
        category
    }
}

export default connect(mapStateToProps)(Page)