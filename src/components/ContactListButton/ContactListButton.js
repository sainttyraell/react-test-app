import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { defaultContactListButtonLabel } from 'constants/constants';

class ContactListButton extends Component {
    render() {
        let content = this.props.label ? this.props.label : defaultContactListButtonLabel;
        return (
            <Button content={content} onClick={this.props.clickFn}></Button>
        )
    }
}

export default ContactListButton;