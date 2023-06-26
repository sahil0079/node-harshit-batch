import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {

    const [login, setLogin] = useState(false);
    return (
        <div>
            <h2>Login</h2>
            <Form>
                {/* email */}
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter Email' />
                </Form.Group>
                {/* password */}
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter Password' />
                </Form.Group>
                <Button variant='primary' type='submit'>Login</Button>

                {
                    login ? (
                        <p className='text-success'>You are Logged in successfully</p>
                    ) : (
                        <p className='text-danger'>You are not logged in </p>
                    )
                }
            </Form>
        </div>
    )
}

export default Login