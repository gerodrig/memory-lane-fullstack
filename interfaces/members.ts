
export interface TeamMember {
    image?: string;
    name?: string;
    jobTitle?: jobTitle;
    description?: string;
};

type jobTitle = 'Chair' | 'Vice Chair' | 'Board Member' | 'Client/Program Manager' | 'Program Manager Part-Time';