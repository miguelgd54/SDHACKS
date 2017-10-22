var request = require('request');
var sortJsonArray = require('sort-json-array');

urlCarb='https://genomelink.io/v1/reports/carbohydrate-intake?population=european';
urlVita='https://genomelink.io/v1/reports/vitamin-a?population=european';
urlVitb='https://genomelink.io/v1/reports/vitamin-b12?population=european';
urlVitd='https://genomelink.io/v1/reports/vitamin-d?population=european'
urlProt='https://genomelink.io/v1/reports/protein-intake?population=european'

request({
            url: urlCarb,
            method: 'GET',
            headers: {
               'Authorization': 'Bearer sh8hC7YCLztLzsdiICKhTJl1vRwkzT'
            }
        }, function (error, response, body) {
            if (error) throw error;
            var jsonCarb = JSON.parse(response.body);  //jason var

request({
            url: urlVita,
            method: 'GET',
            headers: {
               'Authorization': 'Bearer GaoXT86Z1ZYvSrupJXdSxqNMvGiJiR'
            }
          }, function (error, response, body) {
              if (error) throw error;
              var jsonVita = JSON.parse(response.body);  //jason var
request({
          url: urlVitb,
           method: 'GET',
           headers: {
               'Authorization': 'Bearer M9cy4v0SYfp2lhedaVub3F02833HRv'
           }
          }, function (error, response, body) {
              if (error) throw error;
              var jsonVitb = JSON.parse(response.body);  //jason var
request({
          url: urlVitd,
          method: 'GET',
          headers: {
                'Authorization': 'Bearer fud0BiGWzbi6QDttH0b0Bd21L0fV6i'
          }
        }, function (error, response, body) {
              if (error) throw error;
              var jsonVitd = JSON.parse(response.body);  //jason var
request({
          url: urlProt,
          method: 'GET',
          headers: {
                'Authorization': 'Bearer 0lsRpURuQ2gTcdAHJxIx60HvoOwGc8'
          }
        }, function (error, response, body) {
              if (error) throw error;
              var jsonProt = JSON.parse(response.body);  //jason var


            //get the json data for protein-intake and carb-intake
            var vitaScore = jsonVita.summary.score;
            var carbScore = jsonCarb.summary.score;
            var vitbScore = jsonVitb.summary.score;
            var vitdScore = jsonVitd.summary.score;
            var protScore = jsonProt.summary.score;

            var vitaDesc = jsonVita.scores[vitaScore];
            var carbDesc = jsonCarb.scores[carbScore];
            var vitbDesc = jsonVitb.scores[vitbScore];
            var vitdDesc = jsonVitd.scores[vitdScore];
            var protDesc = jsonProt.scores[protScore];

          //  console.log(jsonCarb);
          //  console.log(jsonProt);  //terms of serum level
            console.log(carbDesc);
            console.log(vitaDesc);
            console.log(vitbDesc);
            console.log(vitdDesc);
            console.log(protDesc);
        });
      });
    });
  });
});
