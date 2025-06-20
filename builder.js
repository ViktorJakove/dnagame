import { blockPresets } from "./blockPresets.js";

document.addEventListener('DOMContentLoaded',()=>{
    const library = document.getElementById('library');
    const workspace = document.getElementById('workspace');
    const stats = document.getElementById('stats');

    const blocks = [blockPresets["Herakles"].toElement(), blockPresets["b"].toElement()];
    blocks.forEach(blockdiv => {
        library.appendChild(blockdiv);
    })
});