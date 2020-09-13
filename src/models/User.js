import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/db';

const PROTECTED_ATTRIBUTES = ['password']

class User extends Model {
    toJSON () {
        // hide protected fields
        let attributes = Object.assign({}, this.get())
        for (let a of PROTECTED_ATTRIBUTES) {
          delete attributes[a]
        }
        return attributes
      }
}
User.init(
    {
        email: {
            type:DataTypes.STRING,            
            unique: true,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "email does not have the expected format"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [40,255]
            },            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-zA-ZÀ-ÿ ]*$/,
                    msg: "write only letters in the name field"
                },
                len: [2,255]
            }
        },
        verified_email: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, 
    {
        sequelize,
        modelName: 'User'
    }
);

export default User;
