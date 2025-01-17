// Email validation
export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
}

// Phone number validation
export function validatePhone(phone: string) {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phone) return 'Phone number is required';
  if (!phoneRegex.test(phone)) return 'Invalid phone number format';
  return '';
}

// Name validation
export function validateName(name: string) {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name is too short';
  if (name.length > 50) return 'Name is too long';
  return '';
}

// Message validation
export function validateMessage(message: string) {
  if (!message) return 'Message is required';
  if (message.length < 10) return 'Message is too short';
  if (message.length > 1000) return 'Message is too long';
  return '';
}

// Subject validation
export function validateSubject(subject: string) {
  if (!subject) return 'Subject is required';
  if (subject.length < 3) return 'Subject is too short';
  if (subject.length > 100) return 'Subject is too long';
  return '';
}

// Company name validation
export function validateCompany(company: string) {
  if (company && company.length > 100) return 'Company name is too long';
  return '';
}

// Website URL validation
export function validateWebsite(url: string) {
  if (!url) return '';
  try {
    new URL(url);
    return '';
  } catch {
    return 'Invalid website URL';
  }
}

// Password validation
export function validatePassword(password: string) {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/\d/.test(password)) return 'Password must contain at least one number';
  if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/[!@#$%^&*]/.test(password)) return 'Password must contain at least one special character';
  return '';
}

// Confirm password validation
export function validateConfirmPassword(password: string, confirmPassword: string) {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
}

// Project title validation
export function validateProjectTitle(title: string) {
  if (!title) return 'Project title is required';
  if (title.length < 3) return 'Project title is too short';
  if (title.length > 100) return 'Project title is too long';
  return '';
}

// Project description validation
export function validateProjectDescription(description: string) {
  if (!description) return 'Project description is required';
  if (description.length < 50) return 'Project description is too short';
  if (description.length > 500) return 'Project description is too long';
  return '';
}

// Budget validation
export function validateBudget(budget: number) {
  if (!budget) return 'Budget is required';
  if (budget < 0) return 'Budget cannot be negative';
  if (budget > 1000000) return 'Budget exceeds maximum limit';
  return '';
}

// Timeline validation
export function validateTimeline(timeline: string) {
  if (!timeline) return 'Timeline is required';
  if (timeline.length < 5) return 'Please provide more details about the timeline';
  if (timeline.length > 200) return 'Timeline description is too long';
  return '';
}

// File size validation
export function validateFileSize(size: number, maxSize: number = 5 * 1024 * 1024) {
  if (size > maxSize) return 'File size exceeds maximum limit';
  return '';
}

// File type validation
export function validateFileType(type: string, allowedTypes: string[]) {
  if (!allowedTypes.includes(type)) return 'File type not supported';
  return '';
}

// Form validation helper
export function validateForm(fields: { [key: string]: any }, rules: { [key: string]: (value: any) => string }) {
  const errors: { [key: string]: string } = {};
  let isValid = true;

  Object.keys(rules).forEach(field => {
    const error = rules[field](fields[field]);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
}

// Contact form validation
export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}) {
  return validateForm(data, {
    name: validateName,
    email: validateEmail,
    subject: validateSubject,
    message: validateMessage,
    ...(data.company && { company: validateCompany }),
    ...(data.phone && { phone: validatePhone })
  });
}

// Project form validation
export function validateProjectForm(data: {
  title: string;
  description: string;
  budget: number;
  timeline: string;
}) {
  return validateForm(data, {
    title: validateProjectTitle,
    description: validateProjectDescription,
    budget: validateBudget,
    timeline: validateTimeline
  });
} 