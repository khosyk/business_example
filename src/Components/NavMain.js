import {Link} from 'react-router-dom';

export default function Navigation (){

    return(
        <>
      <header>
        <div class="inner">
          <Link href="#">
            <h1>
                DCODELAB
            </h1>
          </Link>
          <nav class="menu">
            <ul class="gnb">
              <li>
                <Link href="">
                    ABOUT
                </Link>
              </li>
              <li>
                <Link href="">
                    MEMBERS
                </Link>
              </li>
              
              <li>
                <Link href="">
                    YOUTUBE
                </Link>
              </li>
              
              <li>
                <Link href="">
                    GALLERY
                </Link>
              </li>

              
              <li>
                <Link href="">
                    CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        </>
    );
}