import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './style';

/**
 * A button component that navigates the user back to the homepage.
 */
const BackHomeButton = () => {
  const navigate = useNavigate(); // Enables navigation to different routes.

  /**
   * Handles the navigation to the homepage.
   */
  const handleBackHome = () => {
    navigate('/'); // Navigate to the home page route.
  };

  return (
    <StyledButton onClick={handleBackHome}>
      Back to Home
    </StyledButton>
  );
};

export default BackHomeButton;
