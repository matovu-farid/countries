import { ref, push, remove, update, get, child } from "firebase/database";
import { database } from "./firebase";

const databaseRef = ref(database);
export const getCountries = () => get(child(databaseRef, "/"));
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
