// import React,{useState,useEffect} from 'react'
// import {Card,Row,Col,Form,FloatingLabel,Container,Button,Modal,Nav,Alert} from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import room from "../assets/room.gif";
// import {supabase} from '../connection'
// const AddRooms = () => {
//   const [Block,setBlock]=useState();
//   const [chg, setchg] = useState(true);

//     const [Floor,setFloor]=useState();
//     const [Room,setRoom]=useState();
//     const [Cap,setCap]=useState();
//     const [Data,setData]=useState();
//     const [uData,setUdata]=useState([]);
//     const [modalShow, setModalShow] = useState(false);
//     let id=Block+Floor+Room

//     useEffect(() => {
//       fetchUsers()
//     }, [])
  
//     async function fetchUsers(){
//       const {data} = await supabase
//         .from('rooms')
//         .select('*')
//         setData(data)
//     }

//     async function deleteUser(userId){

//       const { data, error } = await supabase
//         .from('rooms')
//         .delete()
//         .eq('id', userId)
  
//       fetchUsers()
//       if (error){
//         console.log(error)
//       }
  
//       if (data){
//         console.log(data)
//       }
//     }

//     async function info(e) {
//       const {data} = await supabase
//         .from('rooms')
//         .select('*').eq('id',e)
//         console.log(data)
//         setUdata(data[0])
//     }

//     async function addRoom() {
//       if (id in Data.id) {
//         const {sts,err}=await supabase.from('rooms').insert({id:id,Block:Block,Floor:Floor,Room:Room,Cap:Cap}).select('*')
//         if(!err){
//           tst('Success')
//         }
//       } else {
//         dng('Room Existed')
//       }
//     }

//     function tst(e) {
//       toast.success(e, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
//     }
//     function dng(e) {
//       toast.error(e, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
//     }

//     function MyVerticallyCenteredModal(props) {
//       return (
//         <Modal
//           {...props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//            <h3>Room Information</h3>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h5> Block: {uData.Block}  || Floor: {uData.Floor} || Room: {uData.Room}</h5>
//             <hr width='50%'/>
//             <h6> Capacity: {uData.Cap}  || 
//              Vacency: {uData.Vac}</h6> <br />
//             <h5>Room Mates:</h5>
//             <hr/>
//             <p>
// testing
//             </p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       );
//     }    

//   return (
//     <div>
// <div className=' m-5'>
//        <ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       />
//     <Container className=''>
//     <Nav fill   variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link eventKey="#" onClick={()=>{setchg(true)}}>Add Rooms</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="#1" onClick={()=>{setchg(false)}}>View Rooms</Nav.Link>
//       </Nav.Item>
//     </Nav>
//       {chg ?<>
//         <Container className='p-5'>
//     <div>
//     <h1>Add Rooms 🚪</h1>
//         <hr width='50%'/>
//         <Row md={2} className="justify-content-sm-center">
//           <Col md={6}>
//         <FloatingLabel controlId="floatingPassword" label="Block" className='m-2'>
//         <Form.Control type="number" placeholder="Block" value={Block} onChange={e=>setBlock(e.target.value)}/>
//       </FloatingLabel>
//         <FloatingLabel controlId="floatingPassword" label="Floor" className='m-2'> 
//         <Form.Control type="number" placeholder="Password" value={Floor} onChange={e=>setFloor(e.target.value.toString())}/>
//       </FloatingLabel>
//         {/* <br /> */}
//         <FloatingLabel controlId="floatingPassword" label="Room" className='m-2'>
//         <Form.Control type="number" placeholder="Password" value={Room} onChange={e=>setRoom(e.target.value.toString())}/>
//       </FloatingLabel>

//         <FloatingLabel controlId="floatingPassword" label="Capacity" className='m-2'>
//         <Form.Control type="number" placeholder="Password" value={Cap} onChange={e=>setCap(e.target.value.toString())}/>
//       </FloatingLabel> <br />
//       <Alert variant='warning'>Note: If Room Alredy Exist the System Will Re-Write It</Alert>
//       </Col>
//       <Col><img src={room} alt="" style={{height:'50vh',width:'100%'}}/></Col>
//       </Row>
//       {/* <br /> */}
//       {/* <center>  <Button onClick={chkref}>Add room</Button></center> */}
//       {/* <center>  <Button onClick={s}>Create</Button></center> */}
//       <center>  <Button onClick={addRoom}>Create</Button></center>

//     </div></Container>
//       </>:<>
//       <Row md={3} xs={1} sm={1} className="m-4">
//        {Data.map(e=>
//        <Col key={e.id}><Card border="warning" style={{ width: '20rem',marginRight:'1rem' }} md={6} xs={12}>
//        <Card.Header style={{backgroundColor:'#F7ECDE'}}>Block: {e.Block}</Card.Header>
//        <Card.Body>
//          <Card.Title>Room No: {e.Room}</Card.Title>
//          <Card.Text>
//            Floor : {e.Floor} <br /> 
//            Capacity : {e.Cap} <br />
//            <br />
//            <Button variant='outline-warning'  onClick={() => {  
//              info(e.id)
//              setModalShow(true)
//           }}>Visit Room</Button> &nbsp;&nbsp;&nbsp;
//            {/* <Button variant='outline-info' onClick={(e)=>{
//             setId(e.id)
//             setCap(e.data.Cap)
//             setFloor(e.data.Floor)
//             setRoom(e.data.Room)

//            }}>Edit Room</Button>&nbsp;&nbsp;&nbsp; */}
//            <Button variant='outline-danger' onClick={()=>{
//             deleteUser(e.id)
//             console.log(e.id)
//             }}>Delete Room</Button>
//          </Card.Text>
//        </Card.Body>
//      </Card> <br /></Col>
//         )}
//         </Row>
//       </>}
//     </Container>
//     <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//     </div>
//   )
// }

// export default AddRooms;

import { addDoc, collection, doc,getDocs,deleteDoc,getDoc,where, query,onSnapshot ,setDoc} from 'firebase/firestore';
import React,{useState,useEffect} from 'react'
import { DataBase, RealtimeDB } from '../FirebaseInit';
import {Card,Row,Col,Form,FloatingLabel,Container,Button,Modal,Nav,Alert} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import room from "../img/room.gif";
import { child, get, ref,set } from 'firebase/database';


const RoomTest = () => {
    const [Block,setBlock]=useState('');
  const [chg, setchg] = useState(true);

    const [Floor,setFloor]=useState('');
    const [Room,setRoom]=useState('');
    const [Cap,setCap]=useState();
    const [Data,setData]=useState();
    const [uData,setUdata]=useState(null);
    const colref=collection(DataBase,'Rooms');
    const [modalShow, setModalShow] = useState(false);
    let id=Block+Floor+Room

    async function submit(e){
      e.preventDefault();
      const refs="Rooms/"
      set(ref(RealtimeDB,refs+id),{Block,Floor,Room,Cap:parseInt(Cap),Vac:parseInt(Cap)})
      .then(tst('Saved Successfully'))
      .catch(e=>tst(e))
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

    //Room Info
    async function info(id) {
      const docRef = doc(DataBase, "Rooms",id);
      const docSnap = await getDoc(docRef);
      setUdata(docSnap.data());
      }

    function Del(id) {
      const delref=doc(DataBase,'Rooms',id)
      deleteDoc(delref)
      .then(e=>{
        dng('Room Deleted')
        roomdata()
      })
      .catch(err=>console.log(err.message))
     }

     //getData For Rooms
     useEffect(() => {
       return async() => {
        roomdata()
       }
     }, [])

    async function roomdata() {
      const snapshot = await get(ref(RealtimeDB, 'Rooms/'));
      if (snapshot.exists()) {
        const roomData = snapshot.val();
        
        // Convert the object to an array of room data objects
        const rooms = Object.keys(roomData).map(key => ({
          id: key,
          data: roomData[key]
        }));
    
        setData(rooms);
      } else {
        setData([]);  // If no data exists, set an empty array
      }
    }
    
     
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
           <h3>Room Information</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5> Block: {uData?.Block}  || Floor: {uData?.Floor} || Room: {uData?.Room}</h5>
            <hr width='50%'/>
            <h6> Capacity: {uData?.Cap}  || 
             Vacency: {uData?.Vac}</h6> <br />
            <h5>Room Mates:</h5>
            <hr/>
            <p>
        
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }    

    const handleroom=(e)=>{
        setUdata(e.data); 
        setModalShow(true); 
    }

  return (
<div className=' m-5'>
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
    <Container className=''>
    <Nav fill   variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="#" onClick={()=>{setchg(true)}}>Add Rooms</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#1" onClick={()=>{setchg(false)}}>View Rooms</Nav.Link>
      </Nav.Item>
    </Nav>
      {chg ?<>
        <Container className='p-5'>
    <div>
    <h1>Add Rooms 🚪</h1>
        <hr width='50%'/>
        <Row md={2} className="justify-content-sm-center">
          <Col md={6}>
        <FloatingLabel controlId="floatingPassword" label="Block" className='m-2'>
        <Form.Control type="number" placeholder="Block" value={Block} onChange={e=>setBlock(e.target.value)}/>
      </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Floor" className='m-2'> 
        <Form.Control type="number" placeholder="Password" value={Floor} onChange={e=>setFloor(e.target.value.toString())}/>
      </FloatingLabel>
        {/* <br /> */}
        <FloatingLabel controlId="floatingPassword" label="Room" className='m-2'>
        <Form.Control type="number" placeholder="Password" value={Room} onChange={e=>setRoom(e.target.value.toString())}/>
      </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Capacity" className='m-2'>
        <Form.Control type="number" placeholder="Password" value={Cap} onChange={e=>setCap(e.target.value.toString())}/>
      </FloatingLabel> <br />
      <Alert variant='warning'>Note: If Room Alredy Exist the System Will Notify You</Alert>
      </Col>
      <Col><img src={room} alt="" style={{height:'50vh',width:'100%'}}/></Col>
      </Row>
      {/* <br /> */}
      {/* <center>  <Button onClick={chkref}>Add room</Button></center> */}
      {/* <center>  <Button onClick={s}>Create</Button></center> */}
      <center>  <Button onClick={submit}>Create</Button></center>

    </div></Container>
      </>:
      <Row md={3} xs={1} sm={1} className="m-4">
       {Data?.map(e=>
       <Col key={e.id}><Card border="warning" style={{ width: '20rem',marginRight:'1rem' }} md={6} xs={12}>
       <Card.Header style={{backgroundColor:'#F7ECDE'}}>Block: {e.data.Block}</Card.Header>
       <Card.Body>
         <Card.Title>Room No: {e.data.Room}</Card.Title>
         <Card.Text>
           Floor : {e.data.Floor} <br /> 
           Capacity : {e.data.Cap} <br />
           <br />
           <Button variant='outline-warning'  onClick={() =>handleroom(e)}>Visit Room</Button> &nbsp;&nbsp;&nbsp;
           {/* <Button variant='outline-info' onClick={(e)=>{
            setId(e.id)
            setCap(e.data.Cap)
            setFloor(e.data.Floor)
            setRoom(e.data.Room)

           }}>Edit Room</Button>&nbsp;&nbsp;&nbsp; */}
           <Button variant='outline-danger' onClick={()=>{Del(e.id)}}>Delete Room</Button>
         </Card.Text>
       </Card.Body>
     </Card> <br /></Col>
        )}
        </Row>}
    </Container>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default RoomTest;