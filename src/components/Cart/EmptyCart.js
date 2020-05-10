import React from 'react'
// It's component to display empty cart
export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your Cart is currently empty</h1>
                </div>
            </div>
        </div>
    )
}
