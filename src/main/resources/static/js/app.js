var api = apimock;
var app = (function (){
	var cine;
	var functions =[];
	var date;

	function _map(list){
    	return list.map(function(cinema){
    			return {name:cinema.movie.name, genre:cinema.movie.genre, date: cinema.date.split(" ")[1]}
    	})
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
                cinema.name +
                "</td>" +
                "<td>" +
                cinema.genre +
                "</td>" +
                "<td>" +
				cinema.date +
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
        setCine(cinema_name);
        setDate(cinema_date);
        if (cinema_name != "") {
        $('#cinemaname').html(cinema_name);
        api.getFunctionsByCinemaAndDate(cinema_name,cinema_date,table);
        //api.getFunctionsByCinemaAndDate(cinema_name,cinema_date,fun);
        //api.getFunctionsByCinema(cinema_name,fun);

        }
    };
	var getFunctionsByCinema =  function (cinema_name) {

    };
     var fun=function(list){
     console.log(list);
     console.log(cine);
     console.log(date);
     }
     /*api.getFunctionsByCinema("cinemaX",fun);*/
	return {
		getFunctionsByCinemaAndDate : getFunctionsByCinemaAndDate,
		getFunctionsByCinema :  getFunctionsByCinema,
	};
})();
