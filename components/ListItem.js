import React from 'react'

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native'
import colors from '../utils/colors'
import FadeInView from './FadeInView'

const placeholder = require('../assets/placeholder.jpg');

const ListItem = ({ index, text, imageUrl, navState, navigator }) => {

	const image = (
		imageUrl ? { url: imageUrl } : placeholder
	)

	console.log('have this text!', text )
	console.log('have this image ', imageUrl )

	return (

		<FadeInView delay={ index * 25 }>
			<TouchableOpacity
				underlayColor={colors.gray}
				onPress={() => navigator.push(navState) }>

				<View style={ styles.mediaObject }>
					<Image source={image} style={ styles.image } />
					<Text style={ styles.text }>{ text }</Text>
				</View>

			</TouchableOpacity>
		</FadeInView>
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