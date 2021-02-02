(()=>{"use strict";var e={810:(e,a,n)=>{var t=n(294),l=n(935),i=n(212),s=n(886),o=n(509);const r="avatarConfigChanged",u="exportAvatar",d="resetView";var m=n(47),c=n(895);function y({candidates:e,predicate:a}){if(!e.length)return null;const n=e.shift();return a(n)?n:y({candidates:e=e.concat(n.children),predicate:a})}function p(e,a){return y({candidates:[e],predicate:e=>e.name===a})}function h({candidates:e,predicate:a,results:n=[]}){if(!e.length)return n;const t=e.shift();return a(t)&&n.push(t),h({candidates:e=e.concat(t.children),predicate:a,results:n})}function v(e,a){return h({candidates:[e],predicate:e=>e.type===a})}function k({object3D:e,depth:a=0,callback:n,result:t}){t.push(n(e,a));const l=e.children;for(let e=0;e<l.length;e++)k({object3D:l[e],depth:a+1,callback:n,result:t});return t}const N=function(){const e="  ";return function(a,n){const t=`${a.type} | ${a.name} | ${JSON.stringify(a.userData)}`;let l="";"SkinnedMesh"===a.type&&(l="\n".concat(e.repeat(n)).concat("First bone id: ").concat(a.skeleton.bones[0].uuid));let i="";return"Bone"===a.type&&(i="\n".concat(e.repeat(n)).concat("Bone id: ").concat(a.uuid)),e.repeat(n).concat(t).concat(l).concat(i)}}();function _(e){return k({object3D:e,callback:N,result:[]}).join("\n")}const f=function(){const e=new m.E;return function(a){return new Promise((function(n,t){e.load(a,(function(e){n(e)}),(function(e){}),(function(e){console.log("An error happened"),t(e)}))}))}}();function S(e){return e.gltfExtensions||(e.gltfExtensions={}),e.gltfExtensions.MOZ_hubs_components||(e.gltfExtensions.MOZ_hubs_components={}),e}const b=function(){const e=new o.M;return function(a,{binary:n,animations:t}){e.parse(a,(e=>{if(n){const a=new Blob([e],{type:"application/octet-stream"}),n=document.createElement("a");n.style.display="none",n.href=URL.createObjectURL(a),n.download="custom_avatar.glb",n.click(),n.remove()}else console.log(e)}),{binary:n,animations:t})}}();function g(e,a){const n=[];for(const t of a.animations)-1===e.animations.findIndex((e=>e.name===t.name))&&n.push(t);for(const a of n)e.animations.push(a)}const w={DOMContentLoaded:!1,shouldResize:!0,didInit:!1,scene:null,camera:null,renderer:null,controls:null,envMap:null,avatarNodes:{},avatarConfig:{},newAvatarConfig:{},shouldApplyNewAvatarConfig:!1,shouldExportAvatar:!1,shouldResetView:!1};async function E(e,a,n){const t=await f((l=a,l.startsWith("blob")?l:`assets/${l}.glb`));var l;w.avatarConfig[e]===a&&(t.scene.animations=t.animations,n.clear(),n.add(t.scene),t.scene.traverse((e=>{var a,n;n=e=>{e.isMeshStandardMaterial&&(e.envMap=w.envMap,e.needsUpdate=!0)},(a=e).material&&(Array.isArray(a.material)?a.material.forEach(n):n(a.material))})))}window.gameState=w,window.addEventListener("DOMContentLoaded",(()=>{w.DOMContentLoaded=!0})),window.onresize=()=>{w.shouldResize=!0},document.addEventListener(r,(e=>{w.newAvatarConfig=e.detail.avatarConfig,w.shouldApplyNewAvatarConfig=!0})),document.addEventListener(u,(()=>{w.shouldExportAvatar=!0})),document.addEventListener(d,(()=>{w.shouldResetView=!0})),window.requestAnimationFrame((function e(a){if(w.DOMContentLoaded&&!w.didInit&&(w.didInit=!0,function(){i.CtF.enabled=!0;const e=new i.xsS;e.fog=new i.yo9(9145226,.2),e.background=new i.Ilk(9145226),w.scene=e;const a=new i.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.set(0,.25,1.5),w.camera=a;const n=new i.Mig(16777215,.4);e.add(n);const t=new i.CP7({canvas:document.getElementById("scene"),antialias:!0});w.renderer=t;const l=function(){const e=new c.q;e.scale.setScalar(45e4);const a=e.material.uniforms;a.turbidity.value=10,a.rayleigh.value=3,a.mieCoefficient.value=.005,a.mieDirectionalG.value=.7;const n=Math.PI*(.7-.5),t=2*Math.PI*(.55-.5),l=new i.Pa4;return l.x=Math.cos(t),l.y=Math.sin(t)*Math.sin(n),l.z=Math.sin(t)*Math.cos(n),a.sunPosition.value.copy(l),e}();w.envMap=function(e,a){const n=new i.xsS;n.add(e);const t=new i.anP(a),l=t.fromScene(n);return t.dispose(),n.remove(e),l.texture}(l,t);const o=new i.Kj0(new i.BKK(100,100),new i.Wid);o.position.y=-.2,o.rotation.x=-Math.PI/2,e.add(o);const r=new s.z(a,t.domElement);r.target=new i.Pa4(0,.5,0),r.update(),r.saveState(),w.controls=r,w.avatarGroup=new i.ZAu,e.add(w.avatarGroup)}()),w.didInit){if(w.shouldResize){w.shouldResize=!1;const{renderer:e,camera:a}=w,n=e.domElement.parentNode.clientWidth,t=e.domElement.parentNode.clientHeight;e.setSize(n,t,!1),a.aspect=n/t,a.updateProjectionMatrix()}{const{renderer:e,scene:a,camera:n}=w;e.render(a,n)}if(w.shouldApplyNewAvatarConfig){w.shouldApplyNewAvatarConfig=!1;const e=new Set(Object.keys(w.newAvatarConfig).concat(Object.keys(w.avatarConfig)));for(const a of e)w.avatarNodes[a]||(w.avatarNodes[a]=new i.ZAu,w.avatarGroup.add(w.avatarNodes[a])),w.newAvatarConfig[a]!==w.avatarConfig[a]&&(null!==w.newAvatarConfig[a]?E(a,w.newAvatarConfig[a],w.avatarNodes[a]):w.avatarNodes[a].clear(),w.avatarConfig[a]=w.newAvatarConfig[a])}w.shouldExportAvatar&&(w.shouldExportAvatar=!1,function(e){const a=function(e){const a=new i.ZAu;a.name="Scene";const n=e.children.map((e=>p(e,"Scene"))).filter((e=>!!e));for(const e of n)g(a,e);const t=e.children.map((e=>p(e,"AvatarRoot"))).filter((e=>!!e)),l=t[0].clone(!1);for(const e of t)l.userData=(s=l.userData,o=e.userData,S(s),S(o),s.gltfExtensions.MOZ_hubs_components&&(s.gltfExtensions.MOZ_hubs_components=Object.assign(s.gltfExtensions.MOZ_hubs_components,o.gltfExtensions.MOZ_hubs_components)),s);var s,o;const r=v(e,"SkinnedMesh").map((e=>e.clone(!1))),u=function(e){const a=new Map;for(const n of e.skeleton.bones){const e=n.clone(!1);a.set(n,e)}return e.skeleton.bones[0].traverse((e=>{if("Bone"!==e.type)return;const n=a.get(e);for(const t of e.children)n.add(a.get(t))})),new i.OdW(e.skeleton.bones.map((e=>a.get(e))))}(r[0]);for(const e of r)e.bind(u);a.add(l),l.add(u.bones[0]);for(const e of r)l.add(e);return a}(e);console.log(_(a)),console.log(a),b(a,{binary:!1,animations:a.animations}),b(a,{binary:!0,animations:a.animations})}(w.avatarGroup)),w.shouldResetView&&(w.shouldResetView=!1,w.controls.reset()),window.requestAnimationFrame(e)}else requestAnimationFrame(e)}));const x={Accessory:[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"accessory_duck-floaty",displayName:"Duck Floaty"},{value:"accessory_face-mask-1-animated",displayName:"Face Mask 1 Animated"},{value:"accessory_headband-cat-ears-1",displayName:"Headband Cat Ears 1"},{value:"accessory_headphones-1-black",displayName:"Headphones 1 Black"},{value:"accessory_pool-mask-1",displayName:"Pool Mask 1"}],Earring:[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"earring_hoop-high-left-silver",displayName:"Hoop High Left Silver"},{value:"earring_hoop-high-right-silver",displayName:"Hoop High Right Silver"},{value:"earring_hoop-large-both-gold",displayName:"Hoop Large Both Gold"},{value:"earring_hoop-small-both-gold",displayName:"Hoop Small Both Gold"}],Eyebrows:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"eyebrows_brown",displayName:"Brown"}],Eyes:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"eyes_style-1-blue",displayName:"Style 1 Blue"},{value:"eyes_style-1-brown",displayName:"Style 1 Brown"},{value:"eyes_style-11-blue",displayName:"Style 11 Blue"},{value:"eyes_style-11-brown",displayName:"Style 11 Brown"},{value:"eyes_style-12-blue",displayName:"Style 12 Blue"},{value:"eyes_style-12-brown",displayName:"Style 12 Brown"},{value:"eyes_style-12-green",displayName:"Style 12 Green"},{value:"eyes_style-13-blue",displayName:"Style 13 Blue"},{value:"eyes_style-13-brown",displayName:"Style 13 Brown"},{value:"eyes_style-14-blue",displayName:"Style 14 Blue"},{value:"eyes_style-14-brown",displayName:"Style 14 Brown"}],Eyewear:[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"eyewear_arnette",displayName:"Arnette"},{value:"eyewear_aviators1",displayName:"Aviators1"},{value:"eyewear_glam-2",displayName:"Glam 2"},{value:"eyewear_heart-1-pink",displayName:"Heart 1 Pink"},{value:"eyewear_metal-1",displayName:"Metal 1"},{value:"eyewear_oakleys-red",displayName:"Oakleys Red"},{value:"eyewear_punk-2",displayName:"Punk 2"},{value:"eyewear_wire-frame-1-gold",displayName:"Wire Frame 1 Gold"}],"Facial Hair":[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"facial-hair_beard-full-1-dark",displayName:"Beard Full 1 Dark"},{value:"facial-hair_beard-full-2-brown",displayName:"Beard Full 2 Brown"},{value:"facial-hair_goatee-1-brown",displayName:"Goatee 1 Brown"},{value:"facial-hair_goatee-2",displayName:"Goatee 2"},{value:"facial-hair_goatee-3",displayName:"Goatee 3"},{value:"facial-hair_goatee-4",displayName:"Goatee 4"},{value:"facial-hair_goatee-5",displayName:"Goatee 5"},{value:"facial-hair_mustache-1",displayName:"Mustache 1"},{value:"facial-hair_mustache-2",displayName:"Mustache 2"}],Hair:[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"hair_aLine-asym",displayName:"ALine Asym"},{value:"hair_afro-1",displayName:"Afro 1"},{value:"hair_afro-2",displayName:"Afro 2"},{value:"hair_bob-1-dark",displayName:"Bob 1 Dark"},{value:"hair_bob-1-light",displayName:"Bob 1 Light"},{value:"hair_bob-1-red",displayName:"Bob 1 Red"},{value:"hair_braided-bun",displayName:"Braided Bun"},{value:"hair_eraser-top",displayName:"Eraser Top"},{value:"hair_fauxhawk-1",displayName:"Fauxhawk 1"},{value:"hair_flat-top-1",displayName:"Flat Top 1"},{value:"hair_french-braid-buns",displayName:"French Braid Buns"},{value:"hair_french-braids-double",displayName:"French Braids Double"},{value:"hair_male_taperAfro1",displayName:"Male"},{value:"hair_mohawk-1-blue",displayName:"Mohawk 1 Blue"},{value:"hair_mullet-1-dark",displayName:"Mullet 1 Dark"},{value:"hair_parted-1-brown",displayName:"Parted 1 Brown"},{value:"hair_parted-1-gray",displayName:"Parted 1 Gray"},{value:"hair_parted-long-1",displayName:"Parted Long 1"},{value:"hair_pigtails-1-blue",displayName:"Pigtails 1 Blue"},{value:"hair_pigtails-1-pink",displayName:"Pigtails 1 Pink"},{value:"hair_pony-tail-1",displayName:"Pony Tail 1"},{value:"hair_pony-tail-2",displayName:"Pony Tail 2"},{value:"hair_pony-tail-3",displayName:"Pony Tail 3"},{value:"hair_spikey-1",displayName:"Spikey 1"},{value:"hair_starter-locs-red",displayName:"Starter Locs Red"}],Hands:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"hands_skin-1",displayName:"Skin 1"},{value:"hands_skin-2",displayName:"Skin 2"},{value:"hands_skin-3",displayName:"Skin 3"},{value:"hands_skin-4",displayName:"Skin 4"},{value:"hands_skin-5",displayName:"Skin 5"},{value:"hands_skin-6",displayName:"Skin 6"},{value:"hands_skin-7",displayName:"Skin 7"},{value:"hands_skin-8",displayName:"Skin 8"},{value:"hands_skin-a",displayName:"Skin A"},{value:"hands_skin-b",displayName:"Skin B"},{value:"hands_skin-c",displayName:"Skin C"},{value:"hands_skin-d",displayName:"Skin D"},{value:"hands_skin-e",displayName:"Skin E"},{value:"hands_skin-f",displayName:"Skin F"},{value:"hands_skin-g",displayName:"Skin G"},{value:"hands_skin-h",displayName:"Skin H"}],Hat:[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"hat_baseball-giants",displayName:"Baseball Giants"},{value:"hat_beach-umbrella",displayName:"Beach Umbrella"},{value:"hat_beanie-1-red",displayName:"Beanie 1 Red"},{value:"hat_spokemon",displayName:"Spokemon"},{value:"hat_top-hat-1",displayName:"Top Hat 1"}],Head:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"head_skin-1",displayName:"Skin 1"},{value:"head_skin-2",displayName:"Skin 2"},{value:"head_skin-3",displayName:"Skin 3"},{value:"head_skin-4",displayName:"Skin 4"},{value:"head_skin-5",displayName:"Skin 5"},{value:"head_skin-6",displayName:"Skin 6"},{value:"head_skin-7",displayName:"Skin 7"},{value:"head_skin-8",displayName:"Skin 8"},{value:"head_skin-a",displayName:"Skin A"},{value:"head_skin-b",displayName:"Skin B"},{value:"head_skin-c",displayName:"Skin C"},{value:"head_skin-d",displayName:"Skin D"},{value:"head_skin-e",displayName:"Skin E"},{value:"head_skin-f",displayName:"Skin F"},{value:"head_skin-g",displayName:"Skin G"},{value:"head_skin-h",displayName:"Skin H"}],Mouth:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"mouth_neutral-skin-1",displayName:"Neutral Skin 1"},{value:"mouth_neutral-skin-2",displayName:"Neutral Skin 2"},{value:"mouth_neutral-skin-3",displayName:"Neutral Skin 3"},{value:"mouth_neutral-skin-4",displayName:"Neutral Skin 4"},{value:"mouth_neutral-skin-5",displayName:"Neutral Skin 5"},{value:"mouth_neutral-skin-7",displayName:"Neutral Skin 7"},{value:"mouth_neutral-skin-8",displayName:"Neutral Skin 8"},{value:"mouth_neutral-skin-a",displayName:"Neutral Skin A"},{value:"mouth_neutral-skin-b",displayName:"Neutral Skin B"},{value:"mouth_neutral-skin-c",displayName:"Neutral Skin C"},{value:"mouth_neutral-skin-d",displayName:"Neutral Skin D"},{value:"mouth_neutral-skin-e",displayName:"Neutral Skin E"},{value:"mouth_neutral-skin-f",displayName:"Neutral Skin F"},{value:"mouth_neutral-skin-g",displayName:"Neutral Skin G"},{value:"mouth_neutral-skin-h",displayName:"Neutral Skin H"},{value:"mouth_smirk-skin-1",displayName:"Smirk Skin 1"},{value:"mouth_smirk-skin-2",displayName:"Smirk Skin 2"},{value:"mouth_smirk-skin-3",displayName:"Smirk Skin 3"},{value:"mouth_smirk-skin-4",displayName:"Smirk Skin 4"},{value:"mouth_smirk-skin-5",displayName:"Smirk Skin 5"},{value:"mouth_smirk-skin-6",displayName:"Smirk Skin 6"},{value:"mouth_smirk-skin-7",displayName:"Smirk Skin 7"},{value:"mouth_smirk-skin-8",displayName:"Smirk Skin 8"},{value:"mouth_smirk-skin-a",displayName:"Smirk Skin A"},{value:"mouth_smirk-skin-b",displayName:"Smirk Skin B"},{value:"mouth_smirk-skin-c",displayName:"Smirk Skin C"},{value:"mouth_smirk-skin-d",displayName:"Smirk Skin D"},{value:"mouth_smirk-skin-e",displayName:"Smirk Skin E"},{value:"mouth_smirk-skin-f",displayName:"Smirk Skin F"},{value:"mouth_smirk-skin-g",displayName:"Smirk Skin G"},{value:"mouth_smirk-skin-h",displayName:"Smirk Skin H"}],"Torso Jacket":[{value:null,displayName:"none",excludeFromRandomize:!1},{value:"torso-jacket_style-1-punk-leather-1-black",displayName:"Style 1 Punk Leather 1 Black"}],Torso:[{value:null,displayName:"none",excludeFromRandomize:!0},{value:"torso_style-1-baseball-giants",displayName:"Style 1 Baseball Giants"},{value:"torso_style-1-bowling-shirt-1-red",displayName:"Style 1 Bowling Shirt 1 Red"},{value:"torso_style-1-combat-vest-red",displayName:"Style 1 Combat Vest Red"},{value:"torso_style-1-ketchum",displayName:"Style 1 Ketchum"},{value:"torso_style-1-sport-coat-1-dark",displayName:"Style 1 Sport Coat 1 Dark"},{value:"torso_style-1-sport-coat-1-gray",displayName:"Style 1 Sport Coat 1 Gray"},{value:"torso_style-1-tshirt-moz",displayName:"Style 1 Tshirt Moz"},{value:"torso_style-1-tshirt-union-jack",displayName:"Style 1 Tshirt Union Jack"},{value:"torso_style-1-tshirt1-reactor",displayName:"Style 1 Tshirt1 Reactor"},{value:"torso_style-1-ugly-christmas-1",displayName:"Style 1 Ugly Christmas 1"},{value:"torso_style-2-hoodie-1-gray",displayName:"Style 2 Hoodie 1 Gray"},{value:"torso_style-2-hoodie-2-purple",displayName:"Style 2 Hoodie 2 Purple"},{value:"torso_style-2-tshirt-1-baby-unicorn",displayName:"Style 2 Tshirt 1 Baby Unicorn"},{value:"torso_style-2-tshirt-1-heart-animated",displayName:"Style 2 Tshirt 1 Heart Animated"},{value:"torso_style-2-tshirt-1-heart",displayName:"Style 2 Tshirt 1 Heart"},{value:"torso_style-2-tshirt-1-moz",displayName:"Style 2 Tshirt 1 Moz"}]};function B({onPartSelected:e,parts:a,selected:n}){return t.createElement("select",{onChange:a=>{e(a.target.selectedOptions[0].getAttribute("value"))},value:n||""},a.map(((e,a)=>t.createElement("option",{key:a,value:e.value},e.displayName))))}function C(){const[e,a]=(0,t.useState)(x),n=Object.keys(e);function l(){const a={};for(const t of n){const n=e[t].filter((e=>!e.excludeFromRandomize));if(0===n.length)continue;const l=Math.floor(Math.random()*n.length);a[t]=n[l].value}return a}const i=l(),[s,o]=(0,t.useState)(i);function m(e){o({...s,...e})}return(0,t.useEffect)((()=>{document.dispatchEvent(new CustomEvent(r,{detail:{avatarConfig:s}}))})),t.createElement(t.Fragment,null,n.map((a=>t.createElement("div",{key:a,className:"category"},t.createElement("span",null,a,": "),t.createElement(B,{selected:s[a],onPartSelected:e=>{m({[a]:e})},parts:e[a]})))),t.createElement("button",{onClick:function(){o(l())}},"Randomize avatar"),t.createElement("button",{onClick:function(){document.dispatchEvent(new CustomEvent(u))}},"Export avatar"),t.createElement("button",{onClick:function(){document.dispatchEvent(new CustomEvent(d))}},"Reset camera view"),t.createElement("label",null,"Upload custom part:",t.createElement("input",{onChange:function(n){const t=n.target.files[0],l=t.name,i=l.substring(0,l.indexOf("_"))||"custom",s=l.substring(l.indexOf("_")+1,l.lastIndexOf(".")),o=URL.createObjectURL(t),r={...e};r[i]=r[i]||[{displayName:"none",value:null}],r[i].push({displayName:s,value:o}),a(r),m({[i]:o})},type:"file",id:"input",accept:"model/gltf-binary,.glb"})))}l.render(t.createElement(C,null),document.getElementById("root"))}},a={};function n(t){if(a[t])return a[t].exports;var l=a[t]={exports:{}};return e[t](l,l.exports,n),l.exports}n.m=e,n.x=e=>{},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={179:0},a=[[810,536]],t=e=>{},l=(l,i)=>{for(var s,o,[r,u,d,m]=i,c=0,y=[];c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&y.push(e[o][0]),e[o]=0;for(s in u)n.o(u,s)&&(n.m[s]=u[s]);for(d&&d(n),l&&l(i);y.length;)y.shift()();return m&&a.push.apply(a,m),t()},i=self.webpackChunk=self.webpackChunk||[];function s(){for(var t,l=0;l<a.length;l++){for(var i=a[l],s=!0,o=1;o<i.length;o++){var r=i[o];0!==e[r]&&(s=!1)}s&&(a.splice(l--,1),t=n(n.s=i[0]))}return 0===a.length&&(n.x(),n.x=e=>{}),t}i.forEach(l.bind(null,0)),i.push=l.bind(null,i.push.bind(i));var o=n.x;n.x=()=>(n.x=o||(e=>{}),(t=s)())})(),n.x()})();
//# sourceMappingURL=main-94aa61a7cab659448779.js.map