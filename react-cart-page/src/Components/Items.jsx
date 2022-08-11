import React from 'react'
const Items = ({description,title,img,price,amount}) => {
  return (
  <>
    <div className='items-info'>
          <div className='product-img'>
              <img src={img} alt="error"></img>
          </div>
          <div className='title'>
              <h2>{title}</h2>
              <p>{description}</p>
          </div>
<div className="add-minus-quantity">
              <p className="minus">-</p>
              <input type="text" placeholder='2'/>
              <p className='add'>+</p>
          </div>

          <div className='price'>
              <h3>{price}</h3>
          </div>
      </div>
      
      <hr/>
  </>

  )
}

export default Items