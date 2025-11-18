// src/utils/tmdbApi.js

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .envファイルからAPIキーを読み込む
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

if (!TMDB_API_KEY) {
  console.error('TMDB API Key is not defined. Please set VITE_TMDB_API_KEY in your .env file.');
}

const fetchFromTmdb = async (endpoint, params = {}) => {
  if (!TMDB_API_KEY) {
    return { error: 'TMDB API Key is missing.' };
  }

  const query = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: 'ja-JP', // 日本語のデータを取得
    ...params,
  }).toString();

  try {
    const response = await fetch(`${TMDB_BASE_URL}${endpoint}?${query}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`TMDB API error: ${response.status} - ${errorData.status_message || 'Unknown error'}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from TMDB:', error);
    return { error: error.message };
  }
};

export const getPopularMovies = async (page = 1) => {
  return fetchFromTmdb('/movie/popular', { page });
};

export const getPopularTvShows = async (page = 1) => {
  return fetchFromTmdb('/tv/popular', { page });
};

export const searchMovies = async (query, page = 1) => {
  if (!query) return { results: [] };
  return fetchFromTmdb('/search/movie', { query, page });
};

export const searchTvShows = async (query, page = 1) => {
  if (!query) return { results: [] };
  return fetchFromTmdb('/search/tv', { query, page });
};

export const getMovieDetails = async (movieId) => {
  return fetchFromTmdb(`/movie/${movieId}`);
};

export const getTvShowDetails = async (tvId) => {
  return fetchFromTmdb(`/tv/${tvId}`);
};

export const getMovieWatchProviders = async (movieId) => {
  return fetchFromTmdb(`/movie/${movieId}/watch/providers`);
};

export const getTvShowWatchProviders = async (tvId) => {
  return fetchFromTmdb(`/tv/${tvId}/watch/providers`);
};

export const getMovieCredits = async (movieId) => {
  return fetchFromTmdb(`/movie/${movieId}/credits`);
};

export const getTvShowCredits = async (tvId) => {
  return fetchFromTmdb(`/tv/${tvId}/credits`);
};

export const getMovieTrailers = async (movieId) => {
  return fetchFromTmdb(`/movie/${movieId}/videos`);
};

export const getTvShowTrailers = async (tvId) => {
  return fetchFromTmdb(`/tv/${tvId}/videos`);
};

export const getDiscoverMoviesByProvider = async (providerId, page = 1) => {
  if (!providerId) return { results: [] };
  return fetchFromTmdb('/discover/movie', {
    page,
    with_watch_providers: providerId,
    watch_region: 'JP',
    sort_by: 'popularity.desc', // 人気順にソート
  });
};

// 画像のURLを生成するヘルパー関数
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
