/**store for state regarding to menu nav
 *
 */

import { action, map } from "nanostores";


export type TMenuStore = {
  isClickedUser: boolean;
  isClickedMenu: boolean;
};

export const MenuStore = map<TMenuStore>({
  isClickedUser: false,
  isClickedMenu: false,
});

export const toggleUser = action(
  MenuStore,
  "toggleUser",
  (store) => {
    const { isClickedUser } = store.get();

    store.setKey("isClickedMenu",false);

    store.setKey("isClickedUser",!isClickedUser);
  }
);

// ---------------------------------------------------------------
export const toggleMenu = action(
  MenuStore,
  "toggleMenu",
  (store) => {
    const { isClickedMenu } = store.get();


    store.setKey("isClickedUser",false);
    store.setKey("isClickedMenu",!isClickedMenu);
  }
);