import {StyleSheet, Text, View, StatusBar, ScrollView, Alert,TouchableOpacity, Image, ImageBackground} from "react-native";
import Header from "../../components/header";
// import Footer from "../../components/footer";
import React from "react";

const characters = [
  {
    id: "1",
    name: "Dorothy",
    element: "#2033e0",
    burst: "I",
    stars: 3,
    bgImage: require("../../assets/images/nikke/Dorothy.jpg"),
  },
  {
    id: "2",
    name: "Liberalio",
    element: "#30a860",
    burst: "III",
    stars: 3,
    bgImage: require("../../assets/images/nikke/Libby.jpg"),
  },
  {
    id: "3",
    name: "Anne: Miracle",
    element: "#30a860",
    burst: "II",
    stars: 3,
    bgImage: require("../../assets/images/nikke/Anne.jpg"),
  },
  {
    id: "4",
    name: "Little Mermaid",
    element: "#30a860",
    burst: "I",
    stars: 3,
    bgImage: require("../../assets/images/nikke/Siren.jpg"),
  },
  {
    id: "5",
    name: "Diesel",
    element: "#c030b2",
    burst: "III",
    stars: 2,
    bgImage: require("../../assets/images/nikke/Diesel.jpg"),
  },
];

const navBar = [
  {
    id: "1",
    label: "Nikke",
  },
  {
    id: "2",
    label: "Squad",
  },
  {
    id: "3",
    label: "Lobby",
  },
  {
    id: "4",
    label: "Inventory",
  },
  {
    id: "5",
    label: "Recruit",
  },
];

const UnitDisplay = ({ char }) => (
  <View style={styles.unit}>

    {/* Image Area */}
<ImageBackground source={char.bgImage} style={styles.unitImage}>
  <Image
    source={char.bgImage} 
    style= {{
      width: "110px",
      height: "170px",
      alignSelf: "center",
    }}
    resizeMode="stretch"
  />
    <View style={styles.badgeColumn}>
      <View style={[styles.badge, { backgroundColor: char.element }]} />
      <View style={[styles.badge, { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#000000"}]}>  
         <Text style={styles.gunText}>/:|</Text>  
      </View>    
      <View style={[styles.badge, { borderWidth: 2, borderColor: "#fff" }]}>
         <Text style={styles.burstText}>{char.burst}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: "#a020f0" }]}/>
  </View>

</ImageBackground>

    {/* Unit Info */}
    <View style={styles.unitInfo}>
      <View style={styles.unitInfoRow}>
        <View>
          <Text style={styles.unitLevelLabel}>Lv.</Text>
          <Text style={styles.unitLevelNum}>467</Text>
        </View>

        <View style={styles.stars}>
          {[0, 1, 2].map(i => (
            <Text key={i} style={i < char.stars ? styles.starFilled : styles.starEmpty}>★</Text>
            ))}
        </View>
      </View>
      <Text style={styles.unitName}>{char.name}</Text>
    </View>

    {/* Unit Footer */}
    <View style={styles.unitFooter}>
      <View style={styles.footerIcon} />
      <View style={styles.footerDivider} />
      <View style={styles.infoCircle}><Text style={styles.infoText}>i</Text></View>
    </View>
  </View>
);

const NavItem = ({ item }) => {
  const isSquad = item.label === "Squad";

  return (
    <View style={styles.navItem}>
      <View style={[styles.navIconBox, isSquad && styles.navIconBoxActive]} />
      <Text style={[styles.navLabel, isSquad && styles.navLabelActive]}>
        {item.label}
      </Text>
    </View>
  );
};


/* -----------------------------
   MAIN SCREEN
------------------------------*/

const NikkeSquad = () => {
  return (
    <View style={styles.container}>

      <Header title="Squad" />

      {/* Top Bar
      <View style={styles.topBar}>
        <View style={styles.squadLabel}>
          <Text style={styles.squadLabelText}>Squad</Text>
        </View>

        <View style={styles.currencyRow}>
          <View style={styles.currencyItem}>
            <View style={[styles.currencyBox, { backgroundColor: "#4488ff" }]} />
            <Text style={styles.currencyText}>110K +</Text>
          </View>

          <View style={styles.currencyItem}>
            <View style={[styles.currencyBox, { backgroundColor: "#555" }]} />
            <Text style={styles.currencyText}>78991K</Text>
          </View>
        </View>

        <View style={styles.topIconsRow}>
          <View style={styles.topIcon} />
          <View style={styles.topIcon} />
        </View>
      </View> */}

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>

        {/* Campaign Header */}
        <View style={styles.campaignHeader}>
          <Text style={styles.campaignTitle}>CAMPAIGN</Text>
          <Text style={styles.campaignSubtitle}>
            You can view the squad formation for Campaign.
          </Text>
        </View>

        {/* Squads */}
        <View style={styles.squadRow}>
          {["01", "02", "03", "04", "05"].map((t, i) => (
            <View key={i} style={[styles.squad, i === 0 && styles.squadActive]}>
              <Text style={styles.squadText}>{t}</Text>
            </View>
          ))}
        </View>

        {/* Total Power */}
        <View style={styles.powerRow}>
          <View style={styles.powerIcon} />
          <Text style={styles.powerText}>1,056,382</Text>
        </View>

        {/* Unit Displays */}
        <View style={styles.unitsRow}>
          {characters.slice(0, 3).map((char) => (
            <UnitDisplay key={char.id} char={char} />
          ))}
        </View>
        <View style={[styles.unitsRow, { marginTop: 10 }]}>
          {characters.slice(3, 5).map((char) => (
            <UnitDisplay key={char.id} char={char} />
          ))}
        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => 
            Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </TouchableOpacity>

      </ScrollView>


      {/* Auto Button */}
      <View style={styles.autoBtn}>
        <Text style={styles.autoBtnText}>^v  Auto</Text>
      </View>

      {/* Nav Bar */}
      <View style={styles.bottomNav}>
        {navBar.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default NikkeSquad;

/* -----------------------------
   STYLES
------------------------------*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: StatusBar.currentHeight,
  },

  /* Top Bar */
  topBar: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 14,
    paddingVertical: 10,
  },
  
  squadLabel: {
    backgroundColor: "#2a2a2a",
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 6,
  },
  squadLabelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginLeft: 50,
    paddingVertical: 4,
    backgroundColor: "#9c9c9c"
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currencyBox: {
    width: 22,
    height: 22,
    borderRadius: 4,
  },
  currencyText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  topIconsRow: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c0c0c0",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  topIcon: {
    width: 28,
    height: 28,
    margin: 6,
    backgroundColor: "#dedede",
    borderRadius: 6,
  },

  /* Content */
  content: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },

  campaignHeader: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 8,
  },
  campaignTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#555",
    letterSpacing: 4,
  },
  campaignSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },

  /* Tabs */
  squadRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 14,
    marginBottom: 12,
  },
  squad: {
    width: 52,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444",
  },
  squadActive: {
    backgroundColor: "#4cb8ff",
  },
  squadText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    },

  /* Power */
  powerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 8,
    marginBottom: 18,
    borderRadius: 10,
    marginHorizontal: "45%",
    backgroundColor: "#a6a6a6a7",
  },
  powerIcon: {
    width: 28,
    height: 28,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  powerText: {
    fontSize: 22,
    marginLeft: 25,
    fontWeight: "700",
    color: "#333",
  },

  /* Units */
  unitsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 23,
    paddingHorizontal: 10,
  },
  unit: {
    width: 110,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#e8c060",
    elevation: 6,
  },
  unitImage: {
    height: 140,
    },

  burstText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },
  gunText: {
    color: "#000000",
    fontSize: 7,
    fontWeight: "bold",
    paddingBottom: 2,
  },
  badge: {
    width: 16,
    height: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
  badgeColumn: {
    position: "absolute",
    top: 6,
    left: 6,
    flexDirection: "column",
    gap: 6, 
  },

  unitInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    paddingHorizontal: 6,
    height: 48, //
    justifyContent: "center", //
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomWidth: 5,
    borderBottomColor: "#ffeb3c",
  },
  unitInfoRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  unitLevelLabel: {
    fontSize: 10,
    color: "#cd8812",
    fontWeight: "600",
  },
  unitLevelNum: {
    fontSize: 18,
    fontWeight: "600",
    textShadowColor: "#000000",
    textShadowRadius: 2,
    color: "#cd8812",
  },

  stars: {
    flexDirection: "row",
    gap: 2,
  },
  starFilled: {
    fontSize: 11,
    color: "#cd8812",
  },
  starEmpty: {
    fontSize: 11,
    color: "#888",
  },

  unitName: {
    fontSize: 12,
    fontWeight: "700",
    textShadowColor: "#000",
    textShadowRadius: 1,
    color: "#cd8812",
    marginTop: 2,
    textAlign: "right",
  },


  unitFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4b4941",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 5,
    borderTopColor: "#d7bc51",
  },
  footerIcon: {
    width: 14,
    height: 14,
    marginLeft: 12,
    borderRadius: 7,
    backgroundColor: "#b2b2b2",
  },
  footerDivider: {
    width: 1,
    height: 12,
    backgroundColor: "#b2b2b2",
  },
  infoCircle: {
    width: 16,
    height: 16,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#b2b2b2",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    color: "#b2b2b2",
    fontSize: 10,
    fontWeight: "bold",
  },

  /* Buttons */
  alertBtn: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: "#e05c2a",
    borderRadius: 10,
    paddingHorizontal: 48,
    paddingVertical: 12,
    elevation: 4,
  },
  alertBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },

  autoBtn: {
    position: "absolute",
    bottom: 72,
    right: 20,
    backgroundColor: "#4cb8ff",
    borderRadius: 6,
    paddingHorizontal: 28,
    paddingVertical: 12,
    elevation: 6,
  },
  autoBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Bottom Nav */
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#1a1a1a",
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 50,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navIconBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#444",
  },
  navIconBoxActive: {
    backgroundColor: "#fff",
  },
  navLabel: {
    color: "#888",
    fontSize: 11,
  },
  navLabelActive: {
    color: "#fff",
  },
});
