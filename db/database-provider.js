import Sequelize from 'sequelize';
import user from '../app/models/user';
import config from '../config';
export class databaseProvider {
    static init() {
        const sequelize = new Sequelize(config.dbConnectionString);
        // test connection
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        const User = sequelize.define('user', user);
        User.sync({ force: true });
    }
}