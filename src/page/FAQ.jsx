import React from 'react';

function FaqPage() {
    const faqData = [
        {
          question: "What types of furniture do you offer?",
          answer: "At Hudson Furnishings, we specialize in a wide range of home furniture, including bedroom sets, sofas, mattresses, and kitchen furniture. We also provide custom orders through our exclusive Palliser studio."
        },
        {
          question: "Can I customize my furniture?",
          answer: "Yes! We are the only Palliser custom order studio in the area, offering over 300 different fabrics and leathers to create furniture that perfectly fits your style and needs."
        },
        {
          question: "How do I choose the right furniture for my home?",
          answer: "Our showrooms are designed to make it easy for you to navigate through our collections. Our staff is also available to provide personalized advice and ideas on how to complement your existing decor."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 30 days for a refund or exchange, provided it is in its original condition."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we provide various financing options to help you make your purchase more manageable. Please speak to our sales team for more details."
        },
        {
          question: "How do I care for my furniture?",
          answer: "We recommend following specific care instructions for each type of material. For fabric furniture, regular vacuuming and spot cleaning are essential, while leather requires occasional conditioning to maintain its quality."
        },
        {
          question: "Can I place an order online?",
          answer: "Currently, we encourage in-store shopping to provide a personalized experience. However, you can browse our collections online and contact us to place custom orders."
        },
        {
          question: "What if I need help with interior design?",
          answer: "Our team is passionate about interior design and is here to help! We offer consultation services to guide you in choosing the right pieces and designing your space effectively."
        },
        {
          question: "Are your products eco-friendly?",
          answer: "We are committed to sustainability and source many of our materials from eco-friendly suppliers. Look for our eco-friendly collections in-store."
        },
        {
          question: "What are your store hours?",
          answer: "Hudson Furnishings is open Monday to Saturday from 10 AM to 6 PM and Sunday from 12 PM to 5 PM. We look forward to helping you find the perfect pieces for your home!"
        }
      ];
      
  

  return (
    <div className="faq-container">
      <div className="container">
        <div className="row justify-content-center">
          {faqData.map((faq, index) => (
            <div key={index} className="col-auto">
              <div className="card mb-4 faq-card">
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title h5">{faq.question}</h2>
                  <p className="card-text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-container {
          background-color: #f8f9fa;
          padding: 50px 0;=
        }
        .faq-card {
          height: 10vh;
          width: 20vw;
          transition: height 1s ease, box-shadow 0.3s ease;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          position: relative;
        }
        .faq-card:hover {
          height: auto;
          max-height: 30vh;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .card-title {
          color: #007bff;
          margin-bottom: 0.5rem; 
        }
        .card-text {
          transition: max-height 0.3s ease, opacity 0.3s ease
          overflow: hidden;
          max-height: 4.5em;
          opacity: 0.8;
        }
        .faq-card:hover .card-text {
          max-height: 100vh;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default FaqPage;
