const RandomFact = (props) => {
    const data = props.data || {
        text: 'China has more English speakers than the United States.',
        source_url: 'http://www.djtech.net/humor/useless_facts.htm'
    }
    return (
        <article className="styles.post">
          <p>{data.text}</p>
          <a href={data.source_url}>{data.source_url}</a>
        </article>
    );
   
};

export { RandomFact };