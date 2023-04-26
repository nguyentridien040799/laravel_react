import React, { Component } from "react";
import PropTypes from "prop-types";

import Articles from "../../../../../common/articles/listing";
import {categoryListArticleRequest} from "../../../service";

class Page extends Component {
    static displayName = 'Category'
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired
    }

    loadArticles() {
        if (this.props.category.slug) {
            this.props.dispatch(categoryListArticleRequest(this.props.match.params.slug))
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.dispatch(categoryListArticleRequest(nextProps.match.params.slug))
        }
    }

    componentDidMount() {
        this.loadArticles();
    }

    render() {
        return <div>
            <Articles/>
        </div>
    }
}

export default Page;