import { createContext,useState } from "react";
///@ts-ignore
import styles from "./assets/demoForContext.module.css";
import TextInfo from "./components/DemoForContext/TextInfo";

export default function DemoForContext(){

    const ThemeContext = createContext<any>('light');
    const AuthContext = createContext<any>(null);

    const [theme, setTheme] = useState('dark');
    const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });

        return(
                <div className={styles.app}>
                    <ThemeContext.Provider value={theme}>
                        <AuthContext.Provider value={currentUser}>
                            <TextInfo />
                        </AuthContext.Provider>
                    </ThemeContext.Provider>
                </div>
        )
}