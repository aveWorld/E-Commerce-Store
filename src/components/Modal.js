import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom'; 
// It's component for Modal window
export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {val => {
                   const {modalOpen,closeModal} = val;
                   const {img, title, price} = val.modalProduct;

                   if(!modalOpen) {
                       return null; //if our modal window is currently empry we shouldn't do anything so we return null
                   }
                   else {
                       return (
                       <ModalContainer> 
                           {/* ModalContainer is styled components element */}
                           <div className="container">
                               <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>item added to the cart</h5>
                                        <img src={img}  className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <Link to="/">
                                        {/* when user click back to shoping we route him back to products and close the modal window */}
                                        <ButtonContainer onClick={() => closeModal()}>
                                        store
                                        </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                        <ButtonContainer cart onClick={() => closeModal()}>
                                        go to cart
                                        </ButtonContainer>
                                        </Link>
                                    </div>
                               </div>
                           </div>
                       </ModalContainer>
                       )
                   }
               }}
           </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items:center;
    #modal {
        background: var(--mainWhite)
    }
`
