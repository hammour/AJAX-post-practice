var hammourMovie = {
	Title:'Zootopia',
	type: 'Animation',
	year: '2015'
}





var postMovie = {
	url: 'http://small-tiyfe.herokuapp.com/collections/hammour_movies',
	dataType: 'json',
	type: 'POST',
	data: hammourMovie,
	success: function(data){
				console.log('Sucsees');
				
			},
	error: function (err){
 				console.log(err)
			},
	complete: function (){
				console.log('Loaded')
				}

};



$.ajax(postMovie);