import Card from "./Card";
import React, { Component } from "react";

export class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Колумбия',
                    desc: 'мытая',
                    category: 'для эспрессо',
                    width1: '250гр',
                    width2: '1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    image: 'coffee.png',
                    bitterness: '55',
                    acidity: '20',
                    density: '75'
                },
                {
                    id: 2,
                    title: 'Колумбия-2',
                    desc: 'мытая',
                    category: 'для эспрессо',
                    width1:'250гр',
                    width2:'1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    density: '25',
                    acidity: '15',
                    bitterness: '55',
                    image: 'coffee.png'
                },
                {
                    id: 3,
                    title: 'Латте',
                    desc: 'мытая',
                    category: 'под молочко',
                    width1:'250гр',
                    width2:'1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    density: '68',
                    acidity: '90',
                    bitterness: '55',
                    image: 'coffee.png'
                },
                {
                    id: 4,
                    title: 'Латте-2',
                    desc: 'мытая',
                    category: 'под молочко',
                    width1:'250гр',
                    width2:'1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    density: '50',
                    acidity: '80',
                    bitterness: '55',
                    image: 'coffee.png'
                },
                {
                    id: 5,
                    title: 'Фильтр',
                    desc: 'мытая',
                    category: 'для фильтра',
                    width1:'250гр',
                    width2:'1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    density: '100',
                    acidity: '30',
                    bitterness: '55',
                    image: 'coffee.png'
                },
                {
                    id: 6,
                    title: 'Фильтр-2',
                    desc: 'мытая',
                    category: 'для фильтра',
                    width1:'250гр',
                    width2:'1000гр',
                    price1: '500руб',
                    price2: '2000руб',
                    density: '10',
                    acidity: '45',
                    bitterness: '55',
                    image: 'coffee.png'
                },
            ]
        };
    }
    render() {
        return (
            <div className="catalog__wrapper">
                <p className="catalog__title">каталог</p>
                <div className="catalog__filter">
                    <div className="catalog__opt">
                        <a className="catalog__opt-href" href="#">Получить оптовый <span class="catalog__opt-title">ПРАЙС-ЛИСТ</span></a>
                    </div>
                    <div className="catalog__choose">
                        <a href="#" className="catalog__choose-item">Для эспрессо</a>
                        <a href="#" className="catalog__choose-item">Под молочко</a>
                        <a href="#" className="catalog__choose-item">Для фильтра</a>
                    </div>
                </div>
                <div className="card__container">
                    <Card items={this.state.items} onAdd={this.props.onAdd} />
                </div>
            </div>
        )
    }

}

export default Catalog;