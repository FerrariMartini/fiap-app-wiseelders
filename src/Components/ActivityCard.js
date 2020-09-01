import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './CardStyle';
import EngageChart from './EngageChart';

const ActivityCard = (props) => {
  return (
    <>
      <View style={styles.container}>
        {/* <View>
          <Text> Happy Hour - FIAP </Text>
          <Text>
            <Icon name="users" size={15} color="#f50"></Icon>
            Relacionamento
          </Text>
          <Text> Investimento Total </Text>
          <Text> R$ 4.934,00</Text>
          <Divider />
        </View> */}
        {/* <View style={styles.container1}>
          <View style={styles.box1}>
            <Text>Ciclos da Atividade</Text>
            <Input disabled value={`de:${'12/08/2020'}`} />
            <Input disabled value={`até:${'19/09/2020'}`} />
            <Text> Quantidade de Ciclos(dias) </Text>
            <Input disabled value={'4'} />
            <Text> Quantidade de Inscritos </Text>
            <Input disabled value={'100'} />
            <Text> Quantidade de Presentes </Text>
            <Input disabled value={'317'} />
          </View>
          <View style={styles.box2}>
            <Text>Ciclos da Atividade</Text>
            <Input disabled value={`de:${'12/08/2020'}`} />
            <Input disabled value={`até:${'19/09/2020'}`} />
          </View>
          <Divider />
        </View> */}
        <View style={styles.container2}>
          <View style={styles.box1}>
            <Text style={[styles.cardTitle]}>Ciclo-{'1'}</Text>
            <Text> Qtd. de Presentes </Text>
            <Input disabled value={'95'} />
            <Text> Invest. Unitário </Text>
            <Input disabled value={`R$ ${'1.234,00'}`} />
            <Button title="Comparar" />
          </View>
          <View style={[styles.box2]}>
            <EngageChart ></EngageChart>
          </View>
        </View>
      </View>
    </>
  );
};

export default ActivityCard;
