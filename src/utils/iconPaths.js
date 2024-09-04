const iconPaths = {
  basket: "./src/assets/basket-icon.svg",
  favorite: "./src/assets/favorite-icon.svg",
  profile: "./src/assets/profile-icon.svg",
  search: "./src/assets/search-icon.svg",
  catalog: "./src/assets/catalog-icon.svg",
};
export const getIconPath = (name) => {
  return iconPaths[name];
};
export default iconPaths;
