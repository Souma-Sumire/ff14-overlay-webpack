"use strict";
import { baseClass } from "../../resources/data/baseClass.js";

export function sortParty(party, playerID, sortRule,) {
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
