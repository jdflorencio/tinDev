import React from 'react'
import {
	View, 
	SafeAreaView, 
	StyleSheet,
	Image, 
	Text,
	TouchableOpacity
} from 'react-native'

import logo from '../../assets/logo.png'
import { hidden } from 'ansi-colors';

function Main() {
	return (<SafeAreaView style={styles.container}>
		<Image style={styles.logo } source={logo} />
		<View style={styles.cardContainer}>
			<View style={[styles.card, {zIndex: 3}]}>
				<Image style={styles.avatar} source={{ uri: "https://avatars1.githubusercontent.com/u/1665576?v=4" }} />
				<View style={styles.footer} >
					<Text style={styles.name}>Celso neto</Text>
					<Text style={styles.bio} numberOfLines={3}>desenvolvedor full stack</Text>
				</View>
			</View>
			<View style={[styles.card, {zIndex: 2}]}>
				<Image style={styles.avatar} source={{ uri: "https://avatars1.githubusercontent.com/u/1665576?v=4" }} />
				<View style={styles.footer} >
					<Text style={styles.name}>Celso neto</Text>
					<Text style={styles.bio} numberOfLines={3}>desenvolvedor full stack</Text>
				</View>
			</View>
			<View style={[styles.card, {zIndex: 1}]}>
				<Image style={styles.avatar} source={{ uri: "https://avatars1.githubusercontent.com/u/1665576?v=4" }} />
				<View style={styles.footer} >
					<Text style={styles.name}>Celso neto</Text>
					<Text style={styles.bio} numberOfLines={3}>desenvolvedor full stack</Text>
				</View>
			</View>
		</View>
		<View style={styles.buttonsContainer}>

			<TouchableOpacity style={styles.button}>
				<Text>Like</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text>DisLike</Text>
			</TouchableOpacity>

		</View>
		</SafeAreaView>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	cardContainer:{
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		maxHeight: 500,
	},
	card: {
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 8,
		margin: 30,
		overflow: 'hidden',
		position: 'absolute', 
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	avatar: {
		flex: 1,
		height: 300,
	},
	footer: {
		backgroundColor: '#FFF', 
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	logo: {
		marginTop: 50
	}, 
	name: {
		fontSize: 16,
		fontWeight: 'bold', 
		color: '#333'
	},
	bio: {
		fontSize: 14,
		color: '#999',
		marginTop: 5,
		lineHeight: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginBottom: 30,
	},
	button: {
		width:50,
		width: 50, 
		borderRadius: 25,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		elevation: 2,

	}

})
export default Main