import React, { useState,useEffect } from 'react'
import {supabase} from '../connection'
import {Table,Container,Button,Modal} from 'react-bootstrap';

const DueFinder = () => {
    const [Data,setData]=useState();
    const [modalShow, setModalShow] = React.useState(false);
    const [index,setIndex]=useState(null);
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
              <h4>Reg.No: {index && Data[index].regno}</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
  return (
    <div>
        <div>
            <Container className='mt-5'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Reg.No</th>
          <th>Name</th>
          <th>Account Number</th>
          <th>Due</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Data && Data.map((e,ind)=>
        <tr>
            <td>{ind+1}</td>
            <td>{e.regno}</td>
            <td>{e.name}</td>
            <td>{e.name}</td>
            <td>{e.fee}</td>
            <td><Button variant='success' onClick={() =>{
            setModalShow(true)
            setIndex(Number(ind))
            console.log(Data[index].regno)
            }
            }>Edit</Button> <Button variant='danger'>Alert</Button></td>
        </tr>)}
      </tbody>
    </Table>
    </Container>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default DueFinder