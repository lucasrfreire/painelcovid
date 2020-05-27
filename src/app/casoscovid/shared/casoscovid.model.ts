export class Casoscovid {

    public uid: number;
    public uf: string;
    public state: string;
    public cases: number;
    public deaths: number;
    public suspects: number;
    public refuses: number;
    public datetime: string;

    constructor(
        uid: number,
        uf: string,
        state: string,
        cases: number,
        deaths: number,
        suspects: number,
        refuses: number,
        datetime: string
    ){
        this.uid = uid;
        this.uf = uf;
        this.state = state;
        this.cases = cases;
        this.deaths = deaths;
        this.suspects = suspects;
        this.refuses = refuses;
        this.datetime = datetime;
    }
}
