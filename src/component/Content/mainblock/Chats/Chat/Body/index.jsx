import Header from './Header';
import Messages from './Messages';
import Footer from './Footer';

export default (props) => {
    return (
        <div className="chat-body">

            <Header/>

            <Messages/>

            <Footer/>

        </div>
    )
}