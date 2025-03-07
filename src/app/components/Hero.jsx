import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              KMIT Public Relations
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Connecting the campus with the community
            </p>
            <p className="text-lg mb-8 max-w-2xl">
              The PR department of Keshav Memorial Institute of Technology brings you the latest news, events, and updates from our vibrant campus community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/news" className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                Latest News
              </Link>
              <Link href="/events" className="bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-blue-800">
                Upcoming Events
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-full md:h-96 md:w-96">
              <Image
                src="/campus-image.jpg"
                alt="KMIT Campus"
                fill
                priority
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}