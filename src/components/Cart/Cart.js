import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns' //used to display every column of product added to the cart
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {val => {
                        const {cart} = val;
                        // If out cart isn't empty we will display it's content otherwise we will display empty cart
                        if(cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                     <CartColumns />
                                     <CartList val={val}/>
                                     <CartTotals val={val} history={this.props.history}/>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}
