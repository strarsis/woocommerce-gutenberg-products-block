this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-tag"]=function(t){function e(e){for(var n,a,s=e[0],i=e[1],u=e[2],d=0,b=[];d<s.length;d++)a=s[d],r[a]&&b.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={12:0},c=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;return c.push([516,0,2,1]),o()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.wp.apiFetch}()},11:function(t,e){!function(){t.exports=this.React}()},18:function(t,e){!function(){t.exports=this.wp.blocks}()},19:function(t,e){!function(){t.exports=this.wp.url}()},22:function(t,e){!function(){t.exports=this.wp.compose}()},28:function(t,e){!function(){t.exports=this.wp.keycodes}()},3:function(t,e){!function(){t.exports=this.wp.components}()},31:function(t,e,o){"use strict";var n=o(8),r=o.n(n),c=o(0),a=o(1),s=o(4),i=o.n(s),u=o(3),l=function(t){var e=t.onChange,o=t.settings,n=o.button,s=o.price,i=o.rating,l=o.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(a.__)("Product title","woo-gutenberg-products-block"),help:l?Object(a.__)("Product title is visible.","woo-gutenberg-products-block"):Object(a.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(r()({},o,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(a.__)("Product price","woo-gutenberg-products-block"),help:s?Object(a.__)("Product price is visible.","woo-gutenberg-products-block"):Object(a.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(r()({},o,{price:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(a.__)("Product rating","woo-gutenberg-products-block"),help:i?Object(a.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(a.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:i,onChange:function(){return e(r()({},o,{rating:!i}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(a.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(a.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(a.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(r()({},o,{button:!n}))}}))};l.propTypes={settings:i.a.shape({button:i.a.bool.isRequired,price:i.a.bool.isRequired,rating:i.a.bool.isRequired,title:i.a.bool.isRequired}).isRequired,onChange:i.a.func.isRequired},e.a=l},34:function(t,e,o){"use strict";var n=o(0),r=o(1),c=o(5),a=o(4),s=o.n(a),i=o(3),u=function(t){var e=t.columns,o=t.rows,a=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(r.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,wc_product_block_data.min_columns,wc_product_block_data.max_columns);a({columns:Object(c.isNaN)(e)?"":e})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(n.createElement)(i.RangeControl,{label:Object(r.__)("Rows","woo-gutenberg-products-block"),value:o,onChange:function(t){var e=Object(c.clamp)(t,wc_product_block_data.min_rows,wc_product_block_data.max_rows);a({rows:Object(c.isNaN)(e)?"":e})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}),Object(n.createElement)(i.ToggleControl,{label:Object(r.__)("Align Add to Cart buttons","woo-gutenberg-products-block"),help:s?Object(r.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(r.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))};u.propTypes={columns:s.a.oneOfType([s.a.number,s.a.string]).isRequired,rows:s.a.oneOfType([s.a.number,s.a.string]).isRequired,alignButtons:s.a.bool.isRequired,setAttributes:s.a.func.isRequired},e.a=u},36:function(t,e){!function(){t.exports=this.ReactDOM}()},39:function(t,e){!function(){t.exports=this.wp.viewport}()},43:function(t,e,o){"use strict";o.d(e,"d",function(){return s}),o.d(e,"e",function(){return i}),o.d(e,"c",function(){return u}),o.d(e,"b",function(){return l}),o.d(e,"a",function(){return d});var n=o(19),r=o(10),c=o.n(r),a=o(5),s=wc_product_block_data.isLargeCatalog||!1,i=wc_product_block_data.limitTags||!1,u=wc_product_block_data.hasTags||!1,l=function(t){var e=t.selected,o=function(t){var e=t.selected,o=void 0===e?[]:e,r=t.search,c=[Object(n.addQueryArgs)("/wc/blocks/products",{per_page:s?100:-1,catalog_visibility:"visible",status:"publish",search:r})];return s&&o.length&&c.push(Object(n.addQueryArgs)("/wc/blocks/products",{catalog_visibility:"visible",status:"publish",include:o})),c}({selected:void 0===e?[]:e,search:t.search});return Promise.all(o.map(function(t){return c()({path:t})})).then(function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")})},d=function(t){var e=t.selected,o=function(t){var e=t.selected,o=void 0===e?[]:e,r=t.search,c=[Object(n.addQueryArgs)("/wc/blocks/products/tags",{per_page:i?100:-1,orderby:i?"count":"name",order:i?"desc":"asc",search:r})];return i&&o.length&&c.push(Object(n.addQueryArgs)("/wc/blocks/products/tags",{include:o})),c}({selected:void 0===e?[]:e,search:t.search});return Promise.all(o.map(function(t){return c()({path:t})})).then(function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")})}},46:function(t,e){!function(){t.exports=this.wp.hooks}()},47:function(t,e,o){"use strict";var n=o(0),r=o(1),c=o(3),a=o(4),s=o.n(a),i=function(t){var e=t.value,o=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(r.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(r.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(r.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(r.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(r.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(r.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(r.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(r.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return o({orderby:t})}})};i.propTypes={setAttributes:s.a.func.isRequired,value:s.a.string.isRequired},e.a=i},5:function(t,e){!function(){t.exports=this.lodash}()},504:function(t,e,o){var n=o(505);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(38)(n,r);n.locals&&(t.exports=n.locals)},505:function(t,e,o){},51:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},516:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(1),c=o(18),a=(o(504),o(8)),s=o.n(a),i=o(13),u=o.n(i),l=o(14),d=o.n(l),b=o(15),g=o.n(b),p=o(16),h=o.n(p),f=o(12),_=o.n(f),m=o(17),O=o.n(m),w=o(9),j=o(3),k=o(4),v=o.n(k),y=o(31),E=o(34),C=o(29),P=o.n(C),A=o(5),x=o(24),S=(o(506),o(43)),T=function(t){function e(){var t;return u()(this,e),(t=g()(this,h()(e).apply(this,arguments))).state={list:[],loading:!0},t.renderItem=t.renderItem.bind(_()(t)),t.debouncedOnSearch=Object(A.debounce)(t.onSearch.bind(_()(t)),400),t}return O()(e,t),d()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(S.a)({selected:e}).then(function(e){t.setState({list:e,loading:!1})}).catch(function(){t.setState({list:[],loading:!1})})}},{key:"onSearch",value:function(t){var e=this,o=this.props.selected;this.setState({loading:!0}),Object(S.a)({selected:o,search:t}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(t){var e=t.item,o=t.search,c=t.depth,a=void 0===c?0:c,s=["woocommerce-product-tags__item"];o.length&&s.push("is-searching"),0===a&&0!==e.parent&&s.push("is-skip-level");var i=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name;return Object(n.createElement)(x.b,P()({className:s.join(" ")},t,{showCount:!0,"aria-label":Object(r.sprintf)(Object(r._n)("%d product tagged as %s","%d products tagged as %s",e.count,"woo-gutenberg-products-block"),e.count,i)}))}},{key:"render",value:function(){var t=this.state,e=t.list,o=t.loading,c=this.props,a=c.onChange,s=c.onOperatorChange,i=c.operator,u=c.selected,l={clear:Object(r.__)("Clear all product tags","woo-gutenberg-products-block"),list:Object(r.__)("Product Tags","woo-gutenberg-products-block"),noItems:Object(r.__)("Your store doesn't have any product tags.","woo-gutenberg-products-block"),search:Object(r.__)("Search for product tags","woo-gutenberg-products-block"),selected:function(t){return Object(r.sprintf)(Object(r._n)("%d tag selected","%d tags selected",t,"woo-gutenberg-products-block"),t)},updated:Object(r.__)("Tag search results updated.","woo-gutenberg-products-block")};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(x.a,{className:"woocommerce-product-tags",list:e,isLoading:o,selected:u.map(function(t){return Object(A.find)(e,{id:t})}).filter(Boolean),onChange:a,onSearch:S.e?this.debouncedOnSearch:null,renderItem:this.renderItem,messages:l,isHierarchical:!0}),!!s&&Object(n.createElement)("div",{className:u.length<2?"screen-reader-text":""},Object(n.createElement)(j.SelectControl,{className:"woocommerce-product-tags__operator",label:Object(r.__)("Display products matching","woo-gutenberg-products-block"),help:Object(r.__)("Pick at least two tags to use this setting.","woo-gutenberg-products-block"),value:i,onChange:s,options:[{label:Object(r.__)("Any selected tags","woo-gutenberg-products-block"),value:"any"},{label:Object(r.__)("All selected tags","woo-gutenberg-products-block"),value:"all"}]})))}}]),e}(n.Component);T.propTypes={onChange:v.a.func.isRequired,onOperatorChange:v.a.func,operator:v.a.oneOf(["all","any"]),selected:v.a.array.isRequired},T.defaultProps={operator:"any"};var R=T,B=o(47),q=function(t){function e(){var t;return u()(this,e),(t=g()(this,h()(e).apply(this,arguments))).state={changedAttributes:{},isEditing:!1},t.startEditing=t.startEditing.bind(_()(t)),t.stopEditing=t.stopEditing.bind(_()(t)),t.setChangedAttributes=t.setChangedAttributes.bind(_()(t)),t.save=t.save.bind(_()(t)),t}return O()(e,t),d()(e,[{key:"componentDidMount",value:function(){this.props.attributes.tags.length||this.setState({isEditing:!0})}},{key:"startEditing",value:function(){this.setState({isEditing:!0,changedAttributes:{}})}},{key:"stopEditing",value:function(){this.setState({isEditing:!1,changedAttributes:{}})}},{key:"setChangedAttributes",value:function(t){this.setState(function(e){return{changedAttributes:s()({},e.changedAttributes,t)}})}},{key:"save",value:function(){var t=this.state.changedAttributes;(0,this.props.setAttributes)(t),this.stopEditing()}},{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,o=t.setAttributes,c=this.state.isEditing,a=e.columns,s=e.tagOperator,i=e.contentVisibility,u=e.orderby,l=e.rows,d=e.alignButtons;return Object(n.createElement)(w.InspectorControls,{key:"inspector"},Object(n.createElement)(j.PanelBody,{title:Object(r.__)("Product Tag","woo-gutenberg-products-block"),initialOpen:!e.tags.length&&!c},Object(n.createElement)(R,{selected:e.tags,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map(function(t){return t.id});o({tags:e})},operator:s,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return o({tagOperator:t})}})),Object(n.createElement)(j.PanelBody,{title:Object(r.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(E.a,{columns:a,rows:l,alignButtons:d,setAttributes:o})),Object(n.createElement)(j.PanelBody,{title:Object(r.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(y.a,{settings:i,onChange:function(t){return o({contentVisibility:t})}})),Object(n.createElement)(j.PanelBody,{title:Object(r.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(B.a,{setAttributes:o,value:u})))}},{key:"renderEditMode",value:function(){var t=this,e=this.props,o=e.attributes,c=e.debouncedSpeak,a=this.state.changedAttributes,i=s()({},o,a);return Object(n.createElement)(j.Placeholder,{icon:"tag",label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("Display a grid of products from your selected tags","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-product-tag__selection"},Object(n.createElement)(R,{selected:i.tags,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=e.map(function(t){return t.id});t.setChangedAttributes({tags:o})},operator:i.tagOperator,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t.setChangedAttributes({tagOperator:e})}}),Object(n.createElement)(j.Button,{isDefault:!0,onClick:function(){t.save(),c(Object(r.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(r.__)("Done","woo-gutenberg-products-block")),Object(n.createElement)(j.Button,{className:"wc-block-product-tag__cancel-button",isTertiary:!0,onClick:function(){t.stopEditing(),c(Object(r.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(r.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var t=this.props,e=t.attributes,o=t.name,c=e.tags.length;return Object(n.createElement)(j.Disabled,null,c?Object(n.createElement)(w.ServerSideRender,{block:o,attributes:e}):Object(n.createElement)(j.Placeholder,{icon:"tag",label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("This block displays products from selected tags. Select at least one tag to display its products.","woo-gutenberg-products-block")))}},{key:"render",value:function(){var t=this,e=this.state.isEditing;return Object(n.createElement)(n.Fragment,null,S.c?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(w.BlockControls,null,Object(n.createElement)(j.Toolbar,{controls:[{icon:"edit",title:Object(r.__)("Edit"),onClick:function(){return e?t.stopEditing():t.startEditing()},isActive:e}]})),this.getInspectorControls(),e?this.renderEditMode():this.renderViewMode()):Object(n.createElement)(j.Placeholder,{icon:"tag",label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("This block displays products from selected tags. In order to preview this you'll first need to create a product and assign it some tags.","woo-gutenberg-products-block")))}}]),e}(n.Component);q.propTypes={attributes:v.a.object.isRequired,name:v.a.string.isRequired,setAttributes:v.a.func.isRequired,debouncedSpeak:v.a.func.isRequired};var N=Object(j.withSpokenMessages)(q);Object(c.registerBlockType)("woocommerce/product-tag",{title:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),icon:{src:"tag",foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(r.__)("Display a grid of products from selected tags.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:{columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},alignButtons:{type:"boolean",default:!1},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},tags:{type:"array",default:[]},tagOperator:{type:"string",default:"any"},orderby:{type:"string",default:"date"}},edit:function(t){return Object(n.createElement)(N,t)},save:function(){return null}})},52:function(t,e){!function(){t.exports=this.wp.date}()},54:function(t,e){!function(){t.exports=this.wp.dom}()},55:function(t,e){},56:function(t,e){},57:function(t,e){},58:function(t,e){},7:function(t,e){!function(){t.exports=this.moment}()},9:function(t,e){!function(){t.exports=this.wp.editor}()}});