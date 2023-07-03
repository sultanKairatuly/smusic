import { defineStore } from "pinia";
import { Track } from "../../types";
export const useTracksStore = defineStore("tracks", {
  state() {
    return {
      currentTrack: null as Track | null,
    };
  },
  actions: {
    setCurrentTrack(track: Track) {
      this.currentTrack = track;
    },
  },
});
