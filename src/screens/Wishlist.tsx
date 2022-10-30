import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import PokemonWishList from "../components/Pokemon/PokemonWishList";
import { RootState } from "../redux/store";
import { searchIcon } from "../services/icons";
import styles from "../styles/styles";

export default function Wishlist() {
  const reduxList = useSelector((state: RootState) => state.wishlist.wishList);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={[styles.content, { paddingTop: 50 }]}>
        <View style={styles.wishListContent}>
          <Text style={styles.wishListTitle}>{"Pokédex"}</Text>
          <Text style={styles.wishListUnderTitleText}>
            Search for Pokémon by name or by using the National Pokédex number.
          </Text>

          <View style={styles.wishListSearch}>
            <Image source={searchIcon} style={styles.wishListSearchIcon} />
            <TextInput
              placeholder="What Pokémon are you looking for?"
              placeholderTextColor={"#35353A"}
              style={styles.wishListSearchInput}
              onChangeText={(value) => setSearchTerm(value)}
              value={searchTerm}
            />
          </View>

          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            {reduxList
              .filter(
                (pokemon) =>
                  pokemon?.rank
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  pokemon?.name
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((item, key) => (
                <PokemonWishList pokemon={item} key={key} />
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
