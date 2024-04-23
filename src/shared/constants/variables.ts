import { AdminMenuItems } from './types/types';

export const MENU_ITEMS: AdminMenuItems[] = [
  {
    id: 1,
    name: '메인',
  },
  {
    id: 2,
    name: '대시보드',
    children: [
      {
        id: 3,
        name: '사용자 UI',
      },
      {
        id: 4,
        name: '관리자 UI',
      },
    ],
  },
  {
    id: 5,
    name: '관리자',
  },
];
//Link만 있는 메뉴 onClick시 setActiveMenu
//AdminSubMenuBox active시 ui 변경
