import React, { Component } from "react";
import Plus from "../../images/плюсик.png";

export class Item extends Component {
    state = {
        active: null
    }
    render() {
        return (
            <div className="card__items">
                <a className="card__plus" href="#" onClick={(e) =>{e.preventDefault(); this.props.onAdd(this.props.item)}}><img src={Plus} alt=""/></a>
                <img className="card__image" src={"./img/" + this.props.item.image} alt=""/>
                <p className="card__category">{this.props.item.category}</p>
                <p className="card__title">{this.props.item.title}</p>
                <div className="card__info">
                    <div className="card__desc card__characteristic"><span>способ обработки</span> <span>{this.props.item.desc}</span></div>
                    <div className="card__bitterness card__characteristic"><span>горечь</span> <div className="card__bar" ><div className="card__bar-fill" style={{width: `${this.props.item.bitterness}%`}}></div></div></div>
                    <div className="card__acidity card__characteristic"><span>кислотность</span> <div className="card__bar" ><div className="card__bar-fill" style={{width: `${this.props.item.acidity}%`}}></div></div></div>
                    <div className="card__density card__characteristic"><span>плотность</span> <div className="card__bar" ><div className="card__bar-fill" style={{width: `${this.props.item.density}%`}}></div></div></div>
                </div>
                <div className="card__price">
                    <div className="card__price-1">
                        <a href="#" className="card__width-1 active">{this.props.item.width1}</a>
                        <p className="card__cost-1">{this.props.item.price1}</p>
                    </div>
                    <div className="card__price-2">
                        <a href="#" className="card__width-2">{this.props.item.width2}</a>
                        <p className="card__cost-2">{this.props.item.price2}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;