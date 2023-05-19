# IFC.JS convert CLI

This is an attempt, a PoC if you want, to create a CLI tool for converting IFC files to gLTF and json.

The idea is to port the code from this tutorial [IFC to gLTF Tutorial] to a node.js CLI tool.  
This is a work in progress and is not yet functional.

Ultimately, the aim is to create a node.js express server that can convert IFC files to gLTF and json.  
I want to find out if it's possible to use [web-ifc-viewer] with node.js.  
From what I know, web-ifc-viewer depends on three.js and the gLTFLoader, and I believe these are browser specific.  
Therefore I'm using puppeteer to run the code in a headless browser.

[IFC to gLTF Tutorial]: ttps://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Tutorials/IFC%20to%20gLT
[web-ifc-viewer]: ttps://github.com/IFCjs/web-ifc-viewe