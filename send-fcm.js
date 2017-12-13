var FCM = require('fcm-push');

var serverKey = 'AAAAcTPh-bs:APA91bE9xSqrYEVdeGkOAIdu8AN_a32Q6p-yzbfCivUBr6dbBMRs_YayUwya9VKK2FOk_Td-iZ3pxWTtZtWkzjdlf4e85ciBY6aWZKJvM6744WgaLJXRzjJMccOqPxQ8_TWo046em6D8';
var fcm = new FCM(serverKey);

var message = {
    to: 'e55pY_JPYx4:APA91bGW4o-Ho-YQJbXwtiM0Z88LrQST3ScB6MRnZDFLhFqMc2DoOJpNZWN2DE-k_f1vdLwP1-irKdGnLnpnNNPKs2dzys4tD1zsuooGQoZC7Ughtpt_ibf3Wrq8yaA5AMYG51FpPWBb', // required fill with device token or topics
    collapse_key: 'your_collapse_key', 
    data: {
        your_custom_data_key: 'your_custom_data_value'
    },
    notification: {
        title: 'My EZ-Link Mobile ',
        body: 'here we are'
    }
};

//callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong! ", err);
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });

// //promise style
fcm.send(message)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })