import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css';
import backgroundImage from '../car2.jpg'; // Import your transparent image

AOS.init();

function Login() {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.alertsReducer);

    function onFinish(values) {
        dispatch(userLogin(values));
        console.log(values);
    }

    return (
        <div>
            <div className='top-border' style={{ backgroundColor: 'black', height: '5px', width: '100%', position: 'fixed', top: 0, zIndex: 999 }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0, padding: '10px', textAlign: 'center' }}> PVR CAR RENTALS</h1>
            </div>
            <div className='login-container' style={{ position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='login'>
                    {loading && (<Spinner />)}
                    <Row gutter={16} className='d-flex align-items-center'>
                        <Col lg={24} className='text-left p-5'>
                            <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                                <h2>Login</h2>
                                <hr />
                                <Form.Item name='email' label='Email' rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                                    <Input type='password' />
                                </Form.Item>
                                <button className='btn1 mt-2'>Login</button>
                                <hr />
                                <Link to='/register'>Click Here to Register</Link>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Login;
