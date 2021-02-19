import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import './ContactForm.scss';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        onSubmit: PropTypes.func,
    };

    static defaultProps = {};

    handleChange = e => {
        const { name, value } = e.target;
            this.setState({
                [name]: value,
            });
    };

    handleSubmit = e => {
        const { name, number } = this.state;
        e.preventDefault();

        this.props.onSubmit(name, number);
        this.setState({
            name: '',
            number: ''
            });
    }; 
    
    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form
                    className="Form"
                    onSubmit={this.handleSubmit} >
                    <label
                        htmlFor="name"
                        className="Label">Name</label>
                <input
                    type="text"
                    value={name}
                    id="name"
                    className="Input"
                    onChange={this.handleChange}
                    name="name"
                    placeholder="John Smith"
                    />
            
                    <label
                        htmlFor="number"
                        className="Label">Number</label>
                <input
                    type="tel"
                    value={number}
                    id="number"
                    className="Input"
                    onChange={this.handleChange}
                    name="number"
                    placeholder="+38(067)777-77-77"
                    />
                    
                    <button
                        type="submit"
                        className="ContactFormButton">
                      Add contact
                    </button>
                 </form>
            </div>
        );
    }
 }

//    setMassge = (note) => {
//       this.setState({ message:  note});
//       setTimeout(() => {
//       this.setState({ message: null });
//       }, 2500);
//     }
    //f (name === '') {
    //         this.setMassge('Enter concact name, please!');
    //         return;
    //     }
    //     if (number === '') {
    //         this.setMassge('Enter concact phone, please!');
    //         return;
    //     }
    //     if (this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
    //         this.setMassge('Contact already exists!');
    //         return;
    //     } 
     
const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(phoneBookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);