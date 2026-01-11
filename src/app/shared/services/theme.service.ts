import { Injectable, Inject, PLATFORM_ID, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light' | 'system';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private _theme = signal<Theme>('system');
    public theme = this._theme.asReadonly();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            // Load saved theme
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            if (savedTheme) {
                this.setTheme(savedTheme);
            } else {
                this.setTheme('system');
            }
        }
    }

    setTheme(theme: Theme) {
        this._theme.set(theme);

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('theme', theme);
            const root = window.document.documentElement;
            root.classList.remove('light', 'dark');

            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                root.classList.add(systemTheme);
                return;
            }

            root.classList.add(theme);
        }
    }
}
