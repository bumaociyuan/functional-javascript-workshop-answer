function checkUsersValid(goodUsers)
{
	var temp = goodUsers.map(function(d) {
		return d.id;
	});
 	return function allUsersValid(submittedUsers) {
  	var result = submittedUsers.every(function (b, index, array) {
		var id = b.id;
  		return temp.indexOf(id) != -1
  	});
  	return result;
  };
}
module.exports = checkUsersValid
