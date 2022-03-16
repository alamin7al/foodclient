import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import useAuth from '../LoginPage/useAuth';
import img from './61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.webp'
// import { useForm } from "react-hook-form";

const PublicProfile = () => {
    const { user } = useAuth()
    const emailName = (user.email)
   
    const [about, setAbout] = useState('');
    const [number, setNumber] = useState('');
    const [country, setCountry] = useState('');
    const [web, setWeb] = useState()

    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('about', about);
        formData.append('country', country);
        formData.append('web', web);
        formData.append('number', number);
        formData.append('image', image);
        formData.append('email', emailName);

        console.log(formData);
        fetch('http://localhost:5000/formdatas', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <Card style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className='w-50' alt="" />
                        <h3>Basic Information</h3>
                        <hr className='ms-2' />
                    </div>
                    <div className="col-md-6">
                        <div className='text-start '>
                            <div className="mt-4">
                                <h2>Public Profile</h2>
                                <p>People visiting your profile will see the following info
                                </p>
                                <div>
                                    <h5>Name- <em> {user.displayName}</em>  </h5>
                                    <h5>Email- <em>{user.email}</em>       </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <form  onSubmit={handleSubmit} className='text-start'>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        accept="image/*"
                    />

                    <Form.Group className="mb-2" >
                        <Form.Label>Country</Form.Label>
                        <Form.Control onChange={e => setCountry(e.target.value)} placeholder="Country" />
                    </Form.Group>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">About</label>
                        <textarea onChange={e => setAbout(e.target.value)} placeholder='Tell  Your Story' class="form-control rounded " id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Form.Group className="mb-2" >
                        <Form.Label>Number</Form.Label>
                        <Form.Control onChange={e => setNumber(e.target.value)} placeholder="telephoneNumber" />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Label>Website</Form.Label>
                        <Form.Control onChange={e => setWeb(e.target.value)} placeholder="Website Link" />
                    </Form.Group>
                    <button className='btns' type='submit'>Submit</button>
                </form>
            </Card>
        </div>
    );
};

export default PublicProfile;