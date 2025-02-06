import Kisi from "../Navbar/Kisi.jsx";

function Navbar({ header, kisi }) {
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
            <Kisi
              resim={k.resim}
              isim={k.isim}
              lastMessage={k.lastMessage}
              time={k.time}
            />
            {index < kisi.length - 1 && <hr className="lineBetweenPeople" />}
          </div>
        ))}
      </li>
    </div>
  );
}

export default Navbar;
