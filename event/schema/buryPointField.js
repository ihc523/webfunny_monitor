//delete//
const moment = require('moment');
//delete//
const BuryPointField = function (sequelize, DataTypes) {
  return sequelize.define('BuryPointField', {
    // ID 主键,字段id
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
     // 项目ID event1001开始
     projectId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'projectId'
    },
    // 通用字段标识：1-是，0-否
    weType: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'weType'
    },
    // 字段名称英文
    fieldName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'fieldName'
    },
    // 字段名称中文（用户输入的）
    fieldAlias: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'fieldAlias'
    },
    // 字段类型
    fieldType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'fieldType'
    },
    // 字段长度
    fieldLength: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'fieldLength'
    },
    // 字段描述
    fieldDesc: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'fieldDesc'
    },
     // 是否归类：0-否，1-是
     groupByFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'groupByFlag'
    },
    // 创建人
    createBy: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'createBy'
    },
    // 修改人
    updateBy: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'updateBy'
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  }, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
    indexes: [
      {
        name: "idx_projectId",
        method: "BTREE",
        fields: [
          {
            attribute: "projectId"
          }
        ]
      },
      {
        name: "idx_weType",
        method: "BTREE",
        fields: [
          {
            attribute: "weType"
          }
        ]
      },
    ]
  })

}
//exports//
module.exports = BuryPointField
//exports//