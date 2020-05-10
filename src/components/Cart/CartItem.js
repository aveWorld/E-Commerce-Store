import React from 'react'
// It's component used to display product added to the cart
export default function CartItem({item,val}) {
    const {id,title,img,price,total,count} = item
    const {increment, decrement, removeItem} = val
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: "5rem",height:"5rem"}}  className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <span className="d-lg-none">product : </span>
                 {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <span className="d-lg-none">price : </span>
                 {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        {/* if user click this button amount of product will be decreased */}
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        {/* if user click this button amount of product will be increased */}
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {/* if user click this, product he clicked would be removed from the cart */}
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
    )
}
