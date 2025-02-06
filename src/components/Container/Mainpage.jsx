import IconOfWhoAmI from "../MainPage/IconOfWhoAmI";
import PassAddLikeButton from "../MainPage/PassAddLikeButton";
import PhotosOfPerson from "../MainPage/PhotosOfPerson";
import SendTextButton from "../MainPage/SendTextButton";

function Mainpage({
  name,
  resim,
  whoamiTitle,
  whoamiText,
  gender,
  age,
  city,
  job,
  school,
}) {
  return (
    <div className="mainPage">
      <h2 className="titleOfMainPage">
        {name}, {age}
      </h2>
      <img className="profilePic" src={resim} alt="Profil Resmi" />
      <div className="whoami">
        <h3 className="whoamiTitle">{whoamiTitle}</h3>
        <p className="whoamiText">{whoamiText}</p>
        <hr className="lineBetweenWhoAmI" />
        <li className="specials">
          <IconOfWhoAmI icon="fa-solid fa-venus-mars" yazi="Kadın" />
          <IconOfWhoAmI icon="fa-solid fa-cake-candles" yazi="19 Yaşında" />
          <IconOfWhoAmI icon="fa-solid fa-house" yazi="İstanbul" />
          <IconOfWhoAmI icon="fa-solid fa-briefcase" yazi="Öğretmen" />
          <IconOfWhoAmI icon="fa-solid fa-school" yazi="Okul Bilgisi Yok" />
        </li>
      </div>

      <PhotosOfPerson resim="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg" />

      <PassAddLikeButton />
      <SendTextButton />
    </div>
  );
}
export default Mainpage;
