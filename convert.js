import { launch } from 'puppeteer';
import { resolve, join } from 'path';
import { pathToFileURL } from 'url';
import fs from 'fs';
import { Color } from 'three';

import { IFCWALL, IFCWALLSTANDARDCASE, IFCSLAB, IFCWINDOW, IFCMEMBER, IFCPLATE, IFCCURTAINWALL, IFCFLOWFITTING, IFCFLOWSEGMENT, IFCFLOWTERMINAL, IFCBUILDINGELEMENTPROXY, IFCDOOR } from 'web-ifc';

import pkg from 'web-ifc-viewer';
const { IfcViewerAPI } = pkg;


function filePathToUrl(filePath) {
    const absolutePath = resolve(filePath);
    const fileUrl = pathToFileURL(absolutePath).href;
    return fileUrl;
}

const htmlFilePath = join(__dirname, 'viewer.html');
const htmlUrl = filePathToUrl(htmlFilePath);

const ifcFilePath = join(__dirname, 'Schependomlaan.ifc');
const ifcUrl = filePathToUrl(ifcFilePath);

(async () => {
    const browser = await launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(htmlUrl);

    const title = await page.title();
    console.log(title);

    const container = await page.$('#viewer-container');
    console.log(container);

    await page.evaluate(async (container) => {

        const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });

        // Export to glTF and JSON
        const result = await viewer.GLTF.exportIfcFileAsGltf({
            ifcFileUrl: ifcUrl,
            splitByFloor: true,
            categories: {
                walls: [IFCWALL, IFCWALLSTANDARDCASE],
                slabs: [IFCSLAB],
                windows: [IFCWINDOW],
                curtainwalls: [IFCMEMBER, IFCPLATE, IFCCURTAINWALL],
                doors: [IFCDOOR],
                pipes: [IFCFLOWFITTING, IFCFLOWSEGMENT, IFCFLOWTERMINAL],
                undefined: [IFCBUILDINGELEMENTPROXY],
            },
            getProperties: true,
        });

        console.log(result);
    })

    await browser.close();
})();