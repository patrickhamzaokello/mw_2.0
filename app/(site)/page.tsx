import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Slidebanners from "@/components/Slidebanners";

async function getHomeFeed() {
  const res = await fetch(
    `https://test.urbanflow256.com/Requests/endpoints/allcombined.php`
  );
  return res.json();
}

export default async function Home() {
  const homeFeedData = await getHomeFeed();
  const slidebanners =
    homeFeedData.featured.find((section) => section.heading === "Discover")
      ?.featured_sliderBanners || [];
  console.error("api:", slidebanners);

  return (
    <div
      className="
    bg-neutral-900
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    "
    >
      <Header>
        <div className="mb-2 mt-20">
          <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem
            image="/images/weekly.png"
            name="Liked Tracks"
            href="likedTracks"
          />
          <ListItem
            image="/images/weekly.png"
            name="Liked Tracks"
            href="likedTracks"
          />
          <ListItem
            image="/images/weekly.png"
            name="Liked Tracks"
            href="likedTracks"
          />
          <ListItem
            image="/images/weekly.png"
            name="Liked Tracks"
            href="likedTracks"
          />
          <ListItem
            image="/images/weekly.png"
            name={homeFeedData?.results}
            href="likedTracks"
          />
        </div>
      </Header>
      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Featured Banners
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>

      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Recently Played
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>

      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Weekly Top 10
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>

      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Trending Now
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>
      
      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Recommended
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>

      
      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Featured Artist
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>

      <div className="mt-20 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            New Release on Mwonya
          </h1>
        </div>
        <div>
          <Slidebanners slidebanners={slidebanners} />
        </div>
      </div>
    </div>
  );
}
