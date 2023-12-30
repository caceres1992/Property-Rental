interface IHomePage {
  hero: IHero;
  about: IAbout;
  services: IMainServices[];
  property: IProperty;
}

interface IHero {
  title: string;
  description: string;
  image: string;
}
interface IAbout {
  description: string;
  image: string;
}
interface IMainServices {
  id: string;
  title: string;
  description: string;
  image: string;
}
interface IProperty {
  id: string;
  address: string;
  priceNight: number;
  city: string;
  state: string;
  zipCode: string;
  qtyBeds: string;
  qtyBath: string;
  sqftProperty: string;
  pictures: IPictures[];
}

interface IPictures {
  id: string;
  imageUrl: string;
  altText: string;
}
