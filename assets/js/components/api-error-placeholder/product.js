/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import withProduct from '../../hocs/with-product';
import ApiErrorPlaceholder from './base';

const ProductApiErrorPlaceholder = ( { className, error, getProduct, isLoading } ) => {
	return error ? (
		<ApiErrorPlaceholder
			className={ className }
			error={ error }
			isLoading={ isLoading }
			onRetry={ getProduct }
		/>
	) : null;
};

ProductApiErrorPlaceholder.propTypes = {
	/**
	 * Classname to add to placeholder in addition to the defaults.
	 */
	className: PropTypes.string,
	// from withProduct
	error: PropTypes.object,
	getProduct: PropTypes.func,
	isLoading: PropTypes.bool,
};

export default withProduct( ProductApiErrorPlaceholder );
