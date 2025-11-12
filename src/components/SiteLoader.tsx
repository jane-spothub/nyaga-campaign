// src/components/SiteLoader.tsx
"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                // Use requestAnimationFrame for better performance on iOS
                await new Promise(resolve => requestAnimationFrame(resolve));

                const images = Array.from(document.querySelectorAll('img'));
                const videos = Array.from(document.querySelectorAll('video'));
                const totalAssets = images.length + videos.length;

                if (totalAssets === 0) {
                    // No assets to load, wait minimum time
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    setProgress(100);
                    completeLoading();
                    return;
                }

                let loadedAssets = 0;

                const updateProgress = () => {
                    loadedAssets++;
                    const newProgress = Math.min(95, (loadedAssets / totalAssets) * 100);
                    setProgress(newProgress);
                };

                // Load images with Safari-compatible approach
                const imagePromises = images.map(img => {
                    if (img.complete && img.naturalWidth !== 0) {
                        updateProgress();
                        return Promise.resolve();
                    }

                    return new Promise(resolve => {
                        const onLoad = () => {
                            img.removeEventListener('load', onLoad);
                            img.removeEventListener('error', onError);
                            updateProgress();
                            resolve(null);
                        };

                        const onError = () => {
                            img.removeEventListener('load', onLoad);
                            img.removeEventListener('error', onError);
                            updateProgress();
                            resolve(null);
                        };

                        img.addEventListener('load', onLoad, { once: true });
                        img.addEventListener('error', onError, { once: true });

                        setTimeout(() => {
                            img.removeEventListener('load', onLoad);
                            img.removeEventListener('error', onError);
                            updateProgress();
                            resolve(null);
                        }, 3000);
                    });
                });

                // Load videos with Safari-compatible approach
                const videoPromises = videos.map(video => {
                    if (video.readyState >= 4) {
                        updateProgress();
                        return Promise.resolve();
                    }

                    return new Promise(resolve => {
                        let resolved = false;

                        const resolvePromise = () => {
                            if (resolved) return;
                            resolved = true;
                            updateProgress();
                            resolve(null);
                        };

                        const events = ['loadeddata', 'canplay', 'canplaythrough', 'loadedmetadata'];

                        const eventHandlers = events.map(event => {
                            const handler = () => {
                                cleanup();
                                resolvePromise();
                            };
                            video.addEventListener(event, handler, { once: true });
                            return { event, handler };
                        });

                        const errorHandler = () => {
                            cleanup();
                            resolvePromise();
                        };

                        video.addEventListener('error', errorHandler, { once: true });

                        const cleanup = () => {
                            eventHandlers.forEach(({ event, handler }) => {
                                video.removeEventListener(event, handler);
                            });
                            video.removeEventListener('error', errorHandler);
                        };

                        setTimeout(() => {
                            cleanup();
                            resolvePromise();
                        }, 5000);
                    });
                });

                await Promise.race([
                    Promise.all([
                        ...imagePromises,
                        ...videoPromises,
                        new Promise(resolve => setTimeout(resolve, 3000))
                    ]),
                    new Promise(resolve => setTimeout(resolve, 8000))
                ]);

                setProgress(100);
                completeLoading();

            } catch (error) {
                console.log('Loader error:', error);
                completeLoading();
            }
        };

        const completeLoading = () => {
            setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setIsLoading(false);

                    // CRITICAL FIX: Scroll to top after loader completes
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'instant'
                    });

                    // Also try these alternative methods
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;

                    // IMPORTANT: Restore all styles properly
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                    document.body.style.height = '';
                    document.documentElement.style.height = '';

                    // Force a reflow to ensure styles are applied
                    document.body.getBoundingClientRect();
                }, 800);
            }, 500);
        };

        // Prevent scrolling during loader and ensure we start at top
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Store the original body height before making it fixed
        const originalBodyHeight = document.body.style.height;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';

        loadAssets();

        // Cleanup function - runs when component unmounts
        return () => {
            // This ensures styles are reset even if component unmounts unexpectedly
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = originalBodyHeight;
            document.documentElement.style.height = '';
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`
            fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 transition-opacity duration-800
            ${fadeOut ? 'opacity-0' : 'opacity-100'}
            touch-none select-none
        `}>
            <div className="text-center text-white px-4">
                {/* Main Name with Animation */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
                    <span className="animate-fadeInUp block">JM Nyaga</span>
                </h1>

                {/* Subtitle Container */}
                <div className="space-y-2">
                    <div className="animate-fadeInUp animation-delay-300">
                        <p className="text-lg md:text-xl text-blue-200 font-light italic">
                            King of the South
                        </p>
                    </div>
                    <div className="animate-fadeInUp animation-delay-600">
                        <p className="text-base md:text-lg text-green-200 font-medium">
                            For the People
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-64 max-w-full h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Progress Text */}
                <div className="mt-2">
                    <p className="text-sm text-white/60">
                        {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Ready!'}
                    </p>
                </div>

                {/* Simplified decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse-slow animation-delay-1000"></div>
            </div>
        </div>
    );
}