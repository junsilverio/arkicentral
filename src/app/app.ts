import { Component, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

interface Architect {
  name: string;
  tags: string[];
  location: string;
  rating: number;
  reviews: number;
  photos: number;
}

interface Project {
  category: string;
  title: string;
  location: string;
}

interface Category {
  icon: string;
  label: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ArkiCentral');
  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected readonly navLinks = [
    'Find Architects',
    'Projects',
    'Styles',
    'Services',
    'Resources',
    'For Professionals',
  ];

  protected readonly stats: Stat[] = [
    { value: '3,500+', label: 'Verified Architects', icon: 'people' },
    { value: '12,800+', label: 'Completed Projects', icon: 'building' },
    { value: '98%', label: 'Client Satisfaction', icon: 'shield' },
  ];

  protected readonly architects: Architect[] = [
    {
      name: 'Ar. Angelica Cruz',
      tags: ['Modern', 'Tropical', 'Residential'],
      location: 'Quezon City, NCR',
      rating: 4.9,
      reviews: 128,
      photos: 8,
    },
    {
      name: 'Ar. Carlo Reyes',
      tags: ['Modern', 'Industrial', 'Commercial'],
      location: 'Quezon City, NCR',
      rating: 4.8,
      reviews: 96,
      photos: 12,
    },
    {
      name: 'Ar. Miguel Tan',
      tags: ['Modern', 'Commercial', 'Sustainable'],
      location: 'Makati City, NCR',
      rating: 4.9,
      reviews: 84,
      photos: 10,
    },
    {
      name: 'Ar. Maria Santos',
      tags: ['Tropical', 'Residential', 'Interior'],
      location: 'Quezon City, NCR',
      rating: 4.8,
      reviews: 78,
      photos: 9,
    },
  ];

  protected readonly categories: Category[] = [
    { icon: 'modern', label: 'Modern Style' },
    { icon: 'residential', label: 'Residential Projects' },
    { icon: 'commercial', label: 'Commercial Projects' },
    { icon: 'interior', label: 'Interior Design' },
    { icon: 'sustainable', label: 'Sustainable Design' },
    { icon: 'renovation', label: 'Renovation & Construction' },
    { icon: 'more', label: 'More Categories' },
  ];

  protected readonly partners = [
    'BOYSEN',
    'Holcim',
    'Hansgrohe',
    'DURAVIT',
    'Legrand',
    'Roca',
  ];

  protected readonly projects: Project[] = [
    { category: 'Residential', title: 'Modern Glass House', location: 'Quezon City, NCR' },
    { category: 'Commercial', title: 'Corporate Office Building', location: 'Ortigas, Pasig City' },
    { category: 'Interior', title: 'Luxury Condo Interior', location: 'Taguig City, NCR' },
    { category: 'Renovation', title: 'Home Renovation', location: 'Quezon City, NCR' },
    { category: 'Residential', title: 'Tropical Residence', location: 'Cavite City, Cavite' },
  ];

  protected readonly steps: Step[] = [
    {
      number: 1,
      title: 'Tell Us Your Location',
      description: 'Where you plan to build',
      icon: 'pin',
    },
    {
      number: 2,
      title: 'Browse & Compare Architects',
      description: 'Find the right fit for your needs',
      icon: 'people',
    },
    {
      number: 3,
      title: 'Connect & Discuss',
      description: 'Chat and get proposals',
      icon: 'chat',
    },
    {
      number: 4,
      title: 'Build Your Dream Project',
      description: 'From concept to completion',
      icon: 'shield',
    },
  ];
}
