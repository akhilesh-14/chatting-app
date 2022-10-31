module.exports.profile = function(req , res){
    return res.render('user_profile.ejs', {
        title: "CHAT APP profile"
    
       });

}