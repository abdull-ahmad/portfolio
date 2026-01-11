import { Component, HostListener, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { HlmAspectRatioImports } from '@spartan-ng/helm/aspect-ratio';
import { HlmCarouselImports } from '@spartan-ng/helm/carousel';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { toast } from 'ngx-sonner';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HlmButtonImports,
    HlmCardImports,
    HlmInputImports,
    HlmTextareaImports,
    HlmAspectRatioImports,
    HlmCarouselImports,
    HlmToasterImports,
    NgIconsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }

  protected submitForm() {
    toast('Mail sent successfully', {
      description: 'We will get back to you soon!',
    });
  }

  protected readonly services = [
    { title: 'Crocheted Flowers', description: 'Everlasting blooms, handcrafted with love.', image: 'https://images.unsplash.com/photo-1586190848861-99c9574548e3?q=80&w=800&auto=format&fit=crop' },
    { title: 'Animated Stickers', description: 'Add a pop of fun to your life.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
    { title: 'Custom Gift Boxes', description: 'Curated specifically for your loved ones.', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop' },
    { title: 'Artisan Bouquets', description: 'Unique arrangements for every occasion.', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ee0?q=80&w=800&auto=format&fit=crop' },
  ];

  protected readonly galleryImages = [
    'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800&auto=format&fit=crop',
  ];
}
