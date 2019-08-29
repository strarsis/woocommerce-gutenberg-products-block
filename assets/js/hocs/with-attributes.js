/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { getAttributes, getTerms } from '../components/utils';
import { formatError } from '../base/utils/errors.js';

const withAttributes = createHigherOrderComponent(
	( OriginalComponent ) => {
		class WrappedComponent extends Component {
			constructor() {
				super( ...arguments );
				this.state = {
					attributes: [],
					error: null,
					expandedAttribute: null,
					loading: false,
					termsList: {},
					termsLoading: false,
				};

				this.loadAttributes = this.loadAttributes.bind( this );
				this.loadTerms = this.loadTerms.bind( this );
				this.onSelectAttribute = this.onSelectAttribute.bind( this );
				this.debouncedLoadTerms = debounce( this.loadTerms.bind( this ), 200 );
			}

			componentDidMount() {
				this.loadAttributes();
			}

			componentWillUnmount() {
				this.debouncedLoadTerms.cancel();
			}

			componentDidUpdate( prevProps, prevState ) {
				if ( prevState.expandedAttribute !== this.state.expandedAttribute ) {
					this.debouncedLoadTerms();
				}
			}

			loadAttributes() {
				const { selected } = this.props;
				const { expandedAttribute } = this.state;
				this.setState( { loading: true } );

				getAttributes().then( ( attributes ) => {
					attributes = attributes.map( ( item ) => ( { ...item, parent: 0 } ) );
					let newExpandedAttribute = expandedAttribute;
					if ( ! expandedAttribute && selected.length > 0 ) {
						const attr = attributes.find( ( item ) => item.slug === selected[ 0 ].attr_slug );
						if ( attr ) {
							newExpandedAttribute = attr.id;
						}
					}
					this.setState( { attributes, expandedAttribute: newExpandedAttribute, loading: false, error: null } );
				} ).catch( ( e ) => {
					const error = formatError( e );

					this.setState( { attributes: [], expandedAttribute: null, loading: false, error } );
				} );
			}

			loadTerms() {
				const { expandedAttribute, termsList } = this.state;
				if ( ! expandedAttribute ) {
					return;
				}
				if ( ! termsList[ expandedAttribute ] ) {
					this.setState( { termsLoading: true } );
				}

				getTerms( expandedAttribute )
					.then( ( terms ) => {
						terms = terms.map( ( term ) => ( { ...term, parent: expandedAttribute, attr_slug: term.attribute.slug } ) );
						this.setState( ( prevState ) => ( {
							termsList: { ...prevState.termsList, [ expandedAttribute ]: terms },
							termsLoading: false,
						} ) );
					} )
					.catch( ( apiError ) => {
						const error = formatError( apiError );

						this.setState( { termsList: {}, termsLoading: false, error } );
					} );
			}

			onSelectAttribute( attributeId ) {
				const { expandedAttribute } = this.state;

				this.setState( {
					expandedAttribute: attributeId === expandedAttribute ? null : attributeId,
				} );
			}

			render() {
				const { error, expandedAttribute, loading, attributes, termsList, termsLoading } = this.state;

				return <OriginalComponent
					{ ...this.props }
					attributes={ attributes }
					error={ error }
					expandedAttribute={ expandedAttribute }
					onSelectAttribute={ this.onSelectAttribute }
					isLoading={ loading }
					termsAreLoading={ termsLoading }
					termsList={ termsList }
				/>;
			}
		}
		WrappedComponent.propTypes = {
			selected: PropTypes.array,
		};
		WrappedComponent.defaultProps = {
			selected: [],
		};
		return WrappedComponent;
	},
	'withAttributes'
);

export default withAttributes;