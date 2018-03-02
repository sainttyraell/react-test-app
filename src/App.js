import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import list from './list';
import { Input } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      filteredList: list
    }
  }
  
  filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredList = this.getFilteredList(text);
    this.setState({
        filteredList,
    })
  }

  getFilteredList(text) {
    return list.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  }
  
  render() {
    return (
      <div className="App">
        <Input onInput={this.filterUsers} />
        <ContactList listItems={this.state.filteredList} />
      </div>
    );
  }
}

export default App;
