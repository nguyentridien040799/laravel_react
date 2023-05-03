import React from 'react'
import {Link} from "react-router-dom";

const Sidebar = () => (<div className="col-sm-3 col-md-2 pt-3">
    <div className="card">
        <div className="card-group-item">
            <div className="card-header">Sidebar</div>
            <div className="filter-content">
                <div className="list-group list-group-flush">
                    <Link to="/articles" className="list-group-item">Articles</Link>
                    <Link to="/categories" className="list-group-item">Categories</Link>
                </div>
            </div>
        </div>
    </div>
</div>)

export default Sidebar
