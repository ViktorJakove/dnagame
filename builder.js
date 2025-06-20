import { blockPresets } from "./blockPresets.js";

const NUM_SHELVES = 9;
const INACCESSIBLE_SHELVES = [4, 6];
const LEVEL_BLOCKS = ["Herakles", "b"];

function createShelf(index) {
    const shelf = document.createElement('div');
    shelf.className = 'shelf';
    shelf.dataset.index = index;
    if (INACCESSIBLE_SHELVES.includes(index)) {
        shelf.classList.add('inaccessible');
    } else {
        shelf.addEventListener('dragover', (e) => {
            e.preventDefault();
            shelf.style.background = '#eef';
        });
        shelf.addEventListener('dragleave', () => {
            shelf.style.background = '';
        });
        shelf.addEventListener('drop', (e) => {
            e.preventDefault();
            shelf.style.background = '';
            const presetKey = e.dataTransfer.getData('text/plain');
            if (shelf.children.length === 0 && blockPresets[presetKey]) {
                const block = blockPresets[presetKey].toElement();
                shelf.appendChild(block);
                shelf.classList.add('occupied');
            }
        });
    }
    return shelf;
}

document.addEventListener('DOMContentLoaded', () => {
    const library = document.getElementById('library');
    const workspace = document.getElementById('workspace');

    /*Object.values(blockPresets).forEach(preset => {
        library.appendChild(preset.toElement());
    });*/
    LEVEL_BLOCKS.forEach(blockname => {
        if (blockPresets[blockname]) {
            library.appendChild(blockPresets[blockname].toElement());
        }
    });

    workspace.innerHTML = '<h3>DNA</h3>';
    for (let i = 0; i < NUM_SHELVES; i++) {
        workspace.appendChild(createShelf(i));
    }
});

/*updateStats(){}*/