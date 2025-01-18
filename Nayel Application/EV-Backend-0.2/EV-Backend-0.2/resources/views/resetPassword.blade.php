<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/assets/css/bg-img.css">
    <link rel="stylesheet" href="/assets/css/VerificationSuccessful.css">
    <link rel="stylesheet" href="/assets/css/material-dashboard.css">
    <link rel="stylesheet" href="/assets_lp/css/font-awesome.css">
    <title>AIM-MOTORS</title>
    <link rel="shortcut icon" type="image/icon" href="/assets_lp/images/logo-blue2.webp">
</head>
<body>
    @if($errors->any())
    <ul>
        <div class="alert alert-warning">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    </ul>
    @endif
    <div class="email-success">
        <div class="email-header">
            <div class="logo-container">
                <img src="/assets/img/img1.png" alt="Logo">
            </div>
            <form method="POST" class="form form-control">
                @csrf
                <input type="hidden" name="id" value="{{ $user[0]['id']}}">
                <div class="input-group input-group-outline my-3">
                    {{-- <label class="form-label">New Password</label> --}}
                    <input id="newPassword" name="password" type="password" required value="{{ old('password') }}" name="password" class="form-control" placeholder="New Password">
                    <button onclick="setupPasswordToggle('newPassword', 'toggleNewPassword')" type="button" id="toggleNewPassword" class="btn btn-outline-secondary" style="margin-bottom:0px">
                        <i id="eyeIcon" class="fa fa-eye-slash fa-lg"></i>
                    </button>
                </div>
                <span style="font-size: 10px; color: green; padding: 0.075rem;">- Password should be of atleast 8 characters (including one uppercase & lowercase, one digit, one special character). For example (Hello12*)</span>
                <div class="input-group input-group-outline my-3">
                    {{-- <label class="form-label">Confirm Password</label> --}}
                    <input id="confirmPassword" type="password" required value="{{ old('password_confirmation') }}" name="password_confirmation" class="form-control" placeholder="Confirm Password">
                    <button onclick="setupPasswordToggle('confirmPassword', 'toggleConfirmPassword')" type="button" id="toggleConfirmPassword" class="btn btn-outline-secondary" style="margin-bottom:0px">
                        <i id="eyeIcon" class="fa fa-eye-slash fa-lg"></i>
                    </button>
                </div>

                {{-- <input type="password" name="password" placeholder="New Password" required>
                <br><br>
                <input type="password" name="password_confirmation" placeholder="Confirm Password" required>
                <br><br> --}}
                <div class="text-center">
                    <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">
                      Submit
                    </button>
                  </div>

            </form>
        </div>
    </div>
<script>

function setupPasswordToggle(passwordInputId, toggleButtonId) {
    const toggleButton = document.querySelector(`#${toggleButtonId}`);
    const passwordInput = document.querySelector(`#${passwordInputId}`);
    const eyeIcon = toggleButton.querySelector('.fa');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }

}
</script>
</body>
</html>





