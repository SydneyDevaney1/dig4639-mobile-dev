import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quiz from './components/Quiz'

export default class App extends React.Component {
  render () {
    return(

    <View style={styles.container}>
      <Quiz/>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede1f2',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

