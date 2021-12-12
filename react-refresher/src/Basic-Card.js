import './index.css';
import Modal from './Modal';
import { useState } from 'react';
import Backdrop from './Backdrop';

function BasicCard(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler(){
    setModalIsOpen(true);
  }  
  function closeModalHandler(){
    setModalIsOpen(false);
  }
  
  return (
          <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
              <button className='btn' onClick={deleteHandler}>DELETE</button>
            </div>
            {modalIsOpen ? <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} /> : null}
            {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
          </div>
        
      );
}

export default BasicCard;