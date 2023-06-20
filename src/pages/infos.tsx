import { BeehiveSVG } from '@/components/BeehiveSVG'
import MainLayout from '@/components/layout/MainLayout'
import { StyledInfos } from '@/styles/pages/StyledInfos'
import { useCustomThemeContext, ScreenFormats } from '@/utils/CustomTheme'
import { Vector3 } from 'three'

const Infos = () => {
    const { theme } = useCustomThemeContext()
    let bees: Vector3[] = []
    switch (theme) {
        case ScreenFormats.DESKTOP:
            bees = [
                new Vector3(-5, -5.5, 0),
                new Vector3(-0.5, -3.25, 8),
                new Vector3(1, -2.5, -4),
                new Vector3(1, -3.5, 10),
                new Vector3(5.5, -4.5, 0),
                new Vector3(12, -8, -15),
                new Vector3(8, -3, 1),
                new Vector3(14, 0, -20)
            ]
            break
        case ScreenFormats.TABLET:
            bees = [new Vector3(-1.5, -3, 8), new Vector3(0.5, -4, -4), new Vector3(1, -3.5, 10)]
            break
        default:
            bees = []
    }
    return (
        <MainLayout bees={bees}>
            <StyledInfos>
                <h1>Website Infos</h1>
                <section>
                    <h2>Development</h2>
                    <ul>
                        <li>By Maïa Da Silva</li>
                        <li>Next.js, Three.js, GitHub, Vercel</li>
                        <li>
                            <a href="https://github.com/MaiaDS/portfolio" target="_blank">
                                GitHub repository
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Design</h2>
                    <ul>
                        <li>
                            <strong>UX/UI Design:</strong> By Maïa Da Silva with Figma
                        </li>
                        <li>
                            <strong>Icons:</strong>
                            <ul>
                                <li>The Noun Project</li>
                                <li>Visual Studio Code Icons (Community)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Bees :</strong> Modeled by Maïa Da Silva with Blender
                        </li>
                        <li>
                            <strong>Combee</strong> (landing page):
                            <ul>
                                <li>
                                    <strong>Design:</strong> Pokemon Inc.
                                </li>
                                <li>
                                    <strong>Blender Model:</strong> Maïa Da Silva
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {theme === ScreenFormats.DESKTOP && <BeehiveSVG />}
                <BeehiveSVG />
            </StyledInfos>
        </MainLayout>
    )
}

export default Infos
