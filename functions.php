<?php

function get_breadcrumbs($page) {
    $breadcrumbs = [];
    $parent = $page;

    while ($parent) {
        array_unshift($breadcrumbs, [
            'title' => $parent->title(),
            'url' => $parent->url()
        ]);
        $parent = $parent->parent();
    }

    return $breadcrumbs;
}
