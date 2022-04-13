"use strict";
import { baseClass } from "../../resources/data/baseClass.js";

export function sortParty(
  party = [],
  playerID = "00000000",
  sortRule = ["19", "21", "32", "37", "24", "28", "33", "40", "20", "22", "30", "34", "39", "23", "31", "38", "25", "27", "35", "36"]
) {
  party = (() => {
    return party.sort((a, b) => {
      if (a.id === playerID) return -1;
      if (b.id === playerID) return 1;
      a.job = baseClass[a.job] ?? a.job;
      b.job = baseClass[b.job] ?? b.job;
      if (a.job === b.job) return parseInt(b.id, 16) - parseInt(a.id, 16);
      return sortRule.indexOf(a.job.toString()) - sortRule.indexOf(b.job.toString());
    });
  })();
  return party;
}
