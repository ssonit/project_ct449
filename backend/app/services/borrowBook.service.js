const { ObjectId } = require("mongodb");

class BorrowBookService {
  constructor(client) {
    this.col = client.db("contactbook").collection("borrowBooks");
  }

  async getAll(payload) {
    const filter = {};
    if (payload.user_id) {
      filter["reader_id"] = new ObjectId(payload.user_id);
    }
    const data = await this.col
      .aggregate([
        {
          $match: filter,
        },
        {
          $lookup: {
            from: "books",
            localField: "book_id",
            foreignField: "_id",
            as: "book",
          },
        },
        {
          $unwind: "$book",
        },
      ])
      .toArray();
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
    const result = await this.col.insertOne({
      ...data,
      book_id: new ObjectId(data.book_id),
      reader_id: new ObjectId(data.reader_id),
    });
    return result;
  }
}

module.exports = BorrowBookService;
