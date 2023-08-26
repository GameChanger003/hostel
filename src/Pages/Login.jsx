import React,{useState} from 'react'
import { supabase } from '../connection'
import {FloatingLabel,Form,Row,Col,Button,Alert,Toast,Container} from 'react-bootstrap'
import hst from "../assets/hst.gif";
import Logo from '../assets/logo.jpg'
import { useNavigate } from "react-router-dom";

const Login = ({settoken}) => {
    let nav=useNavigate();
    const [user,setUser]=useState();
    const [number,setNumber]=useState();
    const [error,seterror]=useState();
    const [load,setLoad]=useState(false);

    async function submit() {
        try{

            const { data, err } = await supabase.auth.signInWithPassword({
                email:user,
                password:number,
            })

            if (err){
                seterror(err)
            }
            console.log(data)
            if (data.session){
                settoken(data)
                nav('/home')}
            else{
                seterror("Check UserName/Password")
            }
        }
        catch(err){
            seterror(err)
        }
      }
      

  return (
    <div>
       <div className='p-5'>
    <div  style={{overflow:'-moz-hidden-unscrollable',border:'0px solid black'}}>
        <Row md={2}>
            <Col md={6}>
            {/* <div style={{ backgroundImage:`url(${hst})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",}}> */}
            <img src={hst} alt="Img" className="d-block w-100" style={{height:'80%',objectFit:'contain'}}/>
            {/* <div style={{
                paddingTop:'35%',
                paddingLeft:'20px'
            }} >
               <h1 style={{color:'#E4DCCF'}}><span style={{fontSize:'90px'}}> R.V.R & J.C, </span> <br /> Dormitory Manager</h1>
            </div>
                </div> */}
            </Col>
            <Col md={5} style={{}}>
                <Container className='p-3'>
                <center><img src={Logo} alt="" height='150px'/></center>
                <center><h1 style={{color:'#2E4F4F'}}>R.V.R & J.C<br />Dormitory Manager</h1></center><br />
                <h2 style={{color:'#0E8388'}}>Login</h2>
                <hr/>
                <p className=''>Welcome back, please login to get started!</p>
                {/* <br /> */}
             <Col md={10}>{error && <Alert variant={'danger'}>{error}</Alert> }</Col>
                <Row>
            <Col md={10}>
                <FloatingLabel controlId="floatingInputGrid" label="User Name">
                <Form.Control type="email" placeholder="name@example.com" value={user} onChange={e=>setUser(e.target.value)} style={{backgroundcolor:"transperent"}} required/>
                </FloatingLabel>
            </Col>
            </Row>
            <br />
             <Row>
            <Col md={10}>
                <FloatingLabel controlId="floatingInputGrid" label="Passcode">
                <Form.Control type="password" placeholder="name@example.com" value={number} onChange={e=>setNumber(e.target.value)} required/>
                </FloatingLabel>
            </Col>
        </Row>
        <br />
        <Button onClick={submit}>Login</Button>
        </Container>
            </Col>
        </Row>
    </div>
</div>
    </div>
  )
}

export default Login