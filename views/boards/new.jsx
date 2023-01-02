const React = require('react')
const Def = require('../default')

function new_post(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-message'>
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>New Post</h1>
                {message}
                <form method='POST' action='/boards'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='name'>Title</label>
                            <input className='form-control' id='name' name='name' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <label htmlFor='pic'>Image</label>
                            <input className='form-control' type='url' id='pic' name='pic' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8 col-lg-6'></div>
                        <label htmlFor='text'>Type Here</label>
                        <input className='form-control' id='text' name='text' required />
                    </div>
                </form>
                <input className='btn btn-primary' type='submit' value='Submit' />
            </main>
        </Def>
    )
}

module.exports = new_post