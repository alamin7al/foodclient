import React from 'react';
import './AddUse.css'
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/table`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('data recived')
                }
            })
    };
    return (


        <div class=" register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p className='text-white'>You are 30 seconds away from earning your own money!</p>
                    <input type="submit" name="" value="Show User" /><br />
                </div>
                <div class="col-md-9 register-right">
                   
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Apply as a Employee</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group mb-2">
                                            <input  {...register("name")} type="text" class="form-control" placeholder=" Name *" />
                                        </div>

                                        <div class="form-group mb-2">
                                            <input  {...register("phone")} class="form-control" placeholder="Phone *" />
                                        </div>

                                        <div class="form-group mb-2">

                                            <div class="form-group mb-2">
                                                <select  {...register("gender")} class="form-control">
                                                    <option  >Gender</option>
                                                    <option value="male"  >male</option>

                                                    <option value="female ">female</option>
                                                    <option value="other"  >Other</option>

                                                </select>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                        <div class="form-group mb-2">
                                            <input  {...register("email")} type="email" class="form-control" placeholder=" Email *" />
                                        </div>


                                        <div class="form-group mb-2">
                                            <input  {...register("date")} type="date" class="form-control ms-2" placeholder=" Date *" />
                                        </div>

                                        <div class="form-group mb-2">
                                            <select  {...register("title")} class="form-control">
                                                <option >Please select your  Title</option>
                                                <option value=" Web Developer">  Web Developer  </option>
                                                <option value=" Web Design " >  Web Design  </option>
                                                <option value="Full Stack Developer " >  Full Stack Developer  </option>

                                                <option value="Graphics Designer " >  Graphics Designer  </option>
                                                <option value="Content Writter" >  Content Writter </option>
                                            </select>
                                        </div>

                                        <input type="submit" class="btnRegister" value="Submit" />
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

export default AddUser;