
/**
 * represents the campaign model.
 * this is the very early prototype of the campaign model.
 */

export class Campaign {
    _id: string;
    name: string;
    share: number; // share price.
    goal: number; // goal price for this campaign. 
    total: number; // how many shares has been taken.
    startingDate: Date;
    dueDate: Date;
    active: boolean;

    public static default(): Campaign {
        const campaign = {
            _id: "id123",
            name: "campaign#1",
            share: 200,
            goal: 1000,
            total: 2,
            startingDate: new Date(),
            dueDate: new Date(),
            active: true,
        }
        return campaign;
    }

}