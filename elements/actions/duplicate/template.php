<a class="element__action<?php if($action->isDisabled()) echo ' is-disabled'; ?>" href="<?php echo $action->url('duplicate', ['uid' => $action->page()->uid(), 'to' => $action->element()->num() + 1]); ?>" data-action title="<?= $action->title() ?>">
  <?= $action->icon() ?>
</a>
