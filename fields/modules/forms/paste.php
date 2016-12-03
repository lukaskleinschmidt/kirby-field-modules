<?php

return function($page, $modules, $model) {

  $templates = $page->blueprint()->pages()->template();
  $options   = [];
  $fields    = [];
  $help      = false;

  if($modules->count()) {

    foreach($modules as $module) {
      $template = $module->intendedTemplate();
      $value    = $module->uri();

      $options[$value] = array(
        // 'label'    => icon($templates->findBy('name', $template)->icon(), 'left') . ' ' . $module->title(),
        'label'    => $module->title(),
        'checked'  => true,
        'readonly' => false,
      );

      if(v::notIn($template, $templates->pluck('name'))) {
        $options[$value]['checked'] = false;
        $options[$value]['readonly'] = true;

        $help = true;
      }
    }

    $fields['uri'] = array(
      'label'    => 'fields.modules.paste.uri.label',
      'type'     => 'options',
      'columns'  => 1,
      'required' => true,
      'options'  => $options,
      'help'     => $help ? l('fields.modules.paste.uri.help') : '',
    );

  } else {

    $fields['info'] = array(
      'label' =>  l('fields.modules.paste.info.label'),
      'type'  => 'info',
      'text'  => l('fields.modules.paste.info.text')
    );

  }

  $form = new Kirby\Panel\Form($fields);

  $form->cancel($model);
  $form->buttons->submit->val(l('add'));

  if(!$modules->count()) {
    $form->buttons->submit = $form->buttons->cancel;
    $form->style('centered');
  }

  return $form;

};