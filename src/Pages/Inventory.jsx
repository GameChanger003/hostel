import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Form,FloatingLabel,Button,Table} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../connection';

const Inventory = () => {

    const [Data,setData]=useState();
    const [Item,SetItem]=useState();
    const [Quantity,SetQuantity]=useState();
    const [Remain,SetRemain]=useState();
    const [left, setleft] = useState();
    const [Id,setId]=useState();
    const [Chg,setChg]=useState(true);
    var date= new Date();

    useEffect(() => {
      fetch_Data()
    },[])

    const fetch_Data=async()=>{
      const {data} = await supabase
        .from('Inventory')
        .select('*')
        setData(data)
          console.log(data)
    }

    async function submit() {
      setleft(Quantity)
      const { data, error } = await supabase.from('Inventory')
          .insert([
        { Item: Item, Quantity: Quantity,Remain:Quantity},
      ])
      .select()
      if(!error){
        tst('Success')
        fetch_Data()
      }
      else{
        dng("Error Occured")
      }
    }

    async function update() { 
      let dt=Remain-left
      if(dt<=Remain && dt >=0){
        const { data, error } = await supabase
        .from('Inventory')
        .update({ Remain:dt})
        .eq('id',Id)
        .select()
        if (!error) {
          tst("Update Success")
          fetch_Data()
          setChg(!Chg)
        }
        else{
          dng("Error Occured")
        }
      }
      else{
        dng("Wrong Data")
      }
    }

    async function Del(userId){

      const { data, error } = await supabase
        .from('Inventory')
        .delete()
        .eq('id', userId)
  
      fetch_Data()
      if (error){
        dng("Error Occured")
      }
  
      if (data){
        tst("Deletion Success")
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
            <h1>Inventory 🏬</h1>
            <hr width='50%'/>
            <Row>
                <Col>
                <FloatingLabel
        controlId="floatingInput"
        label="Item Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" value={Item} onChange={e=>SetItem(e.target.value)}/>
      </FloatingLabel></Col>
      <Col>
      <FloatingLabel controlId="floatingPassword" label="Quantity">
        <Form.Control type="number" placeholder="Password" value={Quantity}  onChange={e=>SetQuantity(e.target.value)}/>
      </FloatingLabel>
                </Col>
              {!Chg?  <>
                <Col>
      <FloatingLabel controlId="floatingPassword" label="Remain">
        <Form.Control type="number" placeholder="Password" value={Remain}  onChange={e=>SetRemain(e.target.value)}/>
      </FloatingLabel>
                </Col>
              <Col>
      <FloatingLabel controlId="floatingPassword" label="Utilized">
        <Form.Control type="number" placeholder="Password"  onChange={e=>setleft(e.target.value)}/>
      </FloatingLabel>
                </Col></>:<></>}
            </Row>
            <center>{Chg?<Button onClick={submit}>Add To Inventory</Button>:<><Button onClick={update}>Update Inventory</Button>&nbsp;&nbsp;&nbsp;<Button variant='danger' onClick={()=>{
              setChg(true)
              SetItem('')
              setleft('')
            }}>Cancel Changes</Button></>}</center>
           <br />
           <h1>Inventory Items 📃</h1>
           <hr />
           <Table striped>
            <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Remaining</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            
       {Data && Data.map(e=><tr key={e.id}>
            <td>{e.Item}</td>
            <td>{e.Quantity}</td>
            <td>{e.Remain}</td>
            <td><Button onClick={() => {
              setId(e.id) 
              SetItem(e.Item)
              SetQuantity(e.Quantity)
              SetRemain(e.Remain)
              setChg(false)
              }} variant='outline-success'> ✏️</Button></td>
            <td> <Button variant='outline-danger' onClick={()=>{Del(e.id)}}>🗑️</Button></td>
            </tr>
        )}
       
        </tbody>
        </Table>
 
        </Container>
    </div>
  )
}


export default Inventory;



    
 