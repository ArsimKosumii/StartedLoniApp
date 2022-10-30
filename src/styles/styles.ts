import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  homeTitle: {
    fontSize: 24,
    color: "#35353A",
    fontFamily: "FlexoDemi",
  },

  pokemonDetailsContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#71CEB1",
    paddingHorizontal: 16,
  },

  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },

  pokemonNameAndRank: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },

  pokemonNameAndRankText: {
    color: "white",
    fontSize: 28,
    fontFamily: "FlexoDemi",
  },

  pokemonSkillsAndSthElse: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },

  pokemonSkills: {
    flexDirection: "row",
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
    fontFamily: "FlexoDemi",
  },

  pokemonImageView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  pokemonImageCircle: {
    width: Dimensions.get("window").width * 0.57,
    height: Dimensions.get("window").height * 0.27,
    borderRadius: 239 / 2,
    marginTop: 45,
    backgroundColor: "#FFFFFF4D",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  pokemonImage: {
    height: Dimensions.get("window").height * 0.26,
    width: Dimensions.get("window").width * 0.56,
    position: "absolute",
    zIndex: 2,
  },

  pokemonDetailsAndStats: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    zIndex: -1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    marginTop: 30,
  },

  wishListContent: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: "white",
  },

  wishListTitle: {
    fontFamily: "FlexoDemi",
    fontSize: 24,
    color: "#35353A",
  },

  wishListUnderTitleText: {
    marginTop: 16,
    fontFamily: "FlexoDemi",
    fontSize: 16,
  },

  wishListSearch: {
    width: "100%",
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 23,
  },

  wishListSearchIcon: {
    width: 24,
    height: 24,
  },

  wishListSearchInput: {
    color: "#35353A",
    fontSize: 14,
    marginRight: 25,
    marginLeft: 8,
  },

  profileView: {
    flex: 1,
    paddingTop: 80,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  profileHeading: {
    fontSize: 30,
    fontFamily: "FlexoDemi",
  },

  userData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userName: {
    marginTop: 50,
    borderBottomWidth: 4,
    borderBottomColor: "#757575",
    width: "42%",
  },

  userNameText: {
    fontSize: 25,
    fontFamily: "FlexoDemi",
  },
});
