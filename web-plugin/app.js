function initPlugin(response) {
	var url = response['config']['url'];
	var data = response['data'];
	var bounds = new google.maps.LatLngBounds();
	for (row of data) {
		var ip = row.ip;
	}
    
  $.getJSON(url, function (data) {
		console.log(data);
  });
}