"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[297],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Glossary",l={unversionedId:"overview/glossary",id:"overview/glossary",isDocsHomePage:!1,title:"Glossary",description:"CosmWasm",source:"@site/docs/overview/glossary.md",sourceDirName:"overview",slug:"/overview/glossary",permalink:"/docs/overview/glossary",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/overview/glossary.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Join the Archway Community",permalink:"/docs/overview/join-the-community"},next:{title:"FAQ",permalink:"/docs/overview/faq"}},d=[{value:"CosmWasm",id:"cosmwasm",children:[]},{value:"dApp",id:"dapp",children:[]},{value:"Gravity Bridge",id:"gravity-bridge",children:[]},{value:"Inter-Blockchain Communication protocol (IBC)",id:"inter-blockchain-communication-protocol-ibc",children:[]},{value:"Pool account",id:"pool-account",children:[]},{value:"Tendermint Core",id:"tendermint-core",children:[]},{value:"WebAssembly (WASM)",id:"webassembly-wasm",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("h2",{id:"cosmwasm"},"CosmWasm"),(0,a.kt)("p",null,"A framework that allows developers to write multi-chain smart contracts using any programming language, including Rust, which compiles to Wasm."),(0,a.kt)("h2",{id:"dapp"},"dApp"),(0,a.kt)("p",null,'An abbreviation of "decentralized application", dApps are applications built on Archway that combine smart contract functionality with a frontend web interface for users.'),(0,a.kt)("h2",{id:"gravity-bridge"},"Gravity Bridge"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gravity-bridge"},"Gravity Bridge")," is a bidirectional bridge to Ethereum and eventually other Ethereum Virtual Machine (EVM)-based chains"),(0,a.kt)("p",null,"Archway will provide a native Gravity Bridge integration so developers can pull Ethereum assets such as ERC-20s and ERC-721s into their dApps and bring their own assets to Ethereum."),(0,a.kt)("h2",{id:"inter-blockchain-communication-protocol-ibc"},"Inter-Blockchain Communication protocol (IBC)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/ibc/overview.html"},"IBC")," is a generalized cross-chain communication protocol for transferring value and data between independent networks."),(0,a.kt)("p",null,"The IBC protocol makes it possible for blockchains to connect to each other. Built on Cosmos, Archway natively integrates IBC so users can frictionlessly exchange assets and data with other Cosmos-enabled chains. dApps deploy straight to Archway and plug directly into IBC without additional development or the need to spin up an independent chain."),(0,a.kt)("p",null,"This native integration helps expand a developer\u2019s addressable market by opening up access to users and liquidity from other chains, while also allowing their token to be ported and utilized elsewhere."),(0,a.kt)("p",null,"Archway\u2019s native IBC integration enables developers to future-proof their dApps. Rather than betting on a single isolated chain or scaling solution and then being locked into that ecosystem, dApps built on the Archway protocol exist across an interconnected network of chains and can be migrated with ease if needed."),(0,a.kt)("h2",{id:"pool-account"},"Pool account"),(0,a.kt)("p",null,"A common liquidity pool that Archway dApps can fund and then use to sponsor gas payments for end users."),(0,a.kt)("h2",{id:"tendermint-core"},"Tendermint Core"),(0,a.kt)("p",null,"A byzantine fault tolerant (BFT) consensus engine for blockchain networks and generic application interface (ABCI)."),(0,a.kt)("h2",{id:"webassembly-wasm"},"WebAssembly (WASM)"),(0,a.kt)("p",null,"An open standard which defines a portable binary-code format for web-ready executable programs, a corresponding textual assembly language, and interfaces for facilitating interactions between programs and their host environment. WASM lets you code software using any one of a number of programming languages all of which compile and output a streamlined file format with the ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm")," extension."))}u.isMDXComponent=!0}}]);