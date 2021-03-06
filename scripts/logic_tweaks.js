function updateMacrosAndLocations() {
    addDefeatGanondorf();
    updateDungeonEntranceMacros();
    updateChartMacros();
    updateRematchBossesMacros();
    updateSwordModeMacros();
    updateTriforceMacro();
    updateTingleStatueReward();
}

function addDefeatGanondorf() {
    flags.push('Finish Game');
    itemLocations["Ganon's Tower - Defeat Ganondorf"] = {
        Need: 'Can Reach and Defeat Ganondorf',
        Types: 'Finish Game'
    };
}

function updateDungeonEntranceMacros() {
    if (isRandomEntrances) {
        for (var i = 0; i < dungeons.length; i++) {
            var dungeonName = dungeons[i];
            if (isMainDungeon(dungeonName)) {
                var macroName = 'Can Access ' + dungeonName;
                var entryName = 'Entered ' + shortDungeonNames[i];
                macros[macroName] = entryName;
            }
        }
    }
}

function updateChartMacros() {
    if (isRandomCharts) {
        for (var i = 0; i < charts.length; i++) {
            var chartName = charts[i];
            var macroName = 'Chart for Island ' + (i + 1);
            macros[macroName] = chartName; // we assume everything is a Treasure Chart and clear any additional requirements like wallet upgrades
        }
    }
}

function updateRematchBossesMacros() {
    if (skipRematchBosses) {
        macros["Can Unlock Ganon's Tower Four Boss Door"] = 'Nothing';
    }
}

function updateSwordModeMacros() {
    if (swordMode == 'swordless') {
        macros['Can Sword Fight with Orca'] = 'Can Sword Fight with Orca in Swordless';
        macros['Can Defeat Phantom Ganon'] = 'Can Defeat Phantom Ganon in Swordless';
        macros['Can Access Hyrule'] = 'Can Access Hyrule in Swordless';
        macros['Can Defeat Ganondorf'] = 'Can Defeat Ganondorf in Swordless';
    }
}

function updateTriforceMacro() {
    macros['All 8 Triforce Shards'] = 'Triforce Shard x8';
}

function updateTingleStatueReward() {
    var tingleStatueReward = itemLocations['Tingle Island - Ankle - Reward for All Tingle Statues'];
    if (tingleStatueReward) {
        tingleStatueReward.Need = 'Tingle Statue x5';
    }
}
