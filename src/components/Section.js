import "../scss/section.scss";

export const Section = (props) => {

    const {part, i} = props.section;
    const background = `linear-gradient(180deg, ${part.colors.start}, ${part.colors.end})`;
    
    return (
        <section key={`section${part.id.toString()}`} className={`article article${i}`} style={{background: background}}>
            <h1 key={"title" + i}>{part.name}</h1>
            {
            part.description.map((description, j) => {
                return (
                    <>
                        <em>{`${description.icon} ${description.text}`}</em><br/>
                    </>
                );
            })
            }
        </section>
    );
}
