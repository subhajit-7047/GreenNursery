import { Clock, User, ArrowRight, TreePine, Leaf, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Complete Guide to Oak Tree Care: From Seedling to Maturity",
    excerpt: "Learn everything about growing and maintaining healthy oak trees in your garden. From soil preparation to seasonal care tips.",
    author: "Dr. Sarah Green",
    readTime: "8 min read",
    category: "Tree Care",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
    icon: TreePine,
    date: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Best Fast-Growing Trees for Your Landscape Design",
    excerpt: "Discover the top tree varieties that provide quick results for landscaping projects while maintaining beauty and sustainability.",
    author: "Mike Forest",
    readTime: "6 min read",
    category: "Landscaping",
    image: "https://images.unsplash.com/photo-1574263867128-5de61af145fc?w=400&h=250&fit=crop",
    icon: Leaf,
    date: "Dec 12, 2024"
  },
  {
    id: 3,
    title: "Understanding Tree Root Systems and Soil Health",
    excerpt: "Deep dive into how tree roots interact with soil, nutrients, and surrounding plants for optimal garden ecosystem health.",
    author: "Emma Botanist",
    readTime: "10 min read",
    category: "Plant Science",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&h=250&fit=crop",
    icon: Sprout,
    date: "Dec 10, 2024"
  },
  {
    id: 4,
    title: "Seasonal Tree Pruning: When and How to Trim",
    excerpt: "Master the art of tree pruning with our comprehensive guide covering timing, techniques, and tools for healthy growth.",
    author: "James Arborist",
    readTime: "7 min read",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=250&fit=crop",
    icon: TreePine,
    date: "Dec 8, 2024"
  },
  {
    id: 5,
    title: "Creating Wildlife-Friendly Tree Gardens",
    excerpt: "Transform your garden into a wildlife sanctuary by choosing the right trees that attract birds, butterflies, and beneficial insects.",
    author: "Lisa Naturalist",
    readTime: "9 min read",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    icon: Leaf,
    date: "Dec 5, 2024"
  },
  {
    id: 6,
    title: "Climate-Adaptive Trees for Future Gardening",
    excerpt: "Explore resilient tree species that thrive in changing climate conditions while contributing to environmental sustainability.",
    author: "Dr. Alex Climate",
    readTime: "11 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=250&fit=crop",
    icon: Sprout,
    date: "Dec 3, 2024"
  }
];

const TreeArticles = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Tree Knowledge <span className="text-primary">Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expand your tree expertise with our comprehensive guides and expert insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <Card 
                key={article.id}
                className="group relative overflow-hidden border-border/50 bg-card hover:shadow-glow hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    <IconComponent className="w-3 h-3" />
                    {article.category}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <span>{article.date}</span>
                  </div>

                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 justify-between"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 transition-all duration-300 hover:shadow-glow"
          >
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Newsletter Signup for Articles */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Tree Care Tips
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get weekly articles and expert insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
            <Button className="bg-primary hover:bg-accent text-primary-foreground px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeArticles;