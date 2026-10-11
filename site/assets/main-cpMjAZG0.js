import{o as e,t}from"./index-BBryQtGY.js";var n=[{id:`shop`,label:`店铺`,icon:`⌂`,description:`进入自己的街角小店`,pending:`店铺画面未接入`},{id:`dashboard`,label:`总览`,icon:`▦`,description:`店内经营概览`,pending:``},{id:`trade`,label:`交易`,icon:`⇄`,description:`收货、验机与议价`,pending:`需完成验机、估价与成交模块`},{id:`people`,label:`人物`,icon:`♙`,description:`顾客与熟人关系`,pending:`需接入人物基础模块 S1-U09`}];function r(e){return n.map(({pending:t,...n})=>{let r=n.id===`dashboard`||!!e[n.id];return{...n,available:r,...r?{}:{reason:t}}})}function i(e){let t=()=>({screen:`menu`,scene:`dashboard`,message:`准备好开门营业了吗？`,actionCount:0}),n=t(),i=()=>r(e),a=e=>{n={...n,message:e,actionCount:n.actionCount+1}};return{snapshot:()=>({...n}),entries:i,start:()=>{n={...n,screen:`playing`,scene:`shop`},a(`木门推开，开始营业。点击店里的物件看看！`)},toMenu:()=>{n={...n,screen:`menu`},a(`已回到主菜单 · 不会生成存档`)},navigate:e=>{if(n.screen!==`playing`)return a(`请先点击「开门营业」`),!1;let t=i().find(t=>t.id===e);if(!t?.available)return a(t?.reason??`该场景尚未开放`),!1;let r=n.scene===e;return n={...n,scene:e},a(r?`正在查看「`+t.label+`」· 操作已响应`:`已进入「`+t.label+`」`),!0},note:e=>{n.screen===`playing`&&a(e)},info:()=>a(`这里是2003年的可交互店铺场景；无真实交易、存档或日期推进`),reset:()=>{n=t()}}}var a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 660" role="img" aria-label="2003年街角数码铺室内场景：木柜台、老式电脑、数码货架、修理桌、店主和顾客">
<defs>
<linearGradient id="wall" x2="0" y2="1"><stop stop-color="#f3d9ad"/><stop offset="1" stop-color="#e9c28e"/></linearGradient>
<linearGradient id="floor" x2=".2" y2="1"><stop stop-color="#d0a175"/><stop offset="1" stop-color="#996b53"/></linearGradient>
<linearGradient id="glass" x2="0" y2="1"><stop stop-color="#c4e8d9" stop-opacity=".91"/><stop offset="1" stop-color="#619a94" stop-opacity=".94"/></linearGradient>
<linearGradient id="wood" x2="0" y2="1"><stop stop-color="#cd8953"/><stop offset="1" stop-color="#925634"/></linearGradient>
<pattern id="checks" width="48" height="35" patternUnits="userSpaceOnUse"><path d="M0 35L48 0M-24 35L24 0M24 35L72 0" stroke="#f6d9ac" stroke-opacity=".21" stroke-width="2"/></pattern>
<filter id="shadow" x="-25%" y="-30%" width="170%" height="175%"><feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#533620" flood-opacity=".27"/></filter>
</defs>
<g stroke-linecap="round" stroke-linejoin="round">
<path d="M0 0H480V435L240 501 0 435Z" fill="url(#wall)"/>
<path d="M0 434L240 493 480 434V660H0Z" fill="url(#floor)"/>
<path d="M0 454L240 514 480 454V660H0Z" fill="url(#checks)"/>
<path d="M0 438L240 496 480 438" fill="none" stroke="#7f523d" stroke-width="7"/>
<path d="M240 495V660M87 464L45 660M393 462L442 660M0 547H480M0 608H480" stroke="#6e453d" stroke-opacity=".27" stroke-width="2" fill="none"/>
<!-- wall details -->
<path d="M0 0H480V38H0Z" fill="#a66c48"/>
<path d="M0 35H480" stroke="#5f4438" stroke-width="5"/>
<path d="M8 47H472V69H8Z" fill="#d8ab75" stroke="#b27b54" stroke-width="3"/>
<path d="M14 84H466" stroke="#fff2cd" stroke-opacity=".6" stroke-width="4"/>
<path d="M176 74H305V137H176Z" fill="#47786c" stroke="#5b453a" stroke-width="7" filter="url(#shadow)"/>
<path d="M185 86H296V127H185Z" fill="#335f5c" stroke="#a4bf95" stroke-width="2"/>
<text x="240" y="104" font-size="16" font-weight="900" fill="#f7e3af" text-anchor="middle">旧时光数码铺</text>
<text x="240" y="120" font-size="8" font-weight="700" fill="#c3dbc4" text-anchor="middle" letter-spacing="2">收购 · 维修 · 出售</text>
<!-- street door / window -->
<rect x="345" y="111" width="125" height="290" rx="5" fill="#76543f" stroke="#593f36" stroke-width="5"/>
<rect x="354" y="119" width="106" height="242" fill="#c4d8bd"/>
<path d="M354 259Q391 221 460 251V359H354Z" fill="#9dbb9d"/>
<path d="M354 282Q393 262 460 286V358H354Z" fill="#d1b88d"/>
<path d="M356 300H460" stroke="#846c53" stroke-width="5"/>
<path d="M361 200l17-18 15 9 14-22 15 11 15-11 20 20" fill="none" stroke="#7d9888" stroke-width="8" opacity=".6"/>
<path d="M353 160H462M416 119V359" stroke="#81563f" stroke-width="7"/>
<rect x="369" y="208" width="40" height="43" rx="4" fill="#f8e9b9" stroke="#755b40" stroke-width="3"/>
<text x="389" y="225" font-size="12" font-weight="900" fill="#b64d35" text-anchor="middle">营业</text>
<text x="389" y="241" font-size="11" font-weight="900" fill="#b64d35" text-anchor="middle">中</text>
<circle cx="423" cy="272" r="5" fill="#e9b86c" stroke="#5f4635" stroke-width="2"/>
<path d="M339 402H472" stroke="#5c4237" stroke-width="10"/>
<!-- left poster -->
<rect x="23" y="96" width="92" height="101" fill="#fff0cb" stroke="#8a5740" stroke-width="5"/>
<path d="M31 104H106V125H31Z" fill="#b65c40"/>
<text x="68" y="119" font-size="12" font-weight="900" fill="#fff6da" text-anchor="middle">高价收机</text>
<rect x="56" y="135" width="23" height="42" rx="6" fill="#82958c" stroke="#4c5c50" stroke-width="3"/>
<rect x="61" y="141" width="14" height="13" rx="2" fill="#d0e3aa"/>
<circle cx="67" cy="163" r="3" fill="#efdbbc"/>
<text x="68" y="188" font-size="8" fill="#a76d4d" text-anchor="middle">老机器也值钱</text>
<!-- shelving -->
<path d="M0 212L161 204V435L0 461Z" fill="#7c4e34" stroke="#543d32" stroke-width="7" filter="url(#shadow)"/>
<path d="M9 224L151 218V429L9 447Z" fill="#e2ad71"/>
<path d="M9 283L151 278M9 350L151 343M9 414L151 399" stroke="#794a32" stroke-width="12"/>
<path d="M11 225L148 218M10 288L149 282M11 354L148 348" stroke="#edce9b" stroke-width="4"/>
<!-- shelf tech -->
<g stroke="#50463a" stroke-width="2.5">
<rect x="18" y="232" width="42" height="40" rx="4" fill="#c8c0aa"/><rect x="25" y="238" width="29" height="20" rx="2" fill="#446966"/><path d="M36 260v7m-9 0h18" stroke="#756c61"/>
<rect x="76" y="235" width="19" height="35" rx="5" fill="#676d67"/><rect x="80" y="241" width="11" height="13" fill="#b9cb99"/>
<rect x="107" y="236" width="26" height="33" rx="4" fill="#b6a18a"/><rect x="111" y="242" width="18" height="9" fill="#546b67"/>
<rect x="17" y="298" width="28" height="45" rx="4" fill="#e2d8ba"/><rect x="22" y="304" width="18" height="19" rx="2" fill="#7d9b8c"/>
<rect x="60" y="302" width="36" height="39" rx="4" fill="#6c8179"/><rect x="68" y="308" width="20" height="16" fill="#d2cfa8"/>
<rect x="107" y="299" width="30" height="43" rx="4" fill="#c3b28d"/><path d="M112 308h20v11h-20z" fill="#738e83"/>
<rect x="20" y="363" width="43" height="40" rx="4" fill="#b5ae9b"/><rect x="25" y="369" width="33" height="22" fill="#4c7972"/>
<rect x="84" y="367" width="37" height="31" rx="4" fill="#647871"/><path d="M92 376h21v10H92z" fill="#b1c8b5"/>
</g>
<!-- workshop -->
<path d="M176 244H328V387H176Z" fill="#a7c2a6" stroke="#7d5c41" stroke-width="6"/>
<path d="M184 252H320V367H184Z" fill="#e5d9b0"/>
<path d="M197 256h109v9H197z" fill="#7d957d"/>
<path d="M206 267v65m32-65v65m33-65v65m26-65v65" stroke="#ad9870" stroke-width="2" opacity=".5"/>
<path d="M216 281v27m0-27 7 7m-7-7-7 7" stroke="#56665a" stroke-width="4"/>
<path d="M257 282v32m-7 0h14" stroke="#5e675b" stroke-width="4"/>
<path d="M287 284v31" stroke="#5e675b" stroke-width="5"/>
<path d="M173 366H335L326 388H186Z" fill="#eab77b" stroke="#87593e" stroke-width="5"/>
<rect x="181" y="383" width="147" height="20" rx="5" fill="#956d4e"/>
<!-- CRT computer -->
<path d="M196 317q0-8 10-8h61q12 0 12 9v47q0 9-10 9h-64q-9 0-9-8Z" fill="#d3c5a8" stroke="#6a6053" stroke-width="4" filter="url(#shadow)"/>
<rect x="206" y="319" width="63" height="36" rx="3" fill="#244e57"/>
<path d="M213 329h40l-24 15H215Z" fill="#5c9690"/>
<circle cx="260" cy="365" r="2.5" fill="#c08d49"/>
<path d="M226 374v11h24v-11M215 386h45" fill="none" stroke="#766f5d" stroke-width="6"/>
<!-- repair items -->
<path d="M285 370l14-20 5 4-16 21" fill="#667569" stroke="#574e44" stroke-width="3"/>
<path d="M309 371l10-22" stroke="#7f6250" stroke-width="5"/>
<!-- warm ceiling light -->
<path d="M244 37v24" stroke="#5b453a" stroke-width="5"/>
<path d="M215 60h58l15 25h-89z" fill="#ccb87a" stroke="#7a5943" stroke-width="4"/>
<ellipse cx="244" cy="85" rx="29" ry="7" fill="#fef3c3"/>
<!-- owner silhouette -->
<ellipse cx="248" cy="463" rx="59" ry="16" fill="#71533e" opacity=".27"/>
<path d="M187 498q2-61 54-71 52 5 58 71Z" fill="#407567" stroke="#483f37" stroke-width="5"/>
<path d="M222 441l20 23 18-24" fill="#f4ebd8" stroke="#5b4e3f" stroke-width="3"/>
<path d="M232 424v20h20v-20" fill="#f3bb88" stroke="#563d34" stroke-width="3"/>
<ellipse cx="241" cy="399" rx="28" ry="37" fill="#f0bc8a" stroke="#5c4439" stroke-width="4"/>
<path d="M212 398q-2-46 27-48 35-4 33 47l-11-11-10-16-14 19-25 9Z" fill="#473a31"/>
<path d="M214 383q-5-30 21-34 16-3 34 15" fill="none" stroke="#473a31" stroke-width="12"/>
<path d="M227 401h5m18 0h5" stroke="#47382c" stroke-width="3"/>
<path d="M237 418q7 5 13-1" fill="none" stroke="#a05c52" stroke-width="2.5"/>
<path d="M193 458l-15 31m109-31 22 28" stroke="#f0bc8a" stroke-width="14"/>
<!-- customer silhouette -->
<ellipse cx="395" cy="486" rx="37" ry="12" fill="#684f3d" opacity=".22"/>
<path d="M365 505q0-55 31-61 32 2 33 61Z" fill="#cc7555" stroke="#684b3d" stroke-width="4"/>
<path d="M385 435v16h21v-16" fill="#dfad7d"/>
<ellipse cx="397" cy="411" rx="25" ry="33" fill="#e8b482" stroke="#684b3d" stroke-width="4"/>
<path d="M374 413q-8-37 21-42 29-2 26 35l-18-20-10 11-19 16Z" fill="#443d35"/>
<path d="M387 418h4m14 0h4" stroke="#453d33" stroke-width="3"/>
<path d="M393 432q6 3 10-2" fill="none" stroke="#aa7061" stroke-width="2"/>
<path d="M367 468q-10 18-11 39m69-34-5 29" stroke="#e2ad80" stroke-width="12"/>
<!-- counter -->
<path d="M65 500L319 486 377 535 132 557Z" fill="#f0c392" stroke="#5c4635" stroke-width="6" filter="url(#shadow)"/>
<path d="M132 557L377 535V638L132 659Z" fill="url(#wood)" stroke="#674430" stroke-width="6"/>
<path d="M65 500L132 557V659L65 593Z" fill="#9b6545" stroke="#674430" stroke-width="5"/>
<path d="M149 571L351 551V618L149 637Z" fill="url(#glass)" stroke="#6c654c" stroke-width="5"/>
<path d="M190 565v66M275 558v63" stroke="#6c654c" stroke-width="4"/>
<path d="M153 604l195-21" stroke="#6c654c" stroke-width="3"/>
<!-- phones and packaging behind glass -->
<g stroke="#4b5549" stroke-width="2.4">
<rect x="163" y="577" width="22" height="40" rx="4" fill="#b7c2ad"/><rect x="168" y="582" width="12" height="12" fill="#547e77"/>
<rect x="213" y="571" width="20" height="43" rx="5" fill="#54695b"/><rect x="218" y="577" width="10" height="13" fill="#c5d7b8"/>
<rect x="297" y="560" width="32" height="51" rx="3" fill="#d9cba8"/><path d="M303 572h20v26h-20Z" fill="#547c72"/>
</g>
<!-- glass glare -->
<path d="M164 579l51 44m39-57 45 40m20-47 15 15" fill="none" stroke="#eafdf0" stroke-opacity=".52" stroke-width="6"/>
<!-- phone and cash box on countertop -->
<g filter="url(#shadow)">
<path d="M165 502l28-4 15 15-33 6Z" fill="#596a62" stroke="#373f39" stroke-width="3"/>
<rect x="221" y="499" width="22" height="45" rx="6" fill="#5b665e" stroke="#3d463d" stroke-width="3" transform="rotate(-15 232 521)"/>
<rect x="226" y="507" width="12" height="16" rx="2" fill="#bbcbad" transform="rotate(-15 232 521)"/>
<path d="M251 499l34-3 11 16-37 5Z" fill="#d1c2a5" stroke="#72604d" stroke-width="3"/>
</g>
<!-- shop emblem / stickers -->
<rect x="187" y="580" width="107" height="28" rx="4" fill="#e9d3a0" stroke="#8d613f" stroke-width="3" transform="rotate(-5 240 595)"/>
<text x="240" y="597" font-size="15" font-weight="900" text-anchor="middle" fill="#855337" transform="rotate(-5 240 595)">旧物也有春天</text>
</g>
</svg>`,o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 660" role="img" aria-label="2003年中国街角旧数码店外景：招牌、旧手机海报、自行车、窗户和街道">
<defs>
<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#729ea4"/><stop offset="1" stop-color="#d6cab0"/></linearGradient>
<linearGradient id="fwall" x2="0" y2="1"><stop stop-color="#e6c59b"/><stop offset="1" stop-color="#c49373"/></linearGradient>
<linearGradient id="evening" x2="0" y2="1"><stop stop-color="#f1d4a7"/><stop offset="1" stop-color="#d09273"/></linearGradient>
<filter id="fshadow" x="-40%" y="-40%" width="200%" height="200%"><feDropShadow dx="2" dy="7" stdDeviation="5" flood-color="#392d24" flood-opacity=".34"/></filter>
</defs>
<g stroke-linecap="round" stroke-linejoin="round">
<rect width="480" height="660" fill="url(#sky)"/>
<circle cx="389" cy="100" r="52" fill="#ffe6b0" opacity=".72"/>
<path d="M0 150L94 133V260H0ZM376 144L480 126V297H365Z" fill="#92a09a"/>
<path d="M0 192L81 177V261H0ZM397 180L480 163V302H392Z" fill="#637d7c"/>
<path d="M16 160v78m39-88v82m355-69v90m43-104v92" stroke="#c7d2ba" stroke-width="7"/>
<path d="M0 479H480V660H0Z" fill="#b99c81"/>
<path d="M0 558H480M0 624H480" stroke="#e5d0aa" stroke-width="7" stroke-dasharray="38 22"/>
<path d="M15 0v138m449-138v138" stroke="#6c6862" stroke-width="4"/>
<path d="M0 106l480 30" stroke="#626865" stroke-width="3"/>
<!-- building facade -->
<path d="M40 149L439 139V516H40Z" fill="url(#fwall)" stroke="#5f4d3b" stroke-width="7" filter="url(#fshadow)"/>
<path d="M31 148L447 137V178L31 188Z" fill="#bd7050" stroke="#634534" stroke-width="6"/>
<path d="M40 172L440 163V243L40 251Z" fill="#2c5e58" stroke="#5a4335" stroke-width="7" filter="url(#fshadow)"/>
<path d="M49 241L430 233" stroke="#e6c296" stroke-width="8"/>
<text x="240" y="214" text-anchor="middle" fill="#f3e0b3" font-size="35" font-weight="900" letter-spacing="4">旧时光数码铺</text>
<text x="240" y="234" text-anchor="middle" fill="#bed6bc" font-size="10" font-weight="800" letter-spacing="4">2003 · 收购 · 维修 · 出售</text>
<!-- awning -->
<path d="M48 253L428 245L447 295L34 303Z" fill="#f1d9b0" stroke="#8c5b46" stroke-width="5"/>
<path d="M34 302L48 254L89 252L78 301Z M126 299L129 251L173 251L173 298ZM214 297L218 248L261 248L259 296ZM302 295L308 247L353 245L344 295ZM389 293L393 246L428 245L447 294Z" fill="#b9664b"/>
<path d="M34 302L447 293" stroke="#855944" stroke-width="4"/>
<!-- left window -->
<rect x="62" y="306" width="176" height="201" rx="4" fill="#547f77" stroke="#57483c" stroke-width="7"/>
<path d="M72 319H226V493H72Z" fill="#98a99a"/>
<path d="M73 417H227" stroke="#665445" stroke-width="7"/>
<path d="M78 339l27 23 23-31 20 20 24-25" fill="none" stroke="#d8ccae" stroke-opacity=".6" stroke-width="10"/>
<rect x="84" y="439" width="129" height="50" fill="#745946"/>
<path d="M93 454h115M106 444v37m55-37v37" stroke="#ab8964" stroke-width="4"/>
<rect x="97" y="389" width="26" height="42" rx="5" fill="#4d5f5b" stroke="#393f37" stroke-width="3"/>
<rect x="101" y="394" width="18" height="16" rx="2" fill="#c4cda0"/>
<rect x="140" y="391" width="21" height="38" rx="5" fill="#d6d4bb" stroke="#5b5c50" stroke-width="3"/>
<rect x="145" y="396" width="11" height="13" fill="#779e91"/>
<rect x="177" y="393" width="22" height="37" rx="5" fill="#657670" stroke="#4a4f46" stroke-width="3"/>
<text x="149" y="373" fill="#fff2ce" font-size="15" font-weight="900" text-anchor="middle">旧手机 高价回收</text>
<!-- storefront door -->
<rect x="273" y="303" width="140" height="217" rx="3" fill="#604c3e" stroke="#513f34" stroke-width="7"/>
<rect x="282" y="311" width="122" height="199" fill="url(#evening)"/>
<path d="M282 428h122M343 311v199" stroke="#704f3e" stroke-width="7"/>
<path d="M282 411q34-46 61-27 25-25 61-9v72H282Z" fill="#8ea797" opacity=".65"/>
<rect x="294" y="354" width="53" height="60" rx="3" fill="#f7e6b9" stroke="#704c36" stroke-width="3"/>
<text x="320" y="377" text-anchor="middle" font-size="18" font-weight="900" fill="#bd6147">开门</text>
<text x="320" y="398" text-anchor="middle" font-size="18" font-weight="900" fill="#bd6147">营业</text>
<circle cx="371" cy="415" r="5" fill="#efc98b" stroke="#604537" stroke-width="3"/>
<!-- entrance steps -->
<path d="M263 511H423L448 539H243Z" fill="#876e59" stroke="#5e4e3d" stroke-width="5"/>
<path d="M238 540H453L466 553H226Z" fill="#a98e77" stroke="#64503f" stroke-width="4"/>
<!-- bike -->
<g stroke="#3b4946" stroke-width="5" fill="none" filter="url(#fshadow)">
<circle cx="85" cy="567" r="42"/><circle cx="211" cy="565" r="42"/>
<path d="M85 567l50-81 76 79h-82l-44 2m50-81-29 76h105m-104-76h-18m46-4 19-10m56 93 16-87h18"/>
<circle cx="135" cy="487" r="6" fill="#3b4946"/>
</g>
<!-- pole lantern -->
<path d="M457 232v108" stroke="#4a483e" stroke-width="5"/>
<path d="M435 264h45v32h-45z" fill="#f8e3b1" stroke="#654d3f" stroke-width="4"/>
<path d="M445 263v32m24-32v32" stroke="#b78b5b" stroke-width="2"/>
<!-- planter -->
<path d="M418 490h47l-8 51h-30z" fill="#b36c50" stroke="#664b3d" stroke-width="4"/>
<path d="M440 488q-26-27-8-42 15-5 10 42m2 0q27-36 11-46-21-3-11 46m0-7q-4-50 5-58 14 15-5 58" fill="#527961" stroke="#45634e" stroke-width="3"/>
<!-- foreground shadow -->
<path d="M28 552q125 19 208 11M262 551q112 22 182 0" stroke="#866f5d" stroke-width="7" opacity=".4"/>
</g></svg>`,s=[{id:`customer`,label:`来客`,icon:`人`,title:`街坊来店了`,subtitle:`门口 · 一位带着旧手机的顾客`,clue:`顾客在柜台前等候。人物与真实议价会在后续模块接入。`},{id:`counter`,label:`柜台`,icon:`机`,title:`玻璃收货柜台`,subtitle:`台面 · 一部待检查的旧手机`,clue:`近距离观察机身、按键和屏幕。验机步骤将在 S1-U12 接入。`},{id:`shelf`,label:`货架`,icon:`货`,title:`旧机器展示架`,subtitle:`左侧 · 旧显示器、手机和配件`,clue:`这里会陈列真正入库的设备。当前只展示开张场景美术。`},{id:`bench`,label:`维修台`,icon:`修`,title:`店里的第一张维修桌`,subtitle:`里间 · CRT 电脑、螺丝刀和工具`,clue:`维修工位已经有视觉落点，维修判断与成本尚未接入。`}],c=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:0,maximumFractionDigits:2});function l(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`cashCents must be a nonnegative safe integer`);return c.format(e/100)}function u(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))throw RangeError(`dateISO must use YYYY-MM-DD`);let[t,n,r]=e.split(`-`).map(Number);if(new Date(Date.UTC(t??0,(n??1)-1,r??1)).toISOString().slice(0,10)!==e)throw RangeError(`dateISO is not a calendar date`);return String(t)+`年`+String(n)+`月`+String(r)+`日`}function d(e){if(l(e.cashCents),u(e.dateISO),!Number.isInteger(e.reputation)||e.reputation<0||e.reputation>100)throw RangeError(`reputation must be 0–100`);if(!e.shopName.trim())throw RangeError(`shopName must not be empty`)}function f(t,n){let r=e(`div`,n);return r.setAttribute(`aria-hidden`,`true`),r.innerHTML=t,r}function p(t,n,r){let i=e(`div`,`sd-hud-item`);return i.append(e(`span`,`sd-hud-glyph`,r),e(`span`,`sd-hud-caption`,t),e(`strong`,`sd-hud-value`,n)),i}function m(t){let n=e(`header`,`sd-hud`);return n.setAttribute(`aria-label`,`经营状态（测试快照）`),n.append(p(`现金`,l(t.cashCents),`¥`),p(`口碑`,String(t.reputation),`★`),p(`日期`,u(t.dateISO),`◷`)),n}function h(t,n,r,i,o){let c=e(`section`,`sd-world`);c.dataset.testid=`shop-world`,c.setAttribute(`aria-label`,`可交互的2003年二手数码店场景`);let l=e(`div`,`sd-world-heading`);l.append(e(`span`,`sd-world-chapter`,`第一章  ·  2003 / 夏`),e(`strong`,`sd-world-title`,o));let u=e(`div`,`sd-world-stage`);u.append(f(a,`sd-world-art`)),u.append(e(`span`,`sd-scene-skyline`,`这间店，刚刚开张。`));for(let r of s){let i=e(`button`,`sd-hotspot sd-hotspot-`+r.id+(t===r.id?` is-active`:``));i.type=`button`,i.dataset.testid=`scene-hotspot-`+r.id,i.setAttribute(`aria-label`,`查看`+r.label),i.setAttribute(`aria-pressed`,String(t===r.id)),i.append(e(`span`,`sd-hotspot-dot`,r.icon),e(`span`,`sd-hotspot-label`,r.label)),i.addEventListener(`click`,()=>n(r.id)),u.append(i)}if(t){let n=s.find(e=>e.id===t);if(n){let t=e(`aside`,`sd-inspect-card`);t.dataset.testid=`scene-detail`,t.setAttribute(`aria-label`,`场景互动信息`),t.append(e(`span`,`sd-inspect-icon sd-inspect-`+n.id,n.icon));let i=e(`div`,`sd-inspect-copy`);i.append(e(`strong`,``,n.title),e(`small`,``,n.subtitle),e(`p`,``,n.clue)),t.append(i);let a=e(`button`,`sd-inspect-close`,`×`);a.type=`button`,a.dataset.testid=`scene-detail-close`,a.setAttribute(`aria-label`,`关闭物件信息`),a.addEventListener(`click`,r),t.append(a),u.append(t)}}c.append(l,u);let d=e(`div`,`sd-world-toolbar`),p=e(`div`,`sd-world-tip`);p.append(e(`span`,`sd-status-dot`),e(`span`,``,`点击亮点，看看店里有什么`));let m=e(`button`,`sd-world-quick`,`走进店铺 ↗`);return m.type=`button`,m.dataset.testid=`open-shop-card`,m.addEventListener(`click`,()=>i(`shop`)),d.append(p,m),c.append(d),c}function g(t,n){let r=e(`section`,`sd-overview`);r.dataset.testid=`overview-world`,r.setAttribute(`aria-label`,`独立的经营总览账本`);let i=e(`div`,`sd-overview-masthead`);i.append(e(`span`,`sd-overview-kicker`,`THE OWNER'S LEDGER / 2003`),e(`h2`,`sd-overview-title`,`我的经营账本`),e(`p`,`sd-overview-subtitle`,`翻开账本，看看这间小店的起点。`));let o=e(`div`,`sd-ledger`),s=e(`div`,`sd-ledger-heading`);s.append(e(`span`,`sd-ledger-tab`,`街角数码铺`),e(`span`,`sd-ledger-date`,u(t.dateISO)));let c=e(`div`,`sd-ledger-totals`),d=e(`div`,`sd-ledger-cash`);d.append(e(`span`,``,`手头资金`),e(`strong`,``,l(t.cashCents)));let p=e(`div`,`sd-ledger-reputation`);p.append(e(`span`,``,`街坊口碑`),e(`strong`,``,String(t.reputation)+` / 100`)),c.append(d,p);let m=e(`div`,`sd-ledger-section`);m.append(e(`strong`,``,`经营进度`),e(`span`,`sd-ledger-stamp`,`开张`));let h=e(`div`,`sd-ledger-task`);h.append(e(`span`,`sd-ledger-check`,`01`),e(`div`,`sd-ledger-task-text`)),h.children[1]?.append(e(`strong`,``,`第一步 · 看看自己的店`),e(`small`,``,`货架、柜台、维修台和上门顾客已经就位`));let g=e(`div`,`sd-ledger-upcoming`);g.append(e(`span`,``,`▤ 库存管理 · 尚未开放`),e(`span`,``,`⇄ 交易流水 · 尚未开放`),e(`span`,``,`↗ 店铺升级 · 尚未开放`));let _=e(`p`,`sd-ledger-footnote`,`演示数据来自可重复测试场景；尚无真实收入、库存变化或日期推进。`);o.append(s,c,m,h,g,_);let v=e(`div`,`sd-overview-postcard`);v.append(f(a,`sd-overview-postcard-art`),e(`span`,``,`街角数码铺 · 开张留念`));let y=e(`button`,`sd-overview-return`,`← 回到店铺`);return y.type=`button`,y.dataset.testid=`overview-back-shop`,y.addEventListener(`click`,()=>n(`shop`)),r.append(i,o,v,y),r}function _(n,r){let a={...r.hud};d(a);let c=null,l={shop:()=>void 0,...r.modules},u=i(l),p=e(`div`,`sd-app`);n.replaceChildren(p);function _(){C(),r.onAction?.(u.snapshot())}function v(e){c=null,u.navigate(e),_()}function y(e){c=e;let t=s.find(t=>t.id===e);u.note(t?`正在查看：`+t.title:`观察店内`),_()}function b(){c=null,u.note(`已收起物件信息`),_()}function x(){let n=e(`main`,`sd-menu`);n.append(f(o,`sd-menu-art`));let r=e(`div`,`sd-menu-front`);r.append(e(`span`,`sd-menu-flag`,`中国 · 2003年夏`),e(`span`,`sd-menu-eyebrow`,`SECONDHAND DIGITAL STORE`),e(`h1`,`sd-menu-title`,`街角数码铺`),e(`p`,`sd-menu-tagline`,`从一部旧手机，做起一家有故事的店。`)),n.append(r);let i=e(`div`,`sd-menu-actions`);i.append(t(`开门营业  →`,()=>{c=null,u.start(),_()},{id:`start-game`}),t(`了解当前玩法`,()=>{u.info(),_()},{variant:`secondary`,id:`menu-info`}));let a=t(`继续存档 · 尚未开放`,()=>{},{variant:`quiet`,disabled:!0,id:`continue-disabled`});return a.title=`真实存档模块尚未开发`,i.append(a),n.append(i),n}function S(){let n=e(`main`,`sd-playing`),r=e(`div`,`sd-play-top`);r.append(e(`div`,`sd-game-brand`,`街角数码铺`),t(`≡ 菜单`,()=>{c=null,u.toMenu(),_()},{variant:`quiet`,small:!0,id:`back-menu`})),n.append(r,m(a));let i=u.snapshot(),o=e(`div`,`sd-scene`);if(i.scene===`shop`)o.append(h(c,y,b,v,`店铺 / 开门营业`));else if(i.scene===`dashboard`)o.append(g(a,v));else{let e=l[i.scene];e&&e(o)}n.append(o);let s=e(`nav`,`sd-bottom-nav`);s.setAttribute(`aria-label`,`游戏场景导航`);for(let t of u.entries()){let n=e(`button`,`sd-nav-option`+(i.scene===t.id?` selected`:``));n.type=`button`,n.dataset.scene=t.id,n.disabled=!t.available,n.setAttribute(`aria-disabled`,String(!t.available)),n.setAttribute(`aria-current`,i.scene===t.id?`page`:`false`),t.reason&&!t.available&&(n.title=t.reason);let r=t.id===`shop`?`⌂`:t.id===`dashboard`?`▦`:t.id===`trade`?`⇄`:`♙`;n.append(e(`span`,`sd-nav-icon`,r),e(`span`,``,t.label)),t.available||n.append(e(`small`,`sd-nav-lock`,`未开放`)),t.available&&n.addEventListener(`click`,()=>v(t.id)),s.append(n)}return n.append(s),n}function C(){p.replaceChildren();let t=u.snapshot();p.append(t.screen===`menu`?x():S());let n=e(`div`,`sd-feedback`,t.message);n.setAttribute(`role`,`status`),n.setAttribute(`aria-live`,`polite`),n.dataset.testid=`action-feedback`,n.dataset.actionCount=String(t.actionCount),p.append(n)}return C(),{snapshot:u.snapshot,entries:u.entries,updateHud(e){d(e),a={...e},c=null,C()},reset(){c=null,u.reset(),C()},destroy(){p.remove()}}}var v=`15bf494`,y=[{id:`opening`,label:`开张日 · 标准`,hud:{cashCents:128800,reputation:62,dateISO:`2003-06-18`,shopName:`街角数码铺`}},{id:`low-cash`,label:`现金紧张 · 边界`,hud:{cashCents:0,reputation:62,dateISO:`2003-06-19`,shopName:`街角数码铺`}},{id:`newcomer`,label:`新人开局 · 低信誉`,hud:{cashCents:6800,reputation:0,dateISO:`2003-06-20`,shopName:`街角数码铺`}}];function b(n){let r=y[0];if(!r)throw Error(`S1-U08 opening fixture missing`);let i=`opening`,a=0,o=[],s=e(`div`,`s108-lab`);n.replaceChildren(s);let c=e(`header`,`s108-meta`);c.append(e(`span`,`s108-id`,`S1-U08 · APP SHELL / HUD`),e(`span`,``,`revision ${v}`));let l=e(`h1`,`s108-title`,`主菜单与经营界面`),u=e(`p`,`s108-intro`,`这是一间可以点击的2003年数码小店。试试顾客、柜台、货架和维修桌；数值采用固定测试快照，不会模拟真实成交。`),d=e(`section`,`s108-preview`);d.setAttribute(`aria-label`,`正式游戏 AppShell`);let f=e(`section`,`s108-controls`),p=e(`strong`,``,`最近真实交互`),m=e(`div`,`s108-log`);m.setAttribute(`role`,`log`),m.setAttribute(`aria-live`,`polite`),f.append(p,m),s.append(c,d,l,u,f);let h=_(d,{hud:r.hud,onAction:e=>{a+=1,o=[`#${a} · ${e.message}`,...o].slice(0,8),g()}});function g(){m.replaceChildren(...o.map(t=>e(`p`,``,t))),o.length===0&&m.append(e(`p`,``,`尚无操作 · 请点击上方控件`))}function b(e){i=e;let t=y.find(t=>t.id===e);if(!t)throw RangeError(`Unknown fixture: ${e}`);h.updateHud(t.hud),h.reset(),a=0,o=[],g(),w.textContent=`fixture: ${i} · seed: N/A（无随机逻辑） · 已恢复主菜单`,S.value=i}let x=e(`label`,`s108-label`,`测试场景`),S=e(`select`,`s108-select`);S.dataset.testid=`fixture-select`,S.setAttribute(`aria-label`,`测试场景`);for(let t of y){let n=e(`option`,``,t.label);n.value=t.id,S.append(n)}S.value=i,S.addEventListener(`change`,()=>b(S.value)),x.append(S);let C=e(`div`,`s108-toolbar`);C.append(t(`↺ Reset`,()=>b(i),{variant:`secondary`,id:`s108-reset`}),t(`↻ Replay`,()=>{b(i),o=[`Replay / ${i} · 可重复起始状态`],g()},{variant:`quiet`,id:`s108-replay`}),t(`下一场景 →`,()=>{let e=y[(y.findIndex(e=>e.id===i)+1)%y.length];e&&b(e.id)},{variant:`quiet`,id:`s108-next`}));let w=e(`p`,`s108-status`,``),T=e(`p`,`s108-hint`,`操作验收：开门营业 → 点击场景亮点 → 查看物件 → 关闭 → 总览/店铺 → 返回菜单。未完成交易、人物和存档仍锁定。`),E=e(`a`,`s108-back`,`← 返回 Visual Lab 目录`);return E.href=`${`/smd-test/`.replace(/\/$/,``)}/lab`,f.prepend(e(`div`,`s108-divider`,`开发控制台 / FIXTURE + RESET`),x,C,w,T,E),b(`opening`),{snapshot:h.snapshot,currentFixture:()=>i,reset:()=>b(i),destroy:()=>{h.destroy(),s.remove()}}}var x=document.querySelector(`#app`);if(!x)throw Error(`S1-U08 mount target missing`);b(x);