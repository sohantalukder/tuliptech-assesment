import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import CustomInput from './text-input/CustomInput';
import CustomButton from './button/CustomButton';
import rs from './../assets/responsiveSize.style.asset';
import {gridProps} from '../types/types';

const CustomizeGrid: React.FC<{
  defaultValue: gridProps;
  callBack: (props: gridProps) => void;
}> = ({defaultValue, callBack}) => {
  const values = useRef<gridProps>(defaultValue);
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
      <Text style={{fontSize: rs(18), color: 'black', fontWeight: '600'}}>
        Customize Grid
      </Text>
      <CustomInput
        name={'row'}
        label="Numbers of rows"
        placeholder="Numbers of rows"
        onChangeText={handleChange}
        inputProps={{inputMode: 'decimal'}}
        defaultValue={values.current.row}
      />
      <CustomInput
        placeholder="Numbers of columns"
        name={'column'}
        label="Numbers of columns"
        onChangeText={handleChange}
        inputProps={{inputMode: 'decimal'}}
        defaultValue={values.current.column}
      />
      <CustomInput
        placeholder="Height for rectangle"
        name={'height'}
        label="Height for rectangle"
        onChangeText={handleChange}
        inputProps={{inputMode: 'decimal'}}
        defaultValue={values.current.height}
      />
      <CustomInput
        placeholder="Width"
        name={'width'}
        label="Width for rectangle"
        onChangeText={handleChange}
        inputProps={{inputMode: 'decimal'}}
        defaultValue={values.current.width}
      />

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

export default CustomizeGrid;
