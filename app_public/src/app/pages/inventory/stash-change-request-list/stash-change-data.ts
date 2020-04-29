import { MembersData } from './../../members/members-data';
import { InventoryData } from "./../inventory-data";
import { StashChangeRequest } from "./stash-change-request";

/**
 * represents temporary data service for a stash change request.
 */


export class StashChangeData {
  constructor() {}

  private static stashChanges: StashChangeRequest[] = [
    {
      _id: "id",
      change: InventoryData.getData()[0],
      take: 2,
      date: new Date(),
      changer: MembersData.getData()[0],
      group: StashChangeRequest.Group.MEMBER,
      status: StashChangeRequest.Status.UNTOUCHED,
    },
    {
      _id: "id",
      change:  InventoryData.getData()[1],
      take: 5,
      date: new Date(),
      changer: MembersData.getData()[1],
      group: StashChangeRequest.Group.MEMBER,
      status: StashChangeRequest.Status.UNTOUCHED,
    },
  ];

  public static getData(): StashChangeRequest[] {
    return this.stashChanges;
  }
}