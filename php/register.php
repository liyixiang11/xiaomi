<?php
    // 获取用户名
    header("Content-Type: application/json");

    header("Access-Control-Allow-Origin:*");

    // 引用另外一个文件
    include "public/connect_db.php";
    
    // 或去json数据, 请求主体的格式为json格式
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> name;
    $password = $json -> password;
    // 链接数据库
    $coon = new db();
    $sql = "insert into shop_user (name, password) values ('$username', '$password')";
    // var_dump($sql);
    $rows = $coon -> Query($sql, 3);
    // $insertSql = "insert into shop_user (name, password) values ('$username', '$password')";
    // $sql = "SELECT * FROM shop_user WHERE name = '$username'";9
    // $result = $conn -> query($sql);
    // $rows = $result -> fetch_assoc();
    if($rows) {
      // 用户输入正确
      $arr = array("code" => "200", "msg"=>"", "data"=>array("id"=>$rows["id"], "token"=>"1234567899", "atavar"=> "http://www.aaa.com/path/a.png"));
    } else {
      // 输入错误
      $arr = array("code" => "1000", "msg" => "注册失败");
    }
    echo json_encode($arr);

   
  ?>