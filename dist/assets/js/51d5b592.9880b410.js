"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Installation",s={unversionedId:"node/install",id:"node/install",isDocsHomePage:!1,title:"Installation",description:"How to install an Archway full node.",source:"@site/docs/node/install.md",sourceDirName:"node",slug:"/node/install",permalink:"/docs/node/install",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/node/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Building a dApp frontend",permalink:"/docs/create/guides/my-first-dapp/dapp"},next:{title:"Configuration",permalink:"/docs/node/configure"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download the Archway Source Code",id:"download-the-archway-source-code",children:[{value:"How To Install Archwayd from Source (coming soon)",id:"how-to-install-archwayd-from-source-coming-soon",children:[]},{value:"How To Install Archwayd Using Docker",id:"how-to-install-archwayd-using-docker",children:[]}]},{value:"Initialize the Node",id:"initialize-the-node",children:[]},{value:"Prepare the Account and Keys",id:"prepare-the-account-and-keys",children:[]},{value:"Starting the Node",id:"starting-the-node",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"How to install an Archway full node."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Make sure you have golang installed on your machine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")," (",(0,o.kt)("strong",{parentName:"li"},"version 1.16")," or higher)"),(0,o.kt)("li",{parentName:"ul"},"Ensure the Go environment variables are ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/gopath_code#GOPATH"},"set properly")," on your system")),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"golangci-lint"),", run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.42.1\n")),(0,o.kt)("h2",{id:"download-the-archway-source-code"},"Download the Archway Source Code"),(0,o.kt)("p",null,"To build ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd"),", install it from source or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"archwaynetwork/archwayd")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/",title:"Docker Homepage"},"Docker")," container."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For the moment Archway can be installed only by pulling from Docker Hub."),(0,o.kt)("p",{parentName:"div"},"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull archwaynetwork/archwayd:latest")),(0,o.kt)("p",{parentName:"div"},"Installing ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," from source, coming soon!"))),(0,o.kt)("h3",{id:"how-to-install-archwayd-from-source-coming-soon"},"How To Install Archwayd from Source (coming soon)"),(0,o.kt)("p",null,"Get source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:archway-network/archway.git\ncd archway\n")),(0,o.kt)("p",null,"Build and install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,o.kt)("p",null,"For full installation and configuration parameters, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway/blob/main/README.md"},"https://github.com/archway-network/archway/blob/main/README.md"),"."),(0,o.kt)("h3",{id:"how-to-install-archwayd-using-docker"},"How To Install Archwayd Using Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t archway-network/archwayd:latest\n")),(0,o.kt)("p",null,"Or pull from Docker Hub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull archwaynetwork/archwayd:latest\n")),(0,o.kt)("h2",{id:"initialize-the-node"},"Initialize the Node"),(0,o.kt)("p",null,"Initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file that is required to establish a network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd init my-node --chain-id my-chain\n")),(0,o.kt)("h2",{id:"prepare-the-account-and-keys"},"Prepare the Account and Keys"),(0,o.kt)("p",null,"Create a key to hold your account. After you run this command, you are prompted with a password dialogue. Enter a new password for your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd keys add my-account\n")),(0,o.kt)("p",null,"You see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- name: my-account\n  type: local\n  address: archway12ntzpk9fjt2x39pvll8ufma9tuhhnkh8g4zzc2\n  pubkey: archwaypub1addwnpepqfgjegqxxv9srfe359t93tu9l86tpkwwjk7w63xtpwq05wmlq9emjmxfmmv\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important:** Write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nresource regret any wet stable body alcohol spring horse valve ritual top music salad gesture can earn casino example drive surface mix senior flag\n')),(0,o.kt)("p",null,"Here you can see your account details and the mnemonic phrase that is very crucial to recover the account."),(0,o.kt)("h2",{id:"starting-the-node"},"Starting the Node"),(0,o.kt)("p",null,"If you try to start the node, you get an error since at least one validator is required for your network to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd start\n\nError: error during handshake: error on replay: validator set is nil in genesis and still empty after InitChain\n")),(0,o.kt)("p",null,"To configure a validator node, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/overview"},"Validator Overview"),"."))}p.isMDXComponent=!0}}]);