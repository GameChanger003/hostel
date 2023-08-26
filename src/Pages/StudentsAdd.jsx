//orginal final code just commented
import React,{useState,useEffect} from 'react'
import {Row,Col,Table,Container,Form,FloatingLabel,Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from '../connection';
import { v4 as uuidv4 } from 'uuid';

const StudentAdd = () => {
    const [Regno,setRegno]=useState();
    const [Name,setName]=useState();
    const [Fname,setFname]=useState();
    const [Mname,setMname]=useState();
    const [Ystd,setYstd]=useState();
    const [Branch,setBranch]=useState();
    const [Sphn,setSphn]=useState();
    const [Phn,setPhn]=useState();
    const [Gphn,setGphn]=useState();
    const [Block,setBlock]=useState();
    const [Floor,setFloor]=useState('');
    const [Room,setRoom]=useState('');
    const [Fee,setFee]=useState();
    const[uDat,setUdat]=useState();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    async function submit() {  
    const { data, error } = await supabase
    .from('Students')
    .insert([
    {regno:Regno,name:Name,phno:Sphn,gurdian1:Fname,gurdian2:Mname,phno1:Phn,phno2:Gphn,fee:Fee,branch:Branch,created_at:Ystd},
    ])
    .select()
    if(!error){
        tst("Student Added")
    }
    else{
        dng("error")
        console.log(error)
    }
    }

    async   function uploadFile() {
        const{data}=await supabase.storage.from('images').upload(uuidv4(),imageUpload)
        if(data){
            tst("img uploaded")
        const { datas, error } = await supabase
        .storage
        .from('Images').list()
        console.log(datas)
        }
        else{
            dng("Img Failed")
        }
    }

    function tst(e) {
        toast.success(e, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }

      function dng(e) {
        toast.error(e, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }

  return (
    <div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        <br />
        <Container>
            <h1>Add Students 🏘️</h1>
            <hr />
            <Row md={2} sm={1} xs={1} xxl={2}>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Regno" className="mb-3" >
                    <Form.Control type="text" placeholder="Enter Block"  onChange={e=>setRegno(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="Leave a comment here" onChange={e=>setName(e.target.value)}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingTextarea" label="Father Name / Gurdian Name" className="mb-3">
                    <Form.Control type="text" placeholder="Leave a comment here" onChange={e=>setFname(e.target.value)}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingTextarea" label="Mother Name / Gurdain Name" className="mb-3">
                    <Form.Control type="text" placeholder="Leave a comment here" onChange={e=>setMname(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Year Of Joining" className="mb-3">
                    <Form.Control type="date" placeholder="Leave a comment here" onChange={e=>setYstd(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Branch" className="mb-3">
                    <Form.Control type="text" placeholder="Leave a comment here" onChange={e=>setBranch(e.target.value)}/>
                </FloatingLabel>
                </Col></Row><br />
                <Row>
                    <h2>Student Details☎️</h2>
                    <hr />
                </Row>
                <Row md={2} xs={1}>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Student Phone Number" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setSphn(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Parent Phone Number" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setPhn(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Guardian Phone Number" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setGphn(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Relation of Gurdian" className="mb-3">
                    <Form.Control type="text" placeholder="Leave a comment here" onChange={e=>setGphn(e.target.value)}/>
                </FloatingLabel>
                </Col>
            </Row><br />
            <h1>Room Allotment 🪴🛋️</h1>
            <hr />
            <Row>
            <Col>
                <FloatingLabel controlId="floatingTextarea" label="Block" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setBlock(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Floor" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setFloor(e.target.value)}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingTextarea" label="Room" className="mb-3">
                    <Form.Control type="number" placeholder="Leave a comment here" onChange={e=>setRoom(e.target.value)}/>
                </FloatingLabel>
                </Col>
            </Row>               
            <br />
             <h1>Additional Information ℹ️</h1>
                <hr />
            <Row md={3} sm={1}>
                <Col md={6}>
                <div className='d-inline'>
                <label for="formFileLg" className="form-label">Upload Image</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={e=>{
                    setImageUpload(e.target.files[0]);
                    }} />
                <Button className='m-2' onClick={uploadFile}>Upload Image</Button>
                </div>
                </Col>
                <Col>
                    <label for="fromimg" className='form-label'>Enter Fee</label>
                <FloatingLabel controlId="floatingTextarea" label="Fee" className="mb-3">
                    <Form.Control type="number" placeholder="Enter Fee Amount" onChange={e=>setFee(e.target.value)}/>
                </FloatingLabel>
                </Col>
            </Row>
            <Row><Col><center><Button variant='primary' onClick={submit}>Add Room</Button></center></Col></Row>
        </Container>
    </div>
  )
}

export default StudentAdd;