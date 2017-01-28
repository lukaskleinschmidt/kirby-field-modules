<?php

class PasteAction extends BaseAction {

  public $icon  = 'paste';
  public $class = 'elements__action elements__action--paste';
  public $label = 'fields.sortable.paste';

  public function routes() {
    return array(
      array(
        'pattern' => '/',
        'method'  => 'POST|GET',
        'action'  => 'paste',
        'filter'  => 'auth',
      ),
    );
  }

  public function content() {
    return tpl::load($this->root() . DS . 'template.php', ['action' => $this], true);
  }

  public function disabled() {
    return $this->disabled || $this->parent()->ui()->create() === false;
  }

}
