import { projects } from './sample-data';

// Get popular technologies from all projects
export function getPopularTechnologies(limit = 10) {
  const techCount = new Map<string, number>();
  
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCount.set(tech, (techCount.get(tech) || 0) + 1);
    });
  });

  return Array.from(techCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tech]) => tech);
}

// Get projects by technology
export function getProjectsByTechnology(technology: string) {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )
  );
}

// Get projects by category
export function getProjectsByCategory(category: string) {
  return projects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
}

// Get featured projects (most comprehensive or complex projects)
export function getFeaturedProjects(limit = 3) {
  return [...projects]
    .sort((a, b) => 
      (b.technologies.length + b.features.length) - 
      (a.technologies.length + a.features.length)
    )
    .slice(0, limit);
}

// Get latest projects
export function getLatestProjects(limit = 5) {
  // In a real application, projects would have dates
  // For now, we'll use the ID as a proxy for chronological order
  return [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

// Calculate project complexity score
export function calculateProjectComplexity(project: any) {
  let score = 0;
  
  // Technologies used
  score += project.technologies.length * 2;
  
  // Features implemented
  score += project.features.length;
  
  // Length of process description (as a rough metric)
  score += Math.floor(project.process.length / 100);
  
  return score;
}

// Get similar projects based on technologies and category
export function getSimilarProjects(currentProject: any, limit = 3) {
  return projects
    .filter(project => project.id !== currentProject.id)
    .map(project => ({
      ...project,
      similarityScore: calculateSimilarityScore(currentProject, project)
    }))
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);
}

// Calculate similarity score between two projects
function calculateSimilarityScore(project1: any, project2: any) {
  let score = 0;
  
  // Category match
  if (project1.category === project2.category) {
    score += 3;
  }
  
  // Technologies overlap
  const commonTech = project1.technologies.filter(tech => 
    project2.technologies.includes(tech)
  );
  score += commonTech.length * 2;
  
  return score;
}

// Search projects by keyword
export function searchProjects(keyword: string) {
  const searchTerm = keyword.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.overview.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchTerm)
    )
  );
}

// Get project statistics
export function getProjectStatistics(project: any) {
  return {
    technologiesCount: project.technologies.length,
    featuresCount: project.features.length,
    complexityScore: calculateProjectComplexity(project),
    similarProjects: getSimilarProjects(project).length
  };
}

// Group projects by category
export function groupProjectsByCategory() {
  const groupedProjects = new Map<string, typeof projects>();
  
  projects.forEach(project => {
    const category = project.category;
    if (!groupedProjects.has(category)) {
      groupedProjects.set(category, []);
    }
    groupedProjects.get(category)?.push(project);
  });
  
  return groupedProjects;
}

// Get project categories with counts
export function getProjectCategories() {
  const categoryCount = new Map<string, number>();
  
  projects.forEach(project => {
    const count = categoryCount.get(project.category) || 0;
    categoryCount.set(project.category, count + 1);
  });
  
  return Array.from(categoryCount.entries())
    .map(([category, count]) => ({
      name: category,
      count
    }))
    .sort((a, b) => b.count - a.count);
}

// Validate project URL (demo and source links)
export function validateProjectUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
} 