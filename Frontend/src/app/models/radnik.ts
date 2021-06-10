import { Obrazovanje } from "src/app/models/obrazovanje";
import { Sektor } from "src/app/models/sektor";

export class Radnik {
    id: number;
    ime: string;
    prezime: string;
    brojLk: number;
    obrazovanje: Obrazovanje;
    sektor: Sektor;
}