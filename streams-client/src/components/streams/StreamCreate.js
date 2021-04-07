import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onFormSubmit(data) {
        console.log(data)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = formVals => {
    const errors = {};
    if (!formVals.title) errors.title = "Title is required";
    if (!formVals.description) errors.description = "Please enter in a description.";
    return errors;
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);