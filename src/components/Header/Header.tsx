import { CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  insertPokemonToArray,
  removePokemonFromArray,
} from "../../redux/features/wishlist/wishlistSlice";
import { RootState } from "../../redux/store";
import {
  arrowBackBlack,
  arrowBackWhite,
  heartWhiteFilledIcon,
  heartWhiteIcon,
  listIconBlack,
} from "../../services/icons";
import styles from "./styles";

export default function Header({ navigation, pokemon }: any) {
  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  let wishlist: any = [];
  wishlist = useSelector((state: RootState) => state.wishlist.wishList);

  const dispatch = useDispatch();

  const storePokemonToWishList = () => {
    if (pokemon && !pokemonExistsInWishlist(pokemon)) {
      dispatch(insertPokemonToArray(pokemon));
    } else {
      dispatch(removePokemonFromArray(pokemon));
    }
  };

  const pokemonExistsInWishlist = (pokemon: object) => {
    for (let i = 0; i < wishlist?.length; i++) {
      if (JSON.stringify(wishlist[i]) === JSON.stringify(pokemon)) {
        return true;
      }
    }
    return false;
  };

  return (
    <View
      style={[
        styles.headerContainer,
        navigation && { backgroundColor: "#71CEB1" },
      ]}
    >
      <View style={styles.arrowAndHamburger}>
        <TouchableOpacity
          onPress={() => {
            if (navigation) goBack();
          }}
        >
          <Image
            source={navigation ? arrowBackWhite : arrowBackBlack}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => storePokemonToWishList()}>
          <Image
            source={
              !navigation
                ? listIconBlack
                : pokemonExistsInWishlist(pokemon)
                ? heartWhiteFilledIcon
                : heartWhiteIcon
            }
            style={[styles.icon, { width: 28 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
