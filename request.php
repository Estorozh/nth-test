<?php
function cors() {
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');
  }

  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  }
}
cors();

  // если в массиве $_POST есть ключ name и его значение не равно пустоте, то
  if ((isset($_POST['name']) && !empty($_POST['name']))) {
    // присвоить $result['name'] значение $_POST['name']
    $result['name'] = "Здравствуйте, <b>".$_POST['name']."</b>";
  } else {
    // иначе, $result['name'] присвоить указанную строку
    $result['name'] = 'Вы не ввели поле ФИО!';
  }
  // если в массиве $_POST есть ключ message и его значение не равно пустоте, то  
  if ((isset($_POST['phone']) && !empty($_POST['phone']))) {
    // присвоить $result['name'] значение $_POST['name']
    $result['phone'] = "Мы записали ваш телефон <b>".$_POST['phone']."</b>";
  } else {
    // иначе, $result['name'] присвоить указанную строку
    $result['phone'] = 'Вы не ввели поле телефон!';
  }
  if ((isset($_POST['email']) && !empty($_POST['email']))) {
    // присвоить $result['name'] значение $_POST['name']
    $result['email'] = "Вы сможете отписать <b>".$_POST['email']."</b> от нашей рассылки потом";
  } else {
    // иначе, $result['name'] присвоить указанную строку
    $result['email'] = 'Вы не ввели поле email!';
  }
  // преобразовать массив $result в json, а затем вывести его с помощью echo
  echo json_encode($result);
?>