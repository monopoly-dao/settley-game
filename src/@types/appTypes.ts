import { ReactNode } from 'react';

export interface ISideBarLink {
  href: string;
  label: string;
  icon?: ReactNode;
  iconColor?: string;
  iconBackgroundColor?: string;
  iconSize?: string;
}

export type INetworkSuccessResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export type IQueryDataResponse<T> = {
  status: string;
  message: string;
  data: {
    data: T;
    total: number;
    totalPages: number;
    page: number;
    limit: number;
  };
};

export interface IQueryFilter {
  page?: number;
  take?: number;
}
export interface IFetchQueryParams {
  limit?: string;
  filter?: string;
  page?: string;
  sort?: string;
  search?: string;
  searchFields?: string[];
}
