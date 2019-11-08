/**
 * External dependencies
 */
import { Component } from 'react';

console.log( 'BlockErrorBoundary' );
class BlockErrorBoundary extends Component {
	state = { hasError: false };

	static getDerivedStateFromError( error ) {
		console.log( 'A', error );
		return { hasError: true };
	}

	render() {
		const { hasError } = this.state;

		if ( hasError ) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default BlockErrorBoundary;
