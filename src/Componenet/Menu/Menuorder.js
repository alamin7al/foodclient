import React, { useEffect, useState } from 'react';
import useAuth from '../LoginPage/useAuth';
import './menu.css'
const Menuorder = () => {
    const { user } = useAuth()
    const [singleOrder, setSingleorder] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orderplace?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleorder(data))
    }, [user.email])

    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`http://localhost:5000/singleemail/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = singleOrder.filter(x => x._id !== id)
                        setSingleorder(rstrongainignData)
                    }

                })
        }
    
    }




    return (
        <div className='my-5'>
            {singleOrder.map((menuItem) => {
                const { email, productName, image, price, phone,_id, name, city } = menuItem;
                return (
                    <article className='menu-item'>
                        <img src={image} alt={name} className='photo' />
                        <div className='item-info'>
                            <header>

                                <h4>{name}</h4>

                                <h4 className='price'>${city}</h4>
                            </header>
                            <h4 className='price'>Food Name:  {productName}</h4>
                            <h4 className='price'>Price:  {price}</h4>

                            <p className='item-text'>{phone}</p>
                            <p className='item-text'>{email} </p>
                            <div className='text-start my-3'>

                                <button className='button-8 m-0 px-5 '>Pay</button>
                                <button  onClick={() => handleDeleted(_id)} style={{ backgroundColor: '#e62143' }} className='button-8 m-0 px-5 text-white ms-3'>Delete</button>

                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menuorder;