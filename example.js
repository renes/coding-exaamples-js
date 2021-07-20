class door {
    constructor(height, width, color, material) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.material = material;
    }
}

class House {

    #Door = null;

    constructor(name, build_year) {
        this.name = name;
        this.build_year = build_year;
    }

    createDoor(height, width, color, material) {
        this.#Door = new door(height, width, color, material);
    }

}

function createMyFirstHouse() {
    h = new House("Family House", 2020);
    h.createDoor(100, 200, "red", "wood");
    h.createDoor(200, 400, "blue", "wood");

}

createMyFirstHouse();
console.log(h);
