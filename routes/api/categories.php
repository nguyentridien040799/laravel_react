<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'CategoryController@index')->name('categories.published.index');
Route::get('{slug}/articles', 'CategoryController@listArticleByCategory')->name('categories.published.show');

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/', 'CategoryController@store')->name('categories.store');
});