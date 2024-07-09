export const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!regex.test(username)) {
      return 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores.';
    }
    return null;
  };
  
  export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };
  
  export const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }
    return null;
  };
  
  export const validateRoomName = (name) => {
    if (name.length < 3 || name.length > 30) {
      return 'Room name must be between 3 and 30 characters long.';
    }
    return null;
  };
  
  export const validateRoomDescription = (description) => {
    if (description.length > 200) {
      return 'Room description must not exceed 200 characters.';
    }
    return null;
  };