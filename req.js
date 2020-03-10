function req(order){
	console.log("customer order",order);
	response(function(){
		console.log("Delivered data",order);
	});
}
function response(callback){
	setTimeout(callback,5000);
}
req(1);
req(2);
req(3);
req(4);
req(5);