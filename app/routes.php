<?php

$app->get('/', function($request, $response) {
  return $this->view->render($response, 'index.twig');
})->setName('index');

# TAETIGKEITEN
$app->get('/taetigkeiten', function($request, $response) {
  return $this->view->render($response, 'taetigkeiten.twig');
})->setName('taetigkeiten');

$app->get('/impressum', function($request, $response) {
  return $this->view->render($response, 'impressum.twig');
})->setName('impressum');

$app->get('/datenschutz', function($request, $response) {
  return $this->view->render($response, 'datenschutz.twig');
})->setName('datenschutz');

$app->get('/galerie', function($request, $response) {
  return $this->view->render($response, 'gallery.twig');
})->setName('galerie');

$app->get('/galerie/{id}', function($request, $response, $args) {

  $gallery_amount = 6;

  if($args['id'] < 1 || $args['id'] > $gallery_amount) {
    $id = 1;
  } else {
    $id = $args['id'];
  }

  return $this->view->render($response, 'gallery/gallery' . $id . '.twig');
})->setName('galerie_id');

$app->get('/person', function($request, $response) {
  return $this->view->render($response, 'about.twig');
})->setName('person');

$app->get('/referenzen', function($request, $response) {
  return $response->withRedirect($this->router->pathFor('referenzen_page', ['page' => 1]));
})->setName('referenzen');
$app->get('/referenzen/{page}', function($request, $response, $args) {

  if($args['page'] > 3 || $args['page'] < 1) {
    $page = 1;
  } else {
    $page = $args['page'];
  }

  return $this->view->render($response, 'references.twig', [ 'page' => $page ]);
})->setName('referenzen_page');

$app->get('/kontakt', function($request, $response) {
  return $this->view->render($response, 'contact.twig');
})->setName('kontakt');

$app->post('/send_mail', function($request, $response, $args) {

  $from = filter_var($request->getParam('email'), FILTER_SANITIZE_EMAIL);
  $to = 'voit.robert@t-online.de';
  $msg = filter_var($request->getParam('msg'), FILTER_SANITIZE_STRING);

  $header = 'From: '. $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, "Kontaktanfrage über robert-voit.de", $msg, $header);
  return 'ok';

})->setName('send_mail');



$app->get('/taetigkeiten/restaurierungen', function($request, $response) {
  return $this->view->render($response, 'taetigkeiten/restaurierungen.twig');
})->setName('restaurierungen');
$app->get('/taetigkeiten/holzbildhauerarbeiten', function($request, $response) {
  return $this->view->render($response, 'taetigkeiten/holzbildhauerarbeiten.twig');
})->setName('holzbildhauerarbeiten');
$app->get('/taetigkeiten/moebelbau', function($request, $response) {
  return $this->view->render($response, 'taetigkeiten/moebelbau.twig');
})->setName('moebelbau');
