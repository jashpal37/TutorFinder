import React,{ Fragment, useEffect } from 'react';
import { Button } from '@mui/material';
import "./styles/MyCourse.css";
import { useLocation } from 'react-router-dom';

function MyCourse() {

  const location = useLocation();
  let email = location.state.email;
  console.log(email);

  useEffect(() => {
    
  },[])
  return (
    <>
      <section className="book">
        <div className="row">
          {/* {React.Children.toArray(
            bookList.map((detail, i) => {
              return ( */}
                <Fragment>
                  <div className="column">
                    <div className="single-book">
                      <div className="card">
                        <div className="book-thumb">
                          {/* {verification(detail.isVerify)} */}
                          {/* <img src={image} alt="LOGO" /> */}
                        </div>

                        <div className="book-content">
                          <h4 name="tutorName">Test5</h4>
                          <div className="mark">
                            <span name="subjectDecription">Network Info..</span>
                          </div>
                          <div className="book-data">
                            <h5 name="subjectName">
                              Subject Name:&nbsp;&nbsp;NIS
                            </h5>
                            <h5 name="subjectCode">
                              Subject Code:&nbsp;&nbsp;CS107
                            </h5>
                          </div>
                          <div className="download-book">
                            {/* <Button
                              className="book-btn-download"
                            //   href={detail.bookDownloadLink}
                              target={"_blank"}
                            >
                              Download
                            </Button> */}
                            <Button
                              className="book-btn-update"
                            //   component={Link}
                              to="/Update"
                            //   onClick={() => callback(detail)}
                            >
                              Update
                            </Button>
                            <Button
                              className="book-btn-delete"
                            //   component={Link}
                              to="/Delete"
                            //   onClick={() => callback(detail)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              {/* );
            })
          )} */}
        </div>
      </section>
    </>
  );
}

export default MyCourse;