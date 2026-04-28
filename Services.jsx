import PageWrapper from "../components/PageWrapper";

import bedImg from "../assets/bed-room.jpg";
import swimImg from "../assets/swimming-pool.jpg";
import resImg from "../assets/restaurant.jpg";
import playImg from "../assets/play-station.jpg";

function Services() {
return (
<PageWrapper title="Services" titleClass="text-center">

<div className="flex flex-col items-center text-center px-4">

<h2 className="mb-4 text-lg md:text-xl font-semibold">
Here are some services we have
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-6 w-full max-w-5xl">

<div className="bg-black p-3 rounded shadow">
<p className="font-semibold">Hospitality</p>
<img
src={bedImg}
alt="Hospitality"
className="mt-2 rounded w-full h-40 object-cover"
/>
</div>

<div className="bg-black p-3 rounded shadow">
<p className="font-semibold">Swimming Pool</p>
<img
src={swimImg}
alt="Swimming Pool"
className="mt-2 rounded w-full h-40 object-cover"
/>
</div>

<div className="bg-black p-3 rounded shadow">
<p className="font-semibold">Restaurant</p>
<img
src={resImg}
alt="Restaurant"
className="mt-2 rounded w-full h-40 object-cover"
/>
</div>

<div className="bg-black p-3 rounded shadow">
<p className="font-semibold">Playstation</p>
<img
src={playImg}
alt="Playstation"
className="mt-2 rounded w-full h-40 object-cover"
/>
</div>

</div>
</div>

</PageWrapper>
);
}

export default Services;