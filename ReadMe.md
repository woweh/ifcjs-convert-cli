# IFC.JS convert CLI

This is an attempt, to create a CLI tool for converting IFC files to gLTF and json.  
I want to find out if it's possible to use [web-ifc-viewer] with node.js.

The idea is to port the code from this tutorial [IFC to gLTF Tutorial] to a node.js CLI tool.  
This is a work in progress and is not yet functional.

When this works, the next step is creating a node.js express server that converts IFC files to gLTF and json.

From what I know, web-ifc-viewer depends on three.js and the gLTFLoader, and I believe these are browser specific. Therefore I'm using puppeteer to run the code in a headless browser.

[IFC to gLTF Tutorial]: https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Tutorials/IFC%20to%20gLTF/
[web-ifc-viewer]: https://github.com/IFCjs/web-ifc-viewer/