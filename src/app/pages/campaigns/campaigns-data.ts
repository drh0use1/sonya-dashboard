import { Campaign } from "./campaign";
import { Status } from '../../@core/data/status';

export class CampaignsData {
  private static campaigns: Campaign[] = [
    {
      _id: "id",
      name: "campaign a",
      share: 50,
      goal: 1000,
      total: 200,
      startingDate: new Date().toLocaleString(),
      dueDate: new Date().toLocaleString(),
      status: Status.ACTIVE,
    },
    {
      _id: "id",
      name: "campaign b",
      share: 60,
      goal: 1000,
      total: 200,
      startingDate: new Date().toLocaleString(),
      dueDate: new Date().toLocaleString(),
      status: Status.ACTIVE,
    },
  ];

  public static getData(): Campaign[] {
    return this.campaigns;
  }
}