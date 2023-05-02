// import libs
import React, { Component } from 'react'

// import components
import Sidebar from "../../../../common/sidebar";

class Page extends Component {
    static displayName = 'MyPage'

    constructor(props) {
        super(props)
    }


    render() {
        return <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-sm-9 col-md-10 pt-3" role="main">
                    <h1>MyPage</h1>
                </div>
            </div>
        </div>
    }
}

export default Page
