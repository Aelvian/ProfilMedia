import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BsCashCoin } from 'react-icons/bs'
import Barcode from '../img/Barcode.jpg'


function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle} style={{ width:"100%" }}>
       <BsCashCoin/> Donate
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Donate Dana</ModalHeader>
        <ModalBody>
        <img src={Barcode} style={{ width: "300px" }}></img>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;