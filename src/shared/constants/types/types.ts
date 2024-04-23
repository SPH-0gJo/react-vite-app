export interface AdminMenu {
  id: number;
  is_deleted?: boolean;
  is_visible?: boolean;
  list_order?: number;
  parent_id?: number;
  link?: string;
  name: string;
  summary?: string;
  thumbnail?: string;
}
export interface AdminMenuItems extends AdminMenu {
  children?: AdminMenu[];
}
