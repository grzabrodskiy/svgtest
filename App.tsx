
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Svg, {SvgUri, Image as SvgImage} from 'react-native-svg';

import SvgImgIos from './assets/tiger.svg'

export function SvgWrap(Obj, props) {
  let SvgImg


  if (Platform.OS === 'web'){
    SvgImg = (props) => (<Svg>{Obj({width: props.width})}</Svg>)
  }
  else {
    SvgImg = (props) => (
      <Svg width={props.width}>
        <SvgImage href={Obj} width={props.width} height={props.height}/>
      </Svg>
    )
  }
  return SvgImg
}



export default  function asyncApp() {

  let SvgImg = SvgWrap(SvgImgIos, undefined)

  

  return (
    <View style={styles.container}>
       <View >
          <Svg width='100px' height='100px' viewBox='0 0 900 900'>
              <SvgImgIos />
          </Svg>
        </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    height: '110px',
    width: '110px',
    borderColor: 'orange'
  },
  subsubcontainer: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1,
    height: 100,
    width: 100,
  },
});
