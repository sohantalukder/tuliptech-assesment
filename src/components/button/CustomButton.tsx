import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import rs from '../../assets/responsiveSize.style.asset';

type buttonProps = {
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
  isLoading?: boolean;
  disabled?: boolean;
  textStyle?: object | null;
  wrapperStyles?: object | null;
};
const CustomButton: React.FC<buttonProps> = ({
  text,
  onPress = () => {},
  style,
  isLoading = false,
  disabled = false,
  textStyle = {},
}) => {
  const handlePress = () => {
    if (!isLoading) {
      onPress();
    }
  };
  const renderButton = () => {
    return (
      text && (
        <Text style={[styles.text, textStyle]} numberOfLines={1}>
          {text}
        </Text>
      )
    );
  };
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={handlePress}
      disabled={isLoading || disabled}
      activeOpacity={0.5}>
      {renderButton()}
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: rs(50),
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    width: 'auto',
    flexGrow: 1,
    maxHeight: rs(56),
    paddingTop: rs(16),
    paddingRight: rs(20),
    paddingBottom: rs(16),
    paddingLeft: rs(20),
    backgroundColor: '#FF6633',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
  },
});
