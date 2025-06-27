import './heading.css'; // Optional: Add styles here or use inline styles

interface HeadingProps {
    title: string;
    description: string;
}

export const Heading = ({ title, description }: HeadingProps) => ( 
    <div className="highlight--header">
        <div className="highlight--title">
            <h2>{ title }</h2>
        </div>
        <div className="highlight--description">
            <p>{ description }</p>
        </div>
    </div>
);

