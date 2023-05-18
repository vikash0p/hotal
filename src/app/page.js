
import Image from 'next/image'
import styles from './page.module.css'

import { BsCheckAll } from 'react-icons/bs';


export default function Home() {
  return (
    <section  id='about'>
      <main className='container-fluid '>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <Image src='/images/about.jpg' width={600} height={500} className='img-fluid object-fit-fill ' />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <h2>Eum ipsam laborum deleniti <span className='fw-bold'>velit pariatur architecto aut nihil</span></h2>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderitz</p>
            <p className='fst-italic text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className='list_unstyled '>
              <span><li> <BsCheckAll className='text-success' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li></span>
              <span><li> <BsCheckAll className='text-success' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li></span>
              <span><li> <BsCheckAll className='text-success' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li></span>
              
              
            </ul>
            <p className='text-secondary '>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </main>
      <div className='container-fluid' >
                <div className="row">
                    <div className="w-50 m-auto text-center mix_width">
                        <h2>Why choose  <span className='text-warning'>Our Restaurant</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                        <div class="card shadow bg-warning bg-gradient border-0">
                            <div class="card-body">
                                <h2 class="card-title">01</h2> <br/>
                                <h4 class="card-subtitle mb-2 text-body-secondary">Lorem Ipsum</h4> <br/> 
                                <p class="card-text">Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                    <div class="card shadow bg-warning bg-gradient border-0">
                            <div class="card-body ">
                                <h2 class="card-title">02</h2><br/>
                                <h4 class="card-subtitle mb-2 text-body-secondary">Repellat Nihil</h4><br/>
                                <p class="card-text">Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                    <div class="card shadow bg-warning bg-gradient border-0">
                            <div class="card-body ">
                                <h2 class="card-title">03</h2><br/>
                                <h4 class="card-subtitle mb-2 text-body-secondary">Ad ad velit qui</h4><br/>
                                <p class="card-text">Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis debitis quo vel nam quis</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

  )
}

