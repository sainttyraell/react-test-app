import React, {Component} from 'react';
import ContactListButton from '../ContactListButton/ContactListButton';
import './ContactListItem.css';
import { Grid } from 'semantic-ui-react';
import ContactListAvatar from 'components/ContactListAvatar/ContactListAvatar';


class ContactListItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(`this is ${this.props.listItem.name} profile. You dont have permission to access that page!`);
    }

    render() {
        const avatar = `https://api.adorable.io/avatars/120/${this.props.listItem.name}.png`;
        
        return (
            <Grid className="contact-list-item">
                <Grid.Column width={2}>
                    <ContactListAvatar avatarPath={avatar} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <div className="contact-list-item-name">{this.props.listItem.name}</div>
                    <div className="contact-list-item-desc">{this.props.listItem.desc}</div>
                    <div className="contact-list-item-phone-number">{this.props.listItem.phoneNumber}</div>
                    <ContactListButton clickFn={this.handleClick} />
                </Grid.Column>
            </Grid>
        )
    }
}

export default ContactListItem;