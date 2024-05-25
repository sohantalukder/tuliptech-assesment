import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomButton from '../button/CustomButton';
import rs from '../../assets/responsiveSize.style.asset';
import {colorArray} from '../../assets/core.data';
import {rectangleProps} from '../../types/types';

const CustomizeRectangle: React.FC<{
  defaultValue: rectangleProps;
  callBack: (props: rectangleProps) => void;
}> = ({defaultValue, callBack}) => {
  const [color, setColor] = useState(defaultValue.color);
  const values = useRef<rectangleProps>(defaultValue);
  const handleChange = (value: any, name: string) => {
    values.current = {...values.current, [name]: value};
  };
  return (
    <View
      style={{
        marginHorizontal: rs(20),
        marginVertical: rs(20),
        gap: rs(15),
      }}>
      <Text
        style={{
          fontSize: rs(14),
          color: 'black',
          fontWeight: '500',
          marginBottom: 5,
        }}>
        Color
      </Text>
      <View style={{gap: 5, flexDirection: 'row', flexWrap: 'wrap'}}>
        {colorArray.map((item: string, index: number) => {
          return (
            <TouchableOpacity
              style={{
                height: rs(40),
                width: rs(40),
                backgroundColor: item,
                borderWidth: color === item ? 1 : 0,
              }}
              activeOpacity={0.8}
              key={index}
              onPress={() => {
                handleChange(item, 'color');
                setColor(item);
              }}
            />
          );
        })}
      </View>
      <CustomButton
        text="Save"
        onPress={() => {
          global.showBottomSheet({flag: false});
          callBack(values.current);
        }}
      />
    </View>
  );
};

export default CustomizeRectangle;
