import React, { Component } from "react";
import Item from "./Item";

export  class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </div>
        )
    }
}

export default Card;