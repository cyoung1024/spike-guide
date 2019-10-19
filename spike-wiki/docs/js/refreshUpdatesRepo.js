var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();


client.get('https://api.github.com/repos/LoopKit/Loop/commits/dev', function(response) {
	var obj = JSON.parse(response); 
	var dateString = obj["commit"]["author"]["date"];
	var date = new Date(Date.parse(dateString));
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".dev").append(date.toLocaleDateString('fr-FR', options));
    $(".dev").append(date.toLocaleDateString('en-EN', options));
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/dev-spike', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".dev-spike").append(date.toLocaleDateString('fr-FR', options));
    $(".dev-spike").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/dev-spike-x15', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".dev-spike-x15").append(date.toLocaleDateString('fr-FR', options));
    $(".dev-spike-x15").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/LoopKit/Loop/commits/master', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".master").append(date.toLocaleDateString('fr-FR', options));
    $(".master").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/spike-master', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".spike-master").append(date.toLocaleDateString('fr-FR', options));
    $(".spike-master").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/spike-master-x15', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".spike-master-x15").append(date.toLocaleDateString('fr-FR', options));
    $(".spike-master-x15").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/LoopKit/Loop/commits/omnipod-testing', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".omnipod-testing").append(date.toLocaleDateString('fr-FR', options));
    $(".omnipod-testing").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/omnipod-spike', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".omnipod-spike").append(date.toLocaleDateString('fr-FR', options));
    $(".omnipod-spike").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/kdisimone/Loop/commits/jojo', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".jojo").append(date.toLocaleDateString('fr-FR', options));
    $(".jojo").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/jojo-spike', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".jojo-spike").append(date.toLocaleDateString('fr-FR', options));
    $(".jojo-spike").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/kdisimone/Loop/commits/jojo-beeps', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".jojo-beeps").append(date.toLocaleDateString('fr-FR', options));
    $(".jojo-beeps").append(date.toLocaleDateString('en-EN', options));
	
});

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/jojo-beeps-spike', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    //$(".jojo-beeps-spike").append(date.toLocaleDateString('fr-FR', options));
    $(".jojo-beeps-spike").append(date.toLocaleDateString('en-EN', options));
	
});