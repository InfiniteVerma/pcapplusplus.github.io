"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[1917],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,w=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?i.createElement(w,l(l({ref:n},d),{},{components:t})):i.createElement(w,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6693:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return u}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],o={title:"Build on Windows (MinGW)"},s="Build From Source on Windows - MinGW32 / MinGW-w64",p={unversionedId:"install/mingw",id:"install/mingw",title:"Build on Windows (MinGW)",description:"Prerequisites for building with MinGW",source:"@site/docs/install/mingw.mdx",sourceDirName:"install",slug:"/install/mingw",permalink:"/docs/next/install/mingw",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/install/mingw.mdx",tags:[],version:"current",frontMatter:{title:"Build on Windows (MinGW)"},sidebar:"docs",previous:{title:"Build on Windows (VS)",permalink:"/docs/next/install/vs"},next:{title:"Build for Android",permalink:"/docs/next/install/android"}},d={},m=[{value:"Prerequisites for building with MinGW",id:"prerequisites-for-building-with-mingw",level:2},{value:"If you prefer to install pthreads manually please follow these steps",id:"if-you-prefer-to-install-pthreads-manually-please-follow-these-steps",level:3},{value:"Prerequisites for building with MinGW-w64",id:"prerequisites-for-building-with-mingw-w64",level:2},{value:"Additional prerequisites",id:"additional-prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Running tests",id:"running-tests",level:2}],c={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-from-source-on-windows---mingw32--mingw-w64"},"Build From Source on Windows - MinGW32 / MinGW-w64"),(0,r.kt)("h2",{id:"prerequisites-for-building-with-mingw"},"Prerequisites for building with MinGW"),(0,r.kt)("p",null,"In order to compile PcapPlusPlus on Windows using MinGW32 you need the following components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The fastest way I found for installing mingw32 was through this link: ",(0,r.kt)("a",{parentName:"li",href:"http://www.mingw.org/wiki/Getting_Started"},"http://www.mingw.org/wiki/Getting_Started")),(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw-get-setup.exe"),", run it and follow the instructions"),(0,r.kt)("li",{parentName:"ol"},"By default the pthreads library is not installed so you need to ask to install it. It can be done during the installation process or afterwards with ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw-get.exe")," (MinGW installation manager)"),(0,r.kt)("li",{parentName:"ol"},"In the MinGW installation manager search for all packages containing ",(0,r.kt)("inlineCode",{parentName:"li"},"pthreads")," and mark them for installation. Make sure the ",(0,r.kt)("inlineCode",{parentName:"li"},"pthreads-win32")," version you install is ",(0,r.kt)("strong",{parentName:"li"},"2.10")," or later"),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Installation->Update Catalogue"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is a bug in MinGW32 that makes PcapPlusPlus build to fail. Here is how to fix it:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Go to the file: ",(0,r.kt)("inlineCode",{parentName:"li"},"YOUR_MINGW_INSTALL_PATH\\MinGW\\include\\ptw32_errno.h")),(0,r.kt)("li",{parentName:"ol"},"Search for the line that has ",(0,r.kt)("inlineCode",{parentName:"li"},"#include <winsock.h>"),". You'll see a comment above this line saying this line is incompatible with any application which uses ",(0,r.kt)("inlineCode",{parentName:"li"},"<winsock2.h>")," (PcapPlusPlus is one of them)"),(0,r.kt)("li",{parentName:"ol"},"Simply comment this line, like this: ",(0,r.kt)("inlineCode",{parentName:"li"},"//# include <winsock.h>"))))),(0,r.kt)("h3",{id:"if-you-prefer-to-install-pthreads-manually-please-follow-these-steps"},"If you prefer to install pthreads manually please follow these steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"http://ftp.ntua.gr/mirror/mingw/MinGW/Base/pthreads-w32/pthreads-w32-2.10-pre-20160821-1/pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz"},"pthreads for MinGW"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract it with 7-Zip"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"7z.exe e pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz -oC:\\pthreads\n7z.exe x C:\\pthreads\\pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar -oC:\\pthreads\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the include files to MinGW folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xcopy /Y C:\\pthreads\\include\\* C:\\MinGW\\include\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the lib files to MinGW folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xcopy /Y C:\\pthreads\\lib\\* C:\\MinGW\\lib\n")))),(0,r.kt)("h2",{id:"prerequisites-for-building-with-mingw-w64"},"Prerequisites for building with MinGW-w64"),(0,r.kt)("p",null,"In order to compile PcapPlusPlus on Windows using MinGW-w64 you need the following components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and run mingw-w64 installer from here: ",(0,r.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/mingw-w64/"},"https://sourceforge.net/projects/mingw-w64/")),(0,r.kt)("li",{parentName:"ol"},"Make sure the installation path doesn't contain spaces (otherwise PcapPlusPlus compilation may fail)"),(0,r.kt)("li",{parentName:"ol"},"Make sure to choose the i686 (32-bit) and POSIX threads (and not win32 threads) options. for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"i686-8.1.0-posix-dwarf-rt_v6-rev0"),". PcapPlusPlus doesn't support MinGW-w64 64-bit (x86_64)"),(0,r.kt)("li",{parentName:"ol"},"Follow the instruction in the installation wizard"),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"MSYS2"),"from here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"https://www.msys2.org/")),(0,r.kt)("li",{parentName:"ol"},"Add the following folders to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," environment variable:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The MinGW-w64 folder that contains ",(0,r.kt)("inlineCode",{parentName:"li"},"g++.exe"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw32-make"),", etc. It should be under ",(0,r.kt)("inlineCode",{parentName:"li"},"[MinGW-w64_install_folder]\\mingw32\\bin"),", for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0\\mingw32\\bin")),(0,r.kt)("li",{parentName:"ol"},"The MSYS2 ",(0,r.kt)("inlineCode",{parentName:"li"},"usr\\bin")," folder, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\msys32\\usr\\bin"))))),(0,r.kt)("h2",{id:"additional-prerequisites"},"Additional prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"WinPcap developer's pack")," ",(0,r.kt)("strong",{parentName:"li"},"OR")," ",(0,r.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/guide/npcap-devguide.html"},"Npcap SDK")," - containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"wpcap")," library PcapPlusPlus is linking with plus relevant ",(0,r.kt)("inlineCode",{parentName:"li"},"h")," files.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"WinPcap developer's pack can be downloaded from here: ",(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"https://www.winpcap.org/devel.htm")),(0,r.kt)("li",{parentName:"ol"},"Npcap SDK can be downloaded from here: ",(0,r.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/#download"},"https://nmap.org/npcap/#download"))))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"x64 is not supported")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please notice that ",(0,r.kt)("strong",{parentName:"p"},"x64")," compilation is not supported (and will not work) on either MinGW32 nor MinGW-w64!"))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"configure-windows-mingw.bat")," batch file from PcapPlusPlus main directory. The script creates a makefile ",(0,r.kt)("inlineCode",{parentName:"p"},"mk\\PcapPlusPlus.mk")," that contains paths for 3rd-party libraries being used to build PcapPlusPlus."),(0,r.kt)("p",null,"Ths script has two modes of operation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wizard mode - the script will walk you through the paths and parameters you need to provide"),(0,r.kt)("li",{parentName:"ul"},"Params mode - all parameters are provided in the script command line")),(0,r.kt)("p",null,"In wizard mode the script will ask you for MinGW location (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\MinGW")," for MinGW or ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0")," for MinGW-w64) and also for WinPcap developer's pack / Npcap SDK location (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\WpdPack")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Npcap-SDK"),")."),(0,r.kt)("p",null,"Here is an example of running the script for MinGW32:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'C:\\PcapPlusPlus>configure-windows-mingw.bat\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\nMinGW32 or MinGW-w64 are required for compiling PcapPlusPlus. Please specify\nthe type you want to use (can be either "mingw32" or "mingw-w64")\n\nPlease specify mingw32 or mingw-w64: mingw32\n\n\nIf mingw32 is not installed, please download and install it\nmingw32 can be downloaded from: www.mingw.org/\n\nPlease specify mingw32 installed path (for example: C:\\MinGW or C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0): C:\\MinGW\n\n\nWinPcap or Npcap SDK is required for compiling PcapPlusPlus.\nFor downloading WinPcap SDK (developer\'s pack) please go to https://www.winpcap.org/devel.htm\nFor downloading Npcap SDK please go to https://nmap.org/npcap/#download\n\nPlease specify WinPcap/Npcap SDK path: C:\\WpdPack\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n')),(0,r.kt)("p",null,"Here is another example of running the script for MinGW-w64:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'C:\\PcapPlusPlus>configure-windows-mingw.bat\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\nMinGW32 or MinGW-w64 are required for compiling PcapPlusPlus. Please specify\nthe type you want to use (can be either "mingw32" or "mingw-w64")\n\nPlease specify mingw32 or mingw-w64: mingw-w64\n\n\nIf mingw-w64 is not installed, please download and install it\nmingw-w64 can be downloaded from: sourceforge.net/projects/mingw-w64/\n\nPlease specify mingw-w64 installed path (for example: C:\\MinGW or C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0): C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0\n\n\nMSYS2 is required for compiling PcapPlusPlus.\nIf MSYS2 are not installed, please download and install it from: https://www.msys2.org/\n\nPlease specify MSYS2 installed path: C:\\msys64\n\n\nWinPcap or Npcap SDK is required for compiling PcapPlusPlus.\nFor downloading WinPcap SDK (developer\'s pack) please go to https://www.winpcap.org/devel.htm\nFor downloading Npcap SDK please go to https://nmap.org/npcap/#download\n\nPlease specify WinPcap/Npcap SDK path: C:\\Npcap-SDK\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n\n')),(0,r.kt)("p",null,"In params mode you need to provide these paths as script params. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," switch to query these params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'C:\\PcapPlusPlus>configure-windows-mingw.bat --help\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\n\nHelp documentation for configure-windows-mingw.bat\nThis script has 2 modes of operation:\n  1) Without any switches. In this case the script will guide you through using wizards\n  2) With switches, as described below\n\nBasic usage: configure-windows-mingw.bat [-h] MINGW_COMPILER -m MINGW_HOME_DIR -w PCAP_SDK_DIR [-s MSYS_HOME_DIR]\n\nThe following switches are recognized:\nMINGW_COMPILER       --The MinGW compiler to use. Can be either "mingw32" or "mingw-w64"\n-m|--mingw-home      --Set MinGW home directory (the folder that includes "bin", "lib" and "include" directories)\n-s|--msys-home       --Set MSYS2 home directory (must for mingw-w64, not must for mingw32)\n-w|--pcap-sdk        --Set WinPcap/Npcap SDK directory\n-h|--help            --Display this help message and exits. No further actions are performed\n')),(0,r.kt)("p",null,"For example (MinGW32):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-mingw.bat mingw32 --mingw-home C:\\MinGW --pcap-sdk C:\\Npcap-SDK\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n\n")),(0,r.kt)("p",null,"Or (MinGW-w64):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-mingw.bat mingw-w64 --mingw-home C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0 --msys-home C:\\msys64 --pcap-sdk C:\\WpdPack\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n")),(0,r.kt)("p",null,"Here are the available switches:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MINGW_COMPILER"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"MinGW compiler to use. Options are ",(0,r.kt)("inlineCode",{parentName:"td"},"mingw32")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"mingw-w64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"-m"))," , ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--mingw-home"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"MinGW home directory (the folder that includes ",(0,r.kt)("inlineCode",{parentName:"td"},"bin"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"lib")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"include")," directories)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"-s"))," , ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--msys-home"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"MSYS or MSYS2 home directory. Required only for MinGW-w64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"-w"))," , ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--pcap-sdk"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to WinPcap Developer Pack (WpdPack) OR Npcap SDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"-h"))," , ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display the help message and exit. No further actions are performed")))),(0,r.kt)("h2",{id:"build-the-code"},"Build the code"),(0,r.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe all")," from PcapPlusPlus main directory"),(0,r.kt)("li",{parentName:"ol"},"This should compile all libraries, unit-tests and examples"),(0,r.kt)("li",{parentName:"ol"},"To build the libraries only (without the unit-tests and examples) run ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe libs")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe all")),(0,r.kt)("li",{parentName:"ol"},"After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dist\\")," directory")),(0,r.kt)("h2",{id:"running-tests"},"Running tests"),(0,r.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,r.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}u.isMDXComponent=!0}}]);