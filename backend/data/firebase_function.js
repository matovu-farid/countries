import { ref, push, remove, update, get, child } from "firebase/database";
import { database } from "./firebase.js";

const databaseRef = ref(database);
export const getCountries = async () => {
  const snapshot = await get(child(databaseRef, "/"));
  const countries = [];
  snapshot.forEach((childSnapshot) => {
    const key = childSnapshot.key;
    const country = Object.assign(childSnapshot.val(), { id: key });
    countries.push(country);
  });
  return countries;
};
export const addCountry = (country) => {
  return push(databaseRef, country);
};

export const deleteCountry = (id) => {
  const countryRef = ref(database, `/${id}`);
  return remove(countryRef);
};
export const updateCountry = (country) => {
  const countryRef = ref(database, `/${country.id}`);
  return update(countryRef, country);
};
