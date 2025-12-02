<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'title' => 'Belajar Laravel API',
            'content' => 'Tutorial lengkap membuat RESTful API dengan Laravel framework terbaru.',
            'author' => 'Admin',
        ]);

        Post::create([
            'title' => 'Next.js Development',
            'content' => 'Panduan mengembangkan aplikasi frontend modern dengan Next.js 16.',
            'author' => 'Developer',
        ]);

        Post::create([
            'title' => 'Full Stack Development',
            'content' => 'Mengintegrasikan Laravel backend dengan Next.js frontend untuk aplikasi web yang powerful.',
            'author' => 'Expert',
        ]);
    }
}
