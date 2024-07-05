export interface Lijek {

    id: number,
    sifra: string,
    imeLijeka: string,
    opisLijeka: string,
    slikaNaziv: string, // ne zna sta sa ovim? - byte[]
    doziranje: number
}

export interface LijekCreate {
    sifra: string,
    imeLijeka: string,
    opisLijeka: string,
    slikaUpload: File,
    doziranje: number
}

export interface LijekCreateNoSlika {
    sifra: string,
    imeLijeka: string,
    opisLijeka: string,
    doziranje: number
}

export interface LijekUpdate {
    sifra: string,
    imeLijeka: string,
    opisLijeka: string,
    doziranje: number
    
}

export interface LijekImage {
    naziv: string,
    slikaUpload: File
}

export interface LijekImageNaziv {
    naziv: string
}