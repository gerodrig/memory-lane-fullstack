
export interface TeamMember {
    image?: string;
    name?: string;
    jobTitle?: jobTitle;
    description?: string;
    imagePosition?: string;
    imageFit?: string;
    imageScale?: number;
};

type jobTitle = 'Board of Directors, President' | 'Board of Directors, Treasurer' | 'Board of Directors, Secretary' | 'Board of Directors' | 'Canada Summer Jobs Student' | 'Program Manager Part-Time' | 'Program Assistant' | 'Recreation Therapist';