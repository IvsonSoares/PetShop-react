import React, {useEffect, useState} from 'react';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavMenu,
    Navlogo,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavItem
} from './NavbarElements';

const Navbar = ({toggle}) => {
    
    const [scrollNav, setScrollNav] = useState(false)


    const changeNav = () => {

        if(window.scrollY >= 80) {
            setScrollNav(true)

        } else {
            setScrollNav(false)
        }

    }

    useEffect (() => {

        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

        return (
            <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <Navlogo to ="/" onClick={toggleHome}>  <i className="fas fa-dog"/></Navlogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/page1"
                                        duration={500}
                                        exact='true'
                                        offset={-80}
                                >
                                    Galeria
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/page2"
                                        duration={500}
                                        exact='true'
                                        offset={-80}
                                >
                                    Sobre
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                           <NavBtnLink to="/register">Register</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                           <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            </>
        );
};

export default Navbar

