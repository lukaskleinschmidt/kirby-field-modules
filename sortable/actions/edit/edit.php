<?php

class EditAction extends BaseAction {

  public $icon = 'pencil';
  public $title = [
    'en' => 'Edit',
    'de' => 'Bearbeiten',
  ];

  public function content() {
    return tpl::load($this->root() . DS . 'template.php', ['action' => $this], true);
  }

  public function disabled() {
    return $this->disabled || $this->page()->ui()->read() === false;
  }

}