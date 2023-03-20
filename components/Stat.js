import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Stat = ({data}) => {

  return (
    <>
    <div className="statistics" id="token">
  <div className="container">
    <div
      className="coinmarketcap-currency-widget"
      data-currencyid={1}
      data-base="USD"
      data-secondary=""
      data-ticker="true"
      data-rank="true"
      data-marketcap="true"
      data-volume="true"
      data-statsticker="false"
      data-stats="USD"
    />
    <div className="statistics-inner grid-12">
      <div className="statistics-inner__top-level grid-12">
        <div className="statistics-inner-top-level__logo">
          <img
            src={data.image}
            alt=""
            className="statistics-inner-top-level__logo-img"
          />
        </div>
        <div className="statistics-inner-top-level__info">
          <div className="statistics-inner-top-level__coin-name">
            <span className="statistics-inner-top-level__title">
              {" "}
              {data.name}
            </span>
            <div className="statistics-inner-top-level__short-name">{data.symbol.toUpperCase()}</div>
          </div>
          <div className="statistics-inner-top-level__some-info">
            <span className="statistics-inner-top-level__price">
              <span id="price">{data.current_price}</span> $
            </span>
            <span className="statistics-inner-top-level__arrow-to-top">
              <Image
                src="/img/arrow-to-top.svg"
                alt="icon"
                width={25}
                height={25}
                className="statistics-inner-top-level__arrow-to-top-img"
                id="arrowIconForWidget"
              />
            </span>
            <span className="statistics-inner-top-level__procent" id="percent">
              {data.price_change_percentage_24h}
            </span>
          </div>
        </div>
        <Link
          target="_blank"
          href="https://coinmarketcap.com/currencies/dogelon/"
          className="statistics-inner-top-level__power-by"
        >
          Powered by CoinGecko
        </Link>
      </div>
      <div className="statistics-inner__bottom-level">
        <div className="statistics-inner-bottom-level__item">
          <div className="statistics-inner-bottom-level-item__heading">
            Rank
          </div>
          <div className="statistics-inner-bottom-level-item__number" id="rank">
            {data.market_cap_rank}
          </div>
        </div>
        <div className="statistics-inner-bottom-level__item statistics-inner-bottom-level__item--border">
          <div className="statistics-inner-bottom-level-item__heading">
            Market Cap
          </div>
          <div
            className="statistics-inner-bottom-level-item__number"
            id="marketCap"
          >
            {data.market_cap}
          </div>
        </div>
        <div className="statistics-inner-bottom-level__item">
          <div className="statistics-inner-bottom-level-item__heading">
            Volume
          </div>
          <div
            className="statistics-inner-bottom-level-item__number"
            id="volume"
          >
            {data.total_volume}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Stat