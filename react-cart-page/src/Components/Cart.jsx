import React, { useState } from 'react'
import "./Card.css"
import Items from './Items';
import {products} from "./Product"
const Cart = () => {
const[item,setitem]=useState(products);
  return (
    <>
    <header>
        <div className='continue-shopping'>
            <h3>Continue Shoping</h3>
        </div>
    </header>
    <section>
        <h1>Shoping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>7</span> items in shpoing cart</p>
      <div className="cart-items">
          <div className='cart-items-container'>
    {
        item.map((curItem) =>{
        return <Items key={curItem.id} {...curItem}/>
        })
    }
<div className='card-total'>
          <h3>cart <span>Total:22222000rs</span></h3>
          <button>CheckOut</button>
      </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Cart