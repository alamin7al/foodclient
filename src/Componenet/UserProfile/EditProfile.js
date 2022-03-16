import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import img from './61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.webp'
import {
    Link,
    useParams
} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAuth from '../LoginPage/useAuth';
const EditProfile = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = `http://localhost:5000/editprofile/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                setLoading(false)
            })
    }, [id,update,loading])
    const { user } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/singleupdate/${id}`
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
                    alert('updated SuccessFully')
                  
                }
            })
    };
    if (loading) {
        return (

            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>


            </>
        )
    }


    return (
        <div className='container'>
           
            <div>
                <Card style={{ width: '100%' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ width: '250px', height: '200px' }} className='my-3 rounded-circle ms-5' src={`data:image/png;base64,${update.image}`} alt="" />
                            <h3>Basic Information</h3>
                            <hr className='ms-2' />
                        </div>
                        <div className="col-md-6">
                            <div className='text-start '>
                                <div className="mt-4">
                                    <h2> Profile Data</h2>
                                    <p>People visiting your profile will see the following info
                                    </p>
                                    <div>
                                        <h5>Name- <em> {user.displayName}</em>  </h5>
                                        <h5>Email- <em>{user.email}</em>       </h5>
                                    </div>
                                </div>
                            </div>
                            <Link className='btns mt-5' to='/profile'>
                Preveious Step
            </Link>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9 ">
                            <div className="">
                                <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)} className='text-start '>
                                    
                                    {/* image number web country about  */}
                                    <Form.Group className="mb-2" >
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control defaultValue={update.country} {...register("country")} placeholder="Country" />
                                    </Form.Group>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">About</label>
                                        <textarea defaultValue={update.about} {...register("about")} placeholder='Tell  Your Story' class="form-control rounded " id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <Form.Group className="mb-2" >
                                        <Form.Label>Number</Form.Label>
                                        <Form.Control defaultValue={update.number} {...register("number")} placeholder="telephoneNumber" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" >
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control defaultValue={update.web} {...register("web")} placeholder="Website Link" />
                                    </Form.Group>
                                    <button className='btns' type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default EditProfile;