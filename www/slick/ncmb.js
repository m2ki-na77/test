// This is a JavaScript file
// Gitテストするよ

// information of this app
        var appkey = "3bb382f3d609187997905e728dcb4e6cf1f2d2b8c82791b2a0db2233b44d1451";
        var clientkey = "a39d7b6116c51a0c520c2bc9b29351f9f3bb30d55916de4e610c544e8fae0c06";
        var appID = "EsX29MrQ7veiB3X7";
        var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

        window.onload = function(){
            // Initialize and set the app to use NCMB in Monaca
            NCMB.initialize(appkey, clientkey);
            var monotest = NCMB.Object.extend("monotest");
            var query = new NCMB.Query(monotest);
        

            query.find({
              success: function(results) {
                  // Get a random image name of the picture from the class "randomFortune" in NCMB  
                  var num = Math.floor(Math.random()*results.length);
                  var image_name = results[num].get("image");
                  var image_cap = results[num].get("caption");
                  var image_title = results[num].get("name");
                  var num2 = num - Math.floor(Math.random()*num);
                  var image_name2 = results[num2].get("image");
                  var image_cap2 = results[num2].get("caption");
                  var image_title2 = results[num2].get("name"); 
                  var num3 = num - Math.floor(Math.random()*num);
                  var image_name3 = results[num3].get("image");
                  var image_cap3 = results[num3].get("caption");
                  var image_title3 = results[num3].get("name"); 
                  var num4 = num - Math.floor(Math.random()*num);
                  var image_name4 = results[num4].get("image");
                  var image_cap4 = results[num4].get("caption");
                  var image_title4 = results[num4].get("name"); 
                  var num5 = num - Math.floor(Math.random()*num);
                  var image_name5 = results[num5].get("image");
                  var image_cap5 = results[num5].get("caption");
                  var image_title5 = results[num5].get("name"); 
                  var num6 = num - Math.floor(Math.random()*num);
                  var image_name6 = results[num6].get("image");
                  var image_cap6 = results[num6].get("caption");
                  var image_title6 = results[num6].get("name"); 
                  var num7 = num - Math.floor(Math.random()*num);
                  var image_name7 = results[num7].get("image");
                  var image_cap7 = results[num7].get("caption");
                  var image_title7 = results[num7].get("name"); 
                  
                  
                  // Change the css styles and srcs according to the omiukji states  
                  //document.getElementById("test1").src = commonURL +image_name;
                  $(".img1").attr("src",commonURL + image_name);
                  $(".img2").attr("src",commonURL + image_name2);
                  $(".img3").attr("src",commonURL + image_name3);
                  $(".img4").attr("src",commonURL + image_name4);
                  $(".img5").attr("src",commonURL + image_name5);
                  $(".img6").attr("src",commonURL + image_name6);
                  $(".img7").attr("src",commonURL + image_name7);
                  $(".modalMain").html("<h4>"+image_title+"</h4>"+image_cap+"</br><h4>"+image_title2+"</h4>"+image_cap2+"</br><h4>"+image_title3+"</h4>"+image_cap3+"</br><h4>"+image_title4+"</h4>"+image_cap4+"</br><h4>"+image_title5+"</h4>"+image_cap5+"</br><h4>"+image_title6+"</h4>"+image_cap6+"</br><h4>"+image_title7+"</h4>"+image_cap7+"</br>");


              },
              error: function(error) {
                  alert(error.toString() + "error occured");
              }

            });
            
        }