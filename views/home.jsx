const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Post Anything</h1>
                <a href="/places">
                    <button className="btn-primary">View Posts</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home