import React , {useRef,useState}from 'react'
import { Form,Button,Card, Alert } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error,setError] = useState('')
    const[loading,setLoading] = useState('')
    const[message,setMessage] = useState('')
    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further Instructions')
        }
        catch{
            setError('Failed to reset')
        }
        setLoading(false)
        
    }


    return (
        <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight : "100vh"}}>
        <div 
        className="w-100" style={{maxWidth : "400px"}}>
            <Card className="text-left font-medium">
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        
                        <Button disabled={loading} className="w-100 mt-3 " type="submit">
                        Reset Password
                        </Button>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               Need an account?<Link to='/signup'>Signup</Link>
            </div>
        </div>
        </Container>
    )
}

export default ForgotPassword
