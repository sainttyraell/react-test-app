import React, { Component } from 'react'
import { shallow, mount } from 'enzyme';
import ContactList from './ContactList';
import ContactListItem from '../ContactListItem/ContactListItem';

describe('<ContactList />', () => {
    it('renders without crashing', () => {
        shallow(<ContactList />)
    });
    
    it('has "contact-list" className', () => {
        const contactList = shallow(<ContactList />);
        expect(contactList).toHaveClassName('contact-list');
    })
    
    it('displays right message when there is no contact list items', () => {
        const contactList = shallow(<ContactList />);
        expect(contactList).toHaveText('Contact list is empty');
    });
    
    it('properly renders list items ', () => {
        const listItems = [{s: 'asd'},{s: 'def'}];
        const contactList = shallow(<ContactList listItems={listItems} />);
        expect(contactList.find(ContactListItem).length).toEqual(2);
    
        const listItems2 = [{s: 'asd'},{s: 'def'},{s: 'fgh'},{s: 'ghj'}];
        const contactList2 = shallow(<ContactList listItems={listItems2} />);
        expect(contactList2.find(ContactListItem).length).toEqual(4);
    });
});