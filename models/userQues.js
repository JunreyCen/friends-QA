/*
 *	author: Junrey
 *	desc: 创建者数据表，此表数据的_id为活动关键索引
 */
var connect = require('./connect.js'),
	mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserQuesSchema = new Schema({
	open_id: String,
	nickname: String,
	headimgurl: String,
	sex: Number,
	q_a: Array,
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date}
});

var UserQuesModel = connect.model('UserQues', UserQuesSchema);
var UserQuesDAO = function (){};

UserQuesDAO.prototype.save = function (obj){
	var instance = new UserQuesModel(obj);
	return instance.save();
}

UserQuesDAO.prototype.find = function (obj){
	return UserQuesModel.find(obj).exec();
}

UserQuesDAO.prototype.findOne = function (obj){
	return UserQuesModel.findOne(obj).exec();
}

module.exports = new UserQuesDAO();