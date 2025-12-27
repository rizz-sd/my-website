import '../App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function Sidebar_nav() {
    const navigate = useNavigate();

    return (
      <Sidebar className='Sidebar_nav'>
        <Menu>
          <SubMenu className='Sidebar_menu' label="About Me">
            <div className='text'>
              <MenuItem 
                className='Sidebar_menu'
                onClick={() => navigate(ROUTES.PROJECTS)}
              > 
                Projects 
              </MenuItem>
              <MenuItem 
                className='Sidebar_menu'
                onClick={() => navigate(ROUTES.CERTIFICATIONS)}
              > 
                Certifications 
              </MenuItem>
            </div>
          </SubMenu>
          <MenuItem 
            className='Sidebar_menu'
            onClick={() => navigate(ROUTES.ABOUT)}
          > 
            My Aspiration 
          </MenuItem>
          <MenuItem 
            className='Sidebar_menu'
            onClick={() => navigate(ROUTES.CONTACT)}
          > 
            Contact Me 
          </MenuItem>
        </Menu>
      </Sidebar>
    );
}
  