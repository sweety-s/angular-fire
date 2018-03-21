app.factory('mainauth',function(){
	var mainauth={

		Register:function (data) {   			  
            return firebase.auth().createUserWithEmailAndPassword(data.email, data.pwd).catch(function(error) {		 
  			  return error;
			});
        },

        creatProfile:function(data,uid){
        	return  firebase.database().ref('profileForUser/' + uid).set({
				      fname: data.fname,
				      lname: data.lname,
				      email: data.email,
				      password: data.pwd,
				      phone: data.phone
				    });
        },

        login:function(email,pwd){
        	return firebase.auth().signInWithEmailAndPassword(email,pwd).catch(function(error) {
			  return error;
			});
        },

	}
	return mainauth;
});