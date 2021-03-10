import { push as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { useState, useCallback } from 'react'
import { HamburgerSpin } from 'react-animated-burgers'
import Dot from 'components/Dot'


const links = [
    { href: '/', label: 'Home', label_en:'Home' },
    { href: '/boutiques', label: 'Winkels', label_en: 'Boutiques' },
    { href: '/news', label: 'Nieuws', label_en: 'News'},
    { href: '/contact', label: 'Contact', label_en:'Contact'}
].map((link) => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });

export default function Navigation() {

    const router = useRouter()

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
    )

    const styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#e7335d'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '2.5rem'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    return (
        <Menu styles={styles}>
            {links.map(({ key, href, label, label_en}) => (
                <Link href={href} className="menu-item" key={key}>
                    <a className={router.pathname == href ? 'menu-item px-3 py-2 flex items-center font-bold leading-snug active' : 'menu-item px-3 py-2 flex items-center font-bold leading-snug opacity-75'}>{label}<Dot/></a>
                </Link>
            ))}
        </Menu>
    )
}