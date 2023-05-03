import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'CategoryRow'
const propTypes = {
    index: PropTypes.number.isRequired,
    category: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

const CategoryRow = ({ index, category, handleRemove }) => {
    return (<tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{category.name}</td>
        <td>{category.createdAt && category.createdAt.format('MMMM, DD YYYY')}</td>
        <td>{category.updatedAt && category.updatedAt.format('MMMM, DD YYYY')}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Actions">
                <Link className="btn btn-primary" to={`categories/${category.id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => handleRemove(category.id)}>Delete</button>
            </div>
        </td>
    </tr>)
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow