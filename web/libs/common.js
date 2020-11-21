const crypto=require('crypto');

module.exports={
  MD5_SUFFIX: 'mnaojewfewjfew123232jfek',
  md5: function (str){
    var obj=crypto.createHash('md5');
    var suffix = 'mnaojewfewjfew123232jfek';

    obj.update(`${str}${suffix}`);

    return obj.digest('hex');
  }
};
