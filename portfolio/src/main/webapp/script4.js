//Google Maps function
function createMap(){
    //Location of the restaurant
    const rest = {lat: 18.476882739142752, lng: -66.25936220839199};

    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: rest}
    );

   const marker= new google.maps.Marker({position: rest, map: map,});

   const contentString = '<div id="content">' + 
                        '<div id="siteNotice">' + 
                        "</div>" + 
     '<h1 id="firstHeading" class="firstHeading"> Kikita s Beach House </h1>' + 
     '<div id="bodyContent">' +
     "<p style=color:black><b>Kikita's Beach House Bar & Grill</b>, is an excellent choice for travelers of visiting Dorado, offering helpful amenities "+ 
     "designed to enhance your stay. Also, they offers rooms service that provides a kitchennete, and guest" + 
      "can stay connected with wifi service. For travelers looking to enjoy some tapas can head to Mi Casa by Jose Andres." + 
     "Otherwise, you may want to check out an Italian restaurant such as Pirilo Pizza Rustica, Marco's Pizza Dorado or Grappa. " + 
      "If you're looking for another things to do, you can check out Parroquia San Antonio de Padua (1.2mi), which is a popular" + 
      "attraction amongst tourists and it is within walking distance.</p>" +
     '<p> Attribution: Kikita s Beach House, <a href="https://www.tripadvisor.com/Hotel_Review-g147322-d2171231-Reviews-Kikita_Beach_Guest_House_Bar_y_Grill-Dorado_Puerto_Rico.html">'+ 
     "https://www.tripadvisor.com/Hotel_Review-g147322-d2171231-Reviews-Kikita_Beach_Guest_House_Bar_y_Grill-Dorado_Puerto_Rico.html </a>" + 
     "(Last visited June 29, 2021).</p>" + 
                         "</div>" + 
                         "</div>";

   const infoWindow = new google.maps.InfoWindow({
       content: contentString,
   });

   const mark = new google.maps.Marker({
       position: rest,
       map,
       title: "Kikita's Beach House",
   });

   mark.addListener("click", () => {
       infoWindow.open({
           anchor: mark,
           map,
           shouldFocus: false,
       });
   });
}