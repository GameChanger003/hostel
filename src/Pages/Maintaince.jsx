import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,FloatingLabel,Button,Table} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../connection';

const Mainataince = () => {

    const [Data,setData]=useState();
    const [Item,SetItem]=useState(null);
    const [Quantity,SetQuantity]=useState();
    const [Id,setId]=useState();
    const [Chg,setChg]=useState(true);
    const [Description,setDescription]=useState(null);
    const [Location,setLocation]=useState();
    const [Rooms,setRooms]=useState()
    var date= new Date();
    date=date.toDateString()

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

    useEffect(() => {
      fetchUsers()
      fetchrooms()
    }, [])
    
    async function fetchrooms(){
      const {dts} = await supabase
      .from('rooms')
      .select('*')
      setRooms(dts)
      console.log(Rooms)
    }

    async function fetchUsers(){
      const {data} = await supabase
        .from('Maintaince')
        .select('*')
        setData(data)
    }

    async function submit() {
      const {sts,err}=await supabase.from('Maintaince').insert({Repair:Item,Price:Quantity,Desc:Description,Location:Location,created_at:date}).select('*')
      if(!err){
        tst('Success')
        fetchUsers()
      }
      else{
        tst(err)
      }
    }

    
    async function deleteUser(id){

      const { data, error } = await supabase
        .from('Maintaince')
        .delete()
        .eq('id', id)
  
      fetchUsers()
      if (error){
        console.log(error)
      }
  
      if (data){
        tst("Deletion Success")
        fetchUsers
      }
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
            <h1>Maintaince 🔧</h1>
            <hr width='50%'/>
            <Row >
                <Col>
                <FloatingLabel
        controlId="floatingInput"
        label="Repaired Item"
        className=""
      >
        <Form.Control type="text" placeholder="name@example.com" value={Item} onChange={e=>SetItem(e.target.value)}/>
      </FloatingLabel></Col>
      <Col>
      <FloatingLabel controlId="floatingPassword" label="price">
        <Form.Control type="number" placeholder="Password" value={Quantity}  onChange={e=>{
          if(parseInt(e.target.value)<0){SetQuantity(1)}
          else{SetQuantity(e.target.value)}
          }} min='1' OnlyNumber="true"/>
      </FloatingLabel>
                </Col>
      {/* <Col>
      <Form.Select aria-label="Location" size='lg'>
      <option>Choose location</option>
      {Rooms && Rooms.map(e=><option>{e.Rooms}</option>)}
    </Form.Select>
      </Col> */}
            </Row><br />  
            <Row>
                <Col>
                <FloatingLabel controlId="floatingTextarea2" label="Description" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value={Description}
          onChange={e=>setDescription(e.target.value)}
        />
      </FloatingLabel>
                </Col>
            </Row>
            <br />
            <center>{Chg?<Button onClick={submit}>Add To Records</Button>:<Button onClick={()=>{}}>Update Inventory</Button>}</center>
           <br />
           <h1>Maintaince History <span onClick={()=>{}}>🔃</span></h1>
           <hr />
           <Table striped bordered hover>
            <thead>
            <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Date</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            
       {Data && Data.map(e=><tr key={e.id}>
            <td>{e.Repair}</td>
            <td>{e.Desc}</td>
            <td>{e.created_at}</td>
            <td>{e.Price}</td>
            <td><Button  onClick={() => {
              setId(e.id) 
              SetItem(e.Item)
              SetQuantity(e.Price)
              setDescription(e.Description)
              setChg(false)
              }} variant="light"> ✏️</Button></td>
            <td > <Button variant="light" onClick={()=>deleteUser(e.id)}> 🗑️</Button></td>
            </tr>
        )}
       
        </tbody>
        </Table>
        </Container>
    </div>
  )
}


export default Mainataince;



    
 