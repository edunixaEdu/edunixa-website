import React from 'react';

const About = () => {
  return (
    <div className="bg-PrimeTwo py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            About Edunixa
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Empowering learners to reach new heights with our innovative eLearning platform.
          </p>
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <div>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-medium text-white">
                Innovative Approach
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Edunixa takes a fresh and innovative approach to eLearning, leveraging the latest technologies and best practices to deliver a truly engaging and effective learning experience.
              </p>
            </div>

            <div className="mt-10">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-medium text-white">
                Personalized Learning
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Edunixa's personalized learning approach ensures that each learner receives a tailored educational experience, catering to their unique needs and goals.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-medium text-white">
                Flexible Learning
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Edunixa's flexible learning platform allows learners to access course materials and progress at their own pace, providing the freedom to learn anytime, anywhere.
              </p>
            </div>

            <div className="mt-10">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-medium text-white">
                Live class with doubt cleaing sessions
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Edunixa fosters a collaborative learning environment, encouraging learners to connect, share knowledge, and engage in meaningful discussions to enhance the learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;