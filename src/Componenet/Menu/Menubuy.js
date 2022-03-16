
import { useState } from "react";
import { useForm, } from "react-hook-form";
import {
    useParams

} from "react-router-dom";
import useAuth from "../LoginPage/useAuth";

const Menubuy = ({ menu }) => {
    const { ids } = useParams()
    const { user } = useAuth()
    const cheap = menu.filter(p => p.id == ids)



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/orderplace', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

                // history.push(redirect);

            })


    };
    return (
        <div className='mx-4 my-5'>
            <div className="row">
                <div className="col-md-6">
                    {
                        cheap.map(s => <article className='menu-item'>
                            <img src={s.img} alt={s.title} className='photo' />
                            <div className='item-info'>
                                <header>

                                    <h4>{s.title}</h4>

                                    <h4 className='price'>${s.price}</h4>
                                </header>
                                <p className='item-text fs-5'>{s.desc}</p>
                                <h4 className='price mt-3 fs-4'>Price ${s.price}</h4>


                            </div>
                        </article>)
                    }
                </div>
                <div className="col-md-6">
                    <form className="shipping-form w-75 mx-auto sh p-4" onSubmit={handleSubmit(onSubmit)}>

                        {
                            user.displayName && <div className=" text-start">
                                <label for="exampleInputEmail1" className="form-label">User Name</label>
                                <input defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        }
                        {
                            user.email && <div className=" text-start">
                                <label for="exampleInputPassword1" className="form-label">User Email</label>
                                <input defaultValue={user.email} {...register("email", { required: true })} className="form-control" id="exampleInputPassword1" />
                            </div>
                        }

                        {errors.email && <span className="error">This field is required</span>}

                        {
                            cheap.map(ch => <div className=" text-start">
                                <label for="exampleInputPassword1" className="form-label">Image Src</label>
                                <input defaultValue={ch.img} {...register("image")} className="form-control" id="exampleInputPassword1" />

                            </div>)
                        }
                        {
                            cheap.map(ch => <div className=" text-start">
                                <label for="exampleInputPassword1" className="form-label">Product name</label>
                                <input defaultValue={ch.title} placeholder="Address"  {...register("productName")} className="form-control" id="exampleInputPassword1" />

                            </div>)
                        }
                        {
                            cheap.map(ch => <div className=" text-start">
                                <label for="exampleInputPassword1" className="form-label">Price </label>
                                <input defaultValue={ch.price} placeholder="Address"  {...register("price")} className="form-control" id="exampleInputPassword1" />

                            </div>)
                        }

                        <div className=" text-start">

                            <label for="exampleInputPassword1" className="form-label">City Name</label>
                            <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className=" text-start">
                            <label for="exampleInputPassword1" className="form-label">Number</label>
                            <input placeholder="phone number" {...register("phone")} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btns">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Menubuy;