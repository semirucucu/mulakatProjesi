import IconsHeader from "../Container/IconsHeader.jsx";
import Mainpage from "../Container/Mainpage.jsx";
import Navbar from "../Container/Navbar.jsx";
import NavbarBegeni from "../Container/NavbarBegeni.jsx";
import PremiumCart from "../Container/PremiumCart.jsx";

function Container() {
  const kisiData = [
    {
      resim:
        "https://image.hurimg.com/i/hurriyet/75/0x0/5efd77ea45d2a04ed8f629fb.jpg",
      isim: "Candan Akay",
      lastMessage: "Çok güzel değil mi?",
      time: "14.03",
    },
    {
      resim:
        "https://www.heysaturday.co/wp-content/uploads/2016/11/best-dating-profile-photos-women-e.jpg",
      isim: "Selin Genç",
      lastMessage: "Bir sonraki ne olacak, soru?",
      time: "14.03",
    },
    {
      resim:
        "https://media.istockphoto.com/id/1347431090/photo/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run.jpg?s=612x612&w=0&k=20&c=t6IMTQoG_YlCQVgsFUKCt7Fw9iUjO25kniyg6nJq2E4=",
      isim: "Ahu Tuğ",
      lastMessage: "Gerçekten harikasın",
      time: "14.03",
    },
    {
      resim:
        "https://media.istockphoto.com/id/1369509530/photo/portrait-of-natural-beauty-woman-at-beach.jpg?s=612x612&w=0&k=20&c=7xvyPUdDvNZMYuxyA9wM3H0gHNaBCyjA87G0-jhtbEA=",
      isim: "Ahde Vefa",
      lastMessage: "Özledim seni canım.",
      time: "14.03",
    },
  ];

  const kisiData2 = [
    {
      resim:
        "https://image.hurimg.com/i/hurriyet/75/0x0/5efd77ea45d2a04ed8f629fb.jpg",
      isim: "Candan Akay",
      emogi: <i class="fa-solid fa-heart"></i>,
    },
    {
      resim:
        "https://www.heysaturday.co/wp-content/uploads/2016/11/best-dating-profile-photos-women-e.jpg",
      isim: "Selin Genç",
      emogi: <i class="fa-solid fa-heart"></i>,
    },
    {
      resim:
        "https://media.istockphoto.com/id/1347431090/photo/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run.jpg?s=612x612&w=0&k=20&c=t6IMTQoG_YlCQVgsFUKCt7Fw9iUjO25kniyg6nJq2E4=",
      isim: "Ahu Tuğ",
      emogi: <i class="fa-solid fa-heart"></i>,
    },
    {
      resim:
        "https://media.istockphoto.com/id/1369509530/photo/portrait-of-natural-beauty-woman-at-beach.jpg?s=612x612&w=0&k=20&c=7xvyPUdDvNZMYuxyA9wM3H0gHNaBCyjA87G0-jhtbEA=",
      isim: "Ahde Vefa",
      emogi: <i class="fa-solid fa-heart"></i>,
    },
  ];

  return (
    <div className="container">
      <IconsHeader />
      <PremiumCart
        title="Hemen Premium Ol"
        image="https://images.squarespace-cdn.com/content/v1/5ea5565e8a60162dcfc27a78/93098b64-7e88-48e5-9350-bfcc1131b75f/Heart.png"
        subTitle="Seni Beğenenleri Gör"
        text="Premium'a geçerek kimlerle eşleştiğini gör. Sana ilgi duyanları hemen keşfet!"
      />
      <Mainpage
        name="Aslıhan"
        age="24"
        resim="https://i.pinimg.com/736x/60/43/43/604343975469cab75be76df00a098855.jpg"
        whoamiTitle="Ben Kimim?"
        whoamiText="Ben 19 yaşında İzmir'de yaşayan bir genç kızım. Yeni insanlarla tanışmak, görüşmek ve ilişkiler kurmak istiyorum. Bu yüzden buradayım."
      />
      <li className="listOfNavBars">
        <Navbar header="Hızlı Mesajlar" kisi={kisiData} />
        <NavbarBegeni header="Beğeniler" kisi={kisiData2} />
      </li>
    </div>
  );
}

export default Container;
