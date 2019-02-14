(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(9),o=a.n(n),i=(a(15),a(2)),l=a(3),u=a(5),c=a(4),d=a(6),h=a(1),p=a.n(h),b=(a(21),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"header main-header"},"IP Subnet Calculator"))}}]),t}(s.Component)),m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-text"},r.a.createElement("p",null,"created by ",r.a.createElement("a",{href:"https://github.com/kaisukez/subnetcal"},"Nattapon Chantasiriworawat")))}}]),t}(s.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderOptions",value:function(){return this.props.options.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.name)})}},{key:"generateError",value:function(){return this.props.isIPValid?null:r.a.createElement("div",{className:"input-row",id:"invalid-ip"},"invalid ipv4")}},{key:"render",value:function(){return r.a.createElement("div",{className:"my-box input-box"},r.a.createElement("div",{className:"input-row row"},r.a.createElement("div",{className:"input-text col-3"},"Network Class"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"radio",name:"class",value:"any",id:"any",onChange:this.props.networkClassHandler,defaultChecked:!0}),r.a.createElement("label",{htmlFor:"any"},"Any"),r.a.createElement("input",{type:"radio",name:"class",value:"a",id:"a",onChange:this.props.networkClassHandler}),r.a.createElement("label",{htmlFor:"a"},"A"),r.a.createElement("input",{type:"radio",name:"class",value:"b",id:"b",onChange:this.props.networkClassHandler}),r.a.createElement("label",{htmlFor:"b"},"B"),r.a.createElement("input",{type:"radio",name:"class",value:"c",id:"c",onChange:this.props.networkClassHandler}),r.a.createElement("label",{htmlFor:"c"},"C"))),r.a.createElement("div",{className:"input-row row"},r.a.createElement("div",{className:"input-text col-3"},"Subnet"),r.a.createElement("div",{className:"col-9"},r.a.createElement("select",{onChange:this.props.subnetHandler,value:this.props.subnetValue},this.renderOptions()))),r.a.createElement("div",{className:"input-row row"},r.a.createElement("div",{className:"input-text col-3"},"IP Address"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"text",onChange:this.props.ipHandler,value:this.props.ip}),this.generateError())))}}]),t}(s.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"generateRow2",value:function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",null,t))}},{key:"generateRow3",value:function(e,t,a,s){return r.a.createElement("tr",{key:s},r.a.createElement("td",null,e),r.a.createElement("td",null,t),r.a.createElement("td",null,a))}},{key:"generateAllPossibleNetworkRow",value:function(){var e=this;return this.props.allPossibleNetwork.map(function(t,a){return e.generateRow3(t.networkAddress,t.usableHostRange,t.broadcastAddress,a)})}},{key:"generateAllPossibleNetworkHeader",value:function(){return this.props.subnetValue<=7?r.a.createElement("h2",{className:"header sub-header"},"All Possible ",this.props.cidr," Networks"):r.a.createElement("h2",{className:"header sub-header"},"All Possible ",this.props.cidr," Networks for ",this.props.networkAddressForH1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"my-box result-box"},r.a.createElement("h2",{className:"header sub-header"},"Result"),r.a.createElement("table",{className:"table table-sm table-hover"},r.a.createElement("tbody",null,this.generateRow2("IP Address",this.props.ipAddress),this.generateRow2("Network Address",this.props.networkAddress),this.generateRow2("Usable Host IP Range",this.props.usableHostIPRange),this.generateRow2("Broadcast Address",this.props.broadcastAddress),this.generateRow2("Total Number of Hosts",this.props.hosts),this.generateRow2("Number of Usable Hosts",this.props.usableHosts),this.generateRow2("Subnet Mask",this.props.subnetNumber),this.generateRow2("Wildcard Mask",this.props.wildcardMask),this.generateRow2("Binary Subnet Mask",this.props.binarySubnetMask),this.generateRow2("IP Class",this.props.ipClass),this.generateRow2("CIDR Notation",this.props.cidr),this.generateRow2("IP Type",this.props.ipType),this.generateRow2("Short",this.props.ipAddress+this.props.cidr),this.generateRow2("Binary ID",this.props.binaryID),this.generateRow2("Integer ID",this.props.integerID),this.generateRow2("Hex ID",this.props.hexID))),r.a.createElement("div",{className:"space space-between-result"}),this.generateAllPossibleNetworkHeader(),r.a.createElement("table",{className:"table table-sm table-hover"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Network Address"),r.a.createElement("th",null,"Usable Host Range"),r.a.createElement("th",null,"Broadcast Address"))),r.a.createElement("tbody",null,this.generateAllPossibleNetworkRow())))}}]),t}(s.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={hasResult:!1,networkClass:"any",options:a.generateSubnet(32),ip:"158.108.12.34",isIPValid:!0,ipAddress:"158.108.12.34",networkAddress:"158.108.12.0",usableHostIPRange:"158.108.12.1 - 158.108.12.254",broadcastAddress:"158.108.12.255",hosts:"256",usableHosts:"254",subnetValue:"24",wildcardMask:"0.0.0.255",ipClass:"C",cidr:"/24",ipType:"Public",networkAddressForH1:"158.108.12.*",allPossibleNetwork:Array(1).fill().map(function(e,t){var a=p.a.fromLong(p.a.toLong("158.108.12.0")+256*t),s=p.a.subnet(a,p.a.fromPrefixLen("24"));return{networkAddress:a,usableHostRange:s.firstAddress+" - "+s.lastAddress,broadcastAddress:s.broadcastAddress}})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"networkClassHandler",value:function(e){this.setState({networkClass:e.target.value,subnetValue:24},this.manageOptions)}},{key:"subnetHandler",value:function(e){var t,a,s,r=p.a.cidrSubnet(this.state.ip+"/"+e.target.value);"31"===e.target.value?(t="None",a=2,s=0):"32"===e.target.value?(t="None",a=1,s=0):(t=r.firstAddress+" - "+r.lastAddress,a=p.a.toLong(r.lastAddress)-p.a.toLong(r.firstAddress)+1+2,s=p.a.toLong(r.lastAddress)-p.a.toLong(r.firstAddress)+1),this.setState({subnetValue:e.target.value,cidr:"/"+e.target.value,ipClass:this.calIPClass(e.target.value),wildcardMask:p.a.not(p.a.fromPrefixLen(e.target.value)),networkAddress:p.a.mask(this.state.ip,p.a.fromPrefixLen(e.target.value)),broadcastAddress:r.broadcastAddress,usableHostIPRange:t,hosts:a,usableHosts:s,networkAddressForH1:this.calNetworkAddressForH1(p.a.mask(this.state.ip,p.a.fromPrefixLen(e.target.value)),e.target.value),allPossibleNetwork:this.calAllPossibleNetwork(p.a.mask(this.state.ip,p.a.fromPrefixLen(e.target.value)),e.target.value)})}},{key:"ipHandler",value:function(e){if(this.setState({ip:e.target.value}),p.a.isV4Format(e.target.value)&&e.target.value.split(".").every(function(e){return e<=255})){var t,a,s,r=p.a.cidrSubnet(e.target.value+"/"+this.state.subnetValue);"31"===this.state.subnetValue?(t="None",a=2,s=0):"32"===this.state.subnetValue?(t="None",a=1,s=0):(t=r.firstAddress+" - "+r.lastAddress,a=p.a.toLong(r.lastAddress)-p.a.toLong(r.firstAddress)+1+2,s=p.a.toLong(r.lastAddress)-p.a.toLong(r.firstAddress)+1),this.setState({isIPValid:!0,ipAddress:e.target.value,networkAddress:p.a.mask(e.target.value,p.a.fromPrefixLen(this.state.subnetValue)),ipType:p.a.isPrivate(e.target.value)?"Private":"Public",broadcastAddress:r.broadcastAddress,usableHostIPRange:t,hosts:a,usableHosts:s,networkAddressForH1:this.calNetworkAddressForH1(p.a.mask(e.target.value,p.a.fromPrefixLen(this.state.subnetValue)),this.state.subnetValue),allPossibleNetwork:this.calAllPossibleNetwork(p.a.mask(e.target.value,p.a.fromPrefixLen(this.state.subnetValue)),this.state.subnetValue)})}else this.setState({isIPValid:!1})}},{key:"generateSubnet",value:function(e){return Array(e).fill().map(function(e,t){return{name:p.a.fromPrefixLen(32-t)+" / "+(32-t),value:32-t,number:p.a.fromPrefixLen(32-t)}})}},{key:"manageOptions",value:function(){var e;"any"===this.state.networkClass&&(e=this.generateSubnet(32)),"a"===this.state.networkClass&&(e=this.generateSubnet(25)),"b"===this.state.networkClass&&(e=this.generateSubnet(17)),"c"===this.state.networkClass&&(e=this.generateSubnet(9)),this.setState({options:e})}},{key:"calIPClass",value:function(e){return e>=24?"C":e>=16?"B":e>=8?"A":"None"}},{key:"calAllPossibleNetwork",value:function(e,t){var a=Math.pow(2,32-t),s=this.calRound(t);return e=this.calNetworkAddressFromPrefix(e,t),Array(s).fill().map(function(s,r){var n=p.a.fromLong(p.a.toLong(e)+a*r),o=p.a.subnet(n,p.a.fromPrefixLen(t)),i=o.firstAddress+" - "+o.lastAddress;return t>=31&&(i="None"),{networkAddress:n,usableHostRange:i,broadcastAddress:o.broadcastAddress}})}},{key:"calRound",value:function(e){return e>=24?Math.pow(2,e-24):e>=16?Math.pow(2,e-16):e>=8?Math.pow(2,e-8):Math.pow(2,e)}},{key:"calNetworkAddressFromPrefix",value:function(e,t){return t>=24?p.a.mask(e,p.a.fromPrefixLen(24)):t>=16?p.a.mask(e,p.a.fromPrefixLen(16)):t>=8?p.a.mask(e,p.a.fromPrefixLen(8)):p.a.mask(e,p.a.fromPrefixLen(0))}},{key:"calNetworkAddressForH1",value:function(e,t){return t>=24?e.split(".").map(function(e,t){return t>=3?"*":e}).join("."):t>=16?e.split(".").map(function(e,t){return t>=2?"*":e}).join("."):t>=8?e.split(".").map(function(e,t){return t>=1?"*":e}).join("."):e.split(".").map(function(){return"*"}).join(".")}},{key:"render",value:function(){var e=p.a.toLong(p.a.fromPrefixLen(this.state.subnetValue)).toString(2);return e=[e.slice(0,8),".",e.slice(8,16),".",e.slice(16,24),".",e.slice(24)],r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"space space-main-header"}),r.a.createElement(f,{networkClassHandler:this.networkClassHandler.bind(this),subnetHandler:this.subnetHandler.bind(this),ipHandler:this.ipHandler.bind(this),options:this.state.options,subnetValue:this.state.subnetValue,ip:this.state.ip,isIPValid:this.state.isIPValid}),r.a.createElement("div",{className:"space space-input-box"}),r.a.createElement(w,{hasResult:this.state.hasResult,networkClass:this.state.networkClass,subnetValue:this.state.subnetValue,subnetNumber:p.a.fromPrefixLen(this.state.subnetValue),ip:this.state.ip,ipAddress:this.state.ipAddress,networkAddress:this.state.networkAddress,usableHostIPRange:this.state.usableHostIPRange,broadcastAddress:this.state.broadcastAddress,hosts:this.state.hosts,usableHosts:this.state.usableHosts,wildcardMask:this.state.wildcardMask,binarySubnetMask:e,ipClass:this.state.ipClass,cidr:this.state.cidr,ipType:this.state.ipType,binaryID:p.a.toLong(this.state.ipAddress).toString(2),integerID:p.a.toLong(this.state.ipAddress).toString(10),hexID:p.a.toLong(this.state.ipAddress).toString(16),networkAddressForH1:this.state.networkAddressForH1,allPossibleNetwork:this.state.allPossibleNetwork}),r.a.createElement("div",{className:"space space-result-box"}),r.a.createElement(m,null))}}]),t}(s.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/subnetcal",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/subnetcal","/service-worker.js");k?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):v(e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.ecef6246.chunk.js.map