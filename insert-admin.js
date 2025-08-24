// insert-admin.js (optional helper file)
const bcrypt = require('bcryptjs');
const db = require('./db');

const admin = {
  first_name: 'Rohit',
  last_name: 'Chotaliya',
  email: 'rohit@example.com',
  password: '123456'
};

bcrypt.hash(admin.password, 10, (err, hash) => {
  if (err) throw err;

  const sql = 'INSERT INTO admin_login (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [admin.first_name, admin.last_name, admin.email, hash], (err, result) => {
    if (err) throw err;
    console.log('✅ Admin inserted');
    process.exit();
  });
});
