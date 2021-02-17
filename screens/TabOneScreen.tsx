import * as React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import color from '../constants/Colors'

const Item = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.itemText}>{data.day}</Text>
    <Text style={styles.trainingText}> Entraintement : {data.training}</Text>
  </TouchableOpacity>
);

export default function TabOneScreen() {

  const [selected, setSelected] = React.useState(null)

  const days = [{
    day: "Lundi",
    training: "Push"
  }, {
    day: "Mardi",
    training: "Pull"
  }, {
    day: "Mercredi",
    training: "Leg"
  }, {
    day: "Jeudi",
    training: "Push"
  }, {
    day: "Vendredi",
    training: "Pull"
  }, {
    day: "Samedi",
    training: "Leg"
  }, {
    day: "Dimanche",
    training: ""
  }
  ]

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Item
          data={item}
          onPress={() => setSelected(item.day)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.day}
        extraData={selected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    height: 85,
    width: 375,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.custom.text,
    marginStart: 18,
  },
  trainingText: {
    fontSize: 14,
    color: color.custom.subtext,
    marginStart: 18,
  }
});
