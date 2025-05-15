import React, {Component} from "react";
import logo from "../../images/лого.svg";
import waves from "../../images/waves.png";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container-title">
                    <img className="footer__logo" src={logo} alt=""/>
                    <div className="footer__title">
                        <p>Кофе с ароматом моря</p>
                        <img src={waves} alt=""/>
                    </div>
                </div>
                <div className="footer__container-info">
                    <div className="footer__price">
                        <div className="footer__price-retail">
                            <p className="footer__price-retail-title footer__info-title">Розница</p>
                            <a className="footer__price-retail-desc footer__desc" href="#">Доставка и оплата</a>
                        </div>
                        <div className="footer__price-opt">
                            <p className="footer__price-opt-title footer__info-title">Опт</p>
                            <a className="footer__price-opt-desc footer__desc" href="#">Оптовое предложение</a>
                        </div>
                    </div>
                    <div className="footer__docks">
                        <p className="footer__docks-title footer__info-title">Документы</p>
                        <div className="footer__docks-container">
                            <a href="#" className="footer__docks-desc footer__desc">
                                Политика обработки <br/>
                                <span>персональных данных</span>
                            </a>
                            <a href="#" className="footer__docks-desc footer__desc">Публичная оферта</a>
                            <a href="#" className="footer__docks-desc footer__desc">faq</a>
                        </div>
                    </div>
                    <div className="footer__info">
                        <p className="footer__info-title">Контакты</p>
                        <p className="footer__info-desc">ООО “Кофе Бриз”</p>
                        <p className="footer__info-desc footer__info-bold">тел.</p>
                        <p className="footer__info-desc">+ 7 (978) 991 87 41</p>
                        <p className="footer__info-desc footer__info-bold">e - mail</p>
                        <p className="footer__info-desc">kofe.briz@mail.ru</p>
                    </div>
                </div>
            </footer>
        )
    }
}