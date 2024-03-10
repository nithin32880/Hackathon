import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Login() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)

 }
    return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                <h1> <b>PVR Car Rentals </b></h1>
                    <img 
                    className='w-100'
                    data-aos='slide-left'
                    data-aos-duration='1500'
                    src="data:image/jpeg;base64,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"/>
                   
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                         <h1>Login</h1>
                         <hr />
                         <Form.Item name='email' label='email' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2'>Login</button>

                         <hr />

                         <Link to='/register'>Click Here to Register</Link>
                       

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default Login