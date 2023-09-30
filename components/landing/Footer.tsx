import MetaData from "@/config/metadata";
import Link from "next/link";
import AnchorIcon from "../icons/Anchor";

type FooterProps = {
    linkedIn?: string;
    github?: string;
    gitlab?: string;
};

export default function Footer(props: FooterProps): JSX.Element {
    const footerItems = {
        linkedIn: <MetaData.linkedinProfile />,
        github: <MetaData.githubProfile />,
        gitlab: <MetaData.gitlabProfile />,
        snippets: <MetaData.snippetsUrl />,
    };

    return (
        <>
            <div className="footer">
                {Object.keys(footerItems).map((key) => (
                    <Link key={key} href={footerItems[key]}>
                        <span className={`footer__item footer__item--${key}`}>
                            <span className="footer__inner">
                                <span className="anchor link-props">{key}</span>
                                <AnchorIcon />
                            </span>
                        </span>
                    </Link>
                ))
                }
            </div>
        </>
    );
}