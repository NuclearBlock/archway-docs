"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[835],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4732:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,title:"About Archway",description:"A self-sovereign blockchain network that allows developers to express and get rewarded for their creativity."},l="About Archway",c={unversionedId:"overview/about",id:"overview/about",isDocsHomePage:!1,title:"About Archway",description:"A self-sovereign blockchain network that allows developers to express and get rewarded for their creativity.",source:"@site/docs/overview/about.md",sourceDirName:"overview",slug:"/overview/about",permalink:"/docs/overview/about",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/overview/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"About Archway",description:"A self-sovereign blockchain network that allows developers to express and get rewarded for their creativity."},sidebar:"tutorialSidebar",next:{title:"Networks",permalink:"/docs/overview/network"}},d=[{value:"The Archway Mission",id:"the-archway-mission",children:[]},{value:"Architectural Overview",id:"architectural-overview",children:[{value:"Smart Contracts",id:"smart-contracts",children:[]}]},{value:"Archway module specifications",id:"archway-module-specifications",children:[{value:"Gas Tracking",id:"gas-tracking",children:[]}]},{value:"Economic Overview",id:"economic-overview",children:[{value:"Gas Rebates",id:"gas-rebates",children:[]},{value:"Inflation",id:"inflation",children:[]},{value:"Example Use Cases",id:"example-use-cases",children:[]},{value:"Smart Contract Fees",id:"smart-contract-fees",children:[]}]},{value:"Governance",id:"governance",children:[]}],p={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-archway"},"About Archway"),(0,o.kt)("p",null,"Archway is an incentivized smart contract platform that rewards developers \u2014 ushering in next gen dApps."),(0,o.kt)("p",null,"The protocol gives developers the tools to easily build and launch scalable cross-chain dApps, and get rewarded for the value they contribute to the network."),(0,o.kt)("h2",{id:"the-archway-mission"},"The Archway Mission"),(0,o.kt)("p",null,"The overarching goal of Archway is to foster an array of diverse and sustainable applications by empowering and rewarding developers that build on the network with baked in incentives and rewards."),(0,o.kt)("p",null,"The internet helped to democratize access to information, but it hasn\u2019t fully democratized access to capital and value. Entrepreneurs and developers around the world lack access to the same opportunities as their counterparts in more developed nations."),(0,o.kt)("p",null,"Archway aims to level the playing field. Built into the protocol itself, Archway rewards developers based on the value and impact of their dApp, rather than their close association or connections to capital. "),(0,o.kt)("p",null,"Unlike existing Web 2.0 platforms or early versions of Web3 layer 1s, where tokens are mostly concentrated in the hands of the first few early participants, Archway is designed to be shared across all contributors and stakeholders. The entrepreneurs and developers who are building on Archway get a true stake in the growth and governance of the protocol itself."),(0,o.kt)("h2",{id:"architectural-overview"},"Architectural Overview"),(0,o.kt)("p",null,"The network starts with a vanilla Proof-of-Stake (PoS) network, with modified Minting, CosmWasm, Distribution, Staking, Group, and Governance Cosmos modules that manage the Archway inflation and rewards system. "),(0,o.kt)("p",null,"Archway creates a Cosmos SDK-based chain with support for WASM smart contract execution that rewards developers for the usage of said smart contracts deployed."),(0,o.kt)("p",null,"Desired functionalities to achieve above objective:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#economic-overview"},"Fee reward to the developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#gas-rebates"},"Gas rebate to end users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#smart-contract-fees"},"Smart contract premium fee")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inflation"},"Inflation rewards"))),(0,o.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"The Archway protocol uses CosmWasm, WebAssembly (Wasm), and Rust. Over 40 high-level programming languages support Wasm, including C and C++, Python, Go, Rust, Java, and PHP."),(0,o.kt)("h4",{id:"difference-between-smart-contracts-and-cosmos-zones"},"Difference Between Smart Contracts and Cosmos Zones"),(0,o.kt)("p",null,"While the ethos of Cosmos is to create your own self-sovereign chain, in many cases, it makes sense for a project to first deploy as a dApp. There is a lot of overhead in launching and maintaining a standalone chain. While the Cosmos SDK simplifies much of the technical effort, a developer still needs to attract and sufficiently incentivize a strong community of validators to run the network, which can be a daunting endeavor for early projects."),(0,o.kt)("p",null,"Consider the following tradeoffs between building your core logic as a smart contract versus building your logic as an independent Cosmos blockchain."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Cosmos Chain"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Smart Contract"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Speed of development"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ease of development"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Complexity of logic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Mantenance overhead"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Level of customization"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Strict resource control"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Native chain features"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Scalability"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")))),(0,o.kt)("h2",{id:"archway-module-specifications"},"Archway module specifications"),(0,o.kt)("p",null,"Here you'll find some information about Archway specfic modules that extend the functionality of the Cosmos SDK"),(0,o.kt)("h3",{id:"gas-tracking"},"Gas Tracking"),(0,o.kt)("p",null,"To achieve the Archway architecture ",(0,o.kt)("a",{parentName:"p",href:"#the-archway-mission"},"desired properties"),", the gas tracking module follows this design:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wrap the ",(0,o.kt)("a",{parentName:"li",href:"/docs/overview/glossary#cosmwasm"},"CosmWasm")," VM with an Archway GasMeter to allow interception and tracking of information passed by the VM."),(0,o.kt)("li",{parentName:"ul"},"During BeginBlock, the recorded information is brought to memory and processed to determine rewards for each of the contracts executed in the last block. "),(0,o.kt)("li",{parentName:"ul"},"Developers can choose to take the rewards, or give the gas rebate to end users to subsidize transaction cots. To enable that choice, utilize a proxy wrapper that expects that during the instantiate call the developer can specify configuration parameters that are related to the gas reward as well as the instantiation request body. This body is consumed by the wrapper and the contract is sent only instantiation requests which means the contract interface does not need to be changed."),(0,o.kt)("li",{parentName:"ul"},"Developer reward payout can happen on demand or automatically. But, the disadvantage of on demand reward is an inferior user experience and results in more transactions just to transfer the rewards. Alternatively when the reward is allocated in BeginBlock, it is automatically transferred to the designated reward address when it crosses a certain threshold. ")),(0,o.kt)("h4",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("p",null,"The Cosmos SDK does not support post-transaction processing. Archway takes into account GasLimit instead of actual gas consumption by the transaction. The good news is that the Cosmos SDK mght have this functionality in the future."),(0,o.kt)("h2",{id:"economic-overview"},"Economic Overview"),(0,o.kt)("p",null,"With Archway, dApps can earn a portion of transaction fees and inflationary rewards in exchange for their contributions to the network. This earning model is similar to how validators are rewarded for operating nodes in a typical Proof-of-Stake (PoS) chain. "),(0,o.kt)("p",null,"Archway seeks to provide three potential funding sources for dApps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gas fee rebates "),(0,o.kt)("li",{parentName:"ul"},"Share of inflationary rewards"),(0,o.kt)("li",{parentName:"ul"},"Smart contract fees (optional)")),(0,o.kt)("p",null,"Archway allows each dApp developer and their community to configure how the rewards are managed and distributed. When a contract is instantiated, the dApp creator specifies an ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," address where all fees and rewards are automatically deposited. This target address can be their own, a multisig, or controlled by a separate custom contract. Ownership can then be transferred to a new address as needed, only requiring the signature of the previous owner. "),(0,o.kt)("h3",{id:"gas-rebates"},"Gas Rebates"),(0,o.kt)("p",null,"Unlike existing smart contract platforms, Archway does not burn gas fees or distribute them entirely to the validators or miners. Instead, the collected gas fees are split between dApp developers and validators."),(0,o.kt)("p",null,"At network launch, gas fees will be divided evenly with 50% going to dApp developers and 50% to validators. The network provides configurable parameters that can be adjusted over time to determine the optimal gas rebate distribution between validators and dApps."),(0,o.kt)("p",null,"From the dApp developer's perspective, a contract receives a 50% rebate on all gas paid. From the validator's perspective, foregoing a portion of rewards in the near-term effectively drives transaction volumes, fees, and value of the underlying network in the future."),(0,o.kt)("p",null,"It would not be profitable for an attacker to spam transactions on the network as gas rebates recoup only part of the fees paid (50%). As an additional safeguard against potential abuse, uploading new contracts requires higher gas fees than normal transactions to prevent the deployment of spam contracts, but sufficiently low to allow smaller projects to upload contracts."),(0,o.kt)("p",null,"Gas fee rebates are automatically paid out by the network on a per-block basis"),(0,o.kt)("h3",{id:"inflation"},"Inflation"),(0,o.kt)("p",null,"The overall inflation rate on the Archway network follows the model of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md"},"mint module")," in the Cosmos Hub, with total token supply increasing between 7% and 20% annually, depending on the ratio of tokens that are actively staked on the network."),(0,o.kt)("p",null,"The Archway protocol then shares a portion of these total inflation rewards directly with dApps. At genesis, 25% will go to dApp developers and 75% will go to validators. For example, if the network sees total annual inflation of 8%, then 2% would go to dApps and 6% would go to validators. These distribution values are configurable parameters that can be adjusted by the Archway community through network governance."),(0,o.kt)("p",null,"The dApp rewards pool (2% in the previous example) is then proportionally distributed based on the relative amount of gas fees that each dApp generates within a given epoch. For example, a dApp that is responsible for 10% of gas consumption is awarded 10% of the available pool."),(0,o.kt)("p",null,"To mitigate potential Sybil attacks and ensure spamming transactions is not profitable, each dApp has a max inflation rewards cap. At network launch, there is a hard cap based on the total gas fees paid per dApp. A contract deployed to Archway cannot earn rewards greater than the total gas it generates within an epoch. Implementation of a dynamic rewards cap is being actively researched and can be updated through future governance. Transitioning to a floating cap will provide more flexible distribution and further incentivize developers to continuously improve their dApps."),(0,o.kt)("p",null,"Any surplus in rewards will be contributed to the Archway community pool where the funds are managed through governance."),(0,o.kt)("p",null,"Inflationary rewards are paid out by the network on a per-block basis."),(0,o.kt)("h3",{id:"example-use-cases"},"Example Use Cases"),(0,o.kt)("p",null,"dApps can choose to allocate the rewards they accrue in whatever way is most beneficial to their ecosystem. For instance, rewards can be redistributed to governance token holders, used to support core development teams, cover users\u2019 gas fees, seed liquidity pools, contribute to a community DAO, open project bounties, sponsor events or hackathons, and much more."),(0,o.kt)("h4",{id:"governance-rewards"},"Governance Rewards"),(0,o.kt)("p",null,"A recent trend has dApps issuing governance tokens to incentivize and bootstrap early communities. This has proved to be very successful in a number of cases,  despite the dApp not having any clear mechanism for value capture for fees or revenues. Some of these tokens merely grant voting rights, but have nevertheless been the subject of intense growth due to speculation of future utility of the dApp or potential rights of governance token holders to cash flows. "),(0,o.kt)("p",null,"In the Archway model, dApp developers can redistribute their share of network rewards directly to their governance token holders, subject to local securities laws. The Archway model turns standard governance tokens into productive, yield-generating assets. "),(0,o.kt)("p",null,"While individual dApps on other networks, such as SushiSwap have implemented similar functionality, the Archway protocol makes it possible to implement and manage governance rewards at the protocol level itself. A developer can opt in and automatically redirect funds earned by the dApp, including gas rebates, inflation rewards, and even smart contract fees, straight to governance token holders. "),(0,o.kt)("h4",{id:"support-the-core-development-team"},"Support the Core Development Team"),(0,o.kt)("p",null,"Rewards offered by Archway could help developers bootstrap new projects without having to dedicate excessive time and focus to fundraising. The process of raising early capital can be difficult for developers of individual dApps. "),(0,o.kt)("p",null,"Development teams often resort to private insider sales that skew early token distribution or are forced to rely on foundation grant programs. Rather than prioritizing the best technology and ecosystem for their dApp, they often choose based on available grants and get locked into a single platform."),(0,o.kt)("p",null,"Even after a dApp is launched, developers continuing to support the dApp codebase may find it difficult to cover ongoing development costs as the blockchain industry is still nascent and winning business models have yet to materialize."),(0,o.kt)("p",null,"The model introduced by Archway can counter some of these early financial pressures by allocating dApp rewards directly to core development teams. This funding source could serve as a supplement to help sustain projects and allow the team to focus on what really matters \u2014 shipping the best possible product, growing their user base, and supporting the community."),(0,o.kt)("h4",{id:"subsidize-gas-payments"},"Subsidize Gas Payments"),(0,o.kt)("p",null,"Gas payments remain one of the critical barriers to delivering a simple, intuitive user experience for dApps. Archway supports gasless transactions through the use of pool accounts. A dApp can pull funds from a common pool to sponsor gas payments and completely abstract away that complexity and friction for their end users."),(0,o.kt)("p",null,"To fund the balance of the pool account, a developer can use the fees and rewards generated by the dApp itself. In effect, the dApp gets a 50% discount on each transaction from gas rebates along with inflation rewards and contract fees that are potentially available as a bonus. "),(0,o.kt)("p",null,"By recycling these funds, dApps have the option to dramatically reduce or eliminate the gas burden for end users, leading to a smoother onboarding process and stronger retention over time."),(0,o.kt)("h4",{id:"fund-a-decentralized-autonomous-organization-dao"},"Fund a Decentralized Autonomous Organization (DAO)"),(0,o.kt)("p",null,"Rewards generated by a dApp can be contributed to a community-owned DAO that is focused on coordinating and funding critical work for its ecosystem. These rewards can be continuously deposited to the DAO treasury that allows members to collectively manage and deploy the assets based on specific needs of the project."),(0,o.kt)("p",null,"This DAO could then vote to fund core development teams, sponsor events and hackathons, commission code audits, open bug bounties, launch education programs, subsidize third-party integrations, and so on. Anything and everything that could potentially benefit and impact the ecosystem."),(0,o.kt)("p",null,"The DAO itself can exist and operate as a set of smart contracts on top of Archway, so the entire process is automated and transparent throughout initial rewards collection, voting, grants distribution, and so on."),(0,o.kt)("p",null,"Giving members collective control over a recurring funding source helps actively engage the dApp\u2019s community and contributes toward progressively decentralizing the project itself."),(0,o.kt)("h4",{id:"boost-liquidity-mining-programs"},"Boost Liquidity Mining Programs"),(0,o.kt)("p",null,"DeFi projects could use the funds earned from Archway to boost liquidity mining rewards, a vital strategy for attracting new users and encouraging active participation.   "),(0,o.kt)("p",null,"For instance, a decentralized exchange (DEX) can be designed to distribute rewards on top of the fees already paid to their liquidity providers (LPs), while a lending platform can allow users to earn supplemental rewards for depositing and borrowing assets."),(0,o.kt)("p",null,"Although similar matching and subsidy programs have been run elsewhere as temporary months-long promotions, the steady drip of Archway rewards creates unique opportunities to serve as a continual source for boosted incentives."),(0,o.kt)("h4",{id:"reduce-dex-fees"},"Reduce DEX Fees"),(0,o.kt)("p",null,"On networks such as Ethereum, DEX users incur two sets of fees: a network fee and a swap fee. The network fee incentivizes miners to operate nodes and the swap fee incentivizes liquidity providers (LPs) to provide liquidity to the DEX."),(0,o.kt)("p",null,"By deploying to Archway, DEXs could be constructed to effectively eliminate one of these fees. Instead, the DEX protocol could redistribute the earned gas rebates back to the LPs for providing liquidity to dramatically lower total transaction costs on automatic swaps and improve the user experience."),(0,o.kt)("h3",{id:"smart-contract-fees"},"Smart Contract Fees"),(0,o.kt)("p",null,"Smart contract platforms today charge network fees (\u201cgas\u201d) based on the amount of computational processing required by on-chain transactions. While this method of measurement works for the underlying economics of a network, it does not support use cases where a developer has to cover additional costs such as distributed storage, access to off-chain processing, external data sources, or other premium features such as audited and insured contracts. "),(0,o.kt)("p",null,"With Archway, developers of dApps can define custom fees for interacting with their smart contracts. Also known as the ",(0,o.kt)("em",{parentName:"p"},"take rate"),", this fee provides developers a flexible option to charge different fee levels that are based on their specific use case and operational needs."),(0,o.kt)("p",null,"By default, the smart contract fee is set to 0 $ARCH. On initial deployment, the dApp developer can define their fee. The fee is configurable and the dApp owner can adjust it any time, even after the contract has been deployed."),(0,o.kt)("p",null,"To streamline the user experience, the smart contract fee is embedded directly in the network fee, so end users are simply presented with a single combined fee when signing a transaction."),(0,o.kt)("p",null,"Since most dApps are composed of smaller, more modular pieces of code and layers of contracts, individual developers can focus on building even smaller snippets of code. They can write and monetize a single contract rather than a fully featured dApp. Since contracts can be integrated into multiple dApps, developers can earn multiple lines of fees across any user base that interacts with their code. Imagine, for example, the rapid app development that would happen if every NPM package earns fees for computational use."),(0,o.kt)("h2",{id:"governance"},"Governance"),(0,o.kt)("p",null,"Gvernance is the process by which Archway network participants and token holders can influence the future direction of the protocol through proposals and on-chain voting."),(0,o.kt)("p",null,"In addition to fees and staking, Archway\u2019s native token is used for governance. This helps maintain and support Archway\u2019s decentralized community while ensuring fair and transparent participation. All holders of the native token can propose changes to the Archway protocol and vote on active proposals. Proposals that reach a consensus threshold are adopted, whether a specific feature or even changing the governance system itself."))}h.isMDXComponent=!0}}]);