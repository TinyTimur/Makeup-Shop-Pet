export default function ProfilePage() {
    return (
        <>
            <section>
                <img src="" alt="" width={200} height={200} />
                <h2>John Doe</h2>
                <p>Email: john.doe@example.com</p>
                <p>Location: New York, USA</p>
                <p>
                    Bio: Passionate about technology, traveling, and
                    photography.
                </p>
            </section>
            <section>
                <h3>Details</h3>
                <ul>
                    <li>Age: 28</li>
                    <li>Occupation: Web Developer</li>
                    <li>Joined: January 2023</li>
                </ul>
            </section>
            <section>
                <h3>Interests</h3>
                <ul>
                    <li>Coding</li>
                    <li>Hiking</li>
                    <li>Gaming</li>
                    <li>Music</li>
                </ul>
            </section>
        </>
    );
}
