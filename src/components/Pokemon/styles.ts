import { StyleSheet } from "react-native";

export default StyleSheet.create({
  pokemon: {
    width: 186,
    height: 143,
    borderRadius: 20,
    backgroundColor: "#70CDB1",
    marginTop: 10,
    paddingVertical: 24,
    paddingHorizontal: 14,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
  },

  pokemonName: {
    fontSize: 16,
    color: "white",
  },

  pokemonSkill: {
    borderRadius: 12,
    backgroundColor: "#FFFFFF4D",
    marginTop: 8,
  },

  pokemonSkillText: {
    color: "white",
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },

  pokemonImageView: {
    width: 106,
    height: 106,
    backgroundColor: "#FFFFFF4D",
    borderRadius: 106 / 2,
    position: "absolute",
    right: -10,
    bottom: -2,
    justifyContent: "center",
    alignItems: "center",
  },

  pokemonImage: {
    width: 80,
    height: 72,
  },
});
