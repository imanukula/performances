import * as React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';

const Item = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
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
    flex: 1
  },
  item: {
    height: 60,
    marginStart: 20,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
  },
  trainingText: {
    fontSize: 14,
    color: "white",
  }
});
