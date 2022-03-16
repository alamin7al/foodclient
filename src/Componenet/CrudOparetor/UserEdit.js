import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams()
    const [single, setSingle] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/table/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [id])

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/table/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 0) {
                    alert('update')
                }
            })
    }

    return (
        <div class=" register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p className='text-white'>You are 30 seconds away from earning your own money!</p>
                    <input type="submit" name="" value="Privious" /><br />
                </div>
                <div class="col-md-9 register-right">
                  
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Apply as a Employee</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        {
                                            single.name && <div class="form-group mb-2">
                                                <input defaultValue={single.name}  {...register("name")} type="text" class="form-control" placeholder=" Name *" />
                                            </div>
                                        }

                                        {
                                            single.phone && <div class="form-group mb-2">
                                                <input defaultValue={single.phone} {...register("phone")} class="form-control" placeholder="Phone *" />
                                            </div>
                                        }

                                        {
                                            single.gender && <div class="form-group mb-2">

                                                <div class="form-group mb-2">
                                                    <select    {...register("gender")} class="form-control">
                                                        <option  >{single.gender}</option>
                                                        <option value="male"  >male</option>

                                                        <option value="female ">female</option>
                                                        <option value="other"  >Other</option>

                                                    </select>
                                                </div>


                                            </div>
                                        }
                                    </div>
                                    <div class="col-md-6">

                                        {single.email && <div class="form-group mb-2">
                                            <input defaultValue={single.email}  {...register("email")} type="email" class="form-control" placeholder=" Email *" />
                                        </div>}


                                        {
                                            single.date && <div class="form-group mb-2">
                                                <input defaultValue={single.date}  {...register("date")} type="date" class="form-control" placeholder=" Date *" />
                                            </div>
                                        }

                                        {
                                            single.title && <div class="form-group mb-2">
                                                <select    {...register("title")} class="form-control">
                                                    <option >{single.title}</option>
                                                    <option value=" Web Developer">  Web Developer  </option>
                                                    <option value=" Web Design " >  Web Design  </option>
                                                    <option value="Full Stack Developer " >  Full Stack Developer  </option>

                                                    <option value="Graphics Designer " >  Graphics Designer  </option>
                                                    <option value="Content Writter" >  Content Writter </option>
                                                </select>
                                            </div>
                                        }

                                        <input type="submit" class="btnRegister" value="Update" />
                                    </div>
                                </div>
                            </form>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserEdit;