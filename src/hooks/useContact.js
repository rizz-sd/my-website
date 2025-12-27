import { useState } from 'react';

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate data
      if (!data.name || !data.email || !data.message) {
        throw new Error('All fields are required');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        throw new Error('Invalid email address');
      }

      console.log('Contact message submitted:', data);
      
      setSuccess(true);
      setIsLoading(false);
      
      return { success: true };
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  return {
    submitContact,
    isLoading,
    error,
    success
  };
}
