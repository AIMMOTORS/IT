<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Bike;
// use Illuminate\Support\Facades\DB;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Mail\LoginCredentialsMail;

class AdminController extends Controller
{
    public function __construct()
    {

        //Setting the guard of login person
        \Config::set('auth.defaults.guard','admin-api');

    }

    public function homeView()
    {
        return view('home');
    }

    public function adminView()
    {
        return view('admin');
    }

    public function adminSignInView()
    {
        return view('signin');
    }

    public function policyView()
    {
        return view('policy');
    }

    public function termsView()
    {
        return view('terms');
    }
    /**
     * Register an Admin
     */

    public function register(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['name', 'email', 'password', 'password_confirmation']), [
            'name'=>'required|string|min:2|max:100', //name shoud be minimum of two characters
            'email'=>'required|string|email|max:100|unique:admins', //email should be unique for each admin
            'password'=> ['required','min:8',Password::min(8)->letters()->numbers()->mixedCase()->symbols()],
            'password_confirmation' => 'required|same:password'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());


        }
        $user = Admin::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)





        ]);


        return response()->json([
            'msg'=>'Admin Successfully Registered',
            'user'=>$user
        ], 201);
    }




    public function login(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        $validator = Validator::make($request->only(['email', 'password']), [
            'email' => 'required|string|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());

        }

        //checking whether email and password matches or not with the database
        //token is generated when the user and password matches with the database
        if(! $token = auth()->setTTL(175316)->attempt($validator->validated())){
            return response()->json(["success"=>false,"msg"=>"Email or Password is invalid"]);

        }


        // Set the cookie
        // setcookie('jwt', $token, 175316, '/', null, false, true, true);
        // Cookie::make('jwt', $token, 175316, '/', null, false, true)->withSameSite('Strict');

        return $this->createNewToken($token);
    }



     /**
      * get the token array structure.
      *
      * @param string $token
      * @return \Illuminate\Http\JsonResponse
      */
    protected function createNewToken($token){
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL(), //shows the time in minutes
            'user' => auth()->user(),
        ]);
    }




    /**
      * Logout api
      */

    public function logout()
    {


        auth()->logout();
        return response()->json(['success'=>true,'msg'=>'User logged out!']);


    }



    /** Fetch admins */
    public function fetchAdminData()
    {

            // $adminData = DB::table('admins')->select('id', 'name', 'email')->paginate(5);
            $adminData = Admin::select('admin_id', 'name', 'email')->paginate(5);
            // return response()->json(DB::select("select  name, email from admins"));
            return view('admin',['adminData'=>$adminData]);

    }


    /**
     * Update Status  of user
     */

    public function updateStatus(Request $request){
        $status = User::find($request->user_id);
        $status->status = $request->status;
        $result = $status->save();
        if($result){
            return response()->json(['result'=>'The Status of the user has been successfully updated']);
        }else{
            return response()->json(['result'=>'Unable to update the status. Please try again!']);
        }
    }


    /** Deleting the admin details  */
    public function destroyAdmin(Admin $admin)
    {
        try{
            // Delete the user
            $admin->delete();

            // Return a success message
            return response()->json(['msg' => 'Admin data successfully deleted']);
        }
        catch (QueryException $e) {
            // Handle database connection failure or unknown database error
            return response()->json(['msg' => 'Something went wrong. Please try again'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }



    /** Deleting the user details  */
    public function destroyUser(User $user)
    {
        try{
            // Delete the user
            $user->delete();

            // Return a success message
            return response()->json(['msg' => 'User data successfully deleted']);
        }
        catch (QueryException $e) {
            // Handle database connection failure or unknown database error
            return response()->json(['msg' => 'Something went wrong. Please try again'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }


}
