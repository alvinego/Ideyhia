import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fcffff32',
  },

  image: {
    width: 160,
    height: 300,
    marginTop: 3,
    resizeMode: 'cover'
  },

  title: {
    fontSize: 16,
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
  root: {
    flexDirection: 'row',
    padding: 2,
    marginTop: 30
  },
  store: {
    fontSize: 12,
  },
  ratingsContainer: {
    flexDirection: 'row',
    backgroundColor:'#fcffff32',
    alignItems: 'center',
  },
  ratingsText: {
    fontSize: 8,
  },
})

export default styles;