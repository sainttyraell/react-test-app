import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import ContactList from './components/ContactList/ContactList';
import { equal } from 'assert';

it('renders without crashing', () => {
  shallow(<App />);
});
