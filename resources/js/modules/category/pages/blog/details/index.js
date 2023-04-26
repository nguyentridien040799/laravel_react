// import libs
import { connect } from "react-redux"

// import components
import Page from "./Page"
import Category from "../../../Category";

const mapStateToProps = (state, router) => {
    const { params } = router.match
    const category = state.categories.data.find(category => category.slug === params.slug)
    return {
        category: category ? new Category(category) : new Category({})
    }
}

export default connect(mapStateToProps)(Page)
