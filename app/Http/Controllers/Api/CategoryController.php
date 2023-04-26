<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Pagination\Paginator
     */
    public function index()
    {
        return Category::loadAll();
    }

    public function listArticleByCategory($slug) {
        return Article::loadPublishedByCategory($slug);
    }
}
