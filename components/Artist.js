import React from 'react'

import { 
	View, 
	WebView,
	Linking
} from 'react-native'

import colors from '../utils/colors'

const beforeLoadUrl = (navState)=>{
	if( navState.url.indexOf('https://') > -1 || navState.url.indexOf('http://') > -1 ){
		console.log('is http link! open in webview')
		return true
	} else {
		console.log('is native link! try to use native handler')
		Linking.canOpenURL(navState.url).then(supported => {
		  if (!supported) {
		    console.log('Can\'t handle url: ' + navState.url);
		  } else {
		    Linking.openURL(navState.url);
		  }
		  return false
		})
		.catch(err => console.error('An error occurred', err));
	}
}

const Artist = ({ url }) => {

	console.log('loading this url? ', url)

	return (
		<View style={{
			backgroundColor: colors.white,
			borderLeftColor: colors.black,
			borderLeftWidth: 1,
			flex: 1,
			marginTop: 64
		}}>
			<WebView
		        style={{
		          flex: 1,
		        }}
		        source={{
		          uri: url,
		          method: 'GET',
		        }}
		  	    onShouldStartLoadWithRequest={beforeLoadUrl} />
		</View>
	)
}

Artist.propTypes = {
	url: React.PropTypes.string
}

export default Artist;