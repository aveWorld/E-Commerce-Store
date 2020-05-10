import React from 'react'
import CartItem from './CartItem'
export default function CartList({val}) {
    const {cart} = val
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} val={val}/>
        
            })}
        </div>
    )
}
