this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-best-sellers"]=function(e){function t(t){for(var r,s,i=t[0],a=t[1],u=t[2],b=0,d=[];b<i.length;b++)s=i[b],n[s]&&d.push(n[s][0]),n[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);d.length;)d.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,i=1;i<o.length;i++){var a=o[i];0!==n[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={7:0},c=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=a;return c.push([519,0,2,1]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.apiFetch}()},11:function(e,t){!function(){e.exports=this.React}()},18:function(e,t){!function(){e.exports=this.wp.blocks}()},19:function(e,t){!function(){e.exports=this.wp.url}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},28:function(e,t){!function(){e.exports=this.wp.keycodes}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t,o){"use strict";o.d(t,"b",function(){return r});var r=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}}}},31:function(e,t,o){"use strict";var r=o(8),n=o.n(r),c=o(0),s=o(1),i=o(4),a=o.n(i),u=o(3),l=function(e){var t=e.onChange,o=e.settings,r=o.button,i=o.price,a=o.rating,l=o.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(s.__)("Product title","woo-gutenberg-products-block"),help:l?Object(s.__)("Product title is visible.","woo-gutenberg-products-block"):Object(s.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(n()({},o,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(s.__)("Product price","woo-gutenberg-products-block"),help:i?Object(s.__)("Product price is visible.","woo-gutenberg-products-block"):Object(s.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:i,onChange:function(){return t(n()({},o,{price:!i}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(s.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(s.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(s.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(n()({},o,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(s.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(s.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(s.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return t(n()({},o,{button:!r}))}}))};l.propTypes={settings:a.a.shape({button:a.a.bool.isRequired,price:a.a.bool.isRequired,rating:a.a.bool.isRequired,title:a.a.bool.isRequired}).isRequired,onChange:a.a.func.isRequired},t.a=l},34:function(e,t,o){"use strict";var r=o(0),n=o(1),c=o(5),s=o(4),i=o.n(s),a=o(3),u=function(e){var t=e.columns,o=e.rows,s=e.setAttributes,i=e.alignButtons;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_columns,wc_product_block_data.max_columns);s({columns:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(r.createElement)(a.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:o,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_rows,wc_product_block_data.max_rows);s({rows:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}),Object(r.createElement)(a.ToggleControl,{label:Object(n.__)("Align Add to Cart buttons","woo-gutenberg-products-block"),help:i?Object(n.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(n.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:i,onChange:function(){return s({alignButtons:!i})}}))};u.propTypes={columns:i.a.oneOfType([i.a.number,i.a.string]).isRequired,rows:i.a.oneOfType([i.a.number,i.a.string]).isRequired,alignButtons:i.a.bool.isRequired,setAttributes:i.a.func.isRequired},t.a=u},35:function(e,t,o){"use strict";var r=o(0),n=o(6),c=o.n(n),s=o(48),i=o.n(s);o.d(t,"a",function(){return a});var a=function(e){return function(t){var o=t.attributes,n=o.align,s=o.contentVisibility,a=c()(n?"align".concat(n):"",{"is-hidden-title":!s.title,"is-hidden-price":!s.price,"is-hidden-rating":!s.rating,"is-hidden-button":!s.button});return Object(r.createElement)(r.RawHTML,{className:a},function(e,t){var o=e.attributes,r=o.attributes,n=o.attrOperator,c=o.categories,s=o.catOperator,a=o.orderby,u=o.products,l=o.columns||wc_product_block_data.default_columns,b=o.rows||wc_product_block_data.default_rows,d=new Map;switch(d.set("limit",b*l),d.set("columns",l),c&&c.length&&(d.set("category",c.join(",")),s&&"all"===s&&d.set("cat_operator","AND")),r&&r.length&&(d.set("terms",r.map(function(e){return e.id}).join(",")),d.set("attribute",r[0].attr_slug),n&&"all"===n&&d.set("terms_operator","AND")),a&&("price_desc"===a?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===a?(d.set("orderby","price"),d.set("order","ASC")):"date"===a?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",a)),t){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!u.length)return"";d.set("ids",u.join(",")),d.set("limit",u.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!r||!r.length)return""}var p="[products",g=!0,m=!1,f=void 0;try{for(var _,h=d[Symbol.iterator]();!(g=(_=h.next()).done);g=!0){var w=i()(_.value,2);p+=" "+w[0]+'="'+w[1]+'"'}}catch(e){m=!0,f=e}finally{try{g||null==h.return||h.return()}finally{if(m)throw f}}return p+="]"}(t,e))}}},36:function(e,t){!function(){e.exports=this.ReactDOM}()},37:function(e,t,o){"use strict";var r=o(29),n=o.n(r),c=o(13),s=o.n(c),i=o(14),a=o.n(i),u=o(15),l=o.n(u),b=o(16),d=o.n(b),p=o(12),g=o.n(p),m=o(17),f=o.n(m),_=o(0),h=o(1),w=o(19),O=o(10),j=o.n(O),k=o(5),y=o(4),v=o.n(y),C=o(24),x=o(3),E=(o(79),function(e){function t(){var e;return s()(this,t),(e=l()(this,d()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(g()(e)),e}return f()(t,e),a()(t,[{key:"componentDidMount",value:function(){var e=this;j()({path:Object(w.addQueryArgs)("/wc/blocks/products/categories",{per_page:-1})}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(e){var t=e.item,o=e.search,r=e.depth,c=void 0===r?0:r,s=["woocommerce-product-categories__item"];o.length&&s.push("is-searching"),0===c&&0!==t.parent&&s.push("is-skip-level");var i=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(_.createElement)(C.b,n()({className:s.join(" ")},e,{showCount:!0,"aria-label":Object(h.sprintf)(Object(h._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),i,t.count)}))}},{key:"render",value:function(){var e=this.state,t=e.list,o=e.loading,r=this.props,n=r.onChange,c=r.onOperatorChange,s=r.operator,i=r.selected,a=r.isSingle,u={clear:Object(h.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(h.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(h.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(h.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(h.sprintf)(Object(h._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(h.__)("Category search results updated.","woo-gutenberg-products-block")};return Object(_.createElement)(_.Fragment,null,Object(_.createElement)(C.a,{className:"woocommerce-product-categories",list:t,isLoading:o,selected:i.map(function(e){return Object(k.find)(t,{id:e})}).filter(Boolean),onChange:n,renderItem:this.renderItem,messages:u,isHierarchical:!0,isSingle:a}),!!c&&Object(_.createElement)("div",{className:i.length<2?"screen-reader-text":""},Object(_.createElement)(x.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(h.__)("Display products matching","woo-gutenberg-products-block"),help:Object(h.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:s,onChange:c,options:[{label:Object(h.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(h.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(_.Component));E.propTypes={onChange:v.a.func.isRequired,onOperatorChange:v.a.func,operator:v.a.oneOf(["all","any"]),selected:v.a.array.isRequired,isSingle:v.a.bool},E.defaultProps={operator:"any",isSingle:!1},t.a=E},39:function(e,t){!function(){e.exports=this.wp.viewport}()},46:function(e,t){!function(){e.exports=this.wp.hooks}()},5:function(e,t){!function(){e.exports=this.lodash}()},51:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},519:function(e,t,o){"use strict";o.r(t);var r=o(8),n=o.n(r),c=o(0),s=o(1),i=o(18),a=o(5),u=o(25),l=o.n(u),b=o(13),d=o.n(b),p=o(14),g=o.n(p),m=o(15),f=o.n(m),_=o(16),h=o.n(_),w=o(17),O=o.n(w),j=o(3),k=o(9),y=o(4),v=o.n(y),C=o(31),x=o(34),E=o(37),P=function(e){function t(){return d()(this,t),f()(this,h()(t).apply(this,arguments))}return O()(t,e),g()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,o=e.setAttributes,r=t.categories,n=t.catOperator,i=t.columns,a=t.contentVisibility,u=t.rows,l=t.alignButtons;return Object(c.createElement)(k.InspectorControls,{key:"inspector"},Object(c.createElement)(j.PanelBody,{title:Object(s.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(x.a,{columns:i,rows:u,alignButtons:l,setAttributes:o})),Object(c.createElement)(j.PanelBody,{title:Object(s.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(C.a,{settings:a,onChange:function(e){return o({contentVisibility:e})}})),Object(c.createElement)(j.PanelBody,{title:Object(s.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{selected:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map(function(e){return e.id});o({categories:t})},operator:n,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return o({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,o=e.name;return Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(j.Disabled,null,Object(c.createElement)(k.ServerSideRender,{block:o,attributes:t})))}}]),t}(c.Component);P.propTypes={attributes:v.a.object.isRequired,name:v.a.string.isRequired,setAttributes:v.a.func.isRequired};var R=P,S=o(35),B=o(30);Object(i.registerBlockType)("woocommerce/product-best-sellers",{title:Object(s.__)("Best Selling Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(l.a,{icon:"stats-up-alt"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(s.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(s.__)("Display a grid of your all-time best selling products.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:n()({},B.a),transforms:{from:[{type:"block",blocks:Object(a.without)(B.b,"woocommerce/product-best-sellers"),transform:function(e){return Object(i.createBlock)("woocommerce/product-best-sellers",e)}}]},deprecated:[{attributes:B.a,save:Object(S.a)("woocommerce/product-best-sellers")}],edit:function(e){return Object(c.createElement)(R,e)},save:function(){return null}})},52:function(e,t){!function(){e.exports=this.wp.date}()},54:function(e,t){!function(){e.exports=this.wp.dom}()},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},7:function(e,t){!function(){e.exports=this.moment}()},9:function(e,t){!function(){e.exports=this.wp.editor}()}});