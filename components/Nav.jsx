import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useState, useCallback } from 'react'
import { HamburgerSpin } from 'react-animated-burgers'
import Dot from 'components/Dot'

const links = [
    { href: '/', label: 'Home', label_en:'Home' },
    { href: '/boutiques', label: 'Winkels', label_en: 'Boutiques' },
    { href: '/news/', label: 'Nieuws', label_en: 'News'},
    { href: '/contact', label: 'Contact', label_en:'Contact'}
].map((link) => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });

  
  const Nav = () => {
      
    const router = useRouter()

    // Hooks
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
    )

    return (
        <>
        <NavigationStyled>
        <nav className="navbar fixed w-full flex flex-wrap items-center justify-between px-3 py-6 navbar-expand-lg z-10">
        
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link href="/">
                    <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase logo-text font-secondary"
                    
                    >
                    Biz Oudwest <Dot/>
                    </a>
                </Link>
                <button
                className=" hamburger-icon cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    
                        <HamburgerSpin
                            barColor="#e7335d"
                            buttonWidth={20}
                            {...{ isActive, toggleButton }}
                        />
                    
                </button>
            </div>
            <div
                className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {links.map(({ key, href, label, label_en}) => (
                        <li className="nav-item font-secondary" key={key} onClick={() => setNavbarOpen(!navbarOpen)}>
                            <Link href={href}>
                                <a className={router.pathname === href ? 'px-3 py-2 flex items-center text-xs font-bold leading-snug active' : 'px-3 py-2 flex items-center text-xs font-bold leading-snug opacity-75'}>{label} <Dot/></a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </nav>
        </NavigationStyled>
        </>
    );
}

const NavigationStyled = styled.div`
    .navbar {
        background-color: ${props => props.theme.colors.white};
        transition: 0.2s ease;
        border-bottom: 1px solid ${props => props.theme.colors.primary}; 
        .logo-text {
            color: ${props => props.theme.colors.primary};
            font-size: 2rem;
        }
        ul {
            a {
                border-bottom: 2px solid transparent;
                color: ${props => props.theme.colors.primary};
                font-size: 2rem;
                transition: all .2s ease;
                &:hover {
                    border-bottom: 2px solid ${props => props.theme.colors.primary};
                }
                .active {
                    opacity: 100%;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        nav {
            padding: 3.5rem 0;
        }
    }

`

export default Nav
