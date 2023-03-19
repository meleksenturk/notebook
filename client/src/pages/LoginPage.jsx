import React from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { Link } from 'react-router-dom'
const LoginPage = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center h-full '>
                <div className='md:px-20 px-10 mt-10 flex flex-col h-full md:w-[600px] w-300'>
                    <div className='ml-12 md:w-[600px] mb-12 '>
                        <img width={300} height={300} src="images/mosn2.PNG" />
                    </div>


                    <Form layout='vertical' >
                        <Form.Item label="E-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "Bu alan zorunlu",
                                },
                            ]}>
                            <Input.Password />

                        </Form.Item>
                        <Form.Item label="Şifre"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Bu alan zorunlu",
                                },
                            ]}>
                            <Input.Password />

                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className='flex justify-between items-center'>
                                <Checkbox>Remember Me</Checkbox>
                                <Link>Forgot Password</Link>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='w-full' size="large">Giriş</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full '>
                        Bir hesabınız yok mu? &nbsp; <Link to="/register"><span className='text-blue-600 font-bold text-m'>Şimdi hesap oluştur</span></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginPage