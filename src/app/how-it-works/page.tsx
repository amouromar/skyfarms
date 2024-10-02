"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeft, ExternalLink, Maximize2 } from "lucide-react";

export default function HowItWorks() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          How SkyFarms Operates
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Vertical Farming Technology
          </h2>
          <p className="mb-4">
            SkyFarms utilizes cutting-edge vertical farming technology to
            maximize crop yield while minimizing resource usage. Our system
            employs a combination of hydroponics and aeroponics, allowing us to
            grow crops in vertically stacked layers without soil.
          </p>
          <Dialog>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <DialogTrigger asChild>
                  <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsPopoverOpen(true)}
                    onMouseLeave={() => setIsPopoverOpen(false)}
                  >
                    <Image
                      src="/svg/skyfarms-1.drawio.svg"
                      alt="Vertical Farming System Diagram"
                      width={2900}
                      height={900}
                      className="rounded-lg mb-4"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </DialogTrigger>
              </PopoverTrigger>
              <PopoverContent className="w-fit p-1">
                <p className="text-xs font-bold">Expand</p>
              </PopoverContent>
            </Popover>
            <DialogContent className="max-w-[100rem] w-full">
              <Image
                src="/svg/skyfarms-1.drawio.svg"
                alt="Vertical Farming System Diagram"
                width={2900}
                height={900}
                className="rounded-lg"
              />
            </DialogContent>
          </Dialog>
          <p className="mb-4">
            Key components of our vertical farming system include:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>LED grow lights optimized for plant photosynthesis</li>
            <li>Automated nutrient delivery systems</li>
            <li>Climate control for temperature, humidity, and CO2 levels</li>
            <li>Vertical racking systems for efficient space utilization</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Resource Efficiency
          </h2>
          <p className="mb-4">
            Our vertical farming method significantly reduces resource
            consumption compared to traditional agriculture:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-green-500">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="border border-green-600 px-4 py-2">
                    Resource
                  </th>
                  <th className="border border-green-600 px-4 py-2">
                    Traditional Farming
                  </th>
                  <th className="border border-green-600 px-4 py-2">
                    SkyFarms
                  </th>
                  <th className="border border-green-600 px-4 py-2">
                    Reduction
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-500 px-4 py-2">
                    Water Usage
                  </td>
                  <td className="border border-green-500 px-4 py-2">
                    100 liters/kg
                  </td>
                  <td className="border border-green-500 px-4 py-2">
                    5 liters/kg
                  </td>
                  <td className="border border-green-500 px-4 py-2">95%</td>
                </tr>
                <tr className="bg-green-100">
                  <td className="border border-green-500 px-4 py-2">
                    Land Use
                  </td>
                  <td className="border border-green-500 px-4 py-2">1 acre</td>
                  <td className="border border-green-500 px-4 py-2">
                    0.1 acre
                  </td>
                  <td className="border border-green-500 px-4 py-2">90%</td>
                </tr>
                <tr>
                  <td className="border border-green-500 px-4 py-2">
                    Pesticide Use
                  </td>
                  <td className="border border-green-500 px-4 py-2">
                    Variable
                  </td>
                  <td className="border border-green-500 px-4 py-2">None</td>
                  <td className="border border-green-500 px-4 py-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <p className="font-semibold">
              Verify these statistics and learn more about vertical farming:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://evolutionoftheprogress.com/vertical-farming-vs-traditional-farming/"
                  className="text-green-700 hover:text-green-900 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vertical Farming vs Traditional Farming
                </Link>
              </li>
              <li>
                <Link
                  href="https://impactful.ninja/vertical-vs-traditional-farming-differences/"
                  className="text-green-700 hover:text-green-900 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vertical vs Traditional Farming Differences
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.thegrowcer.ca/blog/the-ultimate-list-of-vertical-farming-facts-for-2024"
                  className="text-green-700 hover:text-green-900 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  The Ultimate List of Vertical Farming Facts for 2024
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Crop Yield and Economics
          </h2>
          <p className="mb-4">
            The Crop Yield and Economics section of SkyFarms highlights the
            superior productivity and economic advantages of vertical farming
            over traditional farming methods, particularly within an urban
            environment.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              1. Higher Crop Yields
            </h3>
            <p className="mb-2">
              SkyFarms can achieve significantly higher crop yields due to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
              <li>
                <strong>Vertical Stacking:</strong> Unlike traditional farming,
                where crops are grown horizontally on flat land, SkyFarms
                utilizes multiple vertically stacked layers of crops in a
                skyscraper. This dramatically increases the output per square
                foot.
              </li>
              <li>
                <strong>Controlled Environment:</strong> Our systems employ
                climate control, LED lighting optimized for photosynthesis, and
                automated nutrient delivery, creating ideal growing conditions
                year-round, which leads to higher productivity regardless of
                external weather conditions.
              </li>
            </ul>
            <p className="mb-4">
              For example, a <strong>10,000 sq ft floor</strong> in a skyscraper
              may yield several times more crops compared to the same land area
              in traditional farming, which is dependent on natural cycles and
              seasons.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              2. Reduced Transportation Costs
            </h3>
            <p className="mb-2">
              By situating vertical farms within urban areas, SkyFarms cuts down
              on transportation costs:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
              <li>
                <strong>Proximity to Markets:</strong> SkyFarms eliminates the
                need to transport produce over long distances, as traditional
                farms typically operate in rural areas far from city centers.
                This not only reduces transportation costs but also minimizes
                spoilage and waste during transit.
              </li>
              <li>
                <strong>Lower Carbon Emissions:</strong> Shorter transportation
                distances lead to reduced fuel usage and, subsequently, a
                smaller carbon footprint.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              3. Year-Round Production
            </h3>
            <p className="mb-2">
              SkyFarms is not subject to the seasonal limitations of traditional
              farming:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
              <li>
                <strong>Climate Independence:</strong> The indoor environment is
                fully controlled, allowing crops to be grown continuously, 365
                days a year. In contrast, traditional farms are constrained by
                seasons and weather.
              </li>
              <li>
                <strong>Higher Output Per Unit of Time:</strong> The ability to
                grow continuously results in more harvest cycles per year,
                further boosting annual yields.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">4. Premium Pricing</h3>
            <p className="mb-2">
              SkyFarms products can be priced higher due to their freshness and
              quality:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
              <li>
                <strong>Ultra-Fresh Produce:</strong> Since produce is grown
                near urban centers, it reaches consumers faster, ensuring
                ultra-fresh quality. Many consumers are willing to pay a premium
                for locally grown, fresh, and nutritious produce.
              </li>
              <li>
                <strong>Pesticide-Free:</strong> SkyFarms can avoid using
                harmful pesticides because crops are grown in controlled
                environments free of pests. This appeals to consumers looking
                for organic and pesticide-free food options, further supporting
                premium pricing.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">5. Lower Labor Costs</h3>
            <p className="mb-2">
              Automation significantly reduces labor costs in SkyFarms:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
              <li>
                <strong>Automated Systems:</strong> The use of automated
                nutrient delivery, irrigation, climate control, and harvesting
                systems reduces the need for manual labor, leading to more
                efficient operations and lower labor costs.
              </li>
              <li>
                <strong>Less Physical Space Management:</strong> Traditional
                farms require extensive labor for planting, weeding, and
                harvesting across large areas. In contrast, vertical farming is
                much more compact, reducing the amount of labor needed to manage
                crops.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Summary of Economic Benefits
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-2 pl-6">
            <li>
              <strong>Higher yields</strong> through efficient use of space and
              year-round production.
            </li>
            <li>
              <strong>Lower transportation costs</strong> by being closer to
              urban markets.
            </li>
            <li>
              <strong>Premium pricing</strong> due to the freshness,
              pesticide-free nature, and organic appeal of the produce.
            </li>
            <li>
              <strong>Reduced labor costs</strong> through automation and
              compact farming spaces.
            </li>
          </ul>

          <p>
            These factors make SkyFarms a more economically viable and
            sustainable option compared to traditional farming methods.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Environmental Impact
          </h2>
          <p className="mb-4">
            SkyFarms significantly reduces the environmental footprint of food
            production:
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Carbon Footprint Reduction
            </h3>
            <Image
              src="/images/caborn.jpg"
              alt="Carbon Footprint Comparison Chart"
              width={2200}
              height={600}
              className="rounded-lg shadow-md mb-4"
            />
          </div>
          <p>
            By minimizing transportation distances and optimizing resource use,
            we estimate a 70% reduction in carbon emissions compared to
            traditional farming and distribution methods for equivalent crop
            yields.
          </p>
          <div className="mt-6 space-y-4">
            <p className="font-semibold">
              Learn More:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.fao.org/home/en/"
                  className="text-green-700 hover:text-green-900 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Building sustainable agrifood systems
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Investment Opportunity
          </h2>
          <p className="mb-4">
            SkyFarms represents a compelling investment opportunity in the
            rapidly growing urban agriculture sector. Our projections indicate:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Initial setup cost: $2-3 million per 10,000 sq ft floor</li>
            <li>Projected annual revenue: $1.5-2 million per floor</li>
            <li>Estimated payback period: 3-4 years</li>
            <li>Potential ROI: 25-30% annually after the payback period</li>
          </ul>
          <p>
            With the global vertical farming market projected to reach $12.77
            billion by 2026, SkyFarms is well-positioned for substantial growth
            and market leadership.
          </p>
        </section>

        <div className="text-center">
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
