(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{96:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__),react_flv_player__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(53),react_flv_player__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_flv_player__WEBPACK_IMPORTED_MODULE_2__),carbon_components_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(98),carbon_components_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),carbon_components_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(100),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var a=t[_];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var _,a=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;_=Reflect.construct(a,arguments,n)}else _=a.apply(this,arguments);return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},fetch=__webpack_require__(49),ScrollArea=__webpack_require__(54),Player=function(_React$Component){_inherits(Player,_React$Component);var _super=_createSuper(Player);function Player(e){var t;return _classCallCheck(this,Player),_defineProperty(_assertThisInitialized(t=_super.call(this,e)),"getmessages",(function(){return new Promise((function(e,_){fetch(t.state.chatLink).then((function(t){e(t.json())})).catch((function(e){return _(e)}))}))})),_defineProperty(_assertThisInitialized(t),"fetchData",(function(){t.getmessages().then((function(e){t.setState({messagesList:e})}))})),_defineProperty(_assertThisInitialized(t),"recieveData",(function(){t.getmessages().then((function(e){t.setState({messagesList:e})})).then(t.scrollToBottom())})),_defineProperty(_assertThisInitialized(t),"scrollToBottom",(function(){t.messagesEnd&&t.messagesEnd.scrollIntoView({behavior:"smooth"})})),_defineProperty(_assertThisInitialized(t),"handleWindowSizeChange",(function(){t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth}),t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.playerHeight!==t.divElement.clientHeight&&t.setState({playerHeight:t.divElement.clientHeight})})),_defineProperty(_assertThisInitialized(t),"submitMessage",(function(e){e.preventDefault(),t.state.inputValue?(fetch(t.state.chatLink+"?message="+t.state.inputValue).then(t.setState({inputValue:""})),t.recieveData()):alert("There was no message to send...")})),_defineProperty(_assertThisInitialized(t),"render",(function(){return t.state.width<=500?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container bx--theme--g100"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__.Content,_defineProperty({id:"main-content",style:{backgroundColor:"transparent"}},"style",{height:"75%"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{style:{width:"100%",height:"100%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"70%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"10px",margin:"10px",backgroundClip:"padding-box",backgroundColor:"#FFFFFF",height:"100%"},className:"test",ref:function(e){t.divElement=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flv_player__WEBPACK_IMPORTED_MODULE_2__.ReactFlvPlayer,{url:t.state.streamLink,heigh:"100%",width:"100%",style:{padding:"10px"}})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"30%",verticalAlign:"top"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"10px",margin:"10px",backgroundClip:"padding-box",backgroundColor:"#FFFFFF",height:t.state.playerHeight}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{overflowY:"scroll",height:t.state.playerHeight-t.state.formHeight-75}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{style:{fontFamily:"Candara",fontWeight:"normal",fontSize:"1rem",color:"#808080",paddingBottom:"0px",height:"1.5rem"}},t.state.messagesList.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:_,style:{padding:"5px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,e.date),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{color:"#000000"}},e.content),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{clear:"both",bottom:"0px"},ref:function(e){t.messagesEnd=e}}))})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"test",ref:function(e){t.formElement=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onSubmit:t.submitMessage,style:{alignContent:"center",width:"100%",paddingBottom:"0px",verticalAlign:"bottom",height:"0"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"100%",display:"inline-flex"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{id:"Message_Box",placeholder:"Message",style:{fontFamily:"Candara",fontWeight:"normal",fontSize:"1rem"},onChange:function(e){return t.updateInputValue(e)},value:t.state.inputValue}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{style:{backgroundColor:"#005eb8",fontSize:"1rem"},hasIconOnly:!0,renderIcon:_carbon_icons_react__WEBPACK_IMPORTED_MODULE_6__.bc,tooltipAlignment:"center",tooltipPosition:"bottom",iconDescription:"Send Message",size:"field",type:"submit"}))))))))))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container bx--theme--g100"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__.Content,{id:"main-content",style:{backgroundColor:"transparent"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{style:{width:"100%",height:"100%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"70%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"10px",margin:"10px",backgroundClip:"padding-box",backgroundColor:"#FFFFFF",height:"100%"},className:"test",ref:function(e){t.divElement=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flv_player__WEBPACK_IMPORTED_MODULE_2__.ReactFlvPlayer,{url:t.state.streamLink,heigh:"100%",width:"100%",isMuted:!0,style:{padding:"10px"}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"30%",verticalAlign:"top"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"10px",margin:"10px",backgroundClip:"padding-box",backgroundColor:"#FFFFFF",height:t.state.playerHeight}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{overflowY:"scroll",height:t.state.playerHeight-t.state.formHeight-75}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{style:{fontFamily:"Candara",fontWeight:"normal",fontSize:"1rem",color:"#808080",paddingBottom:"0px",height:"1.5rem"}},t.state.messagesList.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:_,style:{padding:"5px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,e.date),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{color:"#000000"}},e.content),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{clear:"both",bottom:"0px"},ref:function(e){t.messagesEnd=e}}))})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:function(e){t.formElement=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__.a,{onSubmit:t.submitMessage,style:{alignContent:"center",width:"100%",paddingBottom:"0px",verticalAlign:"bottom",height:"0"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{style:{width:"100%",display:"inline-flex"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_4__.a,{id:"Message_Box",placeholder:"Message",style:{fontFamily:"Candara",fontWeight:"normal",fontSize:"1rem"},onChange:function(e){return t.updateInputValue(e)},value:t.state.inputValue,labelText:""}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_5__.a,{style:{backgroundColor:"#005eb8",fontSize:"1rem"},hasIconOnly:!0,renderIcon:_carbon_icons_react__WEBPACK_IMPORTED_MODULE_6__.bc,tooltipAlignment:"center",tooltipPosition:"bottom",iconDescription:"Send Message",size:"field",type:"submit",disabled:t.state.timeout})))))))))))})),console.log(e.chatLink),console.log(e.videoLink),t.state={messagesList:[],playerHeight:0,formHeight:0,width:window.innerWidth,height:window.innerHeight,inputValue:"",chatLink:e.chatLink,streamLink:e.videoLink},t}return _createClass(Player,[{key:"componentDidMount",value:function(){this.fetchData(),this.timer=setInterval(this.fetchData,2e3),window.addEventListener("resize",this.handleWindowSizeChange);var e=this.divElement.clientHeight;this.setState({playerHeight:e});var t=this.formElement.clientHeight;this.setState({formHeight:t}),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){}},{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Player}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Player,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Player,"Player","C:\\Users\\JoshuaSanderson\\Downloads\\DONT ASK\\WebsiteConponents\\src\\View\\PlayerNew.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\JoshuaSanderson\\Downloads\\DONT ASK\\WebsiteConponents\\src\\View\\PlayerNew.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(8)(module))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVmlldy9QbGF5ZXJOZXcuanN4Il0sIm5hbWVzIjpbImZldGNoIiwicmVxdWlyZSIsIlNjcm9sbEFyZWEiLCJQbGF5ZXIiLCJwcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdGUiLCJjaGF0TGluayIsInRoZW4iLCJyIiwianNvbiIsImUiLCJnZXRtZXNzYWdlcyIsInNldFN0YXRlIiwibWVzc2FnZXNMaXN0Iiwic2Nyb2xsVG9Cb3R0b20iLCJtZXNzYWdlc0VuZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInBsYXllckhlaWdodCIsImRpdkVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRWYWx1ZSIsInJlY2lldmVEYXRhIiwiYWxlcnQiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwicmVmIiwidXJsIiwic3RyZWFtTGluayIsImhlaWdoIiwiZm9ybUhlaWdodCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsImRhdGUiLCJjb250ZW50IiwiZWwiLCJmb3JtRWxlbWVudCIsIm9uU3VibWl0Iiwic3VibWl0TWVzc2FnZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldnQiLCJ1cGRhdGVJbnB1dFZhbHVlIiwidmFsdWUiLCJoYXNJY29uT25seSIsInJlbmRlckljb24iLCJTZW5kMzIiLCJ0b29sdGlwQWxpZ25tZW50IiwidG9vbHRpcFBvc2l0aW9uIiwiaWNvbkRlc2NyaXB0aW9uIiwic2l6ZSIsInR5cGUiLCJpc011dGVkIiwibGFiZWxUZXh0IiwiZGlzYWJsZWQiLCJ0aW1lb3V0IiwiY29uc29sZSIsImxvZyIsInZpZGVvTGluayIsInRoaXMiLCJmZXRjaERhdGEiLCJ0aW1lciIsInNldEludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJ0YXJnZXQiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiNjVHQU9NQSxNQUFRQyxvQkFBUSxJQUNsQkMsV0FBYUQsb0JBQVEsSUFFbkJFLE8sOEZBVUYsZ0JBQVlDLEdBQU8saUZBQ2YsbUJBQU1BLElBRFMsZUFSTCxXQUNWLE9BQU8sSUFBSUMsU0FBUSxTQUFDQyxFQUFTQyxHQUN6QlAsTUFBTSxFQUFLUSxNQUFNQyxVQUNaQyxNQUFLLFNBQUFDLEdBQU9MLEVBQVFLLEVBQUVDLFdBRDNCLE9BRVcsU0FBQUMsR0FBQyxPQUFJTixFQUFPTSxZQUlaLHVEQXlDUCxXQUNSLEVBQUtDLGNBQWNKLE1BQUssU0FBQUMsR0FBTyxFQUFLSSxTQUFTLENBQUVDLGFBQWNMLFVBMUM5Qyx5REE2Q0wsV0FDVixFQUFLRyxjQUFjSixNQUFLLFNBQUFDLEdBQU8sRUFBS0ksU0FBUyxDQUFFQyxhQUFjTCxPQUFRRCxLQUFLLEVBQUtPLHFCQTlDaEUsNERBaURGLFdBQ1QsRUFBS0MsYUFBZSxFQUFLQSxZQUFZQyxlQUFlLENBQUVDLFNBQVUsY0FsRHJELG9FQXNETSxXQUNqQixFQUFLWixNQUFNYSxRQUFVQyxPQUFPQyxZQUM1QixFQUFLUixTQUFTLENBQUVNLE1BQU9DLE9BQU9DLGFBRTlCLEVBQUtmLE1BQU1nQixTQUFXRixPQUFPRyxhQUM3QixFQUFLVixTQUFTLENBQUVTLE9BQVFGLE9BQU9HLGNBRS9CLEVBQUtqQixNQUFNa0IsZUFBaUIsRUFBS0MsV0FBV0MsY0FDNUMsRUFBS2IsU0FBUyxDQUFFVyxhQUFjLEVBQUtDLFdBQVdDLGtCQTlEbkMsMkRBa0VILFNBQUNDLEdBQ2JBLEVBQU1DLGlCQUNGLEVBQUt0QixNQUFNdUIsWUFDWC9CLE1BQU0sRUFBS1EsTUFBTUMsU0FBVyxZQUFjLEVBQUtELE1BQU11QixZQUFZckIsS0FBSyxFQUFLSyxTQUFTLENBQUVnQixXQUFZLE1BQ2xHLEVB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QVcsU0FBWSxRQUNuRHFCLGFBQVcsRUFDWEMsV0FBWUMsb0RBQ1pDLGlCQUFpQixTQUNqQkMsZ0JBQWdCLFNBQ2hCQyxnQkFBZ0IsZUFDaEJDLEtBQUssUUFDTEMsS0FBSyxTQUNMRyxTQUFVLEVBQUszRCxNQUFNNEQsdUJBMUx6RUMsUUFBUUMsSUFBSWxFLEVBQU1LLFVBQ2xCNEQsUUFBUUMsSUFBSWxFLEVBQU1tRSxXQUNsQixFQUFLL0QsTUFBUSxDQUNUUSxhQUFjLEdBQ2RVLGFBQWMsRUFDZGUsV0FBWSxFQUNacEIsTUFBT0MsT0FBT0MsV0FDZEMsT0FBUUYsT0FBT0csWUFDZk0sV0FBWSxHQUNadEIsU0FBVUwsRUFBTUssU0FDaEI4QixXQUFZbkMsRUFBTW1FLFdBWlAsRSxzRUFpQmZDLEtBQUtDLFlBQ0xELEtBQUtFLE1BQVFDLFlBQVlILEtBQUtDLFVBQVcsS0FDekNuRCxPQUFPc0QsaUJBQWlCLFNBQVVKLEtBQUtLLHdCQUN2QyxJQUFNbkQsRUFBZThDLEtBQUs3QyxXQUFXQyxhQUNyQzRDLEtBQUt6RCxTQUFTLENBQUVXLGlCQUNoQixJQUFNZSxFQUFhK0IsS0FBS3ZCLFlBQVlyQixhQUNwQzRDLEtBQUt6RCxTQUFTLENBQUUwQixlQUNoQitCLEtBQUt2RCxtQixxRkFNUXFDLEdBQ2JrQixLQUFLekQsU0FBUyxDQUNWZ0IsV0FBWXVCLEVBQUl3QixPQUFPdEIsVSw2Q0FLM0J1QixjQUFjUCxLQUFLRSxPQUNuQnBELE9BQU8wRCxvQkFBb0IsU0FBVVIsS0FBS0ssMEIsbUlBaEQ3QkksNkNBQU1DLFcsU0F1TlovRSxPLDJCQUFBLHFDLHFJQXZOVEEsTyIsImZpbGUiOiIxMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIENvbnRlbnQsXG59IGZyb20gJ2NhcmJvbi1jb21wb25lbnRzLXJlYWN0L2xpYi9jb21wb25lbnRzL1VJU2hlbGwnXG5pbXBvcnQgeyBSZWFjdEZsdlBsYXllciB9IGZyb20gJ3JlYWN0LWZsdi1wbGF5ZXInXG5pbXBvcnQgeyBUZXh0SW5wdXQsIEJ1dHRvbiwgRm9ybSB9IGZyb20gJ2NhcmJvbi1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IHsgU2VuZDMyIH0gZnJvbSAnQGNhcmJvbi9pY29ucy1yZWFjdCdcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXG52YXIgU2Nyb2xsQXJlYSA9IHJlcXVpcmUoJ3JlYWN0LXNjcm9sbGJhcicpO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgZ2V0bWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmZXRjaCh0aGlzLnN0YXRlLmNoYXRMaW5rKVxuICAgICAgICAgICAgICAgIC50aGVuKHIgPT4geyByZXNvbHZlKHIuanNvbigpKSB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHJlamVjdChlKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMuY2hhdExpbmspXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnZpZGVvTGluaylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzTGlzdDogW10sXG4gICAgICAgICAgICBwbGF5ZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgICBmb3JtSGVpZ2h0OiAwLFxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgY2hhdExpbms6IHByb3BzLmNoYXRMaW5rLFxuICAgICAgICAgICAgc3RyZWFtTGluazogcHJvcHMudmlkZW9MaW5rXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hEYXRhLCAyMDAwKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKVxuICAgICAgICBjb25zdCBwbGF5ZXJIZWlnaHQgPSB0aGlzLmRpdkVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5ZXJIZWlnaHQgfSlcbiAgICAgICAgY29uc3QgZm9ybUhlaWdodCA9IHRoaXMuZm9ybUVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtSGVpZ2h0IH0pXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB9XG5cbiAgICB1cGRhdGVJbnB1dFZhbHVlKGV2dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IGV2dC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpXG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdldG1lc3NhZ2VzKCkudGhlbihyID0+IHsgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzTGlzdDogciB9KSB9KVxuICAgIH1cblxuICAgIHJlY2lldmVEYXRhID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdldG1lc3NhZ2VzKCkudGhlbihyID0+IHsgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzTGlzdDogciB9KSB9KS50aGVuKHRoaXMuc2Nyb2xsVG9Cb3R0b20oKSlcbiAgICB9XG5cbiAgICBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXNFbmQpIHsgdGhpcy5tZXNzYWdlc0VuZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KSB9XG5cbiAgICB9XG5cbiAgICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheWVySGVpZ2h0ICE9PSB0aGlzLmRpdkVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGxheWVySGVpZ2h0OiB0aGlzLmRpdkVsZW1lbnQuY2xpZW50SGVpZ2h0IH0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc3VibWl0TWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGZldGNoKHRoaXMuc3RhdGUuY2hhdExpbmsgKyAnP21lc3NhZ2U9JyArIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkudGhlbih0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogXCJcIiB9KSlcbiAgICAgICAgICAgIHRoaXMucmVjaWV2ZURhdGEoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgbm8gbWVzc2FnZSB0byBzZW5kLi4uXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2lkdGggPD0gNTAwO1xuXG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJ4LS10aGVtZS0tZzEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBpZD1cIm1haW4tY29udGVudFwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAndHJhbnNwYXJlbnQnIH19IHN0eWxlPXt7ICdoZWlnaHQnOiAnNzUlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBcIndpZHRoXCI6IFwiMTAwJVwiLCBcImhlaWdodFwiOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBcIndpZHRoXCI6IFwiNzAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcInBhZGRpbmdcIjogXCIxMHB4XCIsIFwibWFyZ2luXCI6IFwiMTBweFwiLCBcImJhY2tncm91bmRDbGlwXCI6IFwicGFkZGluZy1ib3hcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsIFwiaGVpZ2h0XCI6IFwiMTAwJVwiIH19IGNsYXNzTmFtZT1cInRlc3RcIiByZWY9eyhkaXZFbGVtZW50KSA9PiB7IHRoaXMuZGl2RWxlbWVudCA9IGRpdkVsZW1lbnQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZsdlBsYXllciB1cmw9e3RoaXMuc3RhdGUuc3RyZWFtTGlua30gaGVpZ2g9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgc3R5bGU9e3sgXCJwYWRkaW5nXCI6IFwiMTBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgXCJ3aWR0aFwiOiBcIjMwJVwiLCBcInZlcnRpY2FsQWxpZ25cIjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwicGFkZGluZ1wiOiBcIjEwcHhcIiwgXCJtYXJnaW5cIjogXCIxMHB4XCIsIFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogdGhpcy5zdGF0ZS5wbGF5ZXJIZWlnaHQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgJ292ZXJmbG93WSc6ICdzY3JvbGwnLCBcImhlaWdodFwiOiB0aGlzLnN0YXRlLnBsYXllckhlaWdodCAtIHRoaXMuc3RhdGUuZm9ybUhlaWdodCAtIDc1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7ICdmb250RmFtaWx5JzogJ0NhbmRhcmEnLCAnZm9udFdlaWdodCc6ICdub3JtYWwnLCAnZm9udFNpemUnOiAnMXJlbScsICdjb2xvcic6ICcjODA4MDgwJywgJ3BhZGRpbmdCb3R0b20nOiAnMHB4JywgJ2hlaWdodCc6ICcxLjVyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyAncGFkZGluZyc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgID57aXRlbS5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7ICdjb2xvcic6ICcjMDAwMDAwJyB9fT57aXRlbS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgJ2NsZWFyJzogXCJib3RoXCIsICdib3R0b20nOiAnMHB4JyB9fSByZWY9eyhlbCkgPT4geyB0aGlzLm1lc3NhZ2VzRW5kID0gZWwgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCIgcmVmPXsoZGl2RWxlbWVudCkgPT4geyB0aGlzLmZvcm1FbGVtZW50ID0gZGl2RWxlbWVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdE1lc3NhZ2V9IHN0eWxlPXt7ICdhbGlnbkNvbnRlbnQnOiAnY2VudGVyJywgJ3dpZHRoJzogJzEwMCUnLCAncGFkZGluZ0JvdHRvbSc6ICcwcHgnLCBcInZlcnRpY2FsQWxpZ25cIjogXCJib3R0b21cIiwgJ2hlaWdodCc6ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgXCJ3aWR0aFwiOiBcIjEwMCVcIiwgJ2Rpc3BsYXknOiAnaW5saW5lLWZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIk1lc3NhZ2VfQm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAnZm9udEZhbWlseSc6ICdDYW5kYXJhJywgJ2ZvbnRXZWlnaHQnOiAnbm9ybWFsJywgJ2ZvbnRTaXplJzogJzFyZW0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHRoaXMudXBkYXRlSW5wdXRWYWx1ZShldnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMDA1ZWI4JywgJ2ZvbnRTaXplJzogJzFyZW0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNJY29uT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySWNvbj17U2VuZDMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkRlc2NyaXB0aW9uPVwiU2VuZCBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J2ZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJ4LS10aGVtZS0tZzEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBpZD1cIm1haW4tY29udGVudFwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IFwid2lkdGhcIjogXCIxMDAlXCIsIFwiaGVpZ2h0XCI6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IFwid2lkdGhcIjogXCI3MCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwicGFkZGluZ1wiOiBcIjEwcHhcIiwgXCJtYXJnaW5cIjogXCIxMHB4XCIsIFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogXCIxMDAlXCIgfX0gY2xhc3NOYW1lPVwidGVzdFwiIHJlZj17KGRpdkVsZW1lbnQpID0+IHsgdGhpcy5kaXZFbGVtZW50ID0gZGl2RWxlbWVudCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Rmx2UGxheWVyIHVybD17dGhpcy5zdGF0ZS5zdHJlYW1MaW5rfSBoZWlnaD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBpc011dGVkPXt0cnVlfSBzdHlsZT17eyBcInBhZGRpbmdcIjogXCIxMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgXCJ3aWR0aFwiOiBcIjMwJVwiLCBcInZlcnRpY2FsQWxpZ25cIjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwicGFkZGluZ1wiOiBcIjEwcHhcIiwgXCJtYXJnaW5cIjogXCIxMHB4XCIsIFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogdGhpcy5zdGF0ZS5wbGF5ZXJIZWlnaHQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgJ292ZXJmbG93WSc6ICdzY3JvbGwnLCBcImhlaWdodFwiOiB0aGlzLnN0YXRlLnBsYXllckhlaWdodCAtIHRoaXMuc3RhdGUuZm9ybUhlaWdodCAtIDc1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7ICdmb250RmFtaWx5JzogJ0NhbmRhcmEnLCAnZm9udFdlaWdodCc6ICdub3JtYWwnLCAnZm9udFNpemUnOiAnMXJlbScsICdjb2xvcic6ICcjODA4MDgwJywgJ3BhZGRpbmdCb3R0b20nOiAnMHB4JywgJ2hlaWdodCc6ICcxLjVyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyAncGFkZGluZyc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgID57aXRlbS5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7ICdjb2xvcic6ICcjMDAwMDAwJyB9fT57aXRlbS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgJ2NsZWFyJzogXCJib3RoXCIsICdib3R0b20nOiAnMHB4JyB9fSByZWY9eyhlbCkgPT4geyB0aGlzLm1lc3NhZ2VzRW5kID0gZWwgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyhkaXZFbGVtZW50KSA9PiB7IHRoaXMuZm9ybUVsZW1lbnQgPSBkaXZFbGVtZW50IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0TWVzc2FnZX0gc3R5bGU9e3sgJ2FsaWduQ29udGVudCc6ICdjZW50ZXInLCAnd2lkdGgnOiAnMTAwJScsICdwYWRkaW5nQm90dG9tJzogJzBweCcsIFwidmVydGljYWxBbGlnblwiOiBcImJvdHRvbVwiLCAnaGVpZ2h0JzogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBcIndpZHRoXCI6IFwiMTAwJVwiLCAnZGlzcGxheSc6ICdpbmxpbmUtZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTWVzc2FnZV9Cb3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ICdmb250RmFtaWx5JzogJ0NhbmRhcmEnLCAnZm9udFdlaWdodCc6ICdub3JtYWwnLCAnZm9udFNpemUnOiAnMXJlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gdGhpcy51cGRhdGVJbnB1dFZhbHVlKGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMDA1ZWI4JywgJ2ZvbnRTaXplJzogJzFyZW0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNJY29uT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySWNvbj17U2VuZDMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkRlc2NyaXB0aW9uPVwiU2VuZCBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J2ZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS50aW1lb3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9