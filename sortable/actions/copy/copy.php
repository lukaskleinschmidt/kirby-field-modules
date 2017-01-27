<?php

class CopyAction extends BaseAction {

  public $icon  = 'copy';
  public $label = [
    'en' => 'Copy',
    'de' => 'Kopieren',
  ];

  public function routes() {
    return array(
      array(
        'pattern' => '/',
        'method'  => 'POST|GET',
        'action'  => 'copy',
        'filter'  => 'auth',
      ),
    );
  }

  public function content() {
    return tpl::load($this->root() . DS . 'template.php', ['action' => $this], true);
  }

}