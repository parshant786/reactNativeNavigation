import { Text, View, StyleSheet } from "react-native";

export const SubDetailSection = ({ arr, title }) => {
  console.log(arr);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        {arr.map((data) => {
          return (
            <View key={data} style={styles.listItemContainer}>
              <Text style={styles.dataContainer}>{data}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  titleContainer: {
    paddingHorizontal: 4,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  listContainer: {},
  listItemContainer: {
    backgroundColor: "#e8d3a2",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom:8
  },
  dataContainer: {
    textAlign: "center",
    color:  "#6a5015",
    fontWeight: "bold",
  },
});
