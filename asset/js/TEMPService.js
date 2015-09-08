var TEMPService = {

	calculate: function(celsius, callback) {
		$.ajax({
		  url: 'services/temp.action.php',
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};