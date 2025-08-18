import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review: "Amazing plant collection! My garden has never looked better. The quality and care instructions are perfect.",
    location: "California"
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review: "Outstanding service and healthy plants. The 3D showcase helped me choose the perfect oak tree for my yard.",
    location: "New York"
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review: "Professional nursery with excellent plant care. My indoor plants are thriving thanks to their guidance.",
    location: "Texas"
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review: "Best nursery experience ever! The staff knowledge and plant quality exceeded my expectations completely.",
    location: "Florida"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their gardening needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar with hover effect */}
                <div className="relative mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary transition-all duration-300">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-warning fill-current group-hover:text-primary transition-colors duration-300"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              10K+
            </div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Happy Customers
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              500+
            </div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Plant Varieties
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              15+
            </div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Years Experience
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              99%
            </div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;