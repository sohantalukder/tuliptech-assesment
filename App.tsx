import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Grid from './src/components/Grid';
import BottomSheetIndex from './src/components/bottom-sheet/BottomSheetIndex';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Grid />
      <BottomSheetIndex />
    </SafeAreaView>
  );
}

export default App;
