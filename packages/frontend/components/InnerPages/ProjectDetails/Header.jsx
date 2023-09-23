import React, {useEffect} from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import parallaxie from '@/common/parallaxie'
import useIsMobile from "@/hooks/useIsMobile";

function Header({project}) {
    const { isMobile } = useIsMobile();

    useEffect(() => {
        loadBackgroudImages();
        parallaxie('.top-bg-img.parallaxie', 0.1, undefined, isMobile);
    }, [project]);

    return (
        <header className="proj-header1">
            <div className="container mb-50">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="caption md-mb50">
                            <h1>{project.title}</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end align-items-end">
                        <div className="info row">
                            <div className="col-sm-6">
                                <div className="item mb-30">
                                    <h6 className="fz-16">Category</h6>
                                    <span className="sub-title ls1">{project.type}</span>
                                </div>
                            </div>
                            {project.customer && (
                                <div className="col-sm-6">
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Customer</h6>
                                        <span className="sub-title ls1">{project.customer}</span>
                                    </div>
                                </div>
                            )}
                            {project.date && (
                                <div className="col-sm-6">
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Date</h6>
                                        <span className="sub-title ls1">{project.date}</span>
                                    </div>
                                </div>
                            )}
                            {project.location && (
                                <div className="col-sm-6">
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Location</h6>
                                        <span className="sub-title ls1">{project.location}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="top-bg-img bg-img parallaxie"
                data-background={project.image}
            />
        </header>
    )
}

export default Header
