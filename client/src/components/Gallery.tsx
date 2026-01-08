import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Anchor, Loader2 } from "lucide-react";
import { fetchSurveyGallery, transformSurveyToGalleryItem } from "@/sanity/queries";
import { GalleryItem } from "@/sanity/types";

const surveyTypeColors = {
  "Pre-Purchase": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Insurance": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Appraisal": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Consultation": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filters = ["All", "Pre-Purchase", "Insurance", "Appraisal", "Consultation"];

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const isCardExpanded = (cardId: string) => expandedCards.has(cardId);

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  // Fetch survey data from Sanity on component mount
  useEffect(() => {
    async function loadSurveys() {
      try {
        setLoading(true);
        setError(null);
        const surveys = await fetchSurveyGallery();
        const transformedItems = surveys.map(transformSurveyToGalleryItem);
        setGalleryItems(transformedItems);
      } catch (err) {
        setError('Failed to load survey gallery. Please try again later.');
        console.error('Error loading surveys:', err);
      } finally {
        setLoading(false);
      }
    }

    loadSurveys();
  }, []);
  
  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter((item: GalleryItem) => item.surveyType === filter);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading survey gallery...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Retry
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          {displayedItems.map((item: GalleryItem) => (
            <Card key={item.id} className="hover-elevate transition-all duration-300 overflow-hidden" data-testid={`gallery-item-${item.id}`}>
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.images[0] || '/placeholder-boat.jpg'}
                  alt={`${item.year ? item.year + ' ' : ''}${item.make ? item.make + ' ' : ''}${item.model || item.title} - ${item.surveyType} Survey`}
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
                      {item.year && item.make && item.model
                        ? `${item.year} ${item.make} ${item.model}`
                        : item.vesselName || item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Anchor className="h-4 w-4 mr-1" />
                      {item.vesselType}
                      {item.vesselLength && ` • ${item.vesselLength}ft`}
                    </p>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p className={isCardExpanded(item.id) ? "" : "line-clamp-2"}>
                    {isCardExpanded(item.id) ? item.description : truncateText(item.description)}
                  </p>
                  {item.description && item.description.length > 120 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCardExpansion(item.id);
                      }}
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium mt-1 transition-colors"
                      aria-label={isCardExpanded(item.id) ? "Show less" : "Read more"}
                    >
                      {isCardExpanded(item.id) ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
                
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {item.location || 'Florida'}
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

        {/* Empty state */}
        {filteredItems.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {galleryItems.length === 0
                ? "No surveys available yet. Check back soon!"
                : "No surveys found for the selected filter."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}