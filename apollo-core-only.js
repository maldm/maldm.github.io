import jwt from 'jsonwebtoken';

(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
        v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://pendo-apollo-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo')

    var url = window.location.search;
    var queryString = {};
    console.log("MALLORY THIS IS THE JWT: ", jwt)
    // from https://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            queryString[$1] = $3;
        }
    );

    var accounts = [
        {
            zipCode: 90210,
            id: 1,
            city: 'Beverly Hills'
        }, {
            zipCode: 27601,
            id: 2,
            city: 'Raleigh'
        }, {
            zipCode: 10001,
            id: 3,
            city: 'New York City'
        }
    ];

    var account = accounts[Math.floor(Math.random() * accounts.length)];

    pendo.initialize({
        visitor: {
            id: queryString.visitor || 'testuser@pendo',
            full_name: '',
            firstName: 'MAL',
            lastName: 'BAE'
        },
        apiKey: '7397188a-9b85-4825-5476-20de4cd4bfbe',
        account: account
    });
})('7397188a-9b85-4825-5476-20de4cd4bfbe');