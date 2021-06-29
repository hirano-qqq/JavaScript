class Taiyaki{
    constructor(nakami) {
        this.nakami = nakami;
}

outNakami(){
    console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki('あんこ')
anko.outNakami();

let cream = new Taiyaki('クリーム')
cream.outNakami();

let cheese = new Taiyaki('チーズ')
cheese.outNakami();