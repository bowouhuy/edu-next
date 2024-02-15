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
    date: string;
    transactionType: string;
    amount: string;
    bankNumber: string;
}

export interface Incentive {
    event: string;
    programName: string;
    country: string;
    groupName: string;
    amount: string;
}

export interface StudentList {
    name: string;
    phoneNumber: string;
    school: string;
    status: string;
    date: string;
    programName: string;
    earning: string;
}