/**
 * Created by kevin on 2/1/15.
 */
var tokenStuff = require('./../general/token');

exports.checkToken = function (req, res) {
    var t = req.body.token;
    var toke;
    try{
        tokenStuff.validate(t, function (token) {
            return res.json(token);
        });
    }catch (err){
        return res.json({error: "Your shit stank"});
    }


};


exports.angularTest = function (req, res) {
    // Check to see where the data is sent using angular
};
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aW1lIjoxNDIyNzk5OTQ0MTY5LCJ1c2VySWQiOjEwMjQzMDcyLCJmaXJzdCI6IktldmluIiwibGFzdCI6IkhpbGwifQ.AQuIuRFwC_UjCZoyHyCtcOt17_8yYZW5_hq_PmeDYaI