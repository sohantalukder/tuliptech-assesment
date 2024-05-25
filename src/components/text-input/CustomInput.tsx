import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import rs from '../../assets/responsiveSize.style.asset';
interface customInputPropsProps {
  placeholder?: string;
  onChangeText: (value: any, name?: any) => void;
  defaultValue?: any;
  name?: string | any | undefined;
  inputProps?: TextInputProps;
  style?: ViewStyle;
  label: string;
}
const CustomInput: React.FC<customInputPropsProps> = ({
  placeholder = '',
  onChangeText,
  defaultValue = '',
  name,
  inputProps = {},
  style = {},
  label = '',
}) => {
  const containerRef = useRef<any>(null);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name);
    } else {
      onChangeText(text, undefined);
    }
  };
  const handleOnFocus = () => {
    containerRef.current.setNativeProps({
      style: {...styles.activeContainer},
    });
  };
  const handleOnBlur = () => {
    containerRef.current.setNativeProps({
      style: {...styles.container},
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
      keyboardDismissMode="interactive">
      <Text
        style={{
          fontSize: rs(14),
          color: 'black',
          fontWeight: '500',
          marginBottom: 5,
        }}>
        {label}
      </Text>
      <View style={[styles.container, style]} ref={containerRef}>
        <TextInput
          style={styles.input}
          numberOfLines={1}
          onChangeText={handleOnChange}
          placeholder={placeholder}
          placeholderTextColor={'#767779'}
          defaultValue={defaultValue?.toString()}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...inputProps}
        />
      </View>
    </ScrollView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E9',
    backgroundColor: '#F4F4F4',
    paddingTop: rs(0),
    paddingRight: rs(16),
    paddingBottom: rs(0),
    paddingLeft: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeContainer: {borderColor: '#FF6633', backgroundColor: '#FFFFFF'},
  input: {
    color: '#1B1D20',
    flexGrow: 1,
    flex: 1,
  },
  multi: {textAlignVertical: 'top', maxHeight: rs(150)},
});
