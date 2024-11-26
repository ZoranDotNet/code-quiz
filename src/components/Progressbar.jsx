import { useEffect, useState } from "react";
import styles from "./progressbar.module.css";

function Progressbar({ dispatch, answer }) {
	const [time, setTime] = useState(20);

	useEffect(() => {
		if (time <= 0) {
			dispatch({ type: "timeEnd" });
			return;
		}
		if (answer !== null) {
			setTime(20);
			return;
		}
		const timer = setInterval(() => {
			setTime((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [time, dispatch, answer]);

	const progressWidth = (time / 20) * 100;
	return (
		<div className={styles.wrapper}>
			{time > 0 ? (
				<span
					className={`${styles.progress} ${time <= 5 ? styles.end : ""}`}
					style={{ width: `${progressWidth}%` }}></span>
			) : (
				<div className={styles.timeUp}>
					<h2>Sorry your time is up!</h2>
					<button
						onClick={() => dispatch({ type: "finish" })}
						className={styles.btn}>
						Continue
					</button>
				</div>
			)}
		</div>
	);
}

export default Progressbar;
