import React from 'react'

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native'
import colors from '../utils/colors'

const placeholder = require('../assets/placeholder.jpg');

const ListItem = ({ text, imageUrl }) => {

	const image = (
		imageUrl ? { url: imageUrl } : placeholder
	)

	return (

		<TouchableOpacity
			underlayColor={colors.gray}>

			<View style={ styles.mediaObject }>
				<Image source={image} style={ styles.image } />
				<Text style={ styles.text }>{ text }</Text>
			</View>

		</TouchableOpacity>
	)

}

export default ListItem;

const styles = StyleSheet.create({
	mediaObject: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
	text: {
		flex: 1
	},
	image: {
		backgroundColor: colors.gray,
		width: 50,
		height: 50,
		marginRight: 16,
		marginLeft: 16
	}
})