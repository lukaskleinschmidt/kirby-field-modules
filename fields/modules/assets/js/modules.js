!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),r=i(1),a=s(r);!function(t){var e=new a.default,i=!1,s=!1;e.on("change",function(t){console.log(t)});var r=function(){function r(i){var s=this;n(this,r),this.element=t(i),this.modules=t(".module",i),this.options={},this.options.api=this.element.data("api"),this.options.copy=this.element.data("copy"),console.log(this.options),e.collection=this.modules,e.recall(),this.element._sortable({handle:".module__preview, .module__title",start:function(i,n){s.element._sortable("refreshPositions"),e.add(t(n.item),!0),s.blur()}}),this.events()}return o(r,[{key:"blur",value:function(){t(".form input:focus, .form select:focus, .form textarea:focus").blur(),app.content.focus.forget()}},{key:"events",value:function(){var n=this,o=this;this.element.on("_sortableupdate",function(t,e){var i=n.element.children().index(e.item)+1,s=e.item.data("uid");n.disable(),n.action([s,i,"sort"].join("/"))}),this.element.on("click","[data-action]",function(e){var i=t(this),s=i.data("action")||i.attr("href");return t.post(s,o.reload.bind(o)),!1}),this.modules.on("click",function(e){n.select(t(e.delegateTarget))}),t(document).off(".modules").on("keydown.modules",function(t){switch(t.keyCode){case 16:if(i)return!0;i=!0;break;case 17:if(s)return!0;s=!0;break;case 67:if(!t.metaKey&&!t.ctrlKey)return!0;var o=e.selected();o.length&&n.action("copy",{modules:o});break;case 86:if(!t.metaKey&&!t.ctrlKey)return!0;e.selected().length&&app.modal.open(n.options.api+"/paste")}}).on("keyup.modules",function(t){switch(t.keyCode){case 16:i=!1;break;case 17:s=!1}}).on("click.modules",function(i){t(i.target).closest(".module").length||e.reset()})}},{key:"select",value:function(n){this.blur(),n=t(n),i&&s?e.batch(n):i?e.batch(n,!0):s?e.toggle(n):e.add(n,!0)}},{key:"action",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(this.options.api+"/"+e,i),t.post(this.options.api+"/"+e,i,this.reload.bind(this))}},{key:"disable",value:function(){this.element._sortable("disable")}},{key:"reload",value:function(){this.disable(),app.content.reload()}}]),r}();t.widget("ui._sortable",t.ui.sortable,{_mouseStart:function(e,i,s){var n,o,r=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this._createPlaceholder(),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",r.cursor),this.storedStylesheet=t("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(o)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0}}),t.fn.modules=function(){return this.each(function(){if(t(this).data("modules"))return t(this);var e=new r(this);return t(this).data("modules",e),t(this)})}}(jQuery)},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(){i(this,t),this.collection={},this.selection=[],this.pointer=0,this.events={},this.options={class:"is-selected",data:"uid"}}return s(t,[{key:"index",value:function(t){return this.selection.indexOf(t)}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e&&this.reset(),i&&(this.pointer=this.collection.index(t));var s=t.data(this.options.data);this.index(s)===-1&&(t.addClass(this.options.class),this.selection.push(s),this.trigger("change",this.selection))}},{key:"remove",value:function(t){var e=this.index(t.data(this.options.data));e!==-1&&(t.removeClass(this.options.class),this.selection.splice(e,1),this.trigger("change",this.selection))}},{key:"toggle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];i&&(this.pointer=this.collection.index(t)),this.index(t.data(this.options.data))===-1?this.add(t,e,!1):this.remove(t)}},{key:"batch",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i&&this.reset();var s=this.collection.index(t),n=this.pointer;n>s&&(n=s,s=this.pointer);var o=this.collection.filter(function(t){return t>=n&&t<=s});o.each(function(t,i){e.add($(i),!1,!1)})}},{key:"selected",value:function(){var t=this,e=[];return this.collection.each(function(i,s){var n=$(s).data(t.options.data);t.index(n)!==-1&&e.push(n)}),e}},{key:"recall",value:function(){var t=this;this.selection.length&&this.collection.filter(function(e,i){return t.index($(i).data(t.options.data))!==-1}).addClass(this.options.class)}},{key:"reset",value:function(){this.collection.removeClass(this.options.class),this.selection=[]}},{key:"on",value:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)}},{key:"off",value:function(t,e){t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)}},{key:"trigger",value:function(t){if(t in this.events!=!1)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}}]),t}();e.default=n}]);