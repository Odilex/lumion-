import { Tag, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogFiltersProps {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTags: string[];
  onSelectCategory: (category: string | null) => void;
  onSelectTag: (tag: string) => void;
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  onSelectCategory,
  onSelectTag,
}: BlogFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedCategory
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(tag)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              <Tag className="w-4 h-4" />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Filters */}
      {(selectedCategory || selectedTags.length > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold">Active Filters:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  {selectedCategory}
                  <button
                    onClick={() => onSelectCategory(null)}
                    className="hover:opacity-80"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              )}
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                >
                  {tag}
                  <button
                    onClick={() => onSelectTag(tag)}
                    className="hover:opacity-80"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                onSelectCategory(null);
                selectedTags.forEach(onSelectTag);
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Clear All
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
} 