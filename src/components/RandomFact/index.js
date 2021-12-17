const RandomFact = (props) => {
    const data = props.data || {
        text: 'Ants closely resemble human manners:  When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.',
        source_url: "http://www.djtech.net/humor/useless_facts.htm"
    }
    return (
        <article className="styles.post">
          <p>{data.text}</p>
          <a href={data.source_url}>{data.source_url}</a>
        </article>
    );
   
};

export { RandomFact };