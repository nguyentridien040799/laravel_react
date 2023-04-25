import Model from '../../utils/Model'

class Category extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.id = props.id || ''
    this.name = props.name || ''
    this.slug = props.slug || ''
  }
}

export default Category
