<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Get All Articles
     *
     * @return \Illuminate\Contracts\Pagination\Paginator
     */
    public function index()
    {
        return Category::loadAll();
    }

    /**
     * Get Articles By Category
     *
     * @param $slug
     * @return \Illuminate\Contracts\Pagination\Paginator
     */
    public function listArticleByCategory($slug) {
        return Article::loadPublishedByCategory($slug);
    }

    /**
     * Store New Articles
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request) {
        $category = new Category();
        $category->fill($request->all());
        $category->slug = Str::slug($request->get('name'));
        $category->save();

        return response()->json($category, 201);
    }
}
