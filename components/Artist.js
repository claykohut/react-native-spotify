import React from 'react'

import { 
	View, 
	WebView 
} from 'react-native'

import colors from '../utils/colors'

const Artist = ({ url }) => {
	return (
		<View style={{
			backgroundColor: colors.white,
			borderLeftColor: colors.black,
			borderLeftWidth: 1,
			flex: 1,
			marginTop: 64
		}}>
			<WebView
				style={{ flex: 1 }}>
				source={{
					url: url,
					method: 'GET'
				}}></WebView>
		</View>
	)
}

Artist.propTypes = {
	url: React.PropTypes.string
}

export default Artist;