myApp.controller('ProductController', function ($scope, ProductFactory){
  var _update = function(data){
    $scope.products = data;
  };
  $scope.array=[];
  var num_array =function (){
    for(var i =1; i<31; i++) {
      $scope.array.push(i);
    };
    return $scope.array;
  };
  num_array();
  ProductFactory.index (_update);
  $scope.create = function(){
    // console.log($scope.new_product);
    ProductFactory.create(
      $scope.new_product,
      _update
    )
  }
});
myApp.controller('CustomerController', function ($scope, CustomerFactory) {
  var _update = function(data){
    $scope.customers = data;
  }
  CustomerFactory.index (_update);
  $scope.create = function(){
    CustomerFactory.create(
      $scope.new_customer,
      _update
    );
    new_customer = {};
  }

  $scope.delete = function($_id){
    CustomerFactory.delete(
      $_id,
      _update
    );
  }
});
myApp.controller('OrderController', function($scope, OrderFactory, CustomerFactory,ProductFactory){
  var _update = function(data){
    $scope.orders = data;
  }
  var get_customers = function(data){
    $scope.customers = data;
  };
  var get_products = function(data){
    $scope.products = data;
  };
  
  CustomerFactory.index(get_customers);
  ProductFactory.index(get_products);
  OrderFactory.index(_update);
  $scope.create = function (){
    console.log($scope.new_order);
    OrderFactory.create(
      $scope.new_order,
      _update 
    )
  }
});