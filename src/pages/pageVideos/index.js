import React from 'react'
import Navbar from '../../components/Navbar';
import backgroundVideo from './video/backgroundVideo.mp4';
import Typewriter from 'typewriter-effect';

import { PageVideosContainer,
         PageVideoBg,
         PageText

} from './pageVideosElements';



const PageVideos = () => {
        return (
            <>
                <Navbar/>
                <PageText><Typewriter 
                        onInit= {( typewriter ) => {
                        typewriter.typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Nulla aliquet enim tortor at. Est velit egestas dui id. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Ipsum consequat nisl vel pretium lectus quam id. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Faucibus interdum posuere lorem ipsum. Vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas sed tempus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Proin libero nunc consequat interdum. Blandit libero volutpat sed cras ornare arcu dui. Eu consequat ac felis donec et odio pellentesque diam volutpat.Libero justo laoreet sit amet cursus sit amet. Imperdiet sed euismod nisi porta lorem. Amet consectetur adipiscing elit ut aliquam. Arcu dictum varius duis at. Pretium viverra suspendisse potenti nullam ac tortor. Quisque sagittis purus sit amet volutpat consequat. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Nisi vitae suscipit tellus mauris a diam maecenas sed. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Accumsan lacus vel facilisis volutpat est velit. Dis parturient montes nascetur ridiculus mus. Sed libero enim sed faucibus. Condimentum lacinia quis vel eros. Duis at tellus at urna condimentum mattis pellentesque id. Aliquam sem fringilla ut morbi tincidunt augue interdum. Mauris rhoncus aenean vel elit scelerisque mauris. Lobortis scelerisque fermentum dui faucibus. Eget lorem dolor sed viverra ipsum nunc. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit").start();
                    }}/>
                </PageText>   
                <PageVideosContainer>
                    <PageVideoBg autoPlay loop muted src={backgroundVideo} type='video/mp4'/>
                </PageVideosContainer>
                
            </>
        )
};

export default PageVideos

