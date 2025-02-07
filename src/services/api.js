// src/services/api.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_EXPIRATION = 5 * 60 * 1000; 

const getFromCache = async (key) => {
  try {
    const cached = await AsyncStorage.getItem(key);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    return null;
  } catch {
    return null;
  }
};

const setToCache = async (key, data) => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  } catch (error) {
    console.error('Cache error:', error);
  }
};

export const fetchUserWithCache = async (username) => {
  const cacheKey = `user_${username}`;
  
  const cachedData = await getFromCache(cacheKey);
  if (cachedData) return cachedData;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  
  if (response.ok) {
    await setToCache(cacheKey, data);
  }
  
  return data;
};