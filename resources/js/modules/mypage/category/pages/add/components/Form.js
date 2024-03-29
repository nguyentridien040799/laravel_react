import React from "react";
import PropTypes from "prop-types";

const displayName = 'CategoriesForm'
const propTypes = {
    category: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const Form = ({ category, errors, onChange, onSubmit }) => {
    function handleChange(name, value) {
        if (value !== category[name]) {
            onChange(name, value)
        }
    }

    return <form onSubmit={e => onSubmit(e)}>
        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text"
                       id="name"
                       name="name"
                       className={`form-control ${errors.has('name') && 'is-invalid'}`}
                       placeholder="Name"
                       value={category.name || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)} />
                {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-10 ml-auto">
                <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
            </div>
        </div>
    </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form