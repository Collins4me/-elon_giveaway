import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import MetaWallet from './Metamask/MetaWallet'

const Header = ({price}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [connect, setConnect] = useState("false")

useEffect(() => {
    const stored = localStorage.getItem('wallet-connected');
    setConnect(stored === "true" ? "true" : "false");
}, []);
//set 
  useEffect(() => {
    console.log(localStorage.getItem('wallet-connected'))
    localStorage.setItem('wallet-connected', connect);
  }, [connect]);



  // activate modal
  useEffect(() => {
    setIsOpen(isOpen);
    if(!isOpen) {
        document.documentElement.style.overflow = "auto";
    } else {
        document.documentElement.style.overflow = "hidden";
    }
  }, [isOpen]);

  const HandleChange = async () => {
    setIsOpen(!isOpen);
    
  }

  return (
    <>
<header className="header">
  <div className="container">
    <div className="header__inner">
      <div className="logo header__logo">
        <div className="logo__link">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={56}
              height={56}
              className="logo__img"
            />
          </Link>
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__nav-inner">
          <ul className="menu-list header__menu-list">
            <li className="menu-list__item">
              <a href="#com" className="menu-list__link">
                Community
              </a>
            </li>
            <li className="menu-list__item">
              <a href="#start" className="menu-list__link">
                Get Started
              </a>
            </li>
          </ul>
          <div className="header__btns">
            <div className="header__sm-info">
              <Image
                src="/img/arrow-to-top.svg"
                alt="icon"
                width={250}
                height={200}
                className="header__sm-info-icon"
                id="arrowIconForWidgetHeader"
              />
              <MetaWallet
                HandleChange={HandleChange}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                setConnect={setConnect}
              >
                <div>
                {connect === "true"
                ? <span id="priceHeader">${" "}{price.current_price}</span>
                : <hi className="pulsate"> Connect wallet</hi>
                }
                </div>
              </MetaWallet>
            </div>
          </div>
        </div>
      </nav>
      <button className="burger-btn header__burger-btn">
        <span className="burger-btn__inner">
          <span className="burger-btn__stick" />
        </span>
      </button>
    </div>
  </div>
</header>

    </>
  )
}

export default Header