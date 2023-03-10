import React,{ Fragment } from 'react';
import { Button } from '@mui/material';
import "./styles/MyCourse.css";

function MyCourse() {
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
                          <h4 name="bookName">Test5</h4>
                          <div className="mark">
                            <span>Network Info..</span>
                          </div>
                          <div className="book-data">
                            <h5>
                              Subject Name:&nbsp;&nbsp;NIS
                            </h5>
                            <h5>
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