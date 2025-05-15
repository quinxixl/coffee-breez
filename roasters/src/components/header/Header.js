import React, {useState} from "react";
import logo from "../../images/ЛОГО.png";
import basket from "../../images/shopping_bag.svg";
import trash from "../../images/мусорка.svg";
import cross from "../../images/cross.svg";

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} className="header__logo" alt="logo"/>
            </div>
            <div>
                <nav>
                    <ul className="header__navigation">
                        <li>
                            <a href="#" className="header__navigation-item">О нас</a>
                        </li>
                        <li>
                            <a href="#" className="header__navigation-item">Каталог</a>
                        </li>
                        <li>
                            <a href="#" className="header__navigation-item">Отзывы</a>
                        </li>
                        <li>
                            <a href="#" className="header__navigation-item">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div onClick={() => setCartOpen(!cartOpen)} className="header__basket-href">
                <div className="header__basket">
                    <img src={basket} alt="basket"/>
                </div>
                {cartOpen && (
                    <div className="header__cart">
                        <div className="header__cart-container">
                            <p className="header__cart-title">ВАША КОРЗИНА:</p>
                            <a href="" className="header__cart-cross" onClick={(e) => {
                                e.preventDefault();
                                setCartOpen(!cartOpen)
                            }}>
                                <img src={cross} alt=""/>
                            </a>
                        </div>
                        {props.cartItems.length === 0 ? (
                            <p className="header__cart-empty">Корзина пуста</p>
                        ) : (
                            <>
                                <div className="header__cart-items">
                                        {props.cartItems.map(item => (
                                            <div key={item.id} className="header__cart-item">
                                                <div className="header__cart-container-1">
                                                    <img
                                                        src={`./img/${item.image}`}
                                                        alt={item.title}
                                                        className="header__cart-item-image"
                                                    />
                                                    <div className="header__cart-item-info">
                                                        <p>{item.title}</p>
                                                        <p>{item.price1}</p>
                                                    </div>
                                                </div>
                                                <div class="header__cart-container-2">
                                                    <div className="header__cart-item-quantity">
                                                        <a href="#" className="header__cart-item-quantity-value">-</a>
                                                        <div className="header__cart-item-quantity-1"><p>{item.quantity}</p></div>
                                                        <a href="#" className="header__cart-item-quantity-value">+</a>
                                                    </div>
                                                    <a
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            props.removeFromCart(item.id);
                                                        }}
                                                        className="header__cart-item-remove"
                                                    >
                                                        <img src={trash} alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="header__cart-total">
                                    <span>Итого:</span>
                                    <span>
                                        {props.cartItems.reduce(
                                            (sum, item) => sum + (parseInt(item.price1) * item.quantity),
                                            0
                                        )} руб
                                    </span>
                                </div>
                                <a href="" class="header__cart-item-link">Заказать</a>
                            </>
                        )}
                    </div>
                )}
            </div>


        </header>
    )
}