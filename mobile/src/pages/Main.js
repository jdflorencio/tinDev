import React, { useState, useEffect } from 'react'
import {
	View, 
	SafeAreaView, 
	StyleSheet,
	Image, 
	Text,
	TouchableOpacity,
	AsyncStorage
} from 'react-native'
import api from '../services/api'
import logo from '../../assets/logo.png'

function Main({ navigation }) {
	const id = navigation.getParam('user')
	const [users, setUsers] = useState([])

	useEffect(() => {
		async function loadUsers() {
			const response = await api.get('/devs', {
				headers: {
					user: id
				}
			})
			setUsers(response.data)
		}
		loadUsers()
	}, [id])

	async function handleLike() {
		const [user, ...rest] = users
		await api.post(`/devs/${user._id}/likes`, null, {
			headers: { user: id },
		})
		setUsers(rest)
	}

	async function handleDisLike() {
		const [user, ...rest] = users
		await api.post(`/devs/${user._id}/dislikes`, null, {
			headers: {user: id},
		})
		setUsers(rest)
	}

	async function handleLogout() {
		await AsyncStorage.clear()
		navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.container}>
		<TouchableOpacity onPress={handleLogout}>
			<Image style={styles.logo } source={logo} />
		</TouchableOpacity>
		
		<View style={styles.cardContainer}>

			{ users.length === 0? <Text style={styles.empty}>Nada aqui :(</Text> : (
				users.map((user, index) => (
					<View key={user._id} style={[styles.card, {zIndex: users.length - index}]}>
						<Image style={styles.avatar} source={{ uri: user.avatar }} />
						<View style={styles.footer} >
							<Text style={styles.name}>{user.name}</Text>
							<Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
						</View>				
					</View>
				))
			)}

		</View>
		{users.length > 0 && (	
		<View style={styles.buttonsContainer}>
			
					<TouchableOpacity style={styles.button} onPress={handleLike}>
						<Text>Like</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}	onPress={handleDisLike}>
							<Text>DisLike</Text>
					</TouchableOpacity>

		</View>)}
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
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 2,
		shadowOffset:{
			width: 0,
			height: 2,
		}
	}, 
	empty: {
		alignSelf: 'center',
		color: '#999',
		fontSize: 24,
		fontWeight: 'bold'
	}
})
export default Main