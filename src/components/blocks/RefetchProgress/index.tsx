import styles from "./styles"
import { CircularProgress } from '@mui/material'
import { useEffect, useState } from "react";

export const RefetchProgrss = () => {
    const [progress, setProgress] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
          }, 1000);
      
          return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <styles.container>
            <CircularProgress variant="determinate" value={progress} />
        </styles.container>
    )
}