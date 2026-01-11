import { Component, inject, computed } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { NgIconComponent } from '@ng-icons/core';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
    selector: 'theme-toggle',
    standalone: true,
    imports: [HlmButtonImports, HlmDropdownMenuImports, NgIconComponent],
    template: `
    <div class="relative">
      <button hlmBtn variant="outline" size="icon" [hlmDropdownMenuTrigger]="menu" class="relative overflow-hidden">
        <ng-icon
          name="lucideSun"
          class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <ng-icon
          name="lucideMoon"
          class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </button>
      <ng-template #menu>
        <div hlm hlmDropdownMenu class="min-w-[10rem]">
          <button hlmDropdownMenuItem (click)="setTheme('light')" [class.bg-accent]="theme() === 'light'">
            <ng-icon name="lucideSun" class="mr-2 h-4 w-4" />
            <span>Light</span>
          </button>
          <button hlmDropdownMenuItem (click)="setTheme('dark')" [class.bg-accent]="theme() === 'dark'">
            <ng-icon name="lucideMoon" class="mr-2 h-4 w-4" />
            <span>Dark</span>
          </button>
          <button hlmDropdownMenuItem (click)="setTheme('system')" [class.bg-accent]="theme() === 'system'">
            <ng-icon name="lucideMonitor" class="mr-2 h-4 w-4" />
            <span>System</span>
          </button>
        </div>
      </ng-template>
    </div>
  `,
})
export class ThemeToggleComponent {
    private themeService = inject(ThemeService);
    theme = this.themeService.theme;

    setTheme(theme: Theme) {
        this.themeService.setTheme(theme);
    }
}
