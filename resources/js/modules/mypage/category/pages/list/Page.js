import React, {Component} from "react";
import PropTypes from 'prop-types'
import {categoryListRequest} from "../../../../category/service"
import Sidebar from "../../../../../common/sidebar";
import {Link} from "react-router-dom";
import Pagination from "../../../../../common/pagination";
import CategoryRow from "./components/CategoryRow";

class Page extends Component {
    static displayName = 'CategoriesPage'

    static propTypes = {
        meta: PropTypes.object.isRequired,
        categories: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    pageChange = pageNumber => {
        this.props.dispatch(categoryListRequest({ pageNumber }))
    }

    handleRemove() {

    }

    renderCategories() {
        return this.props.categories && this.props.categories.map((category, index) => {
            return <CategoryRow key={index}
                               category={category}
                               index={index}
                               handleRemove={this.handleRemove}/>
        })
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-sm-9 col-md-10 pt-3" role="main">
                    <h1>Categories</h1>
                    <table className="table table-responsive table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th><Link to='/categories/create' className="btn btn-success">Add</Link></th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.renderCategories() }
                        </tbody>
                    </table>
                    <Pagination meta={this.props.meta} onChange={this.pageChange}/>
                </div>
            </div>
        </div>
    }
}

export default Page