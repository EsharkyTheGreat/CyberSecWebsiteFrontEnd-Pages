import React from 'react'

const PostCard = ({ title, imgLink, content }) => {
    return (
        <>
            <div class="container ht-tm-container mb-5 mt-3">
                <div className="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <img class="card-img-top" src={`${imgLink}`} alt="Ca" />
                            <div class="card-body">
                                <h4 class="card-title display-4">{title}</h4>
                                <p class="card-text lead mb-3 text-success text-mono">{content}</p>
                                <a href="#!" class="btn btn-primary btn-shadow text-mono">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard
