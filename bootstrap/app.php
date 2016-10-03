<?php

session_start();

require __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App([
  'settings' => [
    'displayErrorDetails' => true,
  ]
]);

$container = $app->getContainer();

$container['view'] = function($container) {

  $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
    'cache' => false,
  ]);

  $view->addExtension(new \Slim\Views\TwigExtension(
    $container->router,
    $container->request->getUri()
  ));

  return $view;
};

$container['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        return $c['view']->render($response, '404.twig', []);
    };
};

require __DIR__ . '/../app/routes.php';
