import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'
import Category from "../category/Category";

class Article extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.slug = props.slug || ''
    this.title = props.title || ''
    this.description = props.description || ''
    this.content = props.content || ''
    this.published = props.published || false
    this.publishedAt = props.publishedAt ? moment(props.publishedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null

    // relate category model
    this.category = props.category ? new Category(props.category) : null
  }
}

export default Article
