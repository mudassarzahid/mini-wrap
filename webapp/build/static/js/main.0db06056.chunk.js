(this["webpackJsonpspotify-wrapped"]=this["webpackJsonpspotify-wrapped"]||[]).push([[0],{138:function(t,e,s){},141:function(t,e,s){},142:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s(1),r=s.n(i),c=s(13),n=s.n(c),l=(s(61),s(47)),o=s(48),d=s(55),u=s(53),j=(s(62),s(63),s(49)),m=s.n(j),h=(s(31),s(20)),p=s.n(h),b=s(3),x=(s(81),function(t){var e={};return t.isSelected&&(e.backgroundColor="#306b30"),Object(a.jsx)("div",{onClick:t.onClick,style:e,className:"button",children:Object(a.jsxs)("span",{children:["top ",t.category]})})}),g=(s(82),function(t){var e={};return t.isSelected&&(e.backgroundColor="rgba(89, 89, 89, 1)"),Object(a.jsx)("div",{onClick:t.onClick,className:"term-button",style:e,children:Object(a.jsx)("span",{name:"term",children:t.termdesc})})}),_=(s(83),s(54)),y=function(t){var e={};return t.isVisible?e.display="block":e.display="none",Object(a.jsx)("div",{style:e,children:Object(a.jsx)("div",{className:"save-button",id:t.id,onClick:t.onClick,visible:t.isVisible,children:Object(a.jsxs)("span",{children:[Object(a.jsx)(_.a,{})," download image"]})})})},v=(s(84),function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"show-all-button",onClick:t.onClick,visible:t.isVisible,children:Object(a.jsx)("span",{children:t.show})})})}),k=(s(85),function(t){var e={background:"url(".concat(t.backgroundUrl,")")},s={};return t.isCardVisible?e.display="block":e.display="none",t.areCardsVisible?s.display="block":s.display="none",Object(a.jsx)("div",{style:s,children:Object(a.jsx)("a",{className:"card-link",href:t.link,target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("div",{className:"card-ranking",style:e,children:[Object(a.jsx)("span",{children:t.text}),Object(a.jsx)("div",{className:"card-subtext",children:Object(a.jsx)("span",{children:t.subtext})})]})})})}),O=(s(86),function(t){var e={};return t.isVisible?e.display="block":e.display="none",Object(a.jsx)("div",{style:e,children:Object(a.jsxs)("div",{className:"popularity-content",children:[Object(a.jsxs)("div",{className:"popularity-element",children:[Object(a.jsx)("div",{className:"popularity-emoji",children:t.popularityEmoji}),Object(a.jsxs)("div",{className:"average-popularity",children:[t.averagePopularity,"/10"]}),Object(a.jsx)("div",{className:"description",children:"popularity"})]}),Object(a.jsxs)("div",{className:"popularity-element",children:[Object(a.jsxs)("div",{children:[" ",t.leastMainstreamEmoji," "]}),Object(a.jsx)("a",{className:"popularity-link",href:t.link,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("div",{className:"name",children:t.name})}),Object(a.jsx)("div",{className:"description",children:"least mainstream"})]})]})})}),f=(s(87),function(t){var e=t.username?"".concat(t.username,"'s"):"my";return Object(a.jsx)("div",{className:"headline",children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("span",{className:"username",children:e})," Mini Wrap ",Object(a.jsx)("span",{children:t.emoji})]})})}),C=(s(88),function(t){return Object(a.jsxs)("div",{className:"audio-feature",children:[Object(a.jsx)("div",{className:"audio-feature-emoji",children:t.emoji}),Object(a.jsxs)("div",{children:[t.score,t.scale]}),Object(a.jsx)("div",{className:"audio-feature-category",children:t.category})]})}),S=s(50),w=s.n(S),N=(s(138),function(t){var e={};return t.isVisible?e.display="block":e.display="none",Object(a.jsxs)("div",{className:"gallery",id:t.id,style:e,children:[Object(a.jsxs)("div",{className:"collage-headline",children:["my top ",t.category," ",t.term]}),Object(a.jsx)(w.a,{images:t.images,enableLightbox:!1,enableImageSelection:!1,onClickThumbnail:function(e){window.open(t.images[e].url,"_blank")}}),Object(a.jsxs)("div",{className:"collage-subtext",children:[Object(a.jsx)("span",{className:"website-name",children:"https://wrapped.mudi.me/"}),Object(a.jsx)("span",{className:"date-textfield",children:t.date})]})]})}),V=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={headlineEmoji:"",energyEmoji:"",danceabilityEmoji:"",tempoEmoji:"",happinessEmoji:"",tracksPopularityEmoji:"",artistsPopularityEmoji:"",leastMainstreamEmoji:"",user_data:"",artists_data:[],tracks_data:[],tracks_popularity:"",artists_popularity:"",audio_features:"",tracks_collage:[],artists_collage:[],topVisible:"top tracks",termSelected:"medium_term",term_text:"",date:"",areCardsVisible:!1,showText:!1,showTextMessage:"show all",isLoading:!0},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getData("medium_term"),this.generateHeadlineEmoji()}},{key:"getData",value:function(t){var e,s=this;e="http://api.wrapped.mudi.me",this.setState({isLoading:!0});var a=new URLSearchParams(window.location.search).get("access_token"),i=this.props.history;m.a.get("".concat(e,"/api/top/?term=").concat(t,"&spotify_token=").concat(a)).then((function(t){s.setState({user_data:t.data.user_data,artists_data:t.data.artists_data,tracks_data:t.data.tracks_data,tracks_popularity:t.data.tracks_popularity,artists_popularity:t.data.artists_popularity,audio_features:t.data.audio_features,tracks_collage:t.data.tracks_collage,artists_collage:t.data.artists_collage,isLoading:!1},(function(){s.generateAudioEmoji(),s.generateCollageText()}))})).catch((function(t){console.log(t),400===t.response.status&&i.push("/")}))}},{key:"generateHeadlineEmoji",value:function(){var t=Math.round(4*Math.random());this.setState({headlineEmoji:["\u270c\ud83d\ude17","\ud83d\ude24\ud83d\udde3\ud83d\udcaf","\ud83d\udc41\ufe0f\ud83d\udc44\ud83d\udc41\ufe0f","\ud83e\udd94\ud83d\udc3e","\ud83e\udd18\ud83d\ude0e"][t]})}},{key:"generateAudioEmoji",value:function(){for(var t=this.state.audio_features.danceability,e=this.state.audio_features.energy,s=this.state.audio_features.tempo,a=this.state.audio_features.happiness,i=this.state.tracks_popularity.average_popularity,r=this.state.artists_popularity.average_popularity,c=[[[0,1.7],"\ud83e\uddcd\ud83e\uddcd\ud83e\uddcd","\ud83d\udca4\ud83d\udca4\ud83d\udca4","\ud83d\ude2b\ud83d\ude2b\ud83d\ude2b","\ud83d\udc64\ud83d\udc64\ud83d\udc64"],[[1.7,3.3],"\ud83e\uddcd\ud83e\uddcd","\ud83d\udca4\ud83d\udca4","\ud83d\ude2b\ud83d\ude2b","\ud83d\udc64\ud83d\udc64"],[[3.3,5],"\ud83e\uddcd","\ud83d\udca4","\ud83d\ude2b","\ud83d\udc64"],[[5,6.7],"\ud83d\udc83","\u26a1","\ud83d\ude06","\ud83d\udd25"],[[6.7,8.4],"\ud83d\udc83\ud83d\udc83","\u26a1\u26a1","\ud83d\ude06\ud83d\ude06","\ud83d\udd25\ud83d\udd25"],[[8.4,10],"\ud83d\udc83\ud83d\udc83\ud83d\udc83","\u26a1\u26a1\u26a1","\ud83d\ude06\ud83d\ude06\ud83d\ude06","\ud83d\udd25\ud83d\udd25\ud83d\udd25"]],n=[[[0,40],"\ud83d\udc0c\ud83d\udc0c\ud83d\udc0c"],[[40,66],"\ud83d\udc0c\ud83d\udc0c"],[[66,76],"\ud83d\udc0c"],[[76,120],"\ud83d\ude80"],[[120,168],"\ud83d\ude80\ud83d\ude80"],[[168,Number.MAX_VALUE],"\ud83d\ude80\ud83d\ude80\ud83d\ude80"]],l=0;l<6;l++){var o=c[l][0],d=o[0],u=o[1];t>=d&&t<=u&&this.setState({danceabilityEmoji:c[l][1]}),e>=d&&e<=u&&this.setState({energyEmoji:c[l][2]}),a>=d&&a<=u&&this.setState({happinessEmoji:c[l][3]}),i>=d&&i<=u&&this.setState({tracksPopularityEmoji:c[l][4]}),r>=d&&r<=u&&this.setState({artistsPopularityEmoji:c[l][4]})}for(var j=0;j<6;j++){var m=n[j][0],h=m[0],p=m[1];s>=h&&s<=p&&this.setState({tempoEmoji:n[j][1]})}this.setState({leastMainstreamEmoji:"\ud83c\udfa7"})}},{key:"generateCollageText",value:function(){"short_term"===this.state.termSelected?this.setState({term_text:"this month"}):"medium_term"===this.state.termSelected?this.setState({term_text:"this year"}):"long_term"===this.state.termSelected&&this.setState({term_text:"of all time"}),this.setDate()}},{key:"setDate",value:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();this.setState({date:s+"/"+e+"/"+a})}},{key:"tracksToCanvas",value:function(){window.scrollTo(0,0),p()(document.querySelector("#tracks_img"),{useCORS:!0,allowTaint:!0}).then((function(t){var e=document.createElement("a");e.download="tracks_collage.png",e.href=t.toDataURL(),document.body.appendChild(e),e.click(),document.body.removeChild(e),e=null}))}},{key:"artistsToCanvas",value:function(){window.scrollTo(0,0),p()(document.querySelector("#artists_img"),{useCORS:!0,allowTaint:!0}).then((function(t){var e=document.createElement("a");e.download="artists_collage.png",e.href=t.toDataURL(),document.body.appendChild(e),e.click(),document.body.removeChild(e),e=null}))}},{key:"toggleCardsButton",value:function(){!0===this.state.showText&&this.setState({showTextMessage:"show all"}),!1===this.state.showText&&this.setState({showTextMessage:"hide all"})}},{key:"resetCardsButton",value:function(){this.setState({areCardsVisible:!1,showText:!1,showTextMessage:"show all"})}},{key:"render",value:function(){var t=this,e=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"audio-feature-texfield",children:[Object(a.jsx)(C,{emoji:this.state.danceabilityEmoji,category:"danceability",score:this.state.audio_features.danceability,scale:"/10"}),Object(a.jsx)(C,{emoji:this.state.energyEmoji,category:"energy",score:this.state.audio_features.energy,scale:"/10"}),Object(a.jsx)(C,{emoji:this.state.tempoEmoji,category:"tempo",score:this.state.audio_features.tempo,scale:" bpm"}),Object(a.jsx)(C,{emoji:this.state.happinessEmoji,category:"happiness",score:this.state.audio_features.happiness,scale:"/10"})]}),Object(a.jsxs)("div",{className:"top-buttons",children:[Object(a.jsx)(x,{onClick:function(){t.setState({topVisible:"top tracks",areCardsVisible:!1}),t.resetCardsButton()},category:"tracks",isSelected:"top tracks"===this.state.topVisible}),Object(a.jsx)(x,{onClick:function(){t.setState({topVisible:"top artists",areCardsVisible:!1}),t.resetCardsButton()},category:"artists",isSelected:"top artists"===this.state.topVisible})]}),Object(a.jsxs)("div",{className:"popularity-textfield",children:[Object(a.jsx)(O,{popularityEmoji:this.state.artistsPopularityEmoji,leastMainstreamEmoji:this.state.leastMainstreamEmoji,averagePopularity:this.state.artists_popularity.average_popularity,name:this.state.artists_popularity.least_mainstream_artist_name,link:this.state.artists_popularity.least_mainstream_artist_url,isVisible:"top artists"===this.state.topVisible}),Object(a.jsx)(O,{popularityEmoji:this.state.tracksPopularityEmoji,leastMainstreamEmoji:this.state.leastMainstreamEmoji,averagePopularity:this.state.tracks_popularity.average_popularity,name:this.state.tracks_popularity.least_mainstream_track_name,link:this.state.tracks_popularity.least_mainstream_track_url,isVisible:"top tracks"===this.state.topVisible})]}),Object(a.jsxs)("div",{className:"collage",children:[Object(a.jsx)("div",{style:{overflow:"scroll"},children:Object(a.jsx)(N,{id:"tracks_img",category:"tracks",term:this.state.term_text,images:this.state.tracks_collage,isVisible:"top tracks"===this.state.topVisible,date:this.state.date})}),Object(a.jsx)("div",{style:{overflow:"scroll"},children:Object(a.jsx)(N,{id:"artists_img",category:"artists",term:this.state.term_text,images:this.state.artists_collage,isVisible:"top artists"===this.state.topVisible,date:this.state.date})})]}),Object(a.jsxs)("div",{className:"save-and-share",children:[Object(a.jsx)(y,{onClick:this.tracksToCanvas,isVisible:"top tracks"===this.state.topVisible}),Object(a.jsx)(y,{onClick:this.artistsToCanvas,isVisible:"top artists"===this.state.topVisible})]}),Object(a.jsxs)("div",{className:"all-cards",children:[this.state.tracks_data.map((function(e){return Object(a.jsx)(k,{areCardsVisible:t.state.areCardsVisible,backgroundUrl:e.track_background,link:e.track_url,text:"".concat(e.track_rank," ").concat(e.track_name),subtext:e.track_artists,isCardVisible:"top tracks"===t.state.topVisible},"card_track_id + ".concat(e.track_id))})),this.state.artists_data.map((function(e){return Object(a.jsx)(k,{areCardsVisible:t.state.areCardsVisible,backgroundUrl:e.artist_background,link:e.artist_url,text:"".concat(e.artist_rank," ").concat(e.artist_name),subtext:e.artist_followers,isCardVisible:"top artists"===t.state.topVisible},"card_artist_id + ".concat(e.artist_id))}))]}),Object(a.jsx)(v,{onClick:function(){t.setState({areCardsVisible:!t.state.areCardsVisible,showText:!t.state.showText}),t.toggleCardsButton()},show:this.state.showTextMessage+" "+this.state.topVisible})]});return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{id:"wrapper",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(f,{username:this.state.user_data,emoji:this.state.headlineEmoji}),Object(a.jsxs)("div",{className:"term-buttons",children:[Object(a.jsx)(g,{onClick:function(){t.setState({termSelected:"short_term",areCardsVisible:!1}),t.resetCardsButton(),t.getData("short_term")},value:"short_term",termdesc:"4 weeks",isSelected:"short_term"===this.state.termSelected}),Object(a.jsx)(g,{onClick:function(){t.setState({termSelected:"medium_term",areCardsVisible:!1}),t.resetCardsButton(),t.getData("medium_term")},value:"medium_term",termdesc:"6 months",isSelected:"medium_term"===this.state.termSelected}),Object(a.jsx)(g,{onClick:function(){t.setState({termSelected:"long_term",areCardsVisible:!1}),t.resetCardsButton(),t.getData("long_term")},value:"long_term",termdesc:"all time",isSelected:"long_term"===this.state.termSelected})]}),this.state.isLoading&&Object(a.jsxs)("div",{className:"spinner",children:[Object(a.jsx)("div",{className:"rect1"}),Object(a.jsx)("div",{className:"rect2"}),Object(a.jsx)("div",{className:"rect3"}),Object(a.jsx)("div",{className:"rect4"}),Object(a.jsx)("div",{className:"rect5"})]}),!this.state.isLoading&&e]})})})}}]),s}(r.a.Component),E=Object(b.g)(V),T=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,143)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;s(t),a(t),i(t),r(t),c(t)}))},M=s(15),D=(s(141),s(52)),L=s.n(D),P=function(t){return console.error(t)},B=function(t){var e,s=Object(b.f)();return e="http://wrapped.mudi.me",Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Mini Spotify Wrap"}),Object(a.jsx)("div",{className:"login-button",children:Object(a.jsx)(L.a,{clientId:"0ab0f042b3e44b3086e978dacb7cee47",redirectUri:"".concat(e,"/app"),scope:"user-top-read user-read-private user-read-email",onSuccess:function(t){console.log(t);var e=t.access_token;console.log(t),s.push("/app?access_token=".concat(e))},onFailure:P})}),Object(a.jsxs)("div",{children:["built by ",Object(a.jsx)("a",{href:"https://twitter.com/mudassar_z",target:"_blank",rel:"noreferrer",children:"Mudi"})]})]})};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(M.a,{children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",children:Object(a.jsx)(B,{})}),Object(a.jsx)(b.a,{path:"/app",children:Object(a.jsx)(E,{})})]})})}),document.getElementById("root")),T()},61:function(t,e,s){},62:function(t,e,s){},63:function(t,e,s){},81:function(t,e,s){},82:function(t,e,s){},83:function(t,e,s){},84:function(t,e,s){},85:function(t,e,s){},86:function(t,e,s){},87:function(t,e,s){},88:function(t,e,s){}},[[142,1,2]]]);
//# sourceMappingURL=main.0db06056.chunk.js.map