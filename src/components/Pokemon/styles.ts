import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  pokemon: {
    width: Dimensions.get("screen").width * 0.45,
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
    fontFamily: "FlexoDemi",
  },

  pokemonSkill: {
    borderRadius: 12,
    backgroundColor: "#FFFFFF4D",
    marginTop: 8,
  },

  pokemonSkillText: {
    color: "white",
    fontSize: 12,
    fontFamily: "FlexoDemi",
    paddingVertical: 5,
    paddingHorizontal: 16,
  },

  pokemonImageView: {
    width: 106,
    height: 106,
    backgroundColor: "#FFFFFF4D",
    borderRadius: 106 / 2,
    position: "absolute",
    right: -4,
    bottom: -2,
    justifyContent: "center",
    alignItems: "center",
  },

  pokemonImage: {
    width: 80,
    height: 72,
  },

  baseStatsView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "white",
    justifyContent: "space-between",
  },

  baseStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  baseStatsTitle: {
    width: 62,
    fontSize: 16,
    fontFamily: "FlexoDemi",
    color: "#35353A",
    opacity: 0.5,
  },

  baseStatsNumber: {
    fontSize: 16,
    fontFamily: "FlexoDemi",
    color: "black",
    width: 25,
  },

  baseStatsGrey: {
    width: "65%",
    height: 6,
    borderRadius: 4,
    backgroundColor: "#F5F3F6",
  },

  baseStatsColorful: {
    height: 6,
    borderRadius: 4,
  },

  pokemonWish: {
    width: "100%",
    height: 140,
    backgroundColor: "#71CEB1",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    marginBottom: 16,
    overflow: "hidden",
  },

  pokemonWishRank: {
    fontSize: 14,
    fontFamily: "FlexoDemi",
    color: "#35353A",
    opacity: 0.5,
  },

  pokemonWishName: {
    fontSize: 18,
    color: "white",
    fontFamily: "FlexoDemi",
  },

  pokemonWishSkills: {
    flexDirection: "row",
  },

  pokemonWishImageCircle: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    position: "absolute",
    right: 0,
    top: -5,
    bottom: -5,
    backgroundColor: "#FFFFFF4D",
    justifyContent: "center",
    alignItems: "center",
  },

  pokemonWishImage: {
    width: 100,
    height: 100,
  },

  pokemonWishRemove: {
    position: "absolute",
    right: 10,
    top: 10,
  },

  pokemonWishRemoveFromListIcon: {
    width: 24,
    height: 24,
  },
});
