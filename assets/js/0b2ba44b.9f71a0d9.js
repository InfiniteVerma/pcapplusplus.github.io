"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7824],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Build on Windows (VS)"},l="Build From Source on Windows - Visual Studio",p={unversionedId:"install/vs",id:"version-v21.11/install/vs",title:"Build on Windows (VS)",description:"Please visit the supported platforms page to see the Visual Studio versions currently supported in PcapPlusPlus.",source:"@site/versioned_docs/version-v21.11/install/vs.mdx",sourceDirName:"install",slug:"/install/vs",permalink:"/docs/install/vs",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v21.11/install/vs.mdx",tags:[],version:"v21.11",frontMatter:{title:"Build on Windows (VS)"},sidebar:"docs",previous:{title:"Build on MacOS",permalink:"/docs/install/macos"},next:{title:"Build on Windows (MinGW)",permalink:"/docs/install/mingw"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Visual Studio project structure",id:"visual-studio-project-structure",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Wizard mode",id:"wizard-mode",level:3},{value:"Command line switches mode",id:"command-line-switches-mode",level:3},{value:"Build the code",id:"build-the-code",level:2},{value:"Running tests",id:"running-tests",level:2}],d={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-from-source-on-windows---visual-studio"},"Build From Source on Windows - Visual Studio"),(0,i.kt)("p",null,"Please visit the ",(0,i.kt)("a",{parentName:"p",href:"../platforms"},"supported platforms page")," to see the Visual Studio versions currently supported in PcapPlusPlus."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to build PcapPlusPlus on Windows with Visual Studio you need the following components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("a",{parentName:"li",href:"../platforms"},"supported version")," of Microsoft Visual Studio"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"WinPcap developer's pack")," ",(0,i.kt)("strong",{parentName:"li"},"OR")," ",(0,i.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/guide/npcap-devguide.html"},"Npcap SDK")," - containing the wpcap library PcapPlusPlus is linking with plus relevant ",(0,i.kt)("inlineCode",{parentName:"li"},"h")," files.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"WinPcap developer's pack can be downloaded from here: ",(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"https://www.winpcap.org/devel.htm")),(0,i.kt)("li",{parentName:"ol"},"Npcap SDK can be downloaded from here: ",(0,i.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/#download"},"https://nmap.org/npcap/#download")))),(0,i.kt)("li",{parentName:"ol"},"pthread-win32 - can be downloaded from here: ",(0,i.kt)("a",{parentName:"li",href:"ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip"},"ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip")),(0,i.kt)("li",{parentName:"ol"},"In many cases you also need to download and install:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads"},"Microsoft Visual C++ Redistributable")," for your version of Visual Studio"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=14632"},"Microsoft Visual C++ 2010 Redistributable")))),(0,i.kt)("li",{parentName:"ol"},"OPTIONAL - download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/zstd/releases/latest"},"Zstd")," libraries if you wish to enable ",(0,i.kt)("a",{parentName:"li",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support"))),(0,i.kt)("h2",{id:"visual-studio-project-structure"},"Visual Studio project structure"),(0,i.kt)("p",null,"After configuration is complete there are 3 Visual Studio solutions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\PcapPlusPlus.sln")," - contains PcapPlusPlus libraries (",(0,i.kt)("strong",{parentName:"li"},"Common++"),", ",(0,i.kt)("strong",{parentName:"li"},"Packet++")," and ",(0,i.kt)("strong",{parentName:"li"},"Pcap++"),") and unit-tests projects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\PcapPlusPlus-Examples.sln")," - contains all PcapPlusPlus examples. Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"PcapPlusPlus.sln")," to be built first"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\Tutorials.sln")," - contains all PcapPlusPlus tutorial examples. Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"PcapPlusPlus.sln")," to be built first")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What is ",(0,i.kt)("inlineCode",{parentName:"h5"},"[vs_version]"),"?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"[vs_version]")," can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"vs2015"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vs2017")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vs2019")," and is determined during the configuration process."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"PcapPlusPlus Visual Studio solution",src:n(5683).Z,width:"1044",height:"429"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"PcapPlusPlus Visual Studio example solution",src:n(7817).Z,width:"1044",height:"429"})),(0,i.kt)("p",null,"All solutions support both 32-bit (x86) and 64-bit (x64) configurations as well as Debug and Release modes. So there are 4 supported modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x86|Debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x86|Release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x64|Debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x64|Release"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Before opening the solution (",(0,i.kt)("inlineCode",{parentName:"p"},".sln"),") files please run the ",(0,i.kt)("inlineCode",{parentName:"p"},"configure-windows-visual-studio.bat")," batch file from PcapPlusPlus main directory. This script configures the solution and project files according to the selected version of Visual Studio. It also creates a Visual Studio properties file called ",(0,i.kt)("inlineCode",{parentName:"p"},"PcapPlusPlusPropertySheet.props")," that contains paths for 3rd-party libraries being used to build PcapPlusPlus."),(0,i.kt)("p",null,"Ths script has two modes of operation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wizard mode - the script will walk you through the paths and parameters you need to provide"),(0,i.kt)("li",{parentName:"ul"},"Command line switches mode - all parameters are provided in the script command line")),(0,i.kt)("h3",{id:"wizard-mode"},"Wizard mode"),(0,i.kt)("p",null,"In wizard mode the script will ask you for the requested version of Visual Studio and the locations of WinPcap developer's pack / Npcap SDK and pthreads-win32. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-visual-studio.bat\n\n***********************************************\nPcapPlusPlus Visual Studio configuration script\n***********************************************\n\nChoose Visual Studio version.\n\nCurrently supported options are: vs2015, vs2017 or vs2019: vs2019\n\n\nWinPcap or Npcap SDK is required for compiling PcapPlusPlus.\nFor downloading WinPcap SDK (developer's pack) please go to https://www.winpcap.org/devel.htm\nFor downloading Npcap SDK please go to https://nmap.org/npcap/#download\n\nPlease specify WinPcap/Npcap SDK path: C:\\WpdPack\n\n\npthreads-win32 is required for compiling PcapPlusPlus.\nIf you didn't download it already, please download it from here: ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip\n\nPlease specify pthreads-win32 path: C:\\pthread-win32\n\nPcapPlusPlus Visual Studio configuration is complete. Files created (or modified): PcapPlusPlusPropertySheet.props, Arping.vcxproj,\nArpSpoofing.vcxproj, Common++.vcxproj, DNSResolver.vcxproj, DnsSpoofing.vcxproj, HttpAnalyzer.vcxproj, IcmpFileTransfer-catcher.vcxproj,\nIcmpFileTransfer-pitcher.vcxproj, IPDefragUtil.vcxproj, IPFragUtil.vcxproj, LightPcapNg.vcxproj, Packet++.vcxproj, Packet++Test.vcxproj,\nPcap++.vcxproj, Pcap++Test.vcxproj, PcapPrinter.vcxproj, PcapSearch.vcxproj, PcapSplitter.vcxproj, SSLAnalyzer.vcxproj, TcpReassembly.vcxproj,\nTutorial-HelloWorld.vcxproj, Tutorial-LiveTraffic.vcxproj, Tutorial-PacketCraftAndEdit.vcxproj, Tutorial-PacketParsing.vcxproj,\nTutorial-PcapFiles.vcxproj\n")),(0,i.kt)("h3",{id:"command-line-switches-mode"},"Command line switches mode"),(0,i.kt)("p",null,"In this mode you need to provide the requested Visual Studio version as well as the paths as script params. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," switch to query these switches:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-visual-studio.bat --help\n\n***********************************************\nPcapPlusPlus Visual Studio configuration script\n***********************************************\n\n\nHelp documentation for configure-windows-visual-studio.bat\nThis script has 2 modes of operation:\n  1) Without any switches. In this case the script will guide you through using wizards\n  2) With switches, as described below\n\nBasic usage: configure-windows-visual-studio.bat [-h] -v VS_VERSION -p PTHREADS_WIN32_DIR -w PCAP_SDK_DIR\n\nThe following switches are recognized:\n-v|--vs-version      --Set Visual Studio version to configure. Must be one of: vs2015, vs2017, vs2019\n-p|--pthreads-home   --Set pthreads-win32 home directory\n-w|--pcap-sdk        --Set WinPcap/Npcap SDK directory\n-z|--zstd-sdk        --Set ZStd SDK directory\n-h|--help            --Display this help message and exits. No further actions are performed\n")),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-visual-studio.bat --vs-version 2019 --pcap-sdk C:\\Npcap-SDK --pthreads-home C:\\pthread-win32\n\n***********************************************\nPcapPlusPlus Visual Studio configuration script\n***********************************************\n\n\nPcapPlusPlus Visual Studio configuration is complete. Files created (or modified): PcapPlusPlusPropertySheet.props, Arping.vcxproj,\nArpSpoofing.vcxproj, Common++.vcxproj, DNSResolver.vcxproj, DnsSpoofing.vcxproj, HttpAnalyzer.vcxproj, IcmpFileTransfer-catcher.vcxproj,\nIcmpFileTransfer-pitcher.vcxproj, IPDefragUtil.vcxproj, IPFragUtil.vcxproj, LightPcapNg.vcxproj, Packet++.vcxproj, Packet++Test.vcxproj,\nPcap++.vcxproj, Pcap++Test.vcxproj, PcapPrinter.vcxproj, PcapSearch.vcxproj, PcapSplitter.vcxproj, SSLAnalyzer.vcxproj, TcpReassembly.vcxproj,\nTutorial-HelloWorld.vcxproj, Tutorial-LiveTraffic.vcxproj, Tutorial-PacketCraftAndEdit.vcxproj, Tutorial-PacketParsing.vcxproj,\nTutorial-PcapFiles.vcxproj\n")),(0,i.kt)("p",null,"Here are the available switches:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-v"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--vs-version"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Visual Studio version to configure.",(0,i.kt)("br",null),"Currently supported versions are: ",(0,i.kt)("inlineCode",{parentName:"td"},"vs2015"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"vs2017"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"vs2019"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-p"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--pthreads-home"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"pthreads-win32 home directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-w"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--pcap-sdk"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to WinPcap Developer Pack (WpdPack) OR Npcap SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-z"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--zstd-sdk"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to Zstd SDK directory. This is an optional parameter that is required only if using ",(0,i.kt)("a",{parentName:"td",href:"../features#readingwriting-pcapng-files-with-compression"},"Zstd for PCAPNG streaming compression"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-h"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Display the help message and exit. No further actions are performed")))),(0,i.kt)("h2",{id:"build-the-code"},"Build the code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build ",(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\PcapPlusPlus.sln")," first to get PcapPlusPlus libraries and unit-tests"),(0,i.kt)("li",{parentName:"ul"},"Then you can choose to build ",(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\PcapPlusPlus-Examples.sln")," to get PcapPlusPlus examples"),(0,i.kt)("li",{parentName:"ul"},"You can also choose to build ",(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\Tutorials.sln")," to see the tutorial examples")),(0,i.kt)("p",null,"You can build these 3 solutions using either Visual Studio IDE or ",(0,i.kt)("inlineCode",{parentName:"p"},"MSBuild"),"."),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,i.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}m.isMDXComponent=!0},7817:function(e,t,n){t.Z=n.p+"assets/images/vs2015examples-6c945d8dcf4fa05ff68c81ae16579a2f.png"},5683:function(e,t,n){t.Z=n.p+"assets/images/vs2015pcpp-992766f388ee47f71afe9f8005dd05c2.png"}}]);