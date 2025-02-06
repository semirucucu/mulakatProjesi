function PremiumCart ({title, image, subTitle, text}) {
return(
  <div className="premiumCart">
    <h4 className="premiumCartTitle">{title}</h4>
    <img className="premiumCartImage" src={image} alt="" />
    <h5 className="premiumCartSubTitle">{subTitle}</h5>
    <p className="premiumCartText">{text}</p>
    <li className="changerButtons">
      <button>&lt;</button>
      <button>&gt;</button>
    </li>
    <div class="slider-pagination">
      <span class="dot"></span>
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>

    <button className="premiumOlButton">Premium Ol</button>
  </div>
)
}
export default PremiumCart;