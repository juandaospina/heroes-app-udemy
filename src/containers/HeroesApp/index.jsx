import { AppRouterAuth } from "../../router/AppRouter"
import { Layout } from "../Layout"

export const HeroesApp = () => {
    return(
        <>
            <Layout>
                <AppRouterAuth />
            </Layout>
        </>
    )
}