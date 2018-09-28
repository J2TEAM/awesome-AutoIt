# Awesome AutoIt

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Build Status](https://travis-ci.org/J2TeaM/awesome-AutoIt.svg)](https://travis-ci.org/J2TeaM/awesome-AutoIt)
[![Creator](https://img.shields.io/badge/Creator-Juno__okyo-blue.svg)](https://junookyo.blogspot.com/)
[![Twitter Follow](https://img.shields.io/twitter/follow/juno_okyo.svg?label=Follow&maxAge=2592000)](https://twitter.com/juno_okyo)

> A curated list of awesome UDFs, example scripts, tools and useful resources for [AutoIt](https://www.autoitscript.com/).

Created by [Juno_okyo](https://twitter.com/juno_okyo). Inspired by the [awesome](https://github.com/sindresorhus/awesome) list thing.

## Table Of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Awesome AutoIt](#awesome-autoit-)
  - [UDF/Libraries](#udflibraries)
    - [Automation](#automation)
      - [Browsers](#browsers)
      - [Microsoft Office](#microsoft-office)
      - [OpenOffice](#openoffice)
    - [Databases and web connections](#databases-and-web-connections)
    - [Data compression](#data-compression)
    - [Encryption and hash](#encryption-and-hash)
    - [GUI Additions](#gui-additions)
    - [Controls](#controls)
    - [Hardware](#hardware)
    - [Information gathering](#information-gathering)
    - [Internet protocol suite](#internet-protocol-suite)
    - [Maths](#maths)
    - [Media](#media)
    - [Graphics and image](#graphics-and-image)
    - [Players](#players)
    - [Sound](#sound)
    - [PDF](#pdf)
    - [Security](#security)
    - [Social Media and other Website API](#social-media-and-other-website-api)
    - [Windows](#windows)
    - [Misc](#misc)
  - [Tools](#tools)
  - [Useful Resources](#useful-resources)
    - [Documents](#documents)
    - [Websites](#websites)
    - [Guides/Tutorials](#guidestutorials)
    - [Videos](#videos)
    - [Books](#books)
    - [Syntax Highlighter](#syntax-highlighter)
  - [License](#license)
  - [Other Awesome Lists](#other-awesome-lists)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UDF/Libraries

Listing of libraries of **[user defined functions](https://en.wikipedia.org/wiki/User-defined_function)** (UDF). These libraries have been written to allow easy integration into your own scripts and are a very valuable resource for any programmer.

### Automation

- [Active Directory (by water)](https://www.autoitscript.com/forum/index.php?showtopic=106163) - Extensive library to control and manipulate the Windows active directory. Link to the documentation pages.
- [GTK+ (by prazetto)](https://www.autoitscript.com/forum/index.php?showtopic=150231) - GTK+ Framework | Widgets.
- [IUIAutomation MS framework (by junkew)](https://www.autoitscript.com/forum/index.php?showtopic=153520) - IUIAutomation MS framework to automate chrome, FF, IE etc.
- [Java (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=87956) - Creates an access bridge between your application and a Java application. Allowing you to automate some Java applications.
- [SAP (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=86574) - SAP business management automation.
- [SAPWizard (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=149540) - SAPWizard UDF.
- [Service (by arcker)](https://www.autoitscript.com/forum/index.php?showtopic=80201) - Build your own service with AutoIt code.
- [WiFi (by MattyD)](https://www.autoitscript.com/forum/index.php?showtopic=91018) - Low level control over your wireless LAN.
- [AutoItMonkey](https://github.com/ohtejera/AutoItMonkey) - The AutoItMonkey is an UDF that runs on your Android emulator or device and generates pseudo-random streams of user events such as clicks, touches, or gestures, as well as a number of system-level events.
- [ImperiusAutoIt](https://ohtejera.github.io/ImperiusAutoIt/) - Imperius AutoIt is an [ImperiusGeorge](https://github.com/lookout/ImperiusGeorge) client for mobile test automation that support native Android apps.
- [3270 (by Worlor)](https://github.com/Worlor/AutoIt-3270) - Library for automate a 3270 terminal with AutoIT

#### Browsers

- [Chrome (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=154439) - The same as above for Google Chrome. Automate the most common tasks in Chrome with the Chrome UDF.
- [Firefox (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=95595) - A little less support for automation than IE, but still very good.
- [FireFox Profile Backup 1.0 (by careca)](https://www.autoitscript.com/forum/files/file/224-firefox-profile-backup/) - Backup or restore your firefox profile, the application searches for the profile in home drive, That will be the one to backup.
- [_FF_AutoLogin (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=124330) - This is a auto-login function and login-function-generator for FireFox and the FF.au3.
- [_FF_DM (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=92035) - UDF to control the FireFox Download-Manager (not the download-window).
- [_FF_FoxBox (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=91650) - UDF to control Fox!Box (A Mozilla Firefox extension for the AVM FRITZ!Box) with FF.au3.
- [_FF_Screengrab (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=91665) - UDF to control Screengrab! (FireFox-AddOn) with FF.au3.
- [_HTML (by Stilgar)](https://www.autoitscript.com/forum/topic/124330-_htmlau3-v101/) - Get informations from any HTML (XML) source, without any browser.
- [HTMLDocumentEvents (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=166542) - Track IE document events.
- [IEEx (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=167035) - IE extended library with some Javascript options.
- [NavInfo (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149203) - With this UDF you can check if a specified browser/software is installed and which version is being used.
- [Opera (by MrCreatoR)](https://www.autoitscript.com/forum/index.php?showtopic=61090) - The same as above for Opera. Automate the most common tasks in Opera with the Opera UDF.

#### Microsoft Office

- [Microsoft Office Access (by randallc)](https://www.autoitscript.com/forum/index.php?showtopic=32144) - Automate Microsoft Access.
- Microsoft Office Excel (by water et al.) - This UDF is included in AutoIt. Link to the [documentation](https://www.autoitscript.com/wiki/Excel_UDF) pages.
- [Microsoft Office Excel Charts (by water, GreenCan)](https://www.autoitscript.com/forum/index.php?showtopic=135312) - Creating charts using Microsoft Excel.
- [Microsoft Office Outlook (by water)](https://www.autoitscript.com/forum/index.php?showtopic=126305) - Automate Microsoft Outlook. Link to the [documentation](https://www.autoitscript.com/wiki/OutlookEX_UDF_-_General) pages.
- [Microsoft Office PowerPoint (by Toady)](https://www.autoitscript.com/forum/index.php?showtopic=50254) - Automate Microsoft PowerPoint.
- Microsoft Office Word (by water et al.) - This UDF is included in AutoIt. Link to the [documentation](https://www.autoitscript.com/wiki/Word_UDF) pages.

#### OpenOffice

- [OOo/LibO Calc (by GMK)](https://www.autoitscript.com/forum/index.php?showtopic=151530) - OpenOfficeCalc UDF.

### Databases and web connections

- [ADODB (by spudw2k)](https://www.autoitscript.com/forum/index.php?showtopic=105875) - ADODB Example.
- [DBF (by funkey)](https://www.autoitscript.com/forum/index.php?showtopic=145142) - dBase database read and write with DLL.
- [EzMySql (by oriz)](https://www.autoitscript.com/forum/index.php?showtopic=116072) - EzMySql - Use MySql Databases with autoit.
- [FireBird (by eltorro)](https://www.autoitscript.com/forum/topic/94920-solved-passing-parameters-using-dllcall-to-a-c-dll/?do=findComment&comment=684751) - FireBird, Interbase dll udf.
- [MS SQL (by TheLuBu)](https://www.autoitscript.com/forum/index.php?showtopic=127101) - MSSQL.au3.
- [MS SQL (by ChrisL)](https://www.autoitscript.com/forum/index.php?showtopic=51952) - _SQL.au3. ADODB Connection.
- [MySQL (by cdkid)](https://www.autoitscript.com/forum/index.php?showtopic=20814) - MySQL relational database management system UDF.
- [MySQL (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=85617) - MySQL UDFs (without ODBC).
- [MySQL (by James)](https://www.autoitscript.com/forum/topic/122360-mysql-odbc-connector-udf) - MySQL ODBC Connector.
- [SQLite (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=17099) - SQLite is a library that implements a self-contained, embeddable, zero-configuration SQL database engine.
- [SQLite Array Functions (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=142977) - SQLite Array Functions - a faster method for unique arrays and sorting methods.
- [XML DOM Wrapper (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=19848) - Supports CRUD operations on XML. Including XSL and XPath.
- [AutoIt PHP MySQL (by J2TeaM)](https://www.autoitscript.com/forum/topic/173984-the-combination-of-autoit-php-and-mysql/) - The combination of AutoIt, PHP and MySQL.

### Data compression

- [7z, zip, gzip, bzip2, tar (by rasim)](https://www.autoitscript.com/forum/index.php?showtopic=85094) - Extensive library that uses a external DLL that must be provided with the script.
- [LZMA (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=87441) - LZMA (Native Windows).
- [LZMA Compression (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=112273) - LZMA Compression UDF.
- [MessagePack (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=166634) - MessagePack is an efficient binary serialization format. It lets you exchange data among multiple languages like JSON. But it's faster and smaller.
- [Package (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=138838) - Package UDF.
- [pZip (by asdf8)](https://www.autoitscript.com/forum/index.php?showtopic=129529) - PureZIP_L library UDF.
- [UnRAR (by rasim)](https://www.autoitscript.com/forum/index.php?showtopic=76176) - UnRAR.au3.
- [Zip plugin (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=44524) - Zip plugin.
- [ZIP (by torels)](https://www.autoitscript.com/forum/index.php?showtopic=73425) - ZIP.au3 UDF in pure AutoIt.
- [zip (by wraithdu)](https://www.autoitscript.com/forum/index.php?showtopic=116565) - Create ZIP files and unpack ZIP files.
- [ZIP (by joakim)](https://www.autoitscript.com/forum/index.php?showtopic=135565) - ZIP STRUCTS UDF (from scratch).
- [zLib (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=128962) - zLib (Deflate/Inflate/GZIP) UDF.
- [XZip (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=17727) - another UDF for "XStandard XZIP Component".
- [XZip (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=161847) - UDF for "XStandard XZIP Component".

### Encryption and hash

- [AES Rijndael (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=78745) - Very fast AES UDF. Support ECB/CBC/CFB/OFB block cipher mode.
- [MD5,SHA1,CRC32,RC4,BASE64,XXTEA (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=76976) - Several encryption and hash functions.
- [TrueCrypt (by FuryCell)](https://www.autoitscript.com/forum/index.php?showtopic=107784) - TrueCrypt UDFs.

### GUI Additions

- [3D Pie chart (by WideBoyDixon)](https://www.autoitscript.com/forum/index.php?showtopic=97241) - 3D Pie chart.  
- [Chart_UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173924) - This UDF can be used to Display bar charts in a window.).  
- [ContextHelp.au3 (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=96258) - Management of context help ([original](https://www.autoitscript.com/forum/index.php?showtopic=72152-contexthelp/)).  
- [Easy Scrollbars (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=113723) - Easily create scrollable sections in your GUI.  
- [ExtMsgBox (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=109096) - A very customisable replacement for MsgBox.  
- [GUICtrlOnChangeRegister (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=105582) - Call a function when an edits content is changed.  
- [GUIExtender (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=145149) - Expand and contract sections of your GUI ([original](https://www.autoitscript.com/forum/index.php?showtopic=117909)).  
- [GUIFrame (by Melba23 & Kip)](https://www.autoitscript.com/forum/index.php?showtopic=119505) - Divide a GUI into adjustable frames.  
- [GUI Panel (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=144207) - Manage child GUIs as panel ctrls.  
- [Modern tray menu (by Holger)](https://www.autoitscript.com/forum/index.php?showtopic=20967) - Allows the creation of modern, fancy GUI and tray menus with icons and colors.  
- [Pie chart (by Andreik)](https://www.autoitscript.com/forum/index.php?showtopic=161750) - Pie chart.  
- [SetOnEvent (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=71811) - Provides an easy way for an event to call functions with parameters.  
- [Uskin (by JScript)](https://www.autoitscript.com/forum/index.php?showtopic=132864) - A library that allows a user to skin their application GUI using the Windows _.MSstyles_ files.  
- [Toast (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=108445) - Small message GUIs which pop out of the Systray.  
- [XSkin (by Valuater)](https://www.autoitscript.com/forum/index.php?showtopic=32494) - A large library that allows skinning of your GUI and to apply custom skins.  
- [Real Vista Aero Glass (by James)](https://www.autoitscript.com/forum/index.php?showtopic=75429) - Real Vista Aero Glass UDF - you can apply glass effect to your gui.

### Controls

- [Calendar (by jmon)](https://www.autoitscript.com/forum/index.php?showtopic=146406) - Calendar UDF.
- [Colorpicker (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=96464) - Create a button for the user to select a color.
- [GDIPlus Slider UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173929) - This UDF can be used to create a slider with an imagebackground and an image to move.
- [Graph control (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=79412) - Easily create and show bar chart and line charts.
- [GraphGDIPlus UDF (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=104399) - Easily create and show bar chart and line charts with GDI+ to take advantage of double-buffering.
- [GUICtrlCreateFinder (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=105682) - Allows you to create a window finder control like the one seen in AutoIt Window Info.
- [GUITreeViewEx (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=166594) - Check/clear parent and child checkboxes in a TreeView.
- [GUIHotkey (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=107965) - UDF for using native hotkey controls.
- [GUIPager (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=111438) - Create and control native pager controls.
- [Hotkey input control (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=90598) - Hotkeys Input Control UDF Library (Non-native).
- [ListView Edit UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173932) - This UDF can be used to simply edit an Listview.
- [Marquees (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=143711) - Make tickertape info bars.
- [Progressbar with GDIplus (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=74649) - You even can use full textured images.
- [Ribbon (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=128242) - UDF for Windows Ribbon framework.
- [Syslink (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=126958) - Provides a convenient way to embed hypertext links in a window.
- [Table (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=105814) - Table UDF.

### Hardware

- [CommAPI](/wiki/CommAPI "CommAPI") (by therealhanuta) - Serial and parallel communication (COM port, RS-232, LPT port) - without installing DLL's (using Windows API calls).
- [Device Management (by weaponx)](https://www.autoitscript.com/forum/index.php?showtopic=77731) - Device Management API.
- [DirectShow (by monoceres)](https://www.autoitscript.com/forum/index.php?showtopic=97487) - DirectShow UDF.
- [DirectSound (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=164700) - DirectSound UDF.
- [Direct2D (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=164701) - Direct2D UDF.
- [FritzBox (by Allow2010)](https://www.autoitscript.com/forum/index.php?showtopic=138989) - _FB_Tools - manage your FritzBox from Autoit.
- [I/O Port Functions (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=121084) - Input/Output UDF for interacting with ports (x64 Parallel Port, Keyboard etc.).
- [Monitor Configuration (by jaberwacky)](https://www.autoitscript.com/forum/index.php?showtopic=154350) - Monitor Configuration UDF.
- [Mouse (by AlmarM)](https://www.autoitscript.com/forum/index.php?showtopic=155469) - AutoIt powered mouse events.
- [MouseTrapEvent (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=147325) - MouseTrapEvent UDF.
- [NetInfo (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149083) - UDF for test internet download speed and upload speed.
- [Network configuration (by jguinch)](https://www.autoitscript.com/forum/index.php?showtopic=155539) - Network configuration UDF.
- [Serial Port/COM (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=128546) - Serial Port /COM Port UDF.
- [SMARTDRIVE (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=27755) - SMART drive Analysis.
- [SPI Hardware Interface (by Blinky)](https://www.autoitscript.com/forum/topic/158640-spi-hardware-interface) - Communicate with the MAX335 chip using the SPI protocol via the LPT (printer) port.
- [Webcam (by LIMITER)](https://www.autoitscript.com/forum/index.php?showtopic=68866) - Webcam UDF.
- [Webcam (by ludocus)](https://www.autoitscript.com/forum/index.php?showtopic=70857) - Webcam UDF.

### Information gathering

- [Computer information (by JSThePatriot)](https://www.autoitscript.com/forum/index.php?showtopic=29404) - A general purpose library to get various details about a Windows machine.
- [WinPcap (by JRSmile)](https://www.autoitscript.com/forum/index.php?showtopic=54039) - Wrapper for the windows packet capture library WinPcap.
- [WinPcap (by Nicolas Ricquemaque)](http://opensource.grisambre.net/pcapau3/) - A library to access the main functionalities offered by the WinPcap driver.

### Internet protocol suite

- [cURL (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=137456) - A UDF for transferring data with URL syntax.
- [cURL (by Ward)](https://www.autoitscript.com/forum/topic/173067-curl-udf-autoit-binary-code-version-of-libcurl-with-ssl-support/) - AutoIt binary code version of libcurl with SSL support.
- [IMAP (by mikeytown2)](https://www.autoitscript.com/forum/index.php?showtopic=40243) - IMAP.
- [IMAP4 (by Tipulatoid)](https://www.autoitscript.com/forum/index.php?showtopic=108422) - IMAP4 UDF.
- [IRC (by McGod)](https://www.autoitscript.com/forum/index.php?showtopic=43515) - A lightweight library for communicating with IRC servers.
- [IRC (by rcmaehl)](https://www.autoitscript.com/forum/index.php?showtopic=159285) - IRC UDF - Updated Version of Chips' IRC UDF.
- [IRC (by TheDcoder)](https://www.autoitscript.com/forum/topic/181940-thedcoders-irc-udf-full-compliance-with-rfc-2812-and-ircv31/) - Fully compliant with RFC 2812 and IRCv3.1, feature-packed with support for SASL authentication.
- [JSON (by Gabriel13)](https://www.autoitscript.com/forum/index.php?showtopic=104150) - RFC4627 compliant JSON encode/decode.
- [JSON (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=148114) - JSMN - A Non-Strict JSON UDF.
- [JSON (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=156794) - Bridge to Native Windows JSON plus OO extension for AutoIt.
- [JSONgen: JSON generator (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=173797) - UDF to generate JSON.
- [POP3 (by Apzo)](https://www.autoitscript.com/forum/index.php?showtopic=22838) - POP3 library for retrieving email messages. Not compatible with Gmail because it uses SSL.
- [_POP3_Ex (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=167339) - POP3 UDF According to the 1939 RFC, modified version with Quoted Printable decoder.
- [POP3 SSL (by Fox2)](https://www.autoitscript.com/forum/index.php?showtopic=64051) - A POP3 library that's compatible with Gmail. It uses an external executable that must be supplied with your script.
- [Prowl (by mrflibblehat)](https://www.autoitscript.com/forum/index.php?showtopic=154530) - Push notifications to iPhone, iPod touch or iPad using Prowl (Growl client for iOS).
- [Request (by Ward)](https://www.autoitscript.com/forum/topic/173129-request-udf-the-simplest-way-to-make-http-request) - Powerful and easy-to-use HTTP client for AutoIt based on Curl.au3 and Json.au3.
- [SFTP (by Lupo73)](https://www.autoitscript.com/forum/index.php?showtopic=138095) - UDF to support SFTP protocol using PSFTP.
- [SMTP (by Jos)](https://www.autoitscript.com/forum/index.php?showtopic=23860) - Smtp Mailer That Supports Html And Attachments.
- [SNMP (by enaiman)](https://www.autoitscript.com/forum/index.php?showtopic=81687) - SNMP_UDF for SNMPv1 and SNMPv2c.
- [SNMP - MIB protocol (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=70759) - Reading toner status from SNMP device with WMI.
- [SSH (by jeanphile)](https://www.autoitscript.com/forum/index.php?showtopic=166579) - Use the SSH protocol very easily in your code.
- [TCPServer (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=169774) - Multi client, event-based, able to bind console app to socket.
- [UPnP Protocol (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=57022) - UPnP - Read and Control your devices in side out.
- [WinHTTP (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=84133) - Access the HTTP protocol for creating GET and POST requests and submitting them with conforming standards, cookies not supported.
- [WinInet (by -Ultima-)](https://www.autoitscript.com/forum/index.php?showtopic=77503) - Access standard Internet protocols (FTP, Gopher and HTTP). Supports GET/POST requests and cookies.

### Maths

- [Advanced Math UDF (by scintilla4evr)](https://www.autoitscript.com/forum/index.php?showtopic=170658) - This is an UDF full of advanced mathematical functions. It allows to work with primes, create number sequences, interpolate, calculate values of functions like Riemann zeta.
- [Advanced rounding (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=102686) - Support for different measures of accuracy and 8 ways to resolve tie breaks.
- [Big number (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=83529) - Make calculations with extremely large numbers that AutoIt normally is not able to support.
- [Decimal To fraction (by Malkey)](https://www.autoitscript.com/forum/index.php?showtopic=106551) - Converts any decimal number to a fraction. Example: 1.2 to 6/5.
- [Number base conversion (by james3mg)](https://www.autoitscript.com/forum/index.php?showtopic=81189) - From, to and between positive bases less than 63 (decimals supported).
- [NumToWord (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=117156) - Convert numerals to a human readable string.
- [Polynomials (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=108803) - Functions for using polynomials.
- [Primes (by jennico)](https://www.autoitscript.com/forum/index.php?showtopic=83091) - Many functions dealing with prime number generation and calculations.
- [Roman Numerals (by AZJIO)](https://www.autoitscript.com/forum/topic/94770-integer-to-roman-numerals/#entry1043544) - Roman Numerals.
- [Root function (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=98160) - Working out real roots of numbers.
- [StringAPL (by minx)](https://www.autoitscript.com/forum/index.php?showtopic=163899) - inline APL interpreter.
- [Trigonometry math functions (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=82722) - _ATan2(), _Cosh(), _Frexp(), _Hypot(), _Ldexp(), _Logb(), _Sinh(), _Tanh().

### Media

- [FreeImage library (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=95357) - Various operations on images, such as rotate, resize, flip.
- [HtmlHelp (by Geodetic)](https://www.autoitscript.com/forum/index.php?showtopic=127263) - HtmlHelp UDF.
- [OCR (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=50608) - Real OCR in AU3 - MODI with MS Office 2003.
- [OCR (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=89542) - Tesseract (Screen OCR) UDF.
- [Printer controller (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=51054) - Print text in any font, size and colour at any position on the page, draw lines, curves, elipses, pies in any colour, and print images.
- [Printing (by GRS)](https://www.autoitscript.com/forum/index.php?showtopic=73993) - Printing from AutoIt.
- [RTF_Printer (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=161831) - RTF_Printer.au3 - Printing RichEdit in the background.
- [Simple DirectMedia Layer (by AdmiralClaws)](https://www.autoitscript.com/forum/index.php?showtopic=94834) - Adds support for joysticks, CDs, 2D graphics, timers. See [SDL website](http://www.libsdl.org/) for more information.

### Graphics and image

- [Bitmap Library (by evilertoaster)](https://www.autoitscript.com/forum/index.php?showtopic=27362) - Bitmap Library.
- [IrrLicht (by A. Percy)](https://www.autoitscript.com/forum/index.php?showtopic=70506) - A 3D graphics engine suitable for creating games.
- [au3Irrlicht2 (by JRowe)](https://www.autoitscript.com/forum/index.php?showtopic=113881) - Another UDF bringing Irrlicht and au3 together. Historically some kind of a follower of the UDF above, technically with a complete different approach.
- [ImageGetInfo (by Lazycat)](https://www.autoitscript.com/forum/index.php?showtopic=13096) - This is an UDF for reading info from JPEG, TIFF, BMP, PNG and GIF - size, color depth, resolution.
- [OpenGL (by LarsJ)](https://www.autoitscript.com/forum/index.php?showtopic=151011) - OpenGL without external libraries etc. For JPEG files UDF also retreive various Exif information.
- [OpenGL (2.0) (by minx)](https://www.autoitscript.com/forum/index.php?showtopic=148129) - new set of UDFs for OpenGL + AutoIt.

### Players

- [VLC (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114143) - VLC (Media Player) UDF.
- [VLC Media Player (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=91316) - VLC Media Player.
- [WMP (by ConsultingJoe)](https://www.autoitscript.com/forum/index.php?showtopic=27352) - Windows Media Player UDF.

### Sound

- [BASS Function Library (by BrettF)](https://www.autoitscript.com/forum/index.php?showtopic=83481) - Sound and Music via wrappers for Bass, BassEnc, Bass FX, BassSFX, BassAsio and BassCd DLLs.
- [MIDI (by eynstyne)](https://www.autoitscript.com/forum/index.php?showtopic=37072) - MIDI UDF.
- [SAPIListBox (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114742) - SAPIListBox (Speech Recognition) UDF.
- [TTS (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=100439) - Text-to-Speech UDF.
- [libZPlay (by Danyfirex)](https://www.autoitscript.com/forum/index.php?showtopic=173808) - UDF for libZPlay - multimedia library for playing mp3, mp2, mp1, ogg, flac, ac3, aac, oga, wav and pcm files and streams.

### PDF

- [Acrobat Reader - ActiveX Viewer (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=162195) - Make your own PDF Viewer GUI with Acrobat Reader ActiveX COM Object "AcroPDF.PDF.1"
- [Debenu PDF Viewer SDK (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=164469) - A collection of functions to display PDF files in your applications using Debenu PDF Viewer SDK.
- [Debenu Quick PDF Library (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=160875) - A collection of functions for Debenu Quick PDF Library.
- [FoxIt Reader (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=75832) - PDF Reader in AU3.
- [MPDF (by taietel)](https://www.autoitscript.com/forum/index.php?showtopic=118827) - Create PDF from your application.
- [PDFCreator (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=42776) - Automation of PDFCreator allows you to create and manipulate PDF files.
- [PDFCreator (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=170550) - UDF for PDFCreator v1.x.x with working EVENTs Handler.
- [_StringToPDF (by Tam0r)](https://www.autoitscript.com/forum/index.php?showtopic=32261) - Write a string to a PDF file and specify font size, type etc.

### Security

- [VirusTotal (by Danyfirex)](https://www.autoitscript.com/forum/index.php?showtopic=150819) - VirusTotal API 2.0 UDF.

### Social Media and other Website API

- [CrowdinAPI (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=169333) - UDF using the [crowdin.net website API](https://crowdin.com/page/api) for some functions (create projects, add and update files, download translations or integrate localization).
- [Dropbox authenticator (by Gimerly)](https://www.autoitscript.com/forum/files/file/290-dropbox-authenticator/) - Dropbox authenticator.
- [Easypost (by dcat127)](https://www.autoitscript.com/forum/index.php?showtopic=158106) - Print USPS Postage Labels.
- [eBay (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114801) - eBay UDF (functions GetItemStatus and GetSingleItem from the "Shopping API").
- [Gmail (by PhoenixXL)](https://www.autoitscript.com/forum/index.php?showtopic=141340) - Remote Gmail (UDF).
- [Google Functions (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=98504) - Google Functions (Suggestions, Definitions, Translate, Convert).
- [Google Maps (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=115437) - Google Maps UDF.
- [Imgur](https://github.com/J2TeaM/AutoIt-Imgur-UDF) - An AutoIt UDF to help you upload images using Imgur API.
- [iTunes (by torels)](https://www.autoitscript.com/forum/index.php?showtopic=70675) - iTunes UDF.
- [iTunes (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=101802) - Another iTunes UDF.
- [No-IP (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=150985) - With this UDF you can simply update your no-ip hostname(s) and retrive the ip address of an no-ip address.
- [PasteBin (by mrflibblehat)](https://www.autoitscript.com/forum/index.php?showtopic=150838) - Pastebin UDF.
- [Skype (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=121767) - Skype4COM provides an ActiveX interface to the Skype API.
- [Teamspeak 3 (by chipDE)](https://www.autoitscript.com/forum/index.php?showtopic=113234) - Teamspeak 3 UDF.
- [TeamViewer API (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=166205) - UDF for TeamViewer API - a modest beginning.
- [TVmaze.com API (by BBs19)](https://www.autoitscript.com/forum/index.php?showtopic=166547) - TVmaze.com API UDF (TV-Series).
- [Twitter (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=116600) - Twitter UDF.
- [Yahoo Weather (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149247) - YWeather UDF - Yahoo Weather API.
- [Youtube Uploader (by BrettF)](https://www.autoitscript.com/forum/index.php?showtopic=112775) - AYTU - AutoIt Youtube Uploader.

### Windows

- [ACL (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=50880) - Set ACL on windows Objects.
- [FileSystemMonitor (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=113560) - FileSystemMonitor UDF.
- [Firewall (by JLogan3o13)](https://www.autoitscript.com/forum/index.php?showtopic=145158) - Windows Firewall UDF.
- [ITaskBarList (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=111018) - ITaskBarList UDF.
- [Local account (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=74118) - Local account UDF.
- [Magnifier Functions (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=161193) - This UDF exposes most of the useful Magnifier API functions available since Windows Vista.
- [Process UDF (by TheDcoder)](https://www.autoitscript.com/forum/topic/174697-process-udf-get-both-the-output-the-exit-code/) - Interact with processes in Windows, run a process and get both the output and exit code in a single function call!
- [Registry (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=75250) - Windows Registry UDFs.
- [Registry (by seanhart)](https://www.autoitscript.com/forum/index.php?showtopic=50551) - RegWriteAllUsers / RegDeleteAllUsers.
- [Startup (by guinness)](https://www.autoitscript.com/forum/index.php?showtopic=124508) - Create Startup entries in the Startup Folder or Registry.
- [SCCM (by JLogan3o13)](https://www.autoitscript.com/forum/topic/164756-sccm-udf/) - Systems Center Configuration Manager Library.
- [System restore (by FredAI)](https://www.autoitscript.com/forum/index.php?showtopic=134628) - System restore UDF.
- [Taskplanner/Taskscheduler COM (by Allow2010)](https://www.autoitscript.com/forum/index.php?showtopic=135994) - an UDF for using the Windows Taskplaner / Task Scheduler.
- [Task Scheduler (by dbzfanatic)](https://www.autoitscript.com/forum/index.php?showtopic=83355) - Task Scheduler UDF.
- [TTS UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173934) - UDF for use with SAPI Automation Object - text-to-speech (TTS) engine
- [UAC (by AdamUL)](https://www.autoitscript.com/forum/index.php?showtopic=158377) - User Account Control (UAC) UDF.
- [WIMGAPI (by Homes32)](https://www.autoitscript.com/forum/index.php?showtopic=127075) - A UDF for manipulating Windows Image Files (.wim) without ImageX.exe.
- [Windows Events (by Emperor)](https://www.autoitscript.com/forum/index.php?showtopic=28436) - Create your own Windows events.
- [Windows Services (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=81880) - Windows Services UDF.
- [WRMF (by Luigi)](https://www.autoitscript.com/forum/index.php?showtopic=163178) - WRMF - Windows Registry Monitor Call Function.

### Misc

- [Android (by Moriba)](https://www.autoitscript.com/forum/index.php?showtopic=160936) - Android UDF.
- [Animated tray icons (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=97826) - Make animated tray icons easily.
- [Atom Table (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=163577) - Store strings locally (at program level) or globally (at OS level) with unique numerical identifiers. This UDF lets you add, find, delete, and query these atoms.
- [Barcode generators (by willichan)](https://www.autoitscript.com/forum/index.php?showtopic=170087) - Creates a Code128A/B/C or Creates a Code39 or Code39Extended optimized barcode from supplied data.
- [Binary (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=131037) - Binary UDF.
- [BinaryCall (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=162366) - BinaryCall UDF - Write Subroutines In C, Call In AutoIt.
- [Clipboard History (by wraithdu)](https://www.autoitscript.com/forum/index.php?showtopic=81267) - Save and restore the entire clipboard contents. Inspired by AHK's ClipboardAll.
- [CmdLine (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=169610) - Collection of functions to parse command line arguments.
- [Copy (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=121833) - Copy or move files and directories without suspending your script. Retrieve the current state (copied bytes, error code etc.) while copying.
- [DDEML (by doudou)](https://www.autoitscript.com/forum/index.php?showtopic=55994) - With DDEML UDF one can use an AutoIt script as a DDE client or server.
- [_DLLStructDisplay (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=99106) - Show Struct in ListView.
- [Experimental Maps UDF (by TheDcoder)](https://github.com/TheDcoder/Experimental-Maps-UDF) - UDF for the new Map datatype in AutoIt, similar to the Array UDF included in standard UDFs.
- [FASM (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=111613) - The Embedded Flat Assembler (FASM) UDF.
- [_FileGetMimeType (by Wiliat87)](https://www.autoitscript.com/forum/index.php?showtopic=157689) - _FileGetMimeType UDF.
- [File locking with cooperative semaphores (by willichan)](https://www.autoitscript.com/forum/topic/117033-file-locking-with-cooperative-semaphores) - Simple file locking without a server.
- [FindMimeFromData (by twbradio)](https://www.autoitscript.com/forum/index.php?showtopic=157241) - FindMimeFromData using urlmon.dll.
- [Hotkey.au3 (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=90492) - Management of Hotkeys UDF, with several advantages over HotkeySet().
- [Inline Assembly (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=86672) - Assembles the code to binary machine code and runs it.
- [LFN (by orbs)](https://www.autoitscript.com/forum/index.php?showtopic=161628) - LFN UDF - overcome MAX_PATH limit of 256 chars.
- [LASM - Light Assembler (by minxomat)](https://www.autoitscript.com/forum/index.php?showtopic=173946) - This is the Inline UDF for an Assembler
- [MemoryDll (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=77463) - Embed DLLs in script and call functions from memory.
- [NoFocusLines (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=101733) - Remove the dotted focus lines from buttons, sliders, radios and checkboxes which spoil the look of your GUI.
- [NotifyIcon (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=149176) - NotifyIcon UDF (formerly TrayIconEx) - Create, delete and manage self notify icons.
- [PixelGetColor (by Manadar)](https://www.autoitscript.com/forum/index.php?showtopic=63318) - Get or Read Pixel from Memory UDF.
- [RDC (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=167024) - ReadDirectoryChanges Wrapper.
- [Resources (by Zedna)](https://www.autoitscript.com/forum/index.php?showtopic=51103) - Resources UDF.
- [ResourcesEx (by guinness)](https://www.autoitscript.com/forum/index.php?showtopic=162499) - ResourcesEx UDF (up to date with the current AutoIt language syntax v3.3.12.0).
- [Spell Checker (by iCode)](https://www.autoitscript.com/forum/index.php?showtopic=162033) - Spell Checker UDF - Hunspell.
- [StringSize (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=114034) - Automatically size controls to fit the text you want to put in them.
- [Synology filestation (by nend)](https://www.autoitscript.com/forum/index.php?showtopic=164444) - UDF for users of Synology NAS server.
- [TVExplorer (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=125251) - TVExplorer UDF.
- [SciLexer (by Kip)](https://www.autoitscript.com/forum/index.php?showtopic=51547) - SciLexer UDF.
- [AutoItAppveyor (by KyleChamberlin)](https://github.com/AutoItMicro/AutoItAppveyor) - This library contains functions for integrating your AutoIt scripts and programs with Appveyor CI.
- [Micro Unit Testing Framework (by KyleChamberlin)](https://github.com/AutoItMicro/MicroUnitTestingFramework) - Micro is a xUnit style testing framework design for use with AutoIt.
- [TeenyScript (by tarretarretarre)](http://teenyscript.tarre.nu/documentation) - TeenyScript is a Superset of AutoIt which makes it more advanced. TeenyScript code are parsed into native AutoiT code.
- [Logger (by Worlor)](https://github.com/Worlor/AutoIt-Logger) - Logger is an all-in-one logging utility really easy to use ! It enable log rotate per day and zip it after x days

## Tools

- [SciTE4AutoIt3](https://www.autoitscript.com/site/autoit-script-editor/downloads/) contains SciTE, wrapped into a single installer with all needed configuration settings and lots of utility programs like [AutoIt3Wrapper](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/AutoIt3Wrapper.html), [SciTEConfig](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/SciTEConfig.html), [Tidy](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/Tidy.html), [Au3Stripper](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/Au3Stripper.html) etc to enhanced SciTE for use with AutoIt3.
- [KODA Form Designer](http://koda.darkhost.ru/) - a standalone application that was developed to help creating forms (GUIs) for AutoIt3 scripting language. It's included in SciTE4AutoIt3.
- [ISN AutoIt Studio](http://www.isnetwork.at/index.php?option=com_content&view=article&id=10&Itemid=115) - a complete IDE for the AutoIt programming language.
- [ISN AutoIT form Studio](http://www.isnetwork.at/index.php?option=com_content&view=article&id=7&Itemid=116) - Graphical Form Designer for AutoIt.
- [AutoIt Obfuscator](https://www.pelock.com/products/autoit-obfuscator) - Obfuscate your AutoIt script source code & algorithms to protect it against reverse engineering analysis, cracking and decompilation.

## Useful Resources

### Documents

- [AutoIt Online Document](https://www.autoitscript.com/autoit3/docs/)
- [SciTE4AutoIt3 Online Document](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3.html) | [Wiki](https://www.autoitscript.com/wiki/SciTE4AutoIt3)

### Websites

- [Official Website](https://www.autoitscript.com/)
- [Official Forum](https://www.autoitscript.com/forum/)
 + [Vietnamese Forum](http://autoitvn.com/)
 + [French Forum](http://www.autoitscript.fr/)
 + [Brazilian Forum](http://forum.autoitbrasil.com/)
 + [Germany Forum](https://autoit.de/)
 + [Russian Forum](http://autoit-script.ru/)
 + [Spanish Forum](http://www.emesn.com/autoitforum/)
- [AutoIt Wiki](https://www.autoitscript.com/wiki)
- [Programs](https://www.autoitscript.com/wiki/AutoIt_Programs) - a list of programs created in AutoIt.
- [AutoIt Group on Facebook](https://www.facebook.com/groups/autoitscript/) (Vietnamese).

### Guides/Tutorials

- [Tutorials](https://www.autoitscript.com/wiki/Tutorials) - There are many tutorials available for AutoIt. This page is an overview of a few known tutorials.
- [Best coding practices](https://www.autoitscript.com/wiki/Best_coding_practices) - a detailed explanation of what are to be considered the best coding practices within AutoIt. These recommendations are based on accepted coding practices common to a number of other programming languages. You do not need to follow them, but it is recommended that you do.
- [Snippets](https://www.autoitscript.com/wiki/AutoIt_Snippets) - generally single functions or small pieces of code which can be incorporated into a script to add extra functionality.

### Videos

- [AutoIt Tutorials](https://www.youtube.com/playlist?list=PL1DCD109B801D0DE6) by 403forbidden403.
- [AutoIt Tutorials](https://www.youtube.com/user/AutoitFrench/videos) by AutoitFrench.
- [AutoIt for Beginner](https://www.youtube.com/playlist?list=PLNeDQQ_ukvRoz5IKgFy1pgfZVqDuZf5X2) by Lee Sai.
- [AutoIt for Beginner](https://www.youtube.com/playlist?list=PLADZ5XR0fS9B1AL1FmLUCfrXoRu2nYOKu) by Hai The Luong.
- [Advanced AutoIt Tutorials](https://www.youtube.com/playlist?list=PL_-NI9iPtoB741rTw1hjNPirk3jTMKtrQ) by Juno\_okyo [[Subscribe](https://www.youtube.com/channel/UCEETpUrNm5qI-LENbBON2Gw/?sub_confirmation=1)].

### Books

- [AutoIt v3: Your Quick Guide](http://shop.oreilly.com/product/9780596515126.do) by Andy Flesner ([Download PDF](https://www.google.com/search?q=AutoIt+v3%3A+Your+Quick+Guide+filetype%3Apdf)).
- [Instant AutoIt Scripting](https://books.google.com.vn/books?id=TgY2-RSxhDUC) by Emilio Aristides de Fez Laso.
- [AutoIT Scripting For Beginners](https://books.google.com.vn/books?id=ugdeCgAAQBAJ) by Rajan.
- [Learn To Program Using FREE Tools with AutoIt 1.2](https://www.autoitscript.com/forum/files/file/351-learn-to-program-using-free-tools-with-autoit/) by Jfish.

### Syntax Highlighter

- [GeSHi - Generic Syntax Highlighter](http://qbnz.com/highlighter/)
- [Highlight.js](https://highlightjs.org/) - Added AutoIt since version 8.7
- [Crayon Syntax Highlighter](https://wordpress.org/plugins/crayon-syntax-highlighter/) (WordPress Plugin) - Added AutoIt since version 1.8.2
- [WP Syntax](https://wordpress.org/plugins/wp-syntax/) (WordPress Plugin) - based on GeSHi.
- [PrismJS](http://prismjs.com/) - Added AutoIt since version 1.1.0
- [AutoIt - Visual Studio](https://github.com/loganch/AutoIt-VSCode) - AutoIt extension for Visual Studio.

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

## Other Awesome Lists

- [awesome](https://github.com/sindresorhus/awesome) by @sindresorhus
- [awesome-all](https://github.com/bradoyler/awesome-all) by @bradoyler
- [awesome-awesome](https://github.com/emijrp/awesome-awesome) by @emijrp
- [awesome-awesome](https://github.com/erichs/awesome-awesome) by @erichs
- [awesome-awesome](https://github.com/oyvindrobertsen/awesome-awesome) by @oyvindrobertsen
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) by @bayandin
- [awesome-awesomes](https://github.com/fleveque/awesome-awesomes) by @fleveque
- [awesome-collection](https://github.com/flyhigher139/awesome-collection) by @flyhigher139
- [lists](https://github.com/jnv/lists) by @jnv

[[Back to Top](#awesome-autoit)]
