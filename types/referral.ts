type SchoolDetail = {
    participants: Participant[];
    school: string;
    city: string;
};

type Participant = {
    fullName: string;
    phoneNumber: string;
};
  
export type { SchoolDetail, Participant };