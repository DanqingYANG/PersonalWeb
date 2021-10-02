import { useState, useEffect} from 'react'
import MdFile from '../../posts/image.md'

const AppMarkdown = () => {
    const [a, seta] = useState({md: ''});
    useEffect(() => {
      const handleSession = async () => {
        try {
          fetch(MdFile).then(res => res.text()).then(text => seta({ md: text }));
        } catch (error) {
          console.log("error", error);
        }
      };
      handleSession();
    }, []);
    console.log(a);
    return a;
}

export default AppMarkdown;
