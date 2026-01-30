import ReactMarkdown from "react-markdown";
import HomeScreen from "../components/HomeScreen";
const markdownText = `
--- 

**React Markdown Example**
---

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
`;
const Home: React.FC = () => {


    return (
          
        <div className="min-h-full">
            <HomeScreen/>

             <section className="flex justify-center">
                <article className="prose max-w-none">
  <ReactMarkdown>{markdownText}</ReactMarkdown>
</article>
                
                </section>

         

        </div>
    );

};

export default Home;