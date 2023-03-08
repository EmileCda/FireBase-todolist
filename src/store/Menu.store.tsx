/**store for state regarding to menu nav
 *
 */

import { action, map } from "nanostores";

export type TMenuStore = {
  isClickedUser: boolean;
  isClickedMenu: boolean;
  // routeChange: boolean;
  // newRoute: string;
};

export const MenuStore = map<TMenuStore>({
  isClickedUser: false,
  isClickedMenu: false,
  // routeChange: false,
  // newRoute: "/",
});

// export const setRoute = action(MenuStore, "setRoute", (store, value) => {
//   const { newRoute } = store.get();
//   if (newRoute !== value) {
//   } 
// });

// export const resetRouteChange = action(MenuStore, "resetRoute", (store) => {
//   store.setKey("routeChange", false);
// });
// ---------------------------------------------------------------

export const toggleUser = action(MenuStore, "toggleUser", (store, event) => {
  const { isClickedUser } = store.get();

  store.setKey("isClickedMenu", false);
  store.setKey("isClickedUser", !isClickedUser);
});

// ---------------------------------------------------------------
export const toggleMenu = action(MenuStore, "toggleMenu", (store) => {
  const { isClickedMenu } = store.get();

  store.setKey("isClickedUser", false);
  store.setKey("isClickedMenu", !isClickedMenu);
});
