import React, {Component} from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.css';

class ContactList extends Component {
    render() {
        const emptyMessage = 'Contact list is empty';
        const listItemsFromState = this.props.listItems;
        let listItems = [];
        if (listItemsFromState) {
            listItems = listItemsFromState.map((item,key) => {
                return <ContactListItem key={key} listItem={item} />
            })
        }

        return (
            <div className="contact-list">
                {listItemsFromState ? listItems : emptyMessage}
            </div>
        )
    }
}

export default ContactList;