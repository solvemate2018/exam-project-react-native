export class Event {
    name: string;
    category?: string;
    dateTime: Date;
    location: string;
    pictureUrl?: string

    constructor(name: string, dateTime: Date, location: string, category?: string, pictureUrl?: string) {
        this.name = name;
        this.category = category;
        this.dateTime = dateTime;
        this.location = location;
        this.pictureUrl = pictureUrl
    }
}