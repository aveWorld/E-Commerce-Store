import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'
// It's component used to display total amount of money user needs to pay
export default function CartTotals({val,history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = val
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                {/* this button clear the cart */}
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                    clear cart 
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                subtotal : <strong>$ {cartSubTotal}</strong>
                                </span>
                            </h5>
                            <h5>
                                <span className="text-title">
                                tax : <strong>$ {cartTax}</strong>
                                </span>
                            </h5>
                            <h5>
                                <span className="text-title">
                                total : <strong>$ {cartTotal}</strong>
                                </span>
                            </h5>
                            {/* this button will redirect user to paypal to pay, and then he will be come back when operation ends  */}
                            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}
