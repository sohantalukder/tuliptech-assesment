import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colorArray} from '../../assets/core.data';
import CustomizeRectangle from './CustomizeRectangle.rectangle';
import rs from '../../assets/responsiveSize.style.asset';
import {gridProps, rectangleProps} from '../../types/types';

const Rectangle: React.FC<{item: gridProps}> = ({item}) => {
  const [value, setValue] = useState<rectangleProps>({
    color: colorArray[0],
  });
  const callBack = (values: rectangleProps) => {
    setValue(values);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        height: rs(item.height),
        width: rs(item.width),
        backgroundColor: value.color,
        borderWidth: 1,
      }}
      onPress={() => {
        global.showBottomSheet({
          flag: true,
          component: CustomizeRectangle,
          componentProps: {defaultValue: value, callBack},
        });
      }}
    />
  );
};

export default Rectangle;
