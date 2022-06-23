import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
    oPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 8,
    textDecorationLine: 'line-through',
  },
  store: {
    fontSize: 12,
    marginVertical: 6,
    lineHeight: 18,
  },
  root: {
    padding: 10,
    backgroundColor: 'white',
  }
});


export default styles;