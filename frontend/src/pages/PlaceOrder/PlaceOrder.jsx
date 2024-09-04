// import React, { useEffect, useState } from 'react'
// import './PlaceOrder.css'
// import { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const PlaceOrder = () => {

//   const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

//   const [data,setData] = useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     street:"",
//     city:"",
//     state:"",
//     zipcode:"",
//     country:"",
//     phone:""
//   })

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data=>({...data,[name]:value}))
//   }

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     let orderItems = [];
//     food_list.map((item)=>{
//       if (cartItems[item._id]>0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo)
//       }
//     })
//     let orderData = {
//       address:data,
//       items:orderItems,
//       amount:getTotalCartAmount()+2,
//     }
//     let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
//     if (response.data.success){
//       const {session_url} = response.data;
//       window.location.replace(session_url);
//     }
//     else{
//       alert("Error");
//     }
//   }

//   const navigate = useNavigate();

//   useEffect(()=>{
//     if (!token){
//       navigate('/cart')
//     }
//     else if(getTotalCartAmount()===0)
//     {
//       navigate('/cart')
//     }
//   },[token])


//   return (
//     <form onSubmit={placeOrder} className='place-order'>
//       <div className="place-order-left">
//       <p className="title">Delivery Information</p>
//         <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
//         <input required name='lastName'onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
//         <input className='emaill' required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
//         <input className='streett' required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
//         <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
//         <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
//         <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
//         <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
//         <input className='phonee' required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
//       </div>
//       <div className="place-order-right">
//       <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//           <div className="cart-total-details">
//                 <p>Subtotal</p>
//                 <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr/>
//             <div className="cart-total-details">
//                 <p>Delivery Fee</p>
//                 <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr/>
//             <div className="cart-total-details">
//                 <b>Total</b>
//                 <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//             </div>
//           </div>
    
//           <button type='submit'>PROCEED TO PAYMENT</button>
          
//         </div>
//       </div>
//     </form>
//   )
// }

// export default PlaceOrder


import React, { useEffect, useState } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery'); 

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onPaymentMethodChange = (event) => {
    if(event.target.value==='online') alert("We currently only accept cash on delivery.");
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
      paymentMethod: paymentMethod 
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (response.data.success) {
      if (paymentMethod === 'cashOnDelivery') {
        alert("Order placed successfully! Please pay the delivery person upon receipt.");
        navigate('/confirmation');
      } else {
        const { session_url } = response.data;
        window.location.replace(session_url);
      }
    } else {
      alert("Order Confirm");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        <input className='emaill' required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input className='streett' required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
        <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
        <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        <input className='phonee' required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <label>
              <input type="radio" value="cashOnDelivery" className='paymentMethod' checked={paymentMethod === 'cashOnDelivery'} onChange={onPaymentMethodChange} />
              Cash on Delivery
            </label>
            <label>
              <input className='paymentMethod' type="radio" value="online" checked={paymentMethod === 'online'} onChange={onPaymentMethodChange} />
              Online Payment
            </label>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
