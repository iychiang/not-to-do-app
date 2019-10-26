import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div>
                    {this.props.itemText}
                </div>
                <button onClick={() => this.props.handleRemove(this.props.itemText)}>Remove</button>
            </div>
        )
    }
}

export default ListItem;