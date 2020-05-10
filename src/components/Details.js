import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
//Details page
export default class Details extends Component {
    render() {
        return (
            // we wraps everything in Product cunsumer because of Context API
           <ProductConsumer>
               {val => {
                   const {id, company, img, info, price, title, inCart} = val.detailProduct; //getting values from context.js
                   return (
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                               </div>
                           </div>
                           {/* product info */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3">
                                   <img src={img} alt="product" className="img-fluid"/>
                               </div>
                               {/* product text */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price: <span>$</span>{price}</strong>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            {/* button from styled components ./Button.js */}
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart?true:false} //if product in cart button would be disabled
                                        onClick={() => {
                                            val.addToCart(id); //adds item to the cart
                                            val.openModal(id); // open modal window after user click add to the cart
                                        }}
                                        >
                                            {inCart?"inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                               </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
