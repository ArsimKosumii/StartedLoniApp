import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import styles from "../styles/styles";
import { useGetPokemonByIdQuery } from "../redux/features/pokemons/pokemons";
import Header from "../components/Header/Header";
import NoData from "../components/NoData";
import { useEffect, useState } from "react";

export default function Details({ route }: any) {
  // const { data, error, isLoading } = useGetPokemonByIdQuery(route.params.id);

  // if (error) {
  //   return <NoData />;
  // }

  const [isLoading, setIsLoading] = useState(true);
  const id = route.params.id;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View style={styles.content}>
          <ScrollView style={{ width: "100%" }}>
            <Text>{id}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
