const user = {
    profile: {
      name: 'John',
      address: {
        street: '123 Main St',
        city: 'New York'
      }
    }
  };
  
  console.log(user.profile?.name);      // Output: John
  console.log(user.profile?.address?.city); // Output: New York
  console.log(user.profile?.address?.zip);  // Output: undefined
  console.log(user?.contact?.email);   // Output: undefined (no error)
  