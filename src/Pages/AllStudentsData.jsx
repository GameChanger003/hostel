import React,{useState,useEffect} from 'react'
import {supabase} from '../connection'
import{Card,Button,Row,Col,Container,FloatingLabel,Form,Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Reveal from 'react-reveal/Reveal';

const AllStudentsData = () => {
    const [Data, setData] = useState([])
    const [Regno,setRegno]=useState('');
    const [Name,setName]=useState('');
    const [Fname,setFname]=useState('');
    const [Mname,setMname]=useState('');
    const [Ystd,setYstd]=useState('');
    const [Branch,setBranch]=useState('');
    const [Sphn,setSphn]=useState();
    const [Phn,setPhn]=useState();
    const [Gphn,setGphn]=useState();
    const [Block,setBlock]=useState('');
    const [Floor,setFloor]=useState('');
    const [Room,setRoom]=useState('');
    const [Fee,setFee]=useState();
    const [Chg,setChg]=useState(false);
    const [Id, setId] = useState();
    const [uData,setuData]=useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [imgd,setimgd]=useState();
    const [dsb,setdsb]=useState(true)
    const [bgp,setbgp]=useState()
    const [adhr,setadhr]=useState()


    function Edit() {
  
        setBlock('')
        setFname('')
        setBranch('')
        setGphn('')
        setMname('')
        setName('')
        setRegno('')
        setRoom('')
        setFee('')
        setChg(false)
    }

    function tst(e) {
        toast.warning(e, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      
    useEffect(() => {
       fet()
      }, [])

      async function fet() {
        const {data} = await supabase
        .from('Students')
        .select('*')
        setData(data)
        console.log(data)
      }
      // https://jfrtzgcmlyhlamqazwmx.supabase.co/storage/v1/object/public/images/students/549130af-d285-4716-94d1-ec371b2a7c61?t=2023-09-28T07%3A03%3A05.367Z

       function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Student Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row md={3} xs={1} className='g-3'>
                <Col>
                <FloatingLabel controlId="floatingPassword" label="Regno">
                  <Form.Control type="text" placeholder="Password" value={Id} onChange={e=>setId(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingPassword" label="Name">
                  <Form.Control type="text" placeholder="Password" value={Name} onChange={e=>setName(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Student phone number">
                  <Form.Control type="number" placeholder="Password" value={Sphn} onChange={e=>setSphn(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Gurdian-1">
                  <Form.Control type="text" placeholder="Password" value={Fname} onChange={e=>setFname(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Gurdian-2">
                  <Form.Control type="text" placeholder="Password" value={Mname} onChange={e=>setMname(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Phone number-1">
                  <Form.Control type="text" placeholder="Password" value={Phn} onChange={e=>setPhn(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Phone Number-2">
                  <Form.Control type="text" placeholder="Password" value={Gphn} onChange={e=>setGphn(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Branch">
                  <Form.Control type="text" placeholder="Password" value={Branch} onChange={e=>setBranch(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Blood Group">
                  <Form.Control type="text" placeholder="Password" value={bgp} onChange={e=>setbgp(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col><Col>
                <FloatingLabel controlId="floatingPassword" label="Aadhar Number">
                  <Form.Control type="text" placeholder="Password" value={adhr} onChange={e=>setadhr(e.target.value)} disabled={dsb}/>
                </FloatingLabel>
                </Col>
                <Col>
                <div class="md-3">
                  <label for="formFile" class="form-label">Student Image</label>
                  <input class="form-control" type="file" id="formFile"/>
                </div>
                </Col>
                <Col>
                <img src={'https://jfrtzgcmlyhlamqazwmx.supabase.co/storage/v1/object/public/images/students/'+Id} height={100} width={100}/>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={e=>setdsb(!dsb)} variant='outline-info'>Edit</Button>
              <Button onClick={props.onHide} variant='outline-warning'>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  
  return (
    <div>
         <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <Container>
            <br />
         <Row md={2} xs={1} sm={1} lg={3} xl={4}>
       {Data.map(e=>
       <Col md={3}><Card style={{ width: '18rem',marginLeft:'1rem' }} key={e.id}>
       <Card.Img variant="top" src={'https://jfrtzgcmlyhlamqazwmx.supabase.co/storage/v1/object/public/images/students/'+e.regno}/>
       <Card.Body>
         <Card.Title>{e.regno}</Card.Title>
         <Card.Text>
          Name: {e.name} <br />
          Branch: {e.branch} <br />
          Block: {e.Block} <br />
          Room No: {e.Room} <br />
          Phone No: {e.phno}   <br />
          Parent No: {e.phno1} <br />
         </Card.Text>
         <Button variant="outline-info" onClick={()=>{
            setId(e.regno)
            setBlock(e.Block)
            setBranch(e.branch)
            setFee(e.fee)
            setFname(e.gurdian1)
            setGphn(e.phno2)
            setMname(e.gurdian2)
            setName(e.name)
            setPhn(e.phno1)
            setRoom(e.Room)
            setSphn(e.phno)
            setYstd(e.Ystd)
            setFloor(e.floor)
            setRoom(e.room)
            setadhr(e.aadhar)
            setbgp(e.blood_grp)
            setModalShow(true)
            // info();
            // setChg(true)
        }}
         >View Data</Button>&nbsp;&nbsp;&nbsp;
           <Button variant='outline-danger' onClick={()=>{
            setBlock(e.data.Block)
            setFloor(e.data.Floor)
            setRoom(e.data.Room)
            setRegno(e.id)
            Del()
            }}>Delete Student</Button> 
       </Card.Body>
     </Card> <br /></Col>
        )}
        </Row>       
        </Container>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default AllStudentsData