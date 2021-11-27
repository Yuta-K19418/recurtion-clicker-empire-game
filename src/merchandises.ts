export class Merchandise{

    name: string = "";
    price: number = 0;
    unitPrice: number = 0;
    unit: string = "";
    type: string = "";
    maxNumberOfPurchases: number = 0;
    imageUrl: string = "";

    constructor(
        name: string,
        price: number,
        unitPrice: number,
        unit: string,
        type: string,
        maxNumberOfPurchases: number,
        imageUrl: string
        )
    {
        this.name = name;
        this.price = price,
        this.unitPrice = unitPrice;
        this.unit = unit;
        this.type = type;
        this.maxNumberOfPurchases = maxNumberOfPurchases;
        this.imageUrl = imageUrl;
    }
}

const Merchandises = (): Merchandise[] => {
    let merchandises: Merchandise[] = [
        new Merchandise("Flip machine", 15000, 25, "Click", "Ability", 500, "https://cdn.pixabay.com/photo/2013/07/13/09/49/bbq-156093_1280.png"),
        new Merchandise("ETF Stock", 300000, 0.1, "Second", "Investment", -1, "https://cdn.pixabay.com/photo/2020/08/10/14/37/business-5477997_1280.png"),
        new Merchandise("ETF Bonds", 300000, 0.07, "Second", "Investment", -1, "https://cdn.pixabay.com/photo/2020/08/10/14/37/business-5477997_1280.png"),
        new Merchandise("Lemonade Stand", 30000, 30, "Second", "Real Estate", 1000, "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_1280.png"),
        new Merchandise("Ice Cream Truck", 100000, 120, "Second", "Real Estate", 500, "https://cdn.pixabay.com/photo/2016/06/02/22/13/ice-1432274_1280.png"),
        new Merchandise("House", 20000000, 32000, "Second", "Real Estate", 100, "https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_1280.png"),
        new Merchandise("TownHouse", 40000000, 64000, "Second", "Real Estate", 100, "https://cdn.pixabay.com/photo/2016/06/01/17/43/house-1429409_1280.png"),
        new Merchandise("Mansion", 250000000, 500000, "Second", "Real Estate", 20, "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_1280.png"),
        new Merchandise("Industrial Space", 1000000000, 2200000, "Second", "Real Estate", 10, "https://cdn.pixabay.com/photo/2021/03/30/09/19/factory-6136460_1280.png"),
        new Merchandise("Hotel Skyscraper", 10000000000, 25000000, "Second", "Real Estate", 5, "https://cdn.pixabay.com/photo/2020/02/01/16/17/architecture-4810652_1280.png"),
        new Merchandise("Bullet-Speed Sky Railway", 10000000000000, 30000000000, "Second", "Real Estate", 1, "https://cdn.pixabay.com/photo/2014/03/24/17/21/amtrak-295512_1280.png"),
    ];
    return merchandises;
}

function getMerchandises(): Merchandise[] {
    return Merchandises();
}

export default getMerchandises;