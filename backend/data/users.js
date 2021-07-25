import bcrypt from 'bcryptjs'

const users = [
    { name: 'admin', email: 'admin@gmail.com', password: bcrypt.hashSync('admin'), isAdmin: true },
    { name: 'max', email: 'max@gmail.com', password: bcrypt.hashSync('12345') },
    { name: 'vanya', email: 'vanya@gmail.com', password: bcrypt.hashSync('12345') },
]
export default users