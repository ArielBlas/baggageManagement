import React from "react"
import Slider from "react-slick"
import Back from "../../assets/images/baggages/back.svg"
import Next from "../../assets/images/baggages/next.svg"
import { cardsBaggage } from "./cardsBaggage"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div
      className={`arrow next ${className}`}
      onClick={onClick}
      aria-hidden="true"
    >
      <img src={Next} alt="next" />
    </div>
  )
}
const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div
      className={`arrow prev ${className}`}
      onClick={onClick}
      aria-hidden="true"
    >
      <img src={Back} alt="prev" />
    </div>
  )
}

const Baggage = ({ handleSubmit, baggage, increase, decrease, max }) => {
  const settings = {
    customPaging: function (i) {
      return <span>{cardsBaggage[i].title}</span>
    },
    className: "slider",
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="bm-main-title">
        {"Seleccione la cantidad de equipaje que va a llevar"}
      </h2>
      <Slider {...settings}>
        {cardsBaggage.map(bag => (
          <div className="bm-slider-card bm-card" key={bag.type}>
            <h4 className="bm-slider-card-title bm-card-title">
              {baggage[bag.type] === 1
                ? baggage[bag.type] + " " + bag.one
                : baggage[bag.type] > 0
                ? baggage[bag.type] + " " + bag.title
                : bag.title}
            </h4>
            <img src={bag.img} alt={bag.type} className="bm-slider-card-img" />
            <div className="slider-count">
              <div
                onClick={() => {
                  increase(baggage, bag.type)
                }}
                aria-hidden="true"
              >
                +
              </div>
              <div>{baggage[bag.type]}</div>
              <div
                onClick={() => {
                  decrease(baggage, bag.type)
                }}
                aria-hidden="true"
              >
                -
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="container bm-slider-button">
        {max > 0 && (
          <button type="submit" className="btn btn-danger">
            {"Continuar"}
          </button>
        )}
      </div>
    </form>
  )
}

export default Baggage
