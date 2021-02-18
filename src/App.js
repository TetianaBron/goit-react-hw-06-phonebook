import React, { Component } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import Layout from './Components/Layout/Layout';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Notification from './Components/Notification/Notification';
import Logo from './Components/Logo/Logo';


export default class App extends Component {
    state = {
        // contacts: [],
        // filter: '',
        message: null
    };

    setMassge = (note) => {
      this.setState({ message:  note});
      setTimeout(() => {
      this.setState({ message: null });
      }, 2500);
    }

    // addContact = (name, number) => {
    //    const contact = {
    //    id: uuidv4(),
    //    name,
    //    number
    //    };

    //     if (name === '') {
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
    //     this.setState(({ contacts }) => ({
    //         contacts: [contact, ...contacts],
    //     }));
    // };
    
    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parselContacts = JSON.parse(contacts);

    //     if (parselContacts) {
    //         this.setState({ contacts: parselContacts })
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts) {

    //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    // }

    render() {
        const {  message } = this.state;
      
        return ( 
            <Layout>

              <Logo />  
                
                <Notification
                    message={message} />

                <ContactForm /> 
                    
                <Filter />
                    {/*  contacts={contacts} */}

                {/* <CSSTransition
                    in={contacts.length > 0}
                    timeout={0}
                    ommountOnExit>      */}
                <ContactList />
                {/* </CSSTransition> */}
            </Layout>
        );
    }
}