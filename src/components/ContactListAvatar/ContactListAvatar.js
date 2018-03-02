import React, { Component } from 'react'
import './ContactListAvatar.css';
import { Image } from 'semantic-ui-react';
import defaultAvatar from './defaultAvatar.png';

class ContactListAvatar extends Component {
    componentWillReceiveProps() {
        console.log('dupa')
    }

    render() {
        let imgPath = this.props.avatarPath ? this.props.avatarPath : defaultAvatar;
        return (
            <Image src={imgPath} className="contact-list-avatar" />
        )
    }
}

export default ContactListAvatar;