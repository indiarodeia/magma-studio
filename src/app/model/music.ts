export class Music {

    url: string;
    title: string;
    artist: string;
    artist2: string;
    album: string;
    genre: string;
    duration: number;
    date: string;
    price: number;
    liked: boolean;
    key: string;


    // tslint:disable-next-line: max-line-length
    constructor(url: string, title: string, artist: string, genre: string, duration: number, date: string, artist2?: string, album?: string, price?: number, liked?: boolean, key?: string) {

        this.url = url;
        this.title = title;
        this.artist = artist;
        this.artist2 = artist2;
        this.album = album;
        this.duration = duration;
        this.date = date;
        this.price = price || 0;
        this.liked = liked || false;
        this.key = key;
    }

}


