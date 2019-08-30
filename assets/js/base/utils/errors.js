const formatErrorMessage = ( error, messageProperty = 'frontendMessage' ) => {
	if ( typeof error === 'object' && error.hasOwnProperty( 'message' ) ) {
		return {
			[ messageProperty ]: error.message,
		};
	}

	return error;
};

export const formatError = ( error ) => {
	if ( error.json ) {
		return error.json().then( ( parsedError ) => {
			return formatErrorMessage( parsedError, 'apiMessage' );
		} ).catch( ( e ) => {
			throw e;
		} );
	}

	return formatErrorMessage( error );
};
