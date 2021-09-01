import React from 'react'

const Jumbotron = () => {
    return (
        <>
            <div id="ht-tm-jumbotron">
                <div className="jumbotron bg-transparent mb-0 radius-0">
                    <div className="container">
                        <div className="ht-tm-header">
                            <div className="row">
                                <div className="col-xl-6">
                                    <h1 className="display-2">IIT(BHU)CyberSe<span className="vim-caret">c</span></h1>
                                    <div className="lead mb-3 text-mono text-success">A Bootstrap theme for 1337 hackers.</div>

                                    <p className="mt-5 text-grey text-spacey">
                                        Neon Glow is a free and open source Bootstrap theme.
                                        It was built on top of the Bootstrap 4.
                                        Only the leetest of hackers will be able to wield its power.
                                        Scroll down to explore the components and dive into the source.
                                    </p>

                                    <div className="text-mono">
                                        <a href="/bootstrap-themes/demo/files/hackerthemes-neon-glow.zip" className="btn btn-primary btn-shadow px-3 my-2 ml-0 text-left js-ht-download-link" data-type="theme" data-id="95">Download</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Jumbotron