console.log('Its working');

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Option clicked', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'default.css';
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}


$(document).ready(function() {
    $('.submit').click(function(e) {
        e.preventDefault()

        console.log('clicked btn')

        let email = $('#email').val()
        let subject = $('#subject').val()
        let name = $('#name').val()
        let msg = $('#msg').val()
        let statusElm = $('.status')
        statusElm.empty()

        function isEmail() {

            if(email.length > 5 && email.includes('@') && email.includes('.')) {
                statusElm.append('<div>Email is valid</div>')
                return true
            } else {
                e.preventDefault()
                statusElm.append('<div>Email is not valid</div>')
                return false
            }
        }

        function isSubject() {

            if(subject.length > 2) {
                statusElm.append('<div>Subject is valid</div>')
                return true
            } else {
                e.preventDefault()
                statusElm.append('<div>Subject is not valid</div>')
                return false
            }
        }

        function isMsg() {
            
            if(msg.length >= 10) {
                statusElm.append('<div>Message is valid</div>')
                return true
            } else {
                e.preventDefault()
                statusElm.append('<div>Message is not valid</div>')
                return false
            }
        }

        function isName() {

            if(name.length >= 2) {
                statusElm.append('<div>Name is valid</div>')
                return true
            } else {
                e.preventDefault()
                statusElm.append('<div>Name is not valid</div>')
                return false
            }
        }

        function contactSent() {
            if(!isEmail() || !isMsg() || !isName() || !isSubject()) {
                document.getElementById('alert').innerHTML = '<p style="color: red;">Email not sent!</p>'
                console.log('failed')
            } else {
                document.getElementById('alert').innerHTML = '<p style="color: green;">Email sent!</p>'
                console.log('success')
            }
        }

        document.getElementById('email-submit-btn').addEventListener('click', () => {
            return contactSent()
        })
    })
})