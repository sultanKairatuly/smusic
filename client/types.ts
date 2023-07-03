type TrackGenres = "summer" | "eternal" | "popular" | "new";

export type Track = {
  id: string;
  duration: number;
  title: string;
  author: string[];
  url: string;
  cover: string;
  genre: TrackGenres;
};
