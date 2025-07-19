import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <div>
        <NavLink to="/">
          <img src={logo} alt="StarWars" />
        </NavLink>
        <div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active' : ''}
                >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/character"
                className={({ isActive }) => isActive ? 'active' : ''}
                >
                Characters
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header


// import './App.css'
// //import Header from './components/Header/Header.tsx'
// import Main from './components/Main/Main.tsx'
// import Character from './components/Character/Character.tsx';

// function App() {
// const currentPage = window.location.pathname.slice(1) || 'main';
//   return (
//     <>
//       <div className='page'>
//         <ul>
//           <li>
//             <a href="/main" target="_blank">Main</a>
//           </li>
//           <li>
//             <a href="/character" target="_blank">Character</a>
//           </li>
//         </ul>
//         <Main/>
//         {currentPage === 'main' && <Main />}
//         {currentPage === 'character' && <Character />}
//       </div>
//     </>
//   )
// }

// export default App