const { MongoClient } = require("mongodb");

class Tracks {
  constructor() {
    this.client = new MongoClient(process.env.DB_URL, {
      useUnifiedTopology: true,
    });
    this.db = "tracks";
    this.getAllTracks = this.getAllTracks.bind(this);
    this.getNewTracks = this.getNewTracks.bind(this);
    this.getEternalTracks = this.getEternalTracks.bind(this);
    this.getExclusiveTracks = this.getExclusiveTracks.bind(this);
    this.getPopularTracks = this.getPopularTracks.bind(this);
    this.getTrandTracks = this.getTrandTracks.bind(this);
    this.getSummerTracks = this.getSummerTracks.bind(this);
  }

  async getAllTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  }

  async getSummerTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      console.log(data)
      const filtered = data.filter((t) => t.genre === "summer");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  async getNewTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      const filtered = data.filter((t) => t.genre === "new");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  async getTrandTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      const filtered = data.filter((t) => t.genre === "trand");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  async getPopularTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      const filtered = data.filter((t) => t.genre === "popular");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  async getEternalTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      const filtered = data.filter((t) => t.genre === "eternal");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  async getExclusiveTracks(req, res, next) {
    try {
      const collectionName = "allTracks"; // Replace with your collection name
      await this.client.connect();
      const collection = this.client.db(this.db).collection(collectionName);
      const data = await collection.find({}).toArray();
      const filtered = data.filter((t) => t.genre === "exclusive");
      res.send(filtered);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new Tracks();
