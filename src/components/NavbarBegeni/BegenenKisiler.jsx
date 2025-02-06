function BegenenKisiler({ resim, isim, emogi }) {
  const isimIlkKelime = isim.split(' ')[0];

  return (
    <div className="kisi">
      <img src={resim} alt="profile" className="kisiProfil" />
      
      <li className="kisiList">
        <h6 className="isim">{isim}</h6>
        <p className="lastText">{isimIlkKelime} seni beğendi</p>
      </li>
      <div className="emogi">{emogi}</div>
    </div>
  );
}

export default BegenenKisiler;
