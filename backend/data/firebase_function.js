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
  return Object.assign(snapshot.val(), { id: snapshot.key });
};

export const deleteCountry = async (id) => {
  const countryRef = ref(database, `/${id}`);
  const snapshot = await get(countryRef);
  if (!snapshot.val()) return {};
  const country = Object.assign(snapshot.val(), { id: snapshot.key });
  await remove(countryRef);
  return country;
};
export const updateCountry = async (country) => {
  const countryRef = ref(database, `/${country.id}`);
  await update(countryRef, country);
  const snapshot = await get(countryRef);
  if (!snapshot.val()) return {};
  return Object.assign(country, snapshot.val());
};
