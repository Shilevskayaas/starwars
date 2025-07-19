import { NavLink } from 'react-router-dom'
import { StyledCharacter } from './styled';

export default function Character() {

  return (
    <StyledCharacter>
      <div>
        <div>language: en</div>
        <h2>60 Peoples for you to choose your favorite</h2>
        <div>
          <div>
            <select name="" id="">
              <option value="">All</option>
              <option value="">brown</option>
              <option value="">red</option>
              <option value="">blue</option>
              <option value="">white</option>
            </select>
          </div>
          <div>
            <div>
              <h3>Chewbacca</h3>
              <div>
                <div>
                  <div>172</div>
                  <span>height</span>
                </div>
                <div>
                  <div>77</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>male</div>
                <div>19BBY</div>
              </div>
            </div>
            <div>
              <h3>Jango Fett</h3>
              <div>
                <div>
                  <div>172</div>
                  <span>height</span>
                </div>
                <div>
                  <div>77</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>male</div>
                <div>19BBY</div>
              </div>
            </div>
            <div>
              <h3>Dooku</h3>
              <div>
                <div>
                  <div>202</div>
                  <span>height</span>
                </div>
                <div>
                  <div>136</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>male</div>
                <div>41.9BBY</div>
              </div>
            </div>
            <div>
              <h3>Adi Gallia</h3>
              <div>
                <div>
                  <div>419</div>
                  <span>height</span>
                </div>
                <div>
                  <div>49</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>female</div>
                <div className='disabled'></div>
              </div>
            </div>
            <div>
              <h3>Jabba Desilijic Tiure</h3>
              <div>
                <div>
                  <div>419</div>
                  <span>height</span>
                </div>
                <div>
                  <div>49</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>hermaphrodite</div>
                <div>600BBY</div>
              </div>
            </div>
            <div>
              <h3>Darth Vader</h3>
              <div>
                <div>
                  <div>202</div>
                  <span>height</span>
                </div>
                <div>
                  <div>136</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>male</div>
                <div>41.9BBY</div>
              </div>
            </div>
            <div>
              <h3>R2-D2</h3>
              <div>
                <div>
                  <div>96</div>
                  <span>height</span>
                </div>
                <div>
                  <div>32</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div className='disabled'></div>
                <div>112BCY</div>
              </div>
            </div>
            <div>
              <h3>C-3PO</h3>
              <div>
                <div>
                  <div>167</div>
                  <span>height</span>
                </div>
                <div>
                  <div>75</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div className='disabled'></div>
                <div>112BBY</div>
              </div>
            </div>
            <div>
              <h3>Luke Skywalker</h3>
              <div>
                <div>
                  <div>172</div>
                  <span>height</span>
                </div>
                <div>
                  <div>77</div>
                  <span>mass</span>
                </div>
              </div>
              <div>
                <div>male</div>
                <div>19BBY</div>
              </div>
            </div>
          </div>
          <NavLink to="/error">
            <button type='button'>Фиксированная кнопка</button>
          </NavLink>
        </div>
      </div>
    </StyledCharacter>
  )
}