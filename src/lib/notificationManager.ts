export interface NotificationOptions {
    title: string;
    body: string;
    icon?: string;
    badge?: string;
    redirectUrl?: string;
}

class NotificationManager {
    private swRegistration: ServiceWorkerRegistration | null = null;

    // Inisialisasi Service Worker
    async initialize(): Promise<boolean> {
        if (typeof window === 'undefined') return false;
        if (!('serviceWorker' in navigator) || !('Notification' in window)) {
            console.warn('Service Worker atau Notifications tidak didukung di browser ini');
            return false;
        }

        try {
            // Check if sw.js exists before registering
            const response = await fetch('/sw.js', { method: 'HEAD' });
            if (!response.ok) {
                console.warn('sw.js not found, skipping service worker registration');
                return false;
            }

            this.swRegistration = await navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            });

            console.log('Service Worker registered successfully:', this.swRegistration);

            // Tunggu hingga service worker aktif
            await navigator.serviceWorker.ready;

            return true;
        } catch (error) {
            console.error('Service Worker registration failed:', error);
            return false; 
        }
    }

    // Request permission untuk notifikasi
    async requestPermission(): Promise<NotificationPermission> {
        if (!('Notification' in window)) {
            console.warn('Notifications tidak didukung');
            return 'denied';
        }

        if (Notification.permission === 'granted') {
            return 'granted';
        }

        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            return permission;
        }

        return Notification.permission;
    }

    // Cek apakah notifikasi sudah diizinkan
    isPermissionGranted(): boolean {
        return typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted';
    }

    // kirim Notifikasi via browser (service worker or fallback)
    async sendNotification(options: NotificationOptions): Promise<void> {
        if (!this.isPermissionGranted()) {
            console.warn('Permission untuk notifikasi belum diberikan');
            return;
        }

        // Try service worker notification
        if (this.swRegistration) {
            try {
                await this.swRegistration.showNotification(options.title, {
                    body: options.body,
                    icon: options.icon || '/icon-192x192.png',
                    badge: options.badge || '/badge-72x72.png',
                    data: {
                        url: options.redirectUrl || window.location.pathname
                    }
                });
                return;
            } catch (error) {
                console.warn('Service worker notification failed, using fallback:', error);
            }
        }

        // Fallback to basic Notification API
        try {
            new Notification(options.title, {
                body: options.body,
                icon: options.icon || '/icon-192x192.png',
            });
        } catch (error) {
            console.error('Error mengirim notifikasi:', error);
        }
    }

    // Helper untuk unregister service worker (untuk development/debugging)
    async unregister(): Promise<boolean> {
        if (!this.swRegistration) {
            return false;
        }

        try {
            const result = await this.swRegistration.unregister();
            this.swRegistration = null;
            return result;
        } catch (error) {
            console.error('Error unregistering service worker:', error);
            return false;
        }
    }
}

// Export singleton instance
export const notificationManager = new NotificationManager();