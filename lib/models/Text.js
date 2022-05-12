const pool = require("../utils/pool.js");

module.exports = class Text {
  id;
  phone;

  constructor(row) {
    this.id = row.id;
    this.phone = row.phone;
  }

  static async insert({ phone }) {
    const { rows } = await pool.query('INSERT INTO users(phone) VALUES ($1) RETURNING *',
    [phone])
    return new Text(rows[0])
  }
}