import React, { Component } from 'react'
import {
	Animated
} from 'react-native'

export default class fadeInView extends Component {
	constructor(props){
		super(props)
		this.state = {
			fadeAnim: new Animated.Value(0),
			slideAnim: new Animated.Value(-64)
		}
	}


	componentDidMount(){
		const { delay } = this.props

		Animated.parallel([  
			Animated.timing(this.state.fadeAnim, {
				toValue: 1,
				delay: delay,
				duration: 500,
			}),
			Animated.timing(this.state.slideAnim, {
				toValue: 0,
				delay: delay,
				duration: 500,
			})
		])
		.start()
	}

	render() {
		return (
			<Animated.View
				style={[
						{ opacity: this.state.fadeAnim },
						{ marginLeft: this.state.slideAnim }
					]}>
				{ this.props.children }
			</Animated.View>
		)
	}

}

fadeInView.propTypes = {
	children: React.PropTypes.object,
	delay: React.PropTypes.number
}