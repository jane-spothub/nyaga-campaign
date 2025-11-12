export type Volunteer = {
    id: number;
    name: string;
    phone: string;
    id_number: string;
    created_at: string;
};
export type TabType = 'all' | 'videos' | 'photos';

// Define the tab interface
export type TabItem ={
    key: TabType;
    label: string;
    count: number;
}

export type MediaType = 'video' | 'image';

export type CommunityMediaItem = {
    type: MediaType;
    thumbnail?: string;
    videoUrl?: string;
    imageUrl?: string;
    title: string;
    description: string;
}

// Then in your component, use the typed array:

export const communityMedia: CommunityMediaItem[] = [
    {
        type: "video",
        thumbnail: "/videos/thumbnail/regionalism-nationaldiscourse.png",
        videoUrl: "/videos/regionalism-nationaldiscourse.mp4",
        title: "JM Nyaga: We must not regionalize national discourse",
        description: "When SHA is not working it is not working for everybody - FRED OGWENO | RIGGY G: THE DE FACTO KING?"
    },
    {
        type: "image",
        imageUrl: "/images/jm-babuowino.png",
        title: "Building Progressive Alliances",
        description: "JM Nyaga with Hon. Babu Owino - forging partnerships for transformative leadership and people-centered governance in Kenya"
    },
    {
        type: "video",
        thumbnail: "/videos/thumbnail/govtleave-preachingto-religious-people.png",
        videoUrl: "/videos/govtleave-preachingto-religious-people.mp4",
        title: "JM Nyaga: Ruto's government should leave preaching hope to religious leaders",
        description: "It should act hope - FRED OGWENO | RIGGY G: THE DE FACTO KING?"
    },
    {
        type: "image",
        imageUrl: "/images/jm-matiangi.png",
        title: "National Development Collaboration",
        description: "JM Nyaga with former Interior CS Dr. Fred Matiang'i - uniting for transformative governance and people-centered national progress"
    }
    // {
    //     type: "image",
    //     imageUrl: "/community-photo-3.jpg",
    //     title: "Healthcare Outreach",
    //     description: "Medical camp in rural Tharaka"
    // },
    // {
    //     type: "video",
    //     thumbnail: "/community-thumbnail-3.jpg",
    //     videoUrl: "/community-video-3.mp4",
    //     title: "Agricultural Development",
    //     description: "Supporting local farmers"
    // }
];

// The counts will automatically be typed as numbers
export const videoCount = communityMedia.filter(item => item.type === 'video').length;
export const photoCount = communityMedia.filter(item => item.type === 'image').length;

