type SchoolDetail = {
  participants: Participant[];
  school: string;
  city: string;
};

type Participant = {
  fullName: string;
  phoneNumber: string;
};

type UniversityGroup = {
  id: number;
  name: string;
  universities: University[];
};

type University = {
  id: number;
  name: string;
  country_id: string;
};

type Country = {
  id: number;
  name: string;
};

export type { SchoolDetail, Participant, UniversityGroup, University, Country };
