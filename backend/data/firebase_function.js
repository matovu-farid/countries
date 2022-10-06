import { ref, push, remove, update, get, child } from "firebase/database";
import { database } from "./firebase.js";

const databaseRef = ref(database);
export const getCountries = async () => {
  const snapshot = await get(child(databaseRef, "/"));
  const data = snapshot.toJSON();

  if (!data) return [];
  const keys = Object.keys(data);
  const values = Object.values(data);
  return values
    .map((value, index) => ({ ...value, id: keys[index] }))
    .sort((lastCountry, nextCountry) => lastCountry.index - nextCountry.index);
};
export const addCountry = async (country) => {
  const ref = await push(databaseRef, country);
  const snapshot = await get(ref);

  return Object.assign(snapshot.val(), { id: key });
};

export const deleteCountry = (id) => {
  const countryRef = ref(database, `/${id}`);
  return remove(countryRef);
};
export const updateCountry = (country) => {
  const countryRef = ref(database, `/${country.id}`);
  return update(countryRef, country);
};
