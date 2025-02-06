import BegenenKisiler from "../NavbarBegeni/BegenenKisiler.jsx";

function NavbarBegeni({ header, kisi }) {
  return (
    <div className="navbar">
      <li className="navbarList">
        <h4 className="headerOfNavBar">
          {header}{" "}
          <a className="seeAll" href="#">
            Tümünü Gör &gt;
          </a>
        </h4>
        {kisi.map((k, index) => (
          <div key={index}>
            <BegenenKisiler resim={k.resim} isim={k.isim} emogi={k.emogi} />
            {index < kisi.length - 1 && <hr className="lineBetweenPeople" />}
          </div>
        ))}
      </li>
    </div>
  );
}

export default NavbarBegeni;
