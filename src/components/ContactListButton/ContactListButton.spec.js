import React, { Component } from 'react'
import { shallow, mount } from 'enzyme';
import ContactListButton from './ContactListButton';
import { defaultContactListButtonLabel } from 'constants/constants';
import { Button } from 'semantic-ui-react';

describe('<ContactListButton />', () => {
    it('renders properly', () => {
        shallow(<ContactListButton />)
    });

    it('receives "label" property', () => {
        const asd = "Button label";
        const btn = shallow(<ContactListButton label={asd} />);
        expect(btn.prop('content')).toEqual(asd);
    });

    it('renders default "label" when not defined', () => {
        const btn = mount(<ContactListButton />);
        expect(btn).toHaveText(defaultContactListButtonLabel);
    });

    it('has default onclick event', () => {
        const mockFn = jest.fn();
        const btn = mount(<ContactListButton clickFn={mockFn} />);
        btn.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

    it('triggers click event event properly', () => {
        const mockFn = jest.fn();
        const btn = mount(<ContactListButton clickFn={mockFn} />);
        btn.find('button').simulate('click');
        btn.find('button').simulate('click');
        btn.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(3);
    });

    it('doesnt trigger click event on mount when passed params passed to handleClick funciton and passes params correctly', () => {
        const params = {data: 'asd', label: 'fgh'};
        const mockFn = jest.fn();
        const btn = shallow(<ContactListButton clickFn={mockFn.bind(this, params)}/>);
        expect(mockFn).not.toHaveBeenCalled();
        btn.simulate('click');
        expect(mockFn).toHaveBeenCalledWith(params);
    })
});