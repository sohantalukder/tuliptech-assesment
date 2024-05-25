import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Rectangle from './rectangle/Rectangle';
import rs from '../assets/responsiveSize.style.asset';
import CustomButton from './button/CustomButton';
import CustomizeGrid from './CustomizeGrid.grid';
import {gridProps} from '../types/types';

const Grid = () => {
  const [values, setValues] = useState<gridProps>({
    row: 3,
    column: 4,
    height: 100,
    width: 50,
  });
  let array = [];
  for (let i = 1; i <= values.column * values.row; i++) {
    array.push(i);
  }
  const callBack = (value: gridProps) => {
    setValues(value);
  };
  return (
    <View
      style={{
        paddingHorizontal: rs(20),
        paddingVertical: rs(20),
        flex: 1,
        gap: 10,
      }}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: rs(20),
            fontSize: rs(18),
            color: 'black',
            fontWeight: '600',
          }}>
          Grid Setup
        </Text>
      </TouchableOpacity>
      <FlatList
        data={array}
        keyboardShouldPersistTaps="always"
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={values.column}
        key={values.column}
        style={{flex: 1}}
        renderItem={_ => <Rectangle item={values} />}
      />
      <CustomButton
        text="Customize Grid"
        style={{alignItems: 'flex-end', flex: 1}}
        onPress={() => {
          global.showBottomSheet({
            flag: true,
            component: CustomizeGrid,
            componentProps: {defaultValue: values, callBack},
          });
        }}
      />
    </View>
  );
};

export default Grid;
