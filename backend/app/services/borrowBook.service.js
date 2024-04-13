const { ObjectId } = require("mongodb");

class BorrowBookService {
  constructor(client) {
    this.col = client.db("contactbook").collection("borrowBooks");
  }

  async getAll(payload) {
    const filter = {};
    if (payload.user_id) {
      filter["reader_id"] = payload.user_id;
    }
    const data = await this.col.find(filter).toArray();
    return data;
  }
  async getById(id) {
    const data = await this.col.findOne({
      _id: new ObjectId(id),
    });
    return data;
  }
  async delete(id) {
    const data = await this.col.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return data;
  }

  async update(id, data) {
    const result = await this.col.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { $set: data },
      {
        returnDocument: "after",
      }
    );
    return result;
  }

  async add(data) {
    const result = await this.col.insertOne(data);
    return result;
  }
}

module.exports = BorrowBookService;
