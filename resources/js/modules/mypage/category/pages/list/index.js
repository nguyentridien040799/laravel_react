import {connect} from "react-redux";
import Category from "../../../../category/Category";
import Page from "./Page";

const mapStateToProps = state => {
    const {data, ...meta} = state.categories

    return {
        categories: data?.map((category) => new Category(category)),
        meta: Object.assign({}, meta)
    }
}

export default connect(mapStateToProps)(Page)