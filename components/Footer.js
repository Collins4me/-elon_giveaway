import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer className="footer">
  <div className="container">
    <div className="footer__inner">
      <div className="footer__top">
        <div className="logo footer__logo">
          <div className="logo__link">
            <Image  
              src="/img/logo.png"
              alt="logo"
              width={56}
              height={56}
              className="logo__img"
            />
          </div>
        </div>
        <nav className="footer__nav">
          <ul className="menu-list footer__menu-list">
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
          <div className="links-list links-list--small footer__links-list">
            <Link
              target="_blank"
              href="https://t.me/dogelonmars"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/tg.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/dogelonmars"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/tw.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <Link
              target="_blank"
              href="https://coinmarketcap.com/currencies/dogelon/"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/03.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.coingecko.com/en/coins/dogelon-mars"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/coingecko.png"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <Link
              target="_blank"
              href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/uniswap.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <Link
              target="_blank"
              href="https://etherscan.io/token/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
              className="links-list__link"
            >
              <Image
                src="/img/list-links/traced.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
          </div>
        </nav>
      </div>
      <div className="footer__bottom"></div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer