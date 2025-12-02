import PostList from "@/components/PostList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Blog Posts
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Latest posts from our Laravel API
          </p>
        </div>

        <PostList />
      </main>
    </div>
  );
}
