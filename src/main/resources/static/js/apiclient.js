apiclient = (function () {
    var url = "http://localhost:9090/cinemas"

    var getFunctionsByCinema = function(cinema_name,cinema_date,callback){
        $.getJSON(url+"/"+name+"/"+date,(data)=>{
                        callback(data);
        },null)
    };

    return {
        getFunctionsByCinemaAndDate:getFunctionsByCinemaAndDate


    }

})();