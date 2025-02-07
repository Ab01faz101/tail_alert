<?php

namespace Ab01faz101\TailAlert\Traits;

trait AlertTrait
{
    public function alert($type, $message , $description = null)
    {
        $this->dispatch('tail_alert_' . $type, ['message' => $message , 'description' => $description]);
    }
}
