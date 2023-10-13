import React, { useState } from 'react';
import '../Assets/css/FAQ.css'
import img from '../Assets/images/faq_arrow.gif'
import Topbar1 from '../components/Topbar1';
import question from '../Assets/images/question.gif'
import Footer from '../components/Footer';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else { 
      setExpandedIndex(index);
    }
  };

  return (
      <section className="py-60">
        <Topbar1/>
        <br/>
      <div className="container12 text-control-1">
        <img src={question} style={{width:"7%", marginLeft:"40%"}}/>
        <h2>FAQ about FINMATE</h2>
        <div className="faqs-section">
          {faqData.map((faq, index) => (
            <div
              className={`faq accordion ${
                index === expandedIndex ? 'expanded' : ''
              }`}
              key={index}
            >
              <div className="question-wrapper" onClick={() => handleToggle(index)}>
                <div className="d-flex align-items-center">
                  <span className="q-mark d-block">Q.</span>
                  <p className="question" title="">
                    {faq.question}
                  </p>
                </div>
                <i
                  className={`material-icons drop ${
                    index === expandedIndex ? 'icon-expend' : ''
                  }`}
                >
                  <img src={img} style={{width:"7%",position:"relative",left:"35%", color:"black"}}/>
                </i>
              </div>
              <div
                className="answer-wrapper"
                style={{ display: index === expandedIndex ? 'block' : 'none' }}
              >
                <p className="answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default FAQ;

const faqData = [
  {
    question: 'How can I track my expenses and income within the app?',
    answer:
      'Its simple! Log your expenses and income transactions manually or link your accounts for automatic tracking. You can categorize transactions, add notes, and view detailed spending reports.',
  },
  {
    question: 'Can I generate financial reports with these apps?',
    answer:
      'Yes, finmate allows you to generate reports and charts to visualize your financial progress, such as income vs. expenses, net worth, and investment performance.',
  },
  {
    question: 'What platforms and devices is the app available on?',
    answer:
      'Our app is available on multiple platforms, including iOS, Android, and web browsers. You can access your financial data from your smartphone, tablet, or computer.',
  },
  {
    question: 'How do I contact customer support if I have questions or encounter issues?',
    answer:
      'You can reach our customer support team through the finmate contact us page  via email or phone. We are here to assist you with any questions or concerns.',
  },
  {
    question: 'What steps should I take if I lose my device or suspect unauthorized access to my account?',
    answer:
      ' In case of loss or suspected unauthorized access, change your login credentials immediately. Most importantly, contact our support team to secure your account and investigate any potential security breaches.',
  },
  {
    question: 'How do I categorize my expenses?',
    answer:
      '  You can categorize expenses by assigning them to predefined categories or creating custom ones. This helps you gain a clear understanding of where your money is going.',
  },
];