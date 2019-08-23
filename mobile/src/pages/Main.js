import React from 'react'
import {
	View, 
	SafeAreaView, 
	StyleSheet,
	Image 
} from 'react-native'

import logo from '../../assets/logo.png'

function Main() {
	return (<SafeAreaView sytle={StyleSheet.container}>
		<Image source={logo} />
		<View sytle={StyleSheet.cardContainer}>
			<View sytle={StyleSheet.card}>
			</View>
		</View>
		</SafeAreaView>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})
export default Main