
export interface TeamMember {
    image?: string;
    name?: string;
    jobTitle?: jobTitle;
    description?: string;
};

type jobTitle = 'Founder and Director' | 'Treasurer - Board of Directors' | 'Board of Directors' | 'Client/Program Manager' | 'Program Manager Part-Time' | 'Program Assistant' | 'Recreational Therapist';