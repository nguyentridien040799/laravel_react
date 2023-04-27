import React, { Component } from "react";
import PropTypes from "prop-types";

import Articles from "../../../../../common/articles/listing";
import {categoryListArticleRequest} from "../../../service";
import Pagination from "../../../../../common/pagination";

class Page extends Component {
    static displayName = 'Category'
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        category: PropTypes.object.isRequired
    }

    loadArticles() {
        this.props.dispatch(categoryListArticleRequest(this.props.match.params.slug))
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.dispatch(categoryListArticleRequest(nextProps.match.params.slug))
        }
    }

    pageChange = (pageNumber) => {
        this.props.dispatch(categoryListArticleRequest(this.props.match.params.slug, pageNumber))
    }

    componentDidMount() {
        this.loadArticles();
    }

    render() {
        return <div>
            <Articles/>
            <Pagination meta={this.props.meta} onChange={this.pageChange}/>
        </div>
    }
}

export default Page;