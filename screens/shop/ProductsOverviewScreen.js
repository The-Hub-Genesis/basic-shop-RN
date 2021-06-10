import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      style={styles.container}
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
          style={styles.productItems}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: "row",
  //   alignContent: "stretch",
  // },
  // productItems: {
  //   width: "50%",
  // },
});

export default ProductsOverviewScreen;
