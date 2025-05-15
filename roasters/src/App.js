import React from "react";
import Header from "./components/header/Header";
import About from "./components/About";
import Catalog from "./components/catalog/Catalog";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(itemId) {
        this.setState(prevState => ({
            cartItems: prevState.cartItems.filter(item => item.id !== itemId)
        }));
    }

    addToCart(item) {
        this.setState(prevState => {

            const existingItem = prevState.cartItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {

                return {
                    cartItems: prevState.cartItems.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                };
            } else {

                return {
                    cartItems: [...prevState.cartItems, { ...item, quantity: 1 }]
                };
            }
        });
    }

  render() {
      return (
          <div className="wrapper">
              <Header cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
              <About />
              <Catalog onAdd={this.addToCart}/>
          </div>
      );
  }
}

export default App;
