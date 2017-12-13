// This is a JavaScript file
// Gitテストするよ

// information of this app
        var appkey = "7fcd59253396d6ec6d86c321bdfbcb7cc19905f698e6e899e814d9e514628a89";
        var clientkey = "7a8a3e70493dcbb83a9e8c9da1f0ed41bbe10b2f14b5ceae64b70ecef1a607aa";
        var appID = "P00CK3R0cNet1UvT";
        var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

        window.onload = function(){
            // Initialize and set the app to use NCMB in Monaca
            NCMB.initialize(appkey, clientkey);
            var monotest = NCMB.Object.extend("monotest");
            var query = new NCMB.Query(monotest);
        

            query.find({
              success: function(results) {
                  // Get a random image name of the picture from the class "randomFortune" in NCMB  
                  var image_name = results[Math.floor(Math.random()*results.length)].get("image");
                  var image_name2 = results[Math.floor(Math.random()*results.length)].get("image");
                  var image_name3 = results[Math.floor(Math.random()*results.length)].get("image");

                  // Change the css styles and srcs according to the omiukji states  
                  //document.getElementById("test1").src = commonURL +image_name;
                  $(".img1").attr("src",commonURL + image_name);
                  $(".img2").attr("src",commonURL + image_name2);
                  $(".img3").attr("src",commonURL + image_name3);

              },
              error: function(error) {
                  alert(error.toString() + "error occured");
              }

            });
            
        }