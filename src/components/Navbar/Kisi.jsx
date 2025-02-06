function Kisi ({resim , isim, lastMessage, time}) {
return(
  <div role="button" className="kisi">
    <img src={resim} alt="profile" className="kisiProfil"/>
    
    <li className="kisiList">
      <h6 className="isim">{isim}</h6>
      <p className="lastText">{lastMessage}</p>
      
    </li>
    <div className="time">{time}</div>
  </div>
)

}
export default Kisi;