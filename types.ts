import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}