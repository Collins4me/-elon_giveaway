import Link from 'next/link'
import React from 'react'

const Community = () => {
  return (
    <>
    <div className="b-2-b">
  <div className="big-info">
    <div className="container">
      <div className="big-info__inner">
        <div className="big-info__text-box">
          <div className="heading big-info__heading">
          I am Elon Musk, Am offering a chance for you to win $1 million <span className='text-4xl font-bold text-cyan-400 '>in </span>! Just follow me on social media and <span className='text-4xl font-bold text-cyan-400 '> connect your wallet </span>, you could be one of the lucky winners!
          </div>
          <div className="links-list big-info__links-list">
            <Link
              target="_blank"
              href="https://twitter.com/elonmusk"
              className="links-list__link"
            >
              <img
                src="img/list-links/tw.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </Link>
            <div className="follow__bttn links-list icon ">
                <Link
                  href="#start"
                  className="bttn__follow"
                >
                  Get Started
                </Link>
              </div>
          </div>
        </div>
        <img
          src="img/big-info/rocket.png"
          alt="img"
          width={395}
          height={361}
          className="big-info__img"
        />
      </div>
    </div>
  </div>
  <div className="join-the-community" id="com">
    <div className="container">
      <div className="join-the-community__inner grid-12">
        <div className="heading--decorator heading join-the-community__heading">
          Join the Community!
        </div>
        <div className="join-the-community__items grid-12">
          <div className="grid-12 join-the-community__item join-the-community__item--twiter">
            <div className="join-the-community__header">
              <span className="join-the-community__header-name">
                Elon Musk
              </span>
              <span className="join-the-community__header-name-socmedia">
                Twitter
              </span>
              <span className="join-the-community__header-cheked">
                <img
                  src="img/checked.png"
                  alt=""
                  className="join-the-community__header-checked-img"
                />
              </span>
            </div>
            <div className="join-the-community__nick-name">@elonmusk</div>
            <div className="join-the-community__title">
              I am Elon Musk. Join me and together we will reach the
              stars...
            </div>
            <div className="join-the-community__follow">
              <span className="follow__amount">127.7M+</span>
              <span className="follow__followers">followers</span>
              <div className="follow__bttn ">
                <Link
                  target="_blank"
                  href="https://twitter.com/elonmusk"
                  className="bttn__follow"
                >
                  Follow
                </Link>
              </div>
            </div>
            <div className="join-the-community__socmedia-img-wrap">
              <img
                src="img/tw.png"
                className="join-the-community__socmedia-img join-the-community__socmedia-img--twiter"
                alt=""
              />
            </div>
          </div>
          {/* <div className="grid-12 join-the-community__item join-the-community__item--telegram">
            <div className="join-the-community__header">
              <span className="join-the-community__header-name">
                Elon Musk
              </span>
              <span className="join-the-community__header-name-socmedia">
                Telegram
              </span>
              <span className="join-the-community__header-cheked">
                <img
                  src="img/checked.png"
                  alt=""
                  className="join-the-community__header-checked-img"
                />
              </span>
            </div>
            <div className="join-the-community__nick-name">
              https://t.me/Elon
            </div>
            <div className="join-the-community__title">
              I am Elon Musk. Join me and together we will reach the
              stars...
            </div>
            <div className="join-the-community__follow">
              <span className="follow__amount">100M+</span>
              <span className="follow__followers">followers</span>
              <div className="follow__bttn">
                <Link
                  href="#start"
                  className="bttn__follow"
                >
                  Follow
                </Link>
              </div>
            </div>
            <div className="join-the-community__socmedia-img-wrap">
              <img
                src="img/tg.png"
                className="join-the-community__socmedia-img join-the-community__socmedia-img--telegram"
                alt=""
              />
            </div>
          </div> */}
        </div>
        <div className="get-stiker-pack grid-12">
          <div className="get-stiker-pack__title">
            <span className="heading">Become a Lucky Winner Today!</span>
            {/* <img
              src="img/small-logo-telegram.svg"
              alt=""
              className="get-stiker-pack__small-icon-tg"
            /> */}
          </div>
          <div className="get-stiker-pack__bttn-wrap">
            <Link
              href="#start"
              className="get-stiker-pack__bttn"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Community