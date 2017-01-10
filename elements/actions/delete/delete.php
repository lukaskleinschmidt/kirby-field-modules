<?php

class DeleteAction extends BaseAction {

  public $icon = 'trash-o';
  public $title = [
    'en' => 'Delete',
    'de' => 'Löschen',
  ];

  public function routes() {
    return array(
      array(
        'pattern' => '(:any)',
        'method'  => 'POST|GET',
        'action'  => 'delete',
        'filter'  => 'auth',
      ),
    );
  }

  public function content() {
    return tpl::load($this->root() . DS . 'template.php', ['action' => $this], true);
  }

  public function isDisabled() {
    $page = $this->page();
    return $page->blueprint()->options()->delete() === false || $page->ui()->delete() === false;
  }

}
