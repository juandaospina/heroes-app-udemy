import { AppRouterAuth } from '../../router/AppRouter';
import { AuthProvider } from '../../context/authContext';

export const HeroesApp = () => {
    return(
        <AuthProvider>
            <AppRouterAuth />
        </AuthProvider>
    )
}