import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedNews() {
  // Sample data - in a real app, this would come from an API or CMS
  const featuredNews = [
    {
      id: 1,
      title: "KMIT Hosts Annual Technical Symposium",
      excerpt: "Students showcase innovative projects at the annual technical symposium 'TechnoVision 2025'.",
      date: "March 5, 2025",
      image: "/tech-symposium.jpg"
    },
    {
      id: 2,
      title: "KMIT Ranks in Top 10 Engineering Colleges",
      excerpt: "KMIT has been ranked among the top 10 engineering colleges in South India by Education Times.",
      date: "February 22, 2025",
      image: "/ranking.jpg"
    },
    {
      id: 3,
      title: "Campus Placement Drive Achieves 95% Success Rate",
      excerpt: "KMIT's 2025 batch achieves remarkable placement statistics with top companies.",
      date: "February 15, 2025",
      image: "/placement.jpg"
    }
  ];

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured News</h2>
        <Link href="/news" className="text-blue-600 hover:text-blue-800">
          View All News →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredNews.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link href={`/news/${item.id}`} className="text-blue-600 hover:text-blue-800">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}