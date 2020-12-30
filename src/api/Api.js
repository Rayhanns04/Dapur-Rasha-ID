import firebase from "../Firebase";

export async function CarouselImageCollection(carouselImageR) {
  const imageList = [];

  const snapshot = await firebase.firestore().collection("carousel").get();

  snapshot.forEach((doc) => {
    imageList.push(doc.data());
  });

  carouselImageR(imageList);
}

export async function BreadCollection(params) {
  const breadList = [];

  const snapshot = await firebase.firestore().collection("bread").get();

  snapshot.forEach((doc) => {
    breadList.push(doc.data());
  });

  params(breadList);
}

export async function MenuCollection(params) {
  const menuList = [];

  const snapshot = await firebase.firestore().collection("menu").get();

  snapshot.forEach((doc) => {
    menuList.push(doc.data());
  });

  params(menuList);
}

export async function KindCollection(params) {
  const kindList = [];

  const snapshot = await firebase.firestore().collection("kind").get();

  snapshot.forEach((doc) => {
    kindList.push(doc.data());
  });

  params(kindList);
}
