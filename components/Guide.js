import React from 'react'

const Guide = () => {
  return (
    <>
    <div className="guide" id="start">
  <div className="container">
    <div className="guide__inner grid-12">
      <div className="heading heading--decorator guide__heading">
        Quick Start Guide
      </div>
      <div className="guide__items grid-12">
        <div className="guide__item guide__item--one">
          <div className="guide-item__number">01</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide1.png"
              alt=""
              className="guide-item__img guide-item__img--one"
            />
          </div>
          <div className="guide-item__heading">Create MetaMask wallet</div>
          <div className="guide-item__text">
            Create a MetaMask Wallet using either a desktop computer or an
            iOS/Android mobile device. That will allow you to buy, sell, send,
            and receive BTC
          </div>
        </div>
        <div className="guide__item guide__item--two">
          <div className="guide-item__number">02</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide2.png"
              alt=""
              className="guide-item__img guide-item__img--two"
            />
          </div>
          <div className="guide-item__heading">Send BTC to your wallet</div>
          <div className="guide-item__text">
            You can buy Bitcoin (BTC) directly on MetaMask or transfer it to
            your MetaMask Wallet from exchanges like Coinbase, Binance, etc.
          </div>
        </div>
        <div className="guide__item guide__item--three">
          <div className="guide-item__number">03</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide3.png"
              alt=""
              className="guide-item__img guide-item__img--three"
            />
          </div>
          <div className="guide-item__heading">Connect your wallet</div>
          <div className="guide-item__text">
            Access your wallet by clicking <span className='text-cyan-100 text-lg font-black'>‘Connect wallet’ </span>and Entering
            MetaMask.
          </div>
        </div>
        <div className="guide__item guide__item--four">
          <div className="guide-item__number">04</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide4.png"
              alt=""
              className="guide-item__img guide-item__img--four"
            />
          </div>
          <div className="guide-item__heading">Wait For Giveaway</div>
          <div className="guide-item__text">
            You can start Receiving BTC once you have successful before the Steps Above.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Guide