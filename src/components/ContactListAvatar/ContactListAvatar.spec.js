import React, { Component } from 'react'
import ContactListAvatar from './ContactListAvatar';
import { shallow, mount } from 'enzyme';
import defaultAvatar from './defaultAvatar.png';

describe('<ContactListAvatar />', () => {
    it('renders properly', () => {
        shallow(<ContactListAvatar />);
    });

    it('has "contact-list-avatar className"', () => {
        const wrapper = shallow(<ContactListAvatar />);
        expect(wrapper).toHaveClassName('contact-list-avatar');
    });

    it('receives image path', () => {
        const imgPath = 'lol/its/path.png'
        const wrapper = mount(<ContactListAvatar avatarPath={imgPath}/>);
        expect(wrapper.find('img')).toHaveProp('src');
    });

    it('renders default avatar when not defined', () => {
        const wrapper = mount(<ContactListAvatar />);
        expect(wrapper.find('img').prop('src')).toEqual(defaultAvatar);
    })
})