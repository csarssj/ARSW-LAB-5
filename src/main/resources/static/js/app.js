var api = apimock;
var app = (function (){
	var cine;
	var functions =[];
	var date;
	
	var _map = function(cinemas){
		return cinemap =  cinemas.map(function(cinema){
            return {cname:cinema.movie.name, cgenre:cinema.movie.genre, cdate: cinema.date};
        });
	}
	
	var setCine = function(cinema_name){
		cine = cinema_name;
	};
	var setDate = function(cinema_date){
		date = cinema_date;
	};
	
	function table(cinemas) {
        cinemas = _map(cinemas);
		$("#table").find('tbody').empty();
        cinemas.map(function(cinema) {
            $("#table").append(
				"<tbody><tr> <td>" +
                cinema.cname +
                "</td>" +
                "<td>" +
                cinema.cgenre +
                "</td>" +
                "<td>" +
				cinema.cdate +
                "</td>" +
                "<td>" +
                "false" +
				"</td>" +
                "</tr>" +
				"<tbody>"
            );
        });
    };

	
	var getFunctionsByCinemaAndDate = function(cinema_name,cinema_date) {
		
    };
	var getFunctionsByCinema =  function (cinema_name) {
        setCine(cinema_name);
        if (cinema_name != "") {
			$('#cinemaname').html(cinema_name);
            api.getFunctionsByCinema(cinema_name,table);
		}
    };
	
	return {
		getFunctionsByCinemaAndDate : getFunctionsByCinemaAndDate,
		getFunctionsByCinema :  getFunctionsByCinema,
	};
})();
