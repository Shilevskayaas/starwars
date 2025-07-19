import { useState } from 'react';
import close from '../../img/closeIcon.svg';
import hero from '../../img/hero.png';
import { StyledModal } from './styled';

function Modal() {
  const [setIsModalOpen] = useState(false);
  
  return (
    <StyledModal>
      <button onClick={() => setIsModalOpen}><img src={close} alt="Close"/></button>
      <div className='modal_container'>
        <div>
          <img src={hero} alt="Hero"/>
          <div className='tags'>
            <div>hermaphrodite</div>
            <div>600BBY</div>
          </div>
        </div>
        <div>
          <h2>Jabba Desilijic Tiure</h2>
          <div className='card_abilities'>
            <div>
              <span>hair color: brown: brown</span>
            </div>
            <div>
              <span>skin color - white</span>
            </div>
            <div>
              <span>hair color: brown</span>
            </div>
          </div>
          <div className='card_counters'>
            <div>
              <div>228</div>
              <span>height</span>
            </div>
            <div>
              <div>165</div>
              <span>mass</span>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal