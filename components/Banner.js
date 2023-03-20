import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Banner = () => {
  return (
    <>
    <div className="main-screen">
  <div className="container">
    <div className="main-screen__inner">
      <Image
        src="/img/main-screen/title-img.png"
        alt="img"
        width={1040}
        height={200}
        className="main-screen__title-img"
      />
      <Image
        src="/img/main-screen/main.png"
        alt="img"
        width={798}
        height={1024}
        className="main-screen__main-img"
      />
      <div className="main-screen__items">
        <Link
          target="_blank"
          href="https://crypto.com/exchange/trade/spot/BTC_USDT"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/01.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
        <Link
          target="_blank"
          href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/02.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.okex.com/trade-spot/btc-usdt"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/03.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
        <Link
          target="_blank"
          href="https://trade.kucoin.com/BTC-USDT"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/04.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.huobi.com/en-us/fiat-crypto/one-trade/buy-btc-usd"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/05.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
        <Link
          target="_blank"
          href="https://exchange.gemini.com/trade/BTCUSD"
          className="main-screen__item"
        >
          <Image
            src="/img/main-screen/06.png"
            alt="img"
            width={265}
            height={96}
            className="main-screen__item-img"
          />
        </Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Banner