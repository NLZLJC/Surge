/*
let obj = JSON.parse($response.body);
obj["subscription"]={
    "tier": "Pro",
    "subscriptionActive": true
  },
*/

let obj = JSON.parse($response.body);
obj["subscription"]=:{"tier":"Free","subscriptionActive":false},
$done({body: JSON.stringify(obj)})
