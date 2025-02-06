import { useState } from "react";

function IconsHeader() {
  const [active, setActive] = useState(null);

  const links = [
    { icon: "fa-house", href: "#" },
    { icon: "fa-bell", href: "#" },
    { icon: "fa-compass", href: "#" },
    { icon: "fa-heart", href: "#" },
    { icon: "fa-comment-dots", href: "#" },
    { icon: "fa-coins", href: "#" },
    { icon: "fa-gem", href: "#" },
    { icon: "fa-user", href: "#" },
  ];

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="iconsHeader">
      <i className="fa-solid fa-heart-pulse"></i>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={active === index ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          <i className={`fa-solid ${link.icon}`}></i>
        </a>
      ))}
      <hr className="lineOfIcons" />
      <a href="#">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
    </div>
  );
}

export default IconsHeader;
