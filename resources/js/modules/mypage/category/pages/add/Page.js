import React, { Component } from "react";
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Validator } from 'ree-validate'

// import components
import Form from './components/Form'
import Sidebar from "../../../../../common/sidebar";
import {categoryAddRequest} from "../../../../category/service";


class Page extends Component {
    static displayName = 'AddCategory'
    static propTypes = {
        category: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            name: 'required|min:3'
        })

        const category = this.props.category.toJson()

        this.state = {
            category,
            errors: this.validator.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const category = nextProps.category.toJson()

        if (!_.isEqual(this.state.article, category)) {
            this.setState({ category })
        }

    }

    handleChange(name, value) {
        const { errors } = this.validator

        this.setState({ category: { ...this.state.category, [name]: value} })

        errors.remove(name)

        this.validator.validate(name, value)
            .then(() => {
                this.setState({ errors })
            })
    }

    handleSubmit(e) {
        e.preventDefault()
        const category = this.state.category
        const { errors } = this.validator

        this.validator.validateAll(category)
            .then((success) => {
                if (success) {
                    this.submit(category)
                } else {
                    this.setState({ errors })
                }
            })
    }

    submit(category) {
        this.props.dispatch(categoryAddRequest(category))
            .catch(({ error, statusCode }) => {
                const { errors } = this.validator

                if (statusCode === 422) {
                    _.forOwn(error, (message, field) => {
                        errors.add(field, message);
                    });
                }

                this.setState({ errors })
            })
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-sm-9 col-md-10 pt-3">
                    <h1>Create</h1>
                    <Form {...this.state}
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit} />
                </div>
            </div>
        </div>
    }
}

export default Page