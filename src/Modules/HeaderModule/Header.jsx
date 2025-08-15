import styles from './_HeaderModule.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <section className={styles.header}>
                <div className={styles.header__item}>
                    <h3>Logo</h3>
                    <h3>Catalog</h3>
                </div>
                <Link to={'/'} className={styles.header__name}>
                    <h1>ShopName</h1>
                </Link>
                <div className={styles.header__item}>
                    <a
                        href="https://www.svgrepo.com/vectors/cart/"
                        className={styles.header__icon}
                    >
                        <span className={styles.header__icon}>
                            <svg
                                width="50px"
                                height="40px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </a>

                    <a href="" className={styles.header__icon}>
                        <span className={styles.header__icon}>
                            <svg
                                width="40px"
                                height="35px"
                                viewBox="0 0 20 20"
                                version="1.1"
                            >
                                <title>profile_round [#1342]</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        id="Dribbble-Light-Preview"
                                        transform="translate(-140.000000, -2159.000000)"
                                        fill="#000000"
                                    >
                                        <g
                                            id="icons"
                                            transform="translate(56.000000, 160.000000)"
                                        >
                                            <path
                                                d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                                                id="profile_round-[#1342]"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </section>
        </>
    );
}
