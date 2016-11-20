import React from 'react'

import { 
	StyleSheet,
	Navigator,
	Text,
	TouchableOpacity
} from 'react-native'

import colors from '../utils/colors'

const NavigationBarRouteMapper = {

	LeftButton: (route, navigator) => {
		if( route.id === 'MAIN' ){
			return null
		}

		return (
			<TouchableOpacity
			 	onPress={ () => navigator.pop() }
			 	style={ styles.navBarLeftButton }>
				<Text style={[ styles.navBarText, styles.navBarButtonText ]}>
					Back
				</Text>
			</TouchableOpacity>
		)

	},

	RightButton: () => {
		return null;
	},

	Title: (route) => {
		return (
			<Text style={[ styles.navBarText, styles.navBarTitleText ]}>
				{ route.title }
			</Text>
		)
	}

}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: colors.black
	},
	navBarText: {
		fontSize: 16,
		marginVertical: 10,
		color: colors.white
	},
	navBarTitleText: {
		fontWeight: '500',
		marginVertical: 9
	},
	navBarButtonText: {
		paddingLeft: 10
	}
})

export default (
	<Navigator.NavigationBar
		style={ styles.navBar }
		routeMapper={ NavigationBarRouteMapper } />
)
