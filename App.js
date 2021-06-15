import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'gilroyextrabold': require("./assets/fonts/Gilroy-ExtraBold.otf"),
    'gilroylight': require("./assets/fonts/Gilroy-Light.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
