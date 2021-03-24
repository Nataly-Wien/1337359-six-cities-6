import {NameSpace} from '../reducer';

export const getHotels = (state) => state[NameSpace.DATA].hotels;
export const getCurrentHotel = (state) => state[NameSpace.DATA].currentHotel;
export const getNearHotels = (state) => state[NameSpace.DATA].nearHotels;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getHotelsLoadingStatus = (state) => state[NameSpace.DATA].isHotelsLoading;
export const getCurrentLoadingStatus = (state) => state[NameSpace.DATA].isCurrentLoading;
export const getNearLoadingStatus = (state) => state[NameSpace.DATA].isNearLoading;
export const getCommentsLoadingStatus = (state) => state[NameSpace.DATA].isCommentsLoading;
export const getCommentPostingStatus = (state) => state[NameSpace.DATA].isCommentPosting;
export const getFavoritesLoadingStatus = (state) => state[NameSpace.DATA].isFavoritesLoading;
export const getLoadingErrorStatus = (state) => state[NameSpace.DATA].isLoadingError;
export const getPostCommentErrorStatus = (state) => state[NameSpace.DATA].isPostCommentError;
