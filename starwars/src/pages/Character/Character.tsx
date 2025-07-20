import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { StyledCharacter } from './styled';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import exchange from '../../img/exchange.svg';


export default function Character() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для закрытия модалки
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`page ${isModalOpen ? 'blurred' : ''}`}>
      <Header />
      <StyledCharacter>
        <div>
          <div className='lang'>language: en</div>
          <h2>60 Peoples for you to choose your favorite</h2>
          <div>
            <div className='select'>
              <select name="" id="">
                <option value="">All</option>
                <option value="">brown</option>
                <option value="">red</option>
                <option value="">blue</option>
                <option value="">white</option>
              </select>
            </div>
            <div className='cards_container'>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Chewbacca</h3>
                <div className='props'>
                  <div>
                    <div>172</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>77</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>male</div>
                  <div>19BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Jango Fett</h3>
                <div className='props'>
                  <div>
                    <div>172</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>77</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>male</div>
                  <div>19BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Dooku</h3>
                <div className='props'>
                  <div>
                    <div>202</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>136</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>male</div>
                  <div>41.9BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Adi Gallia</h3>
                <div className='props'>
                  <div>
                    <div>419</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>49</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>female</div>
                  <div className='disabled'></div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Jabba Desilijic Tiure</h3>
                <div className='props'>
                  <div>
                    <div>419</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>49</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>hermaphrodite</div>
                  <div>600BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Darth Vader</h3>
                <div className='props'>
                  <div>
                    <div>202</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>136</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>male</div>
                  <div>41.9BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>R2-D2</h3>
                <div className='props'>
                  <div>
                    <div>96</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>32</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div className='disabled'></div>
                  <div>112BCY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>C-3PO</h3>
                <div className='props'>
                  <div>
                    <div>167</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>75</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div className='disabled'></div>
                  <div>112BBY</div>
                </div>
              </div>
              <div onClick={() => setIsModalOpen(true)} className='card'>
                <h3>Luke Skywalker</h3>
                <div className='props'>
                  <div>
                    <div>172</div>
                    <span>height</span>
                  </div>
                  <div>
                    <div>77</div>
                    <span>mass</span>
                  </div>
                </div>
                <div className='tags'>
                  <div>male</div>
                  <div>19BBY</div>
                </div>
              </div>

            </div>
          </div>
          <NavLink
            to="/error"
            className='fix_button'>
              <button type='button'>
                <img src={exchange} alt="exchange" />
              </button>
          </NavLink>
        </div>
      </StyledCharacter>
      {isModalOpen && (
        <Modal onClose={closeModal} /> // Передаем функцию закрытия
      )}
    </div>
  )
}