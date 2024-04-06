import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface IAvatarProps {
	src: string
	width: number
	height: number
	alt: string
	title: string
	className: string
	href: string
	textAction: string
}

export default function IAvatar(props: IAvatarProps) {
	const classes = classNames(styles.iavatar, props.className);
	return <div className={classes}>
		<div className={styles.iavatar_interactive}>
			<Link href={props.href} className="text--link text--no-decoration">
				<strong>{props.textAction}</strong>
			</Link>
		</div>
		<Image
			src={props.src}
			width={props.width}
			height={props.height}
			alt={props.alt}
			title={props.title}
			className="circle"
		/>
	</div>
}