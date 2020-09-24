apimock = (function () {
            var url = "http://localhost:8080/cinemas"

            var  getFunctionsByCinemaAndDate = function(cinema_name,cinema_date,callback){
                $.getJSON(url+"/"+name+"/"+date,(data)=>{
                    callback(data);
                },null)
            };

            return {
                getFunctionsByCinemaAndDate:getFunctionsByCinemaAndDate


            }

 })();