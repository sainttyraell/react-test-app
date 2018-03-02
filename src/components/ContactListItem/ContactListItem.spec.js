import React from 'react'
import { shallow } from 'enzyme';
import ContactListItem from './ContactListItem';
import ContactListButton from "../ContactListButton/ContactListButton";

describe('<ContactListItem />', () => {
    it('renders without crashing', () => {
        shallow(<ContactListItem listItem={{}}/>)
    });

    it('receives props propery', () => {
        const listItem = {
            name: "Adam",
            desc: "Description",
            phoneNumber: "phoneNumber"
        };
        const wrapper = shallow(<ContactListItem listItem={listItem}/>);
        expect(wrapper.find('.contact-list-item-name')).toHaveText(listItem.name);
        expect(wrapper.find('.contact-list-item-desc')).toHaveText(listItem.desc);
        expect(wrapper.find('.contact-list-item-phone-number')).toHaveText(listItem.phoneNumber);
    });

    it('has contact list className', ()=>{
        const wrapper = shallow(<ContactListItem listItem={{}}/>);
        expect(wrapper).toHaveClassName('contact-list-item');
    });

    it('renders ContactListButton component inside', () => {
        const wrapper = shallow(<ContactListItem listItem={{}}/>);
        expect(wrapper.containsMatchingElement(<ContactListButton />)).toEqual(true);
    });
})