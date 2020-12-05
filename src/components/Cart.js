import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    render() {
        const { cartItems, totalPiece} = this.props;
        // const { totalPiece } = this.props;
        console.log(cartItems);
        return (
            <div>
                {cartItems.lenght === 0? (<div className="cart cart-header">Cart is empty</div>)
                : (<div className="cart cart-header">You have {cartItems.length} products in the cart{" "}</div>)
                }
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <button className="button" 
                                            onClick={() => this.props.removeFromCart(item)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !==0 &&(
                        <div calssName="cart"> 
                            <div className="total">
                                <div>
                                    {totalPiece} pieces, Total : {" "}
                                    {formatCurrency(
                                        cartItems.reduce((a,c) => a + c.price * c.count, 0)
                                    )}
                                </div>
                                <button className="button primary">
                                    Process
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
