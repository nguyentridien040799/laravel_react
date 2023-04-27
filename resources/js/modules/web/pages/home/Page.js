import React, {Component} from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"
import Articles from "../../../../common/articles/listing"

// import services
import { articleListRequest } from '../../../article/service'
import Pagination from "../../../../common/pagination";

class Page extends Component{
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    meta: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(articleListRequest({ url: 'api/v1/articles/published' }))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(articleListRequest({ url: 'api/v1/articles/published', pageNumber }))
  }

  render() {
    return (<div>
      <Header/>
      <Articles/>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
    </div>)
  }
}

export default Page;
