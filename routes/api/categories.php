<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'CategoryController@index')->name('categories.published.index');
