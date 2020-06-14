import React from 'react';
import ResourceList from '/components/ResourceList';
import Container from 'react-bootstrap/container'

export class ResourceSection {
    render() {
        return (
            <div>
                <Container>
                    <h1 style={{textAlign: "center", marginBottom: "10px"}}>Resources</h1>
                    <ResourceList question="Is this platform free to use?"
                                  answer="Yes! We don't charge for anything. Big & Mini is a 501(c)(3) nonprofit and we’re really just trying to help make the world a little bit better, one match at a time. We are run by volunteers and rely on donations from individuals, corporations, and ourselves to sustain our platform. "/>
                    <ResourceList
                        question="What if I have a complaint about your Big or Mini?"
                        answer="We’re sorry to hear that! If you have a complaint, please contact us immediately at contact@bigandmini.org"
                    />
                    <ResourceList
                        question="What video calling software is used?"
                        answer="Our video calling software of choice is Jitsi, a free, open-source multiplatform communication platform. As security is of utmost importance to us, we tried to find the most secure software available that meets our needs. Because Jitsi peer-to-peer (P2P) is encrypted using DTLS-SRTP all the way from the sender to the receiver, even if they traverse network components like TURN servers, your information, video, and call will remain protected."
                    />
                    <ResourceList
                        question="What if I have an emergency come up on the day of the match and can’t make it?"
                        answer="Send us an email at contact@bigandmini.org and we’ll try to get in touch with them through email and phone. As soon as we hear back, we’ll send you an update."
                    />
                    <ResourceList
                        question="What safety measures do you have in place to protect my personal information?"
                        answer="All the information you enter into the sign up form is stored in an encrypted database that only Big & Mini has access to. Additionally, the only information disclosed to your Big/Mini is your first or last name, interests, and time availability. You can rest assured that your information is stored safely and securely. For more information, please refer to our privacy policy."
                    />
                    <ResourceList
                        question="I’ve been waiting on the call for a few minutes now and my Big/Mini has not shown up. What should I do?"
                        answer="Use our integrated chat system to send your Big/Mini a message. If there's still no response, send us an email at contact@bigandmini.org and we’ll try to get in touch with them through email and phone. As soon as we hear back, we’ll send you an update."
                    />
                </Container>
            </div>
        );
    }
}

export default ResourceSection;
