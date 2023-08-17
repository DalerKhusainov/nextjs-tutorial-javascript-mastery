// WE DON'T HAVE TO MENTION THE ENTIRE PATH
// THIS IS GOING TO IMPORT THE CSS TO OUR ENTIRE APPLICATION
import "@styles/global.css";

// COMPONENTS
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// METADATA API THAT CAN BE USED TO DEFINE OUR APPLICATION METADATA
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// LAYOUT IS GOING TO WRAPPED AROUND EVERYTHING
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
