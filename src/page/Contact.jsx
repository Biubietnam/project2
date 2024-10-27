import React from 'react';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Submit send");
  };

  return (
    <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-5">
    <div class="row w-100 custom-card">
        <div class="col-12 col-md-6 p-4 p-md-5">
            <h2 class="mb-4">Contact Us</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Enter your name"  
                        pattern="^[A-Za-z][A-Za-z\s]{2,}$" 
                        title="Name must start with a letter and have at least 3 characters."
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="Enter your email" 
                        pattern="^[^\s]{3,}@[^\s]{3,}\.[^\s]{2,}$" 
                        title="Email must be in the format: 3+ chars before '@', at least 3 chars after '@', a dot (.), and at least 2 chars after the dot"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea 
                        class="form-control" 
                        id="message" 
                        rows="4" 
                        placeholder="Your message" 
                        required
                    ></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        </div>
        <div class="col-12 col-md-6 bg-light p-4 p-md-5">
            <h2 class="mb-4">Contact Information</h2>
            <p><strong>Address:</strong> 123 Furniture St, City, State 12345</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@hudsonfurnishings.com</p>
            <p class="mt-4">Feel free to reach out with any questions or inquiries. We're here to help!</p>
        </div>
    </div>
</div>
  );
}

export default ContactPage;
