"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[2009],{398:function(t,e,a){var n=a(7294);e.Z=function(t){var e=t.value;return n.createElement(n.Fragment,null,e)}},7374:function(t,e,a){var n=a(7294),r=a(7385);e.Z=function(t){var e=t.data;return n.createElement(r.Z,{height:450,chartType:"ColumnChart",loader:n.createElement("div",null,"Loading Chart"),data:e,options:{title:"Graphic view",chartArea:{left:0},backgroundColor:"transparent"},legendToggle:!0})}},1695:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return d},TCP_NO_OPTIONS_PCAPPLUSPLUS_SEC:function(){return u},TCP_NO_OPTIONS_LIBTINS_SEC:function(){return k},TCP_NO_OPTIONS_LIBCRAFTER_SEC:function(){return P},TCP_NO_OPTIONS_LIBPCAP_SEC:function(){return N},TCP_NO_OPTIONS_PCAPPLUSPLUS_PPS:function(){return h},TCP_NO_OPTIONS_LIBTINS_PPS:function(){return f},TCP_NO_OPTIONS_LIBCRAFTER_PPS:function(){return b},TCP_NO_OPTIONS_LIBPCAP_PPS:function(){return g},TCP_WITH_OPTIONS_PCAPPLUSPLUS_SEC:function(){return T},TCP_WITH_OPTIONS_LIBTINS_SEC:function(){return C},TCP_WITH_OPTIONS_LIBCRAFTER_SEC:function(){return v},TCP_WITH_OPTIONS_LIBPCAP_SEC:function(){return _},TCP_WITH_OPTIONS_PCAPPLUSPLUS_PPS:function(){return S},TCP_WITH_OPTIONS_LIBTINS_PPS:function(){return I},TCP_WITH_OPTIONS_LIBCRAFTER_PPS:function(){return y},TCP_WITH_OPTIONS_LIBPCAP_PPS:function(){return O},DNS_PCAPPLUSPLUS_SEC:function(){return L},DNS_LIBTINS_SEC:function(){return x},DNS_LIBCRAFTER_SEC:function(){return w},DNS_LIBPCAP_SEC:function(){return B},DNS_PCAPPLUSPLUS_PPS:function(){return Z},DNS_LIBTINS_PPS:function(){return A},DNS_LIBCRAFTER_PPS:function(){return U},DNS_LIBPCAP_PPS:function(){return V},toc:function(){return E},default:function(){return M}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(7385),a(7374)),p=a(398),s=["components"],m={title:"Benchmarks",sidebar_position:8},o=void 0,c={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used Matias Fontanini's packet-capture-benchmarks project. The benchmark compared PcapPlusPlus, libtins, libcrafter and libpcap.",source:"@site/docs/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/docs/next/benchmark",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Benchmarks",sidebar_position:8},sidebar:"docs",previous:{title:"Example Apps",permalink:"/docs/next/examples"},next:{title:"Running Tests",permalink:"/docs/next/tests"}},d={},u=.219,k=.241,P=6.26,N=.12,h=2283105,f=2074688,b=79872,g=4166666,T=.218,C=.288,v=10.569,_=.12,S=2293577,I=1736111,y=47308,O=4166666,L=.234,x=.245,w=6.791,B=.028,Z=2136752,A=2040816,U=73626,V=17857142,E=[{value:"Tested projects",id:"tested-projects",level:2},{value:"Testing environment",id:"testing-environment",level:2},{value:"Test results",id:"test-results",level:2},{value:"Benchmark #1 - TCP parsing",id:"benchmark-1---tcp-parsing",level:3},{value:"Benchmark #2 - TCP + TCP Options parsing",id:"benchmark-2---tcp--tcp-options-parsing",level:3},{value:"Benchmark #3 - DNS parsing",id:"benchmark-3---dns-parsing",level:3}],R={TCP_NO_OPTIONS_PCAPPLUSPLUS_SEC:u,TCP_NO_OPTIONS_PCAPPLUSPLUS_PPS:h,TCP_WITH_OPTIONS_PCAPPLUSPLUS_SEC:T,TCP_WITH_OPTIONS_PCAPPLUSPLUS_PPS:S,DNS_PCAPPLUSPLUS_SEC:L,DNS_PCAPPLUSPLUS_PPS:Z,toc:E};function M(t){var e=t.components,a=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,n.Z)({},R,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"Matias Fontanini's packet-capture-benchmarks project"),". The benchmark compared PcapPlusPlus, ",(0,l.kt)("a",{parentName:"p",href:"http://libtins.github.io/"},"libtins"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pellegre/libcrafter"},"libcrafter")," and libpcap."),(0,l.kt)("h2",{id:"tested-projects"},"Tested projects"),(0,l.kt)("p",null,"PcapPlusPlus was only compared to similar C/C++ projects such as ",(0,l.kt)("a",{parentName:"p",href:"http://libtins.github.io/"},"libtins")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pellegre/libcrafter"},"libcrafter")," because projects written higher level languages (such as Python or Java) cannot compete with the performance of native libraries. The following versions were used for the benchmarks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"libpcap-dev ",(0,l.kt)("a",{parentName:"li",href:"https://www.tcpdump.org/#old-releases"},"v0.8.1")),(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/seladb/PcapPlusPlus/releases/tag/v19.04"},"v19.04")),(0,l.kt)("li",{parentName:"ul"},"libtins ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mfontanini/libtins/releases/tag/v4.2"},"v4.2")),(0,l.kt)("li",{parentName:"ul"},"libcrafter - commit ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pellegre/libcrafter/tree/3db70ab6fd62ade25de7328aaf8e9ba92696c92e"},"#3db70ab"))),(0,l.kt)("h2",{id:"testing-environment"},"Testing environment"),(0,l.kt)("p",null,"All 3 benchmarks provided in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"packet-capture-benchmarks")," were run on the following environment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux Ubuntu 16.04 64-bit running as a VirtualBox VM with 4 virtual cores and 8GB RAM"),(0,l.kt)("li",{parentName:"ul"},"GCC 5.4.0 compiler"),(0,l.kt)("li",{parentName:"ul"},"The host platform is a MacBook Pro model 2017 with Intel Core i7 760 3.1GHz processor and 16GB RAM running MacOS High Sierra 10.13")),(0,l.kt)("p",null,"Benchmark applications:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The PcapPlusPlus benchmark application can be found in ",(0,l.kt)("a",{parentName:"li",href:"./examples#pcapplusplus-benchmark"},"PcapPlusPlus examples")),(0,l.kt)("li",{parentName:"ul"},"The other benchmark applications can be found in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"Matias Fontanini's packet-capture-benchmarks project"))),(0,l.kt)("h2",{id:"test-results"},"Test results"),(0,l.kt)("h3",{id:"benchmark-1---tcp-parsing"},"Benchmark #1 - TCP parsing"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Results")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"PcapPlusPlus is ~10% faster than libtins and ~x28 faster than libcrafter"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:N,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:g,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:u,mdxType:"ConstVal"}))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:h,mdxType:"ConstVal"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:k,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:f,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:P,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:b,mdxType:"ConstVal"}))))),(0,l.kt)(i.Z,{data:[["Library","Seconds"],["libpcap",N],["PcapPlusPlus",u],["libtins",k],["libcrafter",P]],mdxType:"ThemedChart"}),(0,l.kt)("h3",{id:"benchmark-2---tcp--tcp-options-parsing"},"Benchmark #2 - TCP + TCP Options parsing"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Results")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"PcapPlusPlus is ~32% faster than libtins and ~x48 faster than libcrafter"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:_,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:O,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:T,mdxType:"ConstVal"}))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:S,mdxType:"ConstVal"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:C,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:I,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:v,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:y,mdxType:"ConstVal"}))))),(0,l.kt)(i.Z,{data:[["Library","Seconds"],["libpcap",_],["PcapPlusPlus",T],["libtins",C],["libcrafter",v]],mdxType:"ThemedChart"}),(0,l.kt)("h3",{id:"benchmark-3---dns-parsing"},"Benchmark #3 - DNS parsing"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Results")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"PcapPlusPlus is ~5% faster than libtins and ~x29 faster than libcrafter"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:B,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:V,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:L,mdxType:"ConstVal"}))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)(p.Z,{value:Z,mdxType:"ConstVal"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:x,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:A,mdxType:"ConstVal"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:w,mdxType:"ConstVal"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p.Z,{value:U,mdxType:"ConstVal"}))))),(0,l.kt)(i.Z,{data:[["Library","Seconds"],["libpcap",B],["PcapPlusPlus",L],["libtins",x],["libcrafter",w]],mdxType:"ThemedChart"}))}M.isMDXComponent=!0}}]);