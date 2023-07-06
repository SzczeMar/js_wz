class GameAI {
    turn() {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    }

    collectResources() {
        for (let s of this.builtStructures) {
            s.collect();
        }
    }

    // Używamy "throw new Error" dla abstrakcyjnych metod
    buildStructures() {
        throw new Error("Method 'buildStructures()' must be implemented.");
    }

    buildUnits() {
        throw new Error("Method 'buildUnits()' must be implemented.");
    }

    attack() {
        const enemy = this.closestEnemy();
        if (enemy === null) {
            this.sendScouts(map.center);
        } else {
            this.sendWarriors(enemy.position);
        }
    }

    sendScouts(position) {
        throw new Error("Method 'sendScouts(position)' must be implemented.");
    }

    sendWarriors(position) {
        throw new Error("Method 'sendWarriors(position)' must be implemented.");
    }
}

class OrcsAI extends GameAI {
    buildStructures() {
        if (this.resourcesExist()) {
            // Buduj farmy, potem koszary, potem twierdzę.
        }
    }

    buildUnits() {
        if (this.plentyOfResourcesExist()) {
            if (!this.scoutsExist()) {
                // Buduj piechura, dodaj go do grupy zwiadowców.
            } else {
                // Buduj żołnierza, dodaj go do grupy wojowników.
            }
        }
    }

    sendScouts(position) {
        if (this.scouts.length > 0) {
            // Wyślij zwiadowców na pozycję.
        }
    }

    sendWarriors(position) {
        if (this.warriors.length > 5) {
            // Wyślij wojowników na pozycję.
        }
    }
}

class MonstersAI extends GameAI {
    collectResources() {
        // Potwory nie zbierają zasobów.
    }

    buildStructures() {
        // Potwory nie wznoszą budowli.
    }

    buildUnits() {
        // Potwory nie budują jednostek.
    }
}
