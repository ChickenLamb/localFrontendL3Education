import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Body() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/L3Education/' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.instagram.com/l3.education/' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.youtube.com/channel/UCOR6nC3byiV3m6wpvTKpclA' className='me-4 text-reset'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='https://wa.link/b2tzw6' className='me-4 text-reset'>
            <i className='fab fa-whatsapp'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>L3 EDUCATION
              </h6>
              <p>
              免费高三统考UEC各科资料给备战统考的考生们
              <ul><br/><li>免费高三统考UEC各科资料给备战统考的考生们</li><br/><li>详细考题扼要</li><br/><li>详细分析重点</li><br/><li>定期更新</li></ul>
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>​快速链接</h6>
              <p>
                <a href='#!' className='text-reset'>
                关于我们
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                课程
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                加入我们
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>更多链接</h6>
              <p>
                <a href='#!' className='text-reset'>
                最新资讯
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                最新资讯
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                条款&条规
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> MALAYSIA
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                lifelongeducation333@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 6011-100 808 62
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 6011-100 808 62
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
          L3 EDUCATION
        </a>
      </div>
    </MDBFooter>
  );
}