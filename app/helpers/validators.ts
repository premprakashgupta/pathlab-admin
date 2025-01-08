export const isEmail = (email: string): { status: boolean, msg: string } => {
    if (email === "" || !email) {
      return { status: true, msg: "Email is required" };
    }
  
    // Corrected regex to match email structure
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|systellar\.com|systellar\.ai)$/;
  
    if (!regex.test(email)) {
      return { status: true, msg: "Please enter a valid email" };
    }
  
    return { status: false, msg: "Valid" };
  };
  

  export const isStrongPassword = (password: string): { status: boolean, msg: string } => {
    if (password === "" || !password) {
      return { status: true, msg: "Password is required" };
    }
  
    // Regex for strong password validation:
    // - At least 8 characters long
    // - Contains at least one lowercase letter
    // - Contains at least one uppercase letter
    // - Contains at least one number
    // - Contains at least one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]).{8,}$/;
  
    if (!regex.test(password)) {
      return { status: true, msg: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character." };
    }
  
    return { status: false, msg: "Valid password" };
  };
  