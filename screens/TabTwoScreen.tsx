import * as React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import color from '../constants/Colors'

const Item = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} >
    <View style={{flexDirection: "row"}}>
      <View>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
      </View>
      <View>
        <Text style={styles.itemText}>{data.name}</Text>
        <Text style={styles.trainingText}>{data.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


export default function TabTwoScreen() {

  const [selected, setSelected] = React.useState(null)

  const trainings = [{
    id: "1",
    name: "Pectoraux/Triceps",
    description: "Push"
  }, {
    id: "2",
    name: "Dos/Epaule",
    description: "Pull"
  }, {
    id: "3",
    name: "Jambes",
    description: "Leg"
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
        data={trainings}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
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
  },
  trainingText: {
    fontSize: 14,
    color: color.custom.subtext,
  }
});
