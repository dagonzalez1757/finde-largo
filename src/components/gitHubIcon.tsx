"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import githubDark from "public/github-mark-white.png";
import githubLight from "public/github-mark.png";

type Props = {
    height: number,
}

const GitHubIcon = ({ height }: Props): React.ReactNode => {
    const { resolvedTheme } = useTheme();

    return (
        <Image
            src={resolvedTheme === "dark" ? githubDark : githubLight}
            alt="GitHub icon"
            height={height}
        />
    )
}

export default GitHubIcon;