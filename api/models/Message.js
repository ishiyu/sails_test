/**
* Message.js
*
* @description :: has chat messages
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  // attributes に各属性の型、バリデーション、関連を記述する
  attributes: {
    body: {
      type: 'string', // データ型
      required: true  // 必須であることを表す
    }
  }
};
