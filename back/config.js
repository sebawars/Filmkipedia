module.exports = {
    api: {
        port: process.env.API_PORT || 8081,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    db_origin: 'dummy',
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || 3005,
        user: process.env.MYSQL_USER || 'ec2-user',
        password: process.env.MYSQL_PASS || 'ec2pass',
        database: process.env.MYSQL_DB || 'telegram',
    }
}