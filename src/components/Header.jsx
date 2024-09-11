import { 
  UilEstate, 
  UilUser, 
  UilFileAlt, 
  UilBriefcaseAlt, 
  UilScenery, 
  UilMessage, 
  UilTimes, 
  UilApps 
} from '@iconscout/react-unicons';
import './header.css'




const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav_logo'>Kweyu</a>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href="#home" className='nav_link'>
                <UilEstate className='nav_icon' /> Home
              </a>
            </li>
            <li className='nav_item'>
              <a href="#about" className='nav_link'>
                <UilUser className='nav_icon' /> About
              </a>
            </li>
            <li className='nav_item'>
              <a href="#skills" className='nav_link'>
                <UilFileAlt className='nav_icon' /> Skills
              </a>
            </li>
            <li className='nav_item'>
              <a href="#services" className='nav_link'>
                <UilBriefcaseAlt className='nav_icon' /> Services
              </a>
            </li>
            <li className='nav_item'>
              <a href="#portfolio" className='nav_link'>
                <UilScenery className='nav_icon' /> Portfolio
              </a>
            </li>
            <li className='nav_item'>
              <a href="#contact" className='nav_link'>
                <UilMessage className='nav_icon' /> Contact
              </a>
            </li>
          </ul>
          <UilTimes className='nav_close' />
          <div className='nav_toggle'>
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
