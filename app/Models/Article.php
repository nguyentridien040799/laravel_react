<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'articles';

    protected $fillable = ['title', 'slug', 'description', 'content', 'published', 'published_at'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'published' => 'boolean',
    ];

    protected static function newFactory(): ArticleFactory
    {
        return ArticleFactory::new();
    }

    /**
     * Load all for admin and paginate
     *
     * @return Paginator
     */
    public static function loadAll(): Paginator
    {
        return static::latest()
            ->paginate();
    }

    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllMine(int $user_id): Paginator
    {
        return static::latest()
            ->mine($user_id)
            ->paginate();
    }

    /**
     * load all published with pagination
     *
     * @return Paginator
     */
    public static function loadAllPublished(): Paginator
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
            'category' => function (BelongsTo $query) {
                $query->select('id', 'name', 'slug');
            },
        ])
            ->latest()
            ->published()
            ->paginate();
    }

    /**
     * load one published
     *
     * @param string $slug
     *
     * @return Article
     */
    public static function loadPublished(string $slug): Article
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
        ])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();
    }

    /**
     * load one published
     *
     * @param string $slug
     *
     * @return Paginator
     */
    public static function loadPublishedByCategory(string $slug): Paginator
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
            'category' => function (BelongsTo $query) {
                $query->select('id', 'name', 'slug');
            },
        ])
            ->published()
            ->whereHas('category', function ($q) use ($slug) {
                $q->where("slug", $slug);
            })
            ->paginate();
    }

    /**
     * Add query scope to get only published articles
     *
     * @param Builder $query
     *
     * @return Builder
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where([
            'published' => true,
        ]);
    }

    /**
     * Load only articles related with the user id
     *
     * @param Builder $query
     * @param int $user_id
     *
     * @return Builder
     */
    public function scopeMine(Builder $query, int $user_id): Builder
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * Relationship between articles and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relationship between articles and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
