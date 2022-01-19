import "../scss/section.scss";

export const Section = (props) => {

    const {part, i} = props.section;
    const background = `linear-gradient(180deg, ${part.colors.start}, ${part.colors.end})`;
    
    return (
        <section key={part.id} className={`section${i}`} style={{background: background}}>
            <h1 key={"title" + i}>{part.name}</h1>
            {part.description.map((description, j) => {
                return (
                    <div className="info">
                        {description?.info}
                    </div>
                );
            })}
        </section>
    );
}
