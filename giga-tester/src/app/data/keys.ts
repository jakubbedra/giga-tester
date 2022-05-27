export class Keys {
  static keyRecord: Record<string, string> = {
    "1e83ad9f-459b-4587-baf6-ff801b7dd6a4": "zbs",
    "46190c5c-3a50-4b41-92c1-609f54d738d3": "zbs-entry",
    "74ad80ab-ef93-444d-99bb-3b285356deed": "rpi",
    "de6eb720-a6a8-44a7-92db-d8b675d3fe6e": "zfi",
    "031f5088-b155-4ddd-b900-ceeac4cd6f30": "bsk",
    "33caaee6-9d99-4ce4-aed9-0085988e1be9": "wzr",
    "a9ee3187-5e4b-4cb6-82b1-e544a4a9f8bd": "jo",
    "1075308d-3319-4a52-a088-5878a792d318": "ed",
    "82d8dd92-0a7a-4f9a-914b-c5575b1907a3": "st",
    "836aa962-1f08-4521-91aa-9f862f4b88c5": "pml",
    "de28ebc4-ff1e-4cfc-9ffa-73f1a869d7f9": "XD",
    "2137": "papjesz"
  };

  static getValue(key: string) {
    if (key in this.keyRecord) {
      return this.keyRecord[key];
    } else {
      return "";
    }
  }

}
