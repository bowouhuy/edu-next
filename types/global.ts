// // export type SingleNavItem = { title: string; href: string; active?: boolean, language?: boolean };
// export type SingleNavItem = {
//     title: string;
//     href: string;
//     active?: boolean,
//     // children?: NavItems,
//   };

// export type NavItems = SingleNavItem[];

// export type NonNullableChildren<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

// export type NonNullableChildrenDeep<T> = {
//   [P in keyof T]-?: NonNullableChildrenDeep<NonNullable<T[P]>>;
// };

export interface MenuItemType {
    href: string;
    title: string;
    submenu?: any[];
    icon: string; // Adjust this type based on the actual structure of your item object
}

export interface SideBarItemType {
    href: string;
    title: string;
}

export interface Transaction {
    amount: number;
    bank: string;
    status: string;
    description: string;
    created_at: string;
}

export interface Balance{
    potential_commission: number;
}

export interface Incentive {
    event: string;
    programName: string;
    country: string;
    groupName: string;
    amount: number;
}

export interface StudentList {
    name: string;
    phoneNumber: string;
    school: string;
    status: string;
    date: string;
    programCategory: string;
    programName: string;
    earning: number;
}

export interface ReferralType {
    id: number;
    name: string;
}

export interface ProgramName {
    id: number;
    name: string;
}