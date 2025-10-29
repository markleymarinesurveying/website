import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Anchor } from "lucide-react";
import centerConsoleImage from "@assets/generated_images/Center_console_boat_10b5e474.png";
import sailboatImage from "@assets/generated_images/Professional_sailboat_image_c219e993.png";
import sportFishingImage from "@assets/generated_images/Sport_fishing_boat_23af46c5.png";
import heroImage from "@assets/generated_images/Luxury_yacht_hero_image_4dd2724f.png";

// todo: remove mock functionality - this will be replaced with real gallery data
const mockGalleryItems = [
  {
    id: 1,
    images: [centerConsoleImage],
    vesselType: "Center Console",
    year: "2019",
    make: "Boston Whaler",
    model: "270 Dauntless",
    location: "Jupiter, FL",
    date: "2024-01-15",
    surveyType: "Pre-Purchase",
    description: "Comprehensive pre-purchase survey for this well-maintained center console fishing boat."
  },
  {
    id: 2,
    images: [sailboatImage],
    vesselType: "Sailboat",
    year: "2016",
    make: "Catalina",
    model: "355",
    location: "Fort Lauderdale, FL",
    date: "2024-01-10",
    surveyType: "Insurance",
    description: "Insurance survey for this beautiful cruising sailboat with recent upgrades."
  },
  {
    id: 3,
    images: [sportFishingImage],
    vesselType: "Sport Fishing",
    year: "2020",
    make: "Viking",
    model: "44 Open",
    location: "West Palm Beach, FL",
    date: "2024-01-08",
    surveyType: "Appraisal",
    description: "Appraisal survey for financing purposes on this offshore sport fishing vessel."
  },
  {
    id: 4,
    images: [heroImage],
    vesselType: "Motor Yacht",
    year: "2017",
    make: "Sea Ray",
    model: "Sundancer 400",
    location: "Miami, FL",
    date: "2024-01-05",
    surveyType: "Pre-Purchase",
    description: "Detailed pre-purchase inspection of this luxury motor yacht with twin diesel engines."
  },
  {
    id: 5,
    images: [centerConsoleImage],
    vesselType: "Center Console",
    year: "2021",
    make: "Grady-White",
    model: "376 Canyon",
    location: "Stuart, FL",
    date: "2024-01-03",
    surveyType: "Insurance",
    description: "Insurance compliance survey for this offshore fishing boat with latest safety equipment."
  },
  {
    id: 6,
    images: [sailboatImage],
    vesselType: "Catamaran",
    year: "2018",
    make: "Lagoon",
    model: "42",
    location: "Key Largo, FL",
    date: "2023-12-28",
    surveyType: "Pre-Purchase",
    description: "Comprehensive survey of this spacious cruising catamaran perfect for extended voyages."
  }
];

const surveyTypeColors = {
  "Pre-Purchase": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Insurance": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Appraisal": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Consultation": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);

  const filters = ["All", "Pre-Purchase", "Insurance", "Appraisal", "Consultation"];
  
  const filteredItems = filter === "All" 
    ? mockGalleryItems 
    : mockGalleryItems.filter(item => item.surveyType === filter);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => {
                setFilter(filterOption);
                setVisibleItems(6);
              }}
              className="rounded-full"
              data-testid={`filter-${filterOption.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filterOption}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <Card key={item.id} className="hover-elevate transition-all duration-300 overflow-hidden" data-testid={`gallery-item-${item.id}`}>
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.images[0]} 
                  alt={`${item.year} ${item.make} ${item.model} - ${item.surveyType} Survey`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <Badge 
                    className={`${surveyTypeColors[item.surveyType as keyof typeof surveyTypeColors]} border-0`}
                  >
                    {item.surveyType}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {item.year} {item.make} {item.model}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Anchor className="h-4 w-4 mr-1" />
                      {item.vesselType}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-8">
            <Button 
              onClick={loadMore}
              variant="outline"
              size="lg"
              data-testid="button-load-more"
            >
              Load More Surveys
            </Button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No surveys found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}