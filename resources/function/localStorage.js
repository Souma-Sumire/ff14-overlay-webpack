/*
 * @Author: Souma
 * @LastEditTime: 2021-08-20 09:10:04
 */
function saveItem(namespace, key, value) {
  let storage = localStorage.getItem(namespace);
  if (!storage) {
    storage = {};
  } else {
    storage = JSON.parse(storage);
  }
  storage[key] = value;
  localStorage.setItem(namespace, JSON.stringify(storage));
}
function loadItem(namespace, key, def = undefined) {
  let storage = localStorage.getItem(namespace);
  return storage ? JSON.parse(storage)[key] || def : def;
}
export { saveItem, loadItem };
