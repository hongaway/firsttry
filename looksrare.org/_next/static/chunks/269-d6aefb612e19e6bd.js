"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{95619:function(e,t,r){r.d(t,{y:function(){return o}});var n=r(14827),i=r(2784),o=function(){var e=(0,i.useContext)(n.FJ);if(void 0===e)throw new Error("Eager connect context is undefined");return e}},30918:function(e,t,r){r.d(t,{Sy:function(){return s},Oy:function(){return a},LU:function(){return u}});var n=r(10004),i=r(59813),o=r(10528);function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=function(e){return(0,n.Z)(e,{addSuffix:!0})},a=function(e){return o.O$.from(e).mul(1e3).toNumber()},d={xSeconds:"{{count}}s",xMinutes:"{{count}}m",xHours:"{{count}}h",xDays:"{{count}}d",xMonths:"{{count}}mos",xYears:"{{count}}y"},c={formatDistance:function(e,t){return d[e].replace("{{count}}",t)}},u=function(e,t){var r=t||{},n=r.shortLabels,o=void 0!==n&&n,s=l(r,["shortLabels"]);return o&&(s.locale=c),(0,i.Z)(e,s)}},26269:function(e,t,r){r.d(t,{me:function(){return c},Xi:function(){return M},dV:function(){return V},Zh:function(){return me},N_:function(){return de}});var n=r(52322),i=r(39097),o=r(64033),l=r(26106),s=r(75125),a=r(88803),d=r(34020),c=function(e){var t=e.onDismiss,r=(0,s.$G)().t;return(0,n.jsx)(i.default,{href:"/rewards/trading",passHref:!0,children:(0,n.jsx)(o.xu,{display:"block",bg:"purple.500",as:d.rU,sx:{_hover:{textDecoration:"none"}},children:(0,n.jsxs)(a.W,{display:"grid",gridTemplateColumns:{base:"1fr auto",md:"60px 1fr auto auto"},gridTemplateAreas:{base:"'b d' 'c c'",md:"'a b c d'"},gridGap:4,alignItems:{base:"start",md:"center"},py:4,children:[(0,n.jsx)(o.P4,{gridArea:"a",display:{base:"none",md:"block"},children:(0,n.jsx)(d.Xv,{boxSize:"60px",color:"white"})}),(0,n.jsxs)(o.P4,{gridArea:"b",children:[(0,n.jsx)(d.xv,{textStyle:"detail",color:"white",bold:!0,mb:2,children:r("Introducing Listing Rewards!")}),(0,n.jsx)(d.xv,{textStyle:"heading-03",bold:!0,color:"white",children:r("Earn LOOKS just by listing your NFTs!")})]}),(0,n.jsx)(o.P4,{gridArea:"c",children:(0,n.jsx)(d.xv,{width:{base:"100%",md:"auto"},color:"gray.900",bg:"gray.100",bold:!0,textStyle:"detail",p:4,borderRadius:"md",textAlign:"center",children:r("Learn More")})}),(0,n.jsx)(o.P4,{gridArea:"d",children:(0,n.jsx)(l.hU,{"aria-label":"close banner",size:"sm",variant:"ghost",color:"white",sx:{_hover:{color:"white"}},onClick:function(e){t(),e.preventDefault()},children:(0,n.jsx)(d.Tw,{boxSize:5})})})]})})})},u=r(48975),x=r(24651),h=r(34756),b=r(6023),p=r(66170),f=r(48002),g=r(30918),j=p.fb.h-p.hs.h,m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date,r=t.getUTCDate(),n=t.getUTCHours(),i=new Date;i.setUTCDate(n>=p.fb.h?r+1:r),i.setUTCHours(p.fb.h),i.setUTCMinutes(p.fb.m),i.setUTCSeconds(p.fb.s);var o=new Date;o.setUTCDate(n>=p.hs.h?r+1:r),o.setUTCHours(p.hs.h),o.setUTCMinutes(p.hs.m),o.setUTCSeconds(p.hs.s);var l=(new Date).toUTCString(),s=(0,f.Z)({start:new Date(l),end:i}),a=(0,f.Z)({start:new Date(l),end:o}),d=(0,g.LU)(s,{format:["hours","minutes"],shortLabels:e}),c=(0,g.LU)(a,{format:["hours","minutes"],shortLabels:e}),u=(s.hours||0)<j;return{timeUntilDistribution:d,timeUntilPause:c,nextDistribution:i,nextPause:o,isPaused:u}},y=r(79505),v=r(5632),w=r(16986),O=r(45255),S=r(39132),k=r(47884),C=r(51203),P=r(4611),R=r(40786),L=function(e){var t=e.totalListing,r=e.totalTrading,i=(0,s.$G)().t;return(0,n.jsxs)(o.xu,{p:4,bg:"ui-bg",children:[(0,n.jsx)(d.xv,{as:"p",textStyle:"detail",color:"text-03",mb:6,children:i("Collecting these pending rewards together, with no extra transaction fees!")}),(0,n.jsxs)(o.kC,{alignItems:"center",justifyContent:"space-between",mb:2,children:[(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-03",children:i("Listing Rewards")}),(0,n.jsx)(d.xv,{textStyle:"detail",bold:!0,color:"text-02",children:i("{{amount}} {{token}}",{amount:(0,P.As)(t,8),token:"LOOKS"})})]}),(0,n.jsxs)(o.kC,{alignItems:"center",justifyContent:"space-between",children:[(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-03",children:i("Trading Rewards")}),(0,n.jsx)(d.xv,{textStyle:"detail",bold:!0,color:"text-02",children:i("{{amount}} {{token}}",{amount:(0,P.As)(r,8),token:"LOOKS"})})]})]})},T=function(e){var t=e.userRewardPayload,r=e.isLoading,i=(0,s.$G)().t,l=(0,u.Ge)(),a=l.library,c=l.account,x=(0,w.p)(),f=(0,h.qY)(),g=(0,v.useRouter)(),j=m().isPaused,y=(0,S.r)(),T=(0,b.d)(),A=t.listingRewards,D=t.tradingRewards,I=A.pending.add(D.pending),E=parseFloat((0,P.wE)(I)),z=y.isSuccess?E*y.data.looks:0,G=(0,O.l)({onSend:function(){var e=function(e){var t={treeIds:[],values:[],proofs:[]};return e.tradingRewards.proof&&e.tradingRewards.pending.gt(0)&&(t.treeIds.push(p.rV),t.values.push(e.tradingRewards.total),t.proofs.push(e.tradingRewards.proof)),e.listingRewards.proof&&e.listingRewards.pending.gt(0)&&(t.treeIds.push(p.OI),t.values.push(e.listingRewards.total),t.proofs.push(e.listingRewards.proof)),t}(t),r=e.treeIds,n=e.values,i=e.proofs;return(0,C.Q)(a,c,r,n,i)},onSuccess:function(){x({status:"success",title:i("Collected!"),description:i("Stake your rewards in the LOOKS compounder to earn more LOOKS!")}),T(c),f.onClose()},onError:function(e){x({title:i("Error"),description:(0,k.e)(e),status:"error"})}}),U=G.submitTransaction,F=G.isTxConfirmed,$=G.isTxSending,K=G.isTxWaiting,W=G.isTxError;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.rj,{alignItems:"center",gridTemplateColumns:"1fr auto",gridGap:2,p:4,borderBottom:"1px solid",borderColor:"border-01",children:[(0,n.jsxs)(o.P4,{children:[(0,n.jsx)(d.xv,{textStyle:"helper",color:"text-03",mb:2,children:i("Rewards")}),(0,n.jsxs)(o.kC,{alignItems:"center",children:[(0,n.jsx)(d.L$,{boxSize:5}),(0,n.jsx)(d.xv,{bold:!0,textStyle:"detail",mx:2,children:(0,P.As)(I,8)}),(0,n.jsx)(d.xv,{textStyle:"helper",color:"text-03",children:"($".concat((0,P.DW)(z),")")})]})]}),(0,n.jsx)(o.P4,{children:(0,n.jsx)(d.zx,{isDisabled:j||I.isZero(),isLoading:r,onClick:function(){U(),f.onOpen()},children:i(j?"Calculating":"Collect")})})]}),(0,n.jsx)(R.j,{isOpen:f.isOpen,onClose:f.onClose,onRetry:U,bodyMetaComponent:(0,n.jsx)(L,{totalListing:A.pending,totalTrading:D.pending}),txConfirmedTitle:i("Collected"),txConfirmedText:i("Stake your rewards in the LOOKS compounder to earn more LOOKS"),actionText:i("Stake Now"),actionHandler:function(){g.push("/rewards")},isTxConfirmed:F,isTxSending:$,isTxWaiting:K,isTxError:W})]})},A=r(65818),D=r(10528),I=r(3714),E=r(64391);function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){z(e,t,r[t])}))}return e}function U(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var F=function(e){var t=e.label,r=e.total;return(0,n.jsxs)(o.xu,{display:"inline-block",children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:1,children:t}),(0,n.jsxs)(o.kC,{alignItems:"center",children:[(0,n.jsx)(d.u,{boxSize:14,height:4,width:2}),(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-02",mx:1,children:r}),(0,n.jsx)(d.by,{boxSize:4,color:"text-03"})]})]})},$=function(e){var t=e.points,r=U(e,["points"]);return(0,n.jsx)(s.cC,{i18nKey:"listingReward24hsCollectionPointsPerListing",children:(0,n.jsxs)(o.kC,G({alignItems:"center"},r,{children:[(0,n.jsx)(d.Xv,{color:"purple.400",boxSize:4,mr:1}),(0,n.jsx)(d.xv,{as:"span",textStyle:"detail",mr:1,children:{points:t}}),(0,n.jsx)(d.xv,{as:"span",textStyle:"helper",color:"text-03",children:"per listing"})]}))})},K=function(e){var t=e.collection,r=t.isVerified,l=t.address,s=t.name,a=t.logo,c=t.points,u=(0,I.i)(l,{enabled:!a}),x=a||(u.isSuccess&&u.data.logo?u.data.logo:void 0);return(0,n.jsx)(i.default,{href:"/collections/".concat(l),passHref:!0,children:(0,n.jsxs)(o.kC,{as:"a",alignItems:"center",children:[(0,n.jsx)(E.qE,{size:40,src:null===x||void 0===x?void 0:x.src,address:l,mr:2,flexShrink:0,borderRadius:"4px"}),(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(d.xv,{as:"span",textStyle:"detail",bold:!0,mr:1,children:s}),r&&(0,n.jsx)(d.SA,{boxSize:4}),c&&(0,n.jsx)($,{points:c})]})]})})},W=function(){return(0,n.jsxs)(o.rj,{gridColumnGap:4,gridTemplateColumns:{base:"24px 1fr 1fr auto",md:"24px 2fr 1fr 1fr 96px"},py:6,borderBottom:"1px solid",borderBottomColor:"border-01",height:"93px",children:[(0,n.jsx)(o.P4,{children:(0,n.jsx)(o.kC,{height:10,alignItems:"center",children:(0,n.jsx)(A.Od,{width:5,height:5})})}),(0,n.jsx)(o.P4,{children:(0,n.jsxs)(o.kC,{children:[(0,n.jsx)(A.Od,{height:10,width:10,mr:2}),(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(A.Od,{width:"130px",height:4,mb:1}),(0,n.jsx)(A.Od,{width:"80px",height:4})]})]})}),(0,n.jsxs)(o.P4,{children:[(0,n.jsx)(A.Od,{width:"60px",height:4,mb:2}),(0,n.jsx)(A.Od,{width:"80px",height:4})]}),(0,n.jsxs)(o.P4,{children:[(0,n.jsx)(A.Od,{width:"60px",height:4,mb:2}),(0,n.jsx)(A.Od,{width:"80px",height:4})]}),(0,n.jsx)(o.P4,{children:(0,n.jsx)(A.Od,{height:10,width:"100%"})})]})},_=function(e){var t=e.amount,r=(0,S.r)(),i=t&&r.isSuccess?parseFloat((0,P.wE)(t))*r.data.looks:0;return(0,n.jsxs)(o.kC,{alignItems:"center",children:[(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-02",bold:!0,children:t?(0,P.As)(t,8):"-"}),r.isLoading&&(0,n.jsx)(A.Od,{height:4,width:10}),r.isSuccess&&(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",ml:1,children:"($".concat((0,P.DW)(i,2,2),")")})]})},N=function(e){var t=e.countOwned,r=e.countAsk,i=e.countAskEligible,l=e.globalFloor,a=(0,s.$G)().t,c=(0,v.useRouter)().locale,u=D.O$.from(r||0).eq(i||0),x=(0,P.t1)(p.Vm.toString(),4),h=l.mul(x).div(1e4),b=(0,P.As)(h,4);return(0,n.jsxs)(o.xu,{display:"inline-block",children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:1,children:a("Your Listings")}),(0,n.jsx)(o.kC,{alignItems:"center",children:t&&r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-02",children:r.toString()}),(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-03",children:"/"}),(0,n.jsx)(d.xv,{textStyle:"detail",color:"text-03",children:(0,P.rY)(t,c)}),!u&&(0,n.jsx)(d.J2,{label:(0,n.jsx)(s.cC,{i18nKey:"hasIneligibleAsksWarning",children:(0,n.jsxs)(d.k5,{children:["One or more of your listings are priced"," ",(0,n.jsxs)(d.k5,{display:"inline",bold:!0,children:["more than ",{DAILY_FLOOR_TIER_0:p.Vm},"x higher"," "]}),"than the current floor price. Lower price to"," ",(0,n.jsxs)(d.k5,{display:"inline",bold:!0,children:[{maxQualifyingFloorDisplay:b}," ETH"," "]}),"to start accumulating points"]})}),children:(0,n.jsx)("div",{children:(0,n.jsx)(d.av,{ml:1,boxSize:5,color:"text-warning"})})})]}):(0,n.jsx)(d.xv,{color:"text-disabled",textStyle:"detail",children:"\u2014"})})]})},H=function(){var e,t,r=(0,s.$G)().t,i=(0,h.qY)({defaultIsOpen:!0}),l=(0,u.Ge)().account,a=(0,b.j)(l,{enabled:!!l}),c=m(),x=c.nextDistribution,p=c.nextPause,f=c.timeUntilDistribution,g=c.timeUntilPause;return(0,n.jsxs)(o.xu,{bg:"ui-01",borderBottomLeftRadius:"lg",borderBottomRightRadius:"lg",children:[a.isSuccess&&(0,n.jsx)(T,{userRewardPayload:a.data,isLoading:a.isLoading}),(0,n.jsxs)(o.kC,{alignItems:"center",p:4,cursor:"pointer",onClick:i.onToggle,userSelect:"none",sx:{_hover:{bg:"hover-ui",_active:{bg:"onclick-ui"}}},borderBottomLeftRadius:i.isOpen?"0":"lg",borderBottomRightRadius:i.isOpen?"0":"lg",children:[(0,n.jsx)(d.xv,{textStyle:"helper",color:"text-03",flex:1,children:r("Details")}),i.isOpen?(0,n.jsx)(d.Kh,{}):(0,n.jsx)(d._M,{})]}),i.isOpen&&(0,n.jsxs)(o.xu,{p:4,children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:6,children:r("You can collect rewards in the 22 hours between {{nextDistribution}} and {{nextPause}} every day. Don't worry, your rewards won't disappear: they're just unavailable for those two hours.",{nextPause:p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),nextDistribution:x.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})}),(0,n.jsx)(y.L,{label:r("Listing Rewards to collect"),mb:2,children:(0,n.jsx)(_,{amount:null===(e=a.data)||void 0===e?void 0:e.listingRewards.pending})}),(0,n.jsx)(y.L,{label:r("Trading Rewards to collect"),children:(0,n.jsx)(_,{amount:null===(t=a.data)||void 0===t?void 0:t.tradingRewards.pending})}),(0,n.jsx)(o.iz,{my:2}),(0,n.jsx)(y.L,{label:r("Next distribution"),mb:2,children:f}),(0,n.jsx)(y.L,{label:r("Next Pause"),mb:2,children:g})]})]})},M=function(){var e=(0,s.$G)().t,t=(0,u.Ge)().account;return(0,n.jsxs)(o.xu,{border:"1px solid",borderColor:"border-01",borderRadius:"lg",children:[(0,n.jsxs)(o.rj,{gridTemplateColumns:"1fr 40px",gridColumnGap:4,p:4,children:[(0,n.jsxs)(o.P4,{children:[(0,n.jsx)(d.xv,{as:"h3",textStyle:"detail",color:"text-02",children:e("Listing & Trading Rewards")}),(0,n.jsx)(d.xv,{textStyle:"helper",color:"text-03",children:e("Earn LOOKS!")})]}),(0,n.jsx)(d.HK,{color:"text-03",boxSize:10})]}),t?(0,n.jsx)(H,{}):(0,n.jsx)(x.pB,{isFullWidth:!0,colorScheme:"gray",color:"link-01",borderTopLeftRadius:0,borderTopRightRadius:0})]})},Y=r(71974),B=r(2784),V=function(){var e=(0,s.$G)().t,t=(0,h.qY)(),r=t.isOpen,i=t.onToggle,l=t.onClose,a=t.onOpen,c=(0,Y.Sx)({base:!0,md:!1});return(0,B.useEffect)((function(){c?l():a()}),[a,l,c]),(0,n.jsxs)(o.xu,{border:"1px solid",borderColor:"border-01",borderRadius:"lg",children:[(0,n.jsxs)(o.rj,{alignItems:"center",cursor:"pointer",gridTemplateColumns:"20px 1fr 20px",gridColumnGap:4,p:4,display:{base:"grid",md:"none"},onClick:i,children:[(0,n.jsx)(d.by,{boxSize:5}),(0,n.jsx)(d.xv,{bold:!0,textStyle:"detail",children:e("How Does it Work?")}),r?(0,n.jsx)(d.Kh,{boxSize:5}):(0,n.jsx)(d._M,{boxSize:5})]}),r&&(0,n.jsxs)(o.xu,{px:4,py:5,children:[(0,n.jsxs)(o.kC,{mb:8,children:[(0,n.jsxs)(o.xu,{flex:1,mr:4,children:[(0,n.jsx)(d.xv,{as:"h3",textStyle:"detail",bold:!0,mb:4,children:e("Trading Rewards")}),(0,n.jsx)(d.xv,{as:"p",textStyle:"helper",color:"text-03",mb:4,children:e("Earn trading rewards when you buy or sell any NFT on LooksRare (private listings excluded). Rewards distributed once daily.")}),(0,n.jsx)(d.rU,{href:"https://docs.looksrare.org/about/rewards/trading-rewards",isExternal:!0,textStyle:"detail",fontWeight:"bold",children:e("Learn More")})]}),(0,n.jsx)(d.t9,{boxSize:12,color:"text-03"})]}),(0,n.jsxs)(o.kC,{children:[(0,n.jsxs)(o.xu,{flex:1,mr:4,children:[(0,n.jsx)(d.xv,{as:"h3",textStyle:"detail",bold:!0,mb:4,children:e("Listing Rewards")}),(0,n.jsx)(d.xv,{as:"p",textStyle:"helper",color:"text-03",children:e("Earn points by listing NFTs from eligible collections.")}),(0,n.jsx)(d.xv,{as:"p",textStyle:"helper",color:"text-03",mb:4,children:e("Points convert to LOOKS once daily!")}),(0,n.jsx)(d.rU,{href:"https://docs.looksrare.org/about/rewards/listing-rewards",isExternal:!0,textStyle:"detail",fontWeight:"bold",children:e("Learn More")})]}),(0,n.jsx)(d.Xv,{boxSize:12,color:"text-03"})]})]})]})},J=r(90711);function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Z(e,t,r[t])}))}return e}function X(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Q=function(e){var t=e.collectionAddress,r=e.hasTokenInCollection,o=e.isLoading,a=e.countOwned,c=e.countAskEligible,h=X(e,["collectionAddress","hasTokenInCollection","isLoading","countOwned","countAskEligible"]),b=(0,s.$G)().t,p=(0,u.Ge)().account,f=(0,Y.Sx)({base:!0,md:!1});if(!p)return(0,n.jsx)(x.pB,{variant:"ghost",children:b("Connect")});if(o)return(0,n.jsx)(d.zx,q({isLoading:o},h,{children:b("List")}));if(!r)return null;var g=a&&c&&D.O$.from(a||0).eq(c||0),j={collection:t};return(0,n.jsx)(i.default,{href:"/accounts/me?filters=".concat(JSON.stringify(j)),passHref:!0,children:f&&g?(0,n.jsx)(l.hU,{"aria-label":b("Listed all tokens owned"),icon:(0,n.jsx)(d.Kd,{boxSize:5})}):(0,n.jsx)(d.zx,q({as:"a",leftIcon:g?(0,n.jsx)(d.Kd,{boxSize:5}):void 0},h,{children:b(g?"Listed":"List")}))})},ee=r(6697),te=r(37690);function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ne(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ie=(0,B.memo)((function(e){var t=e.rank,r=e.collection,i=e.hasTokenInCollection,l=e.isFetchingRelativeCollections,a=e.countOwned,c=e.countAskEligible,u=e.countAsk,x=ne(e,["rank","collection","hasTokenInCollection","isFetchingRelativeCollections","countOwned","countAskEligible","countAsk"]),h=(0,s.$G)().t,b=r.volume,p=r.floor,f=b.volume24h?D.O$.from(b.volume24h):J._Y,g=b.volume24hOS?D.O$.from(b.volume24hOS):J._Y,j=f.add(g),m=(0,ee.Go)(p),y=m.globalFloor,v=m.floorPrice,w=m.floorPriceOs;return(0,n.jsxs)(o.rj,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){re(e,t,r[t])}))}return e}({as:"a",alignItems:{base:"start",md:"center"},gridTemplateColumns:{base:"24px 1fr 1fr auto",md:"24px 2fr 1fr 1fr 1fr 96px"},gridTemplateAreas:{base:"'a b b b f' '. c d e f'",md:"'a b c d e f'"},gridColumnGap:4,gridRowGap:4,py:6,borderBottom:"1px solid",borderBottomColor:"border-01"},x,{children:[(0,n.jsx)(o.P4,{gridArea:"a",children:(0,n.jsx)(d.xv,{display:"flex",alignItems:"center",height:10,bold:!0,children:"#".concat(t)})}),(0,n.jsx)(o.P4,{gridArea:"b",children:(0,n.jsx)(K,{collection:r})}),(0,n.jsx)(o.P4,{gridArea:"c",children:(0,n.jsx)(d.J2,{label:(0,n.jsx)(te.mv,{titleText:h("Cross-marketplace volume within the current daily cycle"),textLr:h("Vol. on {{platform}}",{platform:"LooksRare"}),amountLr:(0,P.As)(f,4),textOs:h("Vol. on {{platform}}",{platform:"OpenSea"}),amountOs:(0,P.As)(g,4)}),children:(0,n.jsx)("span",{children:(0,n.jsx)(F,{label:h("Global 24h Vol."),total:(0,P.As)(j,2)})})})}),(0,n.jsx)(o.P4,{gridArea:"d",children:(0,n.jsx)(d.J2,{label:(0,n.jsx)(te.R_,{amountLr:v,amountOs:w}),children:(0,n.jsx)("span",{children:(0,n.jsx)(F,{label:h("Global Floor"),total:(0,P.As)(y,2)})})})}),(0,n.jsx)(o.P4,{gridArea:"e",children:(0,n.jsx)(N,{countOwned:a,countAsk:u,countAskEligible:c,globalFloor:y})}),(0,n.jsx)(o.P4,{gridArea:"f",children:(0,n.jsx)(Q,{width:{base:"auto",md:"96px"},collectionAddress:r.address,hasTokenInCollection:i,isLoading:l,countAskEligible:c,countOwned:a})})]}))}));ie.displayName="ListingRewardLeaderRow";var oe=r(97128),le=r(18295),se=r(84887);function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var de=function(e){var t=(0,s.$G)().t,r=(0,u.Ge)().account,i=m(!0).timeUntilDistribution,l=(0,oe.Xb)(r,{enabled:!!r}),a=function(){if(!r)return(0,n.jsx)(d.xv,{color:"text-disabled",children:"-"});if(l.isFetching)return(0,n.jsxs)(o.kC,{children:[(0,n.jsx)(A.Od,{height:6,width:6,mr:2,borderRadius:"50%"}),(0,n.jsx)(A.Od,{height:6,width:"50px",mr:2})]});if(l.isSuccess){var e=l.data.listingReward24h?l.data.listingReward24h.totalPoints:0,t=(0,P.DW)(e,0,0),i=l.data.listingReward24h?l.data.listingReward24h.points:0;return(0,n.jsx)(d.J2,{label:(0,n.jsx)(d.k5,{children:(0,n.jsxs)(s.cC,{i18nKey:"totalPointsInCycleExplanation",children:["Total points distributed so far this cycle:"," ",(0,n.jsx)(d.xv,{as:"span",bold:!0,color:"currentcolor",children:{totalPointsDisplay:t}})]})}),children:(0,n.jsxs)(o.kC,{height:6,alignItems:"center",children:[(0,n.jsx)(le.Z,{color:"purple.400"}),(0,n.jsx)(d.xv,{bold:!0,mx:2,children:(0,P.DW)(i,0,0)}),(0,n.jsx)(d.by,{color:"text-03",boxSize:4})]})})}}(),c=function(){if(!r)return(0,n.jsx)(d.xv,{color:"text-disabled",children:"-"});if(l.isFetching)return(0,n.jsxs)(o.kC,{children:[(0,n.jsx)(A.Od,{height:6,width:6,mr:2,borderRadius:"50%"}),(0,n.jsx)(A.Od,{height:6,width:"50px",mr:2})]});if(l.isSuccess){var e,t=l.data.listingReward24h?l.data.listingReward24h.totalPoints:0,i=(0,P.DW)(t,0,0),a=(null===(e=l.data.listingReward24h)||void 0===e?void 0:e.points)?l.data.listingReward24h.points:0,c=(0,P.DW)(a,0,0),u=(0,se.P5)(a,t),x=(0,P.DW)(p.Dn,0,0),h=a&&t?"".concat((0,P.DW)(a/t*100,0,3),"%"):"0%";return(0,n.jsx)(d.J2,{label:(0,n.jsx)(d.k5,{children:(0,n.jsxs)(s.cC,{i18nKey:"estimatedRewardExplanation",children:["Your current points (",(0,n.jsx)(d.k5,{as:"span",bold:!0,textStyle:"detail",children:{pointsDisplay:c}}),") / total points distributed (",(0,n.jsx)(d.k5,{as:"span",bold:!0,textStyle:"detail",children:{totalPointsDisplay:i}}),") * daily LOOKS rewards (",(0,n.jsxs)(d.k5,{as:"span",bold:!0,textStyle:"detail",children:[{totalDailyDisplay:x}," LOOKS"]}),")",(0,n.jsxs)(d.k5,{textStyle:"detail",mt:4,children:["This estimation is based on data up to the most recent snapshot, where your points are"," ",(0,n.jsx)(d.k5,{as:"span",bold:!0,textStyle:"detail",children:{percentageOfTotal:h}}),"of the current total points. Actual rewards at the end of the day may vary."]})]})}),children:(0,n.jsxs)(o.kC,{alignItems:"center",children:[(0,n.jsx)(d.L$,{color:"purple.400"}),(0,n.jsx)(d.xv,{mx:2,bold:!0,children:(0,P.DW)(u,0,2)}),(0,n.jsx)(d.by,{color:"text-03",boxSize:4})]})})}}(),x=l.isSuccess&&l.data.listingReward24h?(0,n.jsx)(d.xv,{bold:!0,children:(0,g.Sy)(new Date(l.data.listingReward24h.updatedAt))}):l.isFetching?(0,n.jsx)(A.Od,{height:6,width:8}):(0,n.jsx)(d.xv,{color:"text-disabled",children:"-"}),h=(0,n.jsx)(d.xv,{bold:!0,children:i});return(0,n.jsxs)(o.rj,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ae(e,t,r[t])}))}return e}({alignItems:"center",border:"1px solid",borderRadius:"lg",borderColor:"border-01",gridTemplateColumns:{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}},e,{children:[(0,n.jsxs)(o.P4,{p:4,borderRight:"1px solid",borderRightColor:"border-01",children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:2,children:t("Your Points")}),a]}),(0,n.jsxs)(o.P4,{p:4,borderRight:{base:"none",md:"1px solid"},borderRightColor:{md:"border-01"},children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:2,children:t("Est. Listing Rewards")}),(0,n.jsx)(o.xu,{minHeight:6,children:c})]}),(0,n.jsxs)(o.P4,{p:4,borderRight:"1px solid",borderRightColor:"border-01",borderTop:{base:"1px solid",md:"none"},borderTopColor:{base:"border-01"},children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:2,children:t("Last Updated")}),x]}),(0,n.jsxs)(o.P4,{p:4,borderTop:{base:"1px solid",md:"none"},borderTopColor:{base:"border-01"},children:[(0,n.jsx)(d.xv,{color:"text-03",textStyle:"helper",mb:2,children:t("Next Distribution")}),h]})]}))},ce=r(61258),ue=r.n(ce),xe=r(93586),he=r.n(xe),be=r(85561),pe=r(17851),fe=r(95619);function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(a){s=!0,i=a}finally{try{l||null==r.return||r.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var me=function(){var e=(0,s.$G)().t,t=(0,u.Ge)().account,r=(0,fe.y)(),i=(0,B.useState)(!1),l=i[0],a=i[1],c=(0,pe.tI)(),x=c.data,h=c.isSuccess,b=c.isLoading,f=(0,oe.OH)(t,{enabled:!!t&&h&&r}),g=f.data,j=f.isSuccess,m=f.isFetching,y=function(){return a(!l)},v=(0,B.useMemo)((function(){return h&&j?g.map((function(e){return e.address})):[]}),[h,j,g]),w=(0,B.useMemo)((function(){return h&&j?x.filter((function(e){return v.includes(e.address)})).length:0}),[h,j,x,v]);if(b)return(0,n.jsx)(n.Fragment,{children:ue()(p.Pz).map((function(e){return(0,n.jsx)(W,{},e)}))});if(!x)return null;var O=je(l?[x]:he()(x,25),2),S=O[0],k=O[1],C=!l&&x.length>25;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.xv,{as:"h2",bold:!0,textStyle:"heading-03",mb:4,children:e("Listing Points Leaderboard")}),(0,n.jsxs)(o.rj,{gridTemplateColumns:{base:"1fr",md:"minmax(auto, 672px) 1fr"},mb:8,children:[(0,n.jsx)(d.xv,{as:"p",color:"text-03",children:e("Listings from the top 25 collections with over 0% royalties earn points every {{interval}} minutes. Set a price within {{threshold}}x of the global floor price to start accumulating points!",{interval:p.hj,threshold:p.Vm})}),(0,n.jsx)(o.P4,{justifySelf:"end",children:(0,n.jsxs)(o.kC,{alignItems:"center",children:[(0,n.jsx)(d.xv,{textStyle:"helper",color:"text-02",mr:4,onClick:t?y:void 0,cursor:t?"pointer":"not-allowed",userSelect:"none",children:e("Show my collections only")}),(0,n.jsx)(d.rs,{isChecked:l,isDisabled:!t,onChange:function(){return y()}})]})})]}),l&&0===w&&t&&(0,n.jsx)(d.gv,{pt:16,children:(0,n.jsx)(d.xv,{bold:!0,color:"text-02",children:e("None of the collections you own are in the top 25")})}),(0,n.jsx)(o.xu,{mb:16,children:S.map((function(e,t){var r=j?null===g||void 0===g?void 0:g.find((function(t){return(0,be.Er)(t.address,e.address)})):void 0,i=!!r;return(0,n.jsx)(ie,{rank:t+1,collection:e,display:l&&!i?"none":void 0,hasTokenInCollection:i,isFetchingRelativeCollections:m,countOwned:null===r||void 0===r?void 0:r.owned,countAskEligible:null===r||void 0===r?void 0:r.countAskEligible,countAsk:null===r||void 0===r?void 0:r.countAsk},e.address)}))}),C&&(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(d.xv,{as:"h3",bold:!0,textStyle:"heading-03",mb:4,children:e("Closing In!")}),k.map((function(e,t){var r=j?null===g||void 0===g?void 0:g.find((function(t){return(0,be.Er)(t.address,e.address)})):void 0,i=!!r;return(0,n.jsx)(ie,{rank:t+S.length+1,collection:e,display:l&&!i?"none":void 0,hasTokenInCollection:i,isFetchingRelativeCollections:m,countOwned:null===r||void 0===r?void 0:r.owned,countAskEligible:null===r||void 0===r?void 0:r.countAskEligible,countAsk:null===r||void 0===r?void 0:r.countAsk},e.address)}))]}),(0,n.jsx)(o.xu,{textAlign:"center",py:4,children:l&&(0,n.jsx)(d.zx,{onClick:y,size:"sm",children:e("Show all Collections")})})]})}},79505:function(e,t,r){r.d(t,{L:function(){return a}});var n=r(52322),i=r(64033),o=r(34020);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=function(e){var t=e.label,r=e.children,a=s(e,["label","children"]);return(0,n.jsxs)(i.kC,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({alignItems:"center",justifyContent:"space-between",width:"100%"},a,{children:[(0,n.jsxs)(o.xv,{color:"text-03",textStyle:"detail",children:[t,":"]}),(0,n.jsx)(o.xv,{color:"text-02",bold:!0,textStyle:"detail",textAlign:"right",children:r})]}))}}}]);
//# sourceMappingURL=269-d6aefb612e19e6bd.js.map