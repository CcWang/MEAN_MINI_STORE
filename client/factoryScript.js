 myApp.factory('ProductFactory', function ($http){
      var factory = {};
        factory.index = function(cb){
          $http.get('/get_products').success(
              function(data){
                cb(data);
              })
        };
        factory.create = function(info, cb){
            // console.log(info);
          $http.post('/product/new', info).success(
            function(data){
              cb(data);
            }
          );
        };
        // factory.remove = function(info, cb){
        //   $http.post('/remove/'+info).success(
        //     function(data){
        //       cb(data);
        //     }
        //   )
        // }
      return factory;
    });
 myApp.factory('CustomerFactory', function($http){
    var factory = {};
    factory.index = function(cb){
        $http.get('/get_customers').success(
            function(data){
              cb(data);
            })
    };
    factory.create =function(info, cb){
      $http.post('/customer/new', info).success(
        function(data){
          cb(data);
        }  
      )
    };
    factory.delete = function(id,cb){
      $http.post('/customer/'+id).success(
        function(data){
          cb(data);
        }
        // factory.index()
      )
    }
    return factory;
 });

 myApp.factory('OrderFactory', function ($http) {
  var factory ={};
  factory.index =function (cb) {
    $http.get('/get_orders').success(
      function(data){
        cb(data);
      }
    )
  };
  factory.create = function(info,cb) {
    $http.post('/order/new', info).success(
      function(data){
        cb(data);
      }
    )
  };
   return factory;
 });