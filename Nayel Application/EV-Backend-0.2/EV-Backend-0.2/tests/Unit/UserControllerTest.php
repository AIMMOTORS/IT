<?php

namespace Tests\Unit;

use Tests\TestCase;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Validator;

class UserControllerTest extends TestCase
{
    /*************************** Testing the login function of User Controller  ************/

    /********  Test Case #01: Valid login Credentials */
    public function testcase1()
    {
        $request = new Request();
        $request->replace([
            'email' => 'ayesha15akhtar3a@gmail.com',
            'password' => 'Hello1234*'
        ]);

        // Simulate the login request
        // $request = new Request($requestData);
        $controller = new UserController();
        $response = $controller->login($request);

        // Assertions for successful login
        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $this->assertArrayHasKey('success', $response->getData(true));
        // $this->assertTrue($response->getData(true)['success']);
        $this->assertArrayHasKey('access_token', $response->getData(true));
        $this->assertArrayHasKey('token_type', $response->getData(true));
        $this->assertArrayHasKey('user', $response->getData(true));

    }

    /********  Test Case #02: Invalid Email */
    public function testcase2()
    {
        $request = new Request();
        $request->replace([
            'email' => 'ayesha15akhtar3@gmail.com',
            'password' => 'Hello1234*'
        ]);

        // Simulate the login request
        // $request = new Request($requestData);
        $controller = new UserController();
        $response = $controller->login($request);

        // Assertions for invalid login credentials
        // $response->assertStatus(Response::HTTP_UNAUTHORIZED);
        $responseData = $response->getData(true);
        $this->assertFalse($responseData['success']);
        $this->assertEquals('Email or Password is invalid', $responseData['msg']);
        $this->assertArrayNotHasKey('access_token', $responseData);
        $this->assertArrayNotHasKey('token_type', $responseData);
        $this->assertArrayNotHasKey('user', $responseData);

    }

    /********  Test Case #03: Invalid Password */
    public function testcase3()
    {
        $request = new Request();
        $request->replace([
            'email' => 'ayesha15akhtar3a@gmail.com',
            'password' => 'Hello123'
        ]);

        // Simulate the login request
        // $request = new Request($requestData);
        $controller = new UserController();
        $response = $controller->login($request);

        // Assertions for invalid login credentials
        // $response->assertStatus(Response::HTTP_UNAUTHORIZED);
        $responseData = $response->getData(true);
        $this->assertFalse($responseData['success']);
        $this->assertEquals('Email or Password is invalid', $responseData['msg']);
        $this->assertArrayNotHasKey('access_token', $responseData);
        $this->assertArrayNotHasKey('token_type', $responseData);
        $this->assertArrayNotHasKey('user', $responseData);

    }

    /********  Test Case #04: Unverified Email */
    public function testcase4()
    {
        $request = new Request();
        $request->replace([
            'email' => 'test1@gmail.com',
            'password' => 'Hello1234*'
        ]);

        $controller = new UserController();

        $response = $controller->login($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals('Email is not verified', $responseData['msg']);

    }



    /********  Test Case #05: Invalid  Email  Format*/
    public function testcase5()
    {
        $request = new Request();
        $request->replace([
            'email' => 'ayesha15akhtar3a',
            'password' => 'Hello1234*'
        ]);

        $controller = new UserController();

        $response = $controller->login($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The email must be a valid email address.'], $responseData['msg']);

    }

    
    /********  Test Case #06: Empty Email*/
    public function testcase6()
    {
        $request = new Request();
        $request->replace([
            'email' => '',
            'password' => 'Hello1234*'
        ]);

        $controller = new UserController();

        $response = $controller->login($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The email field is required.'], $responseData['msg']);

    }


    /********  Test Case #07: Empty password*/
    public function testcase7()
    {
        $request = new Request();
        $request->replace([
            'email' => 'ayesha15akhtar3a@gmail.com',
            'password' => ''
        ]);

        $controller = new UserController();

        $response = $controller->login($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password field is required.'], $responseData['msg']);

    }


    /*************************** Testing the Register function of User Controller  ************/


    // /********  Test Case #08: valid credentials provided */
    // public function testcase8()
    // {
    //     $request = new Request();
    //     $request->replace([
    //         'name' => 'abc',
    //         'email' => 'abcq1@abc.com',
    //         'password' => 'Hello1234*',
    //         'password_confirmation' => 'Hello1234*',
    //         'phone' => '03346983532'
    //     ]);

    //     $controller = new UserController();

    //     $response = $controller->register($request);

    //     $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    //     $responseData = $response->getData(true);
    //     $this->assertArrayHasKey('msg', $responseData);
    //     $this->assertEquals('User created successfully. Please verify your email to activate your account.', $responseData['msg']);
    // }

    /********  Test Case #09: Phone number without hyphen */
    // public function testcase9()
    // {
    //     $request = new Request();
    //     $request->replace([
    //         'name' => 'abc',
    //         'email' => 'abc31@abc.com',
    //         'password' => 'Hello1234*',
    //         'password_confirmation' => 'Hello1234*',
    //         'phone' => '03346983532'
    //     ]);

    //     $controller = new UserController();

    //     $response = $controller->register($request);

    //     $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    //     $responseData = $response->getData(true);
    //     $this->assertArrayHasKey('msg', $responseData);
    //     $this->assertEquals('User created successfully. Please verify your email to activate your account.', $responseData['msg']);
    // }

    // /********  Test Case #10: Phone number with hyphen */
    // public function testcase10()
    // {
    //     $request = new Request();
    //     $request->replace([
    //         'name' => 'abc',
    //         'email' => 'abc131@abc.com',
    //         'password' => 'Hello1234*',
    //         'password_confirmation' => 'Hello1234*',
    //         'phone' => '0334-6983532'
    //     ]);

    //     $controller = new UserController();

    //     $response = $controller->register($request);

    //     $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    //     $responseData = $response->getData(true);
    //     $this->assertArrayHasKey('msg', $responseData);
    //     $this->assertEquals('User created successfully. Please verify your email to activate your account.', $responseData['msg']);
    // }


    /********  Test Case #10: Invalid email format */
    public function testcase10()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131',
            'password' => 'Hello1234*',
            'password_confirmation' => 'Hello1234*',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The email must be a valid email address.'], $responseData['msg']);
    }


    /********  Test Case #11: Missing uppercase letter in password */
    public function testcase11()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'ello1234*',
            'password_confirmation' => 'ello1234*',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password must contain at least one uppercase and one lowercase letter.'], $responseData['msg']);
    }

    /********  Test Case #12: Missing lowercase letter in password */
    public function testcase12()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'HELLO1234*',
            'password_confirmation' => 'HELLO1234*',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password must contain at least one uppercase and one lowercase letter.'], $responseData['msg']);
    }


    /********  Test Case #13: Missing number in password */
    public function testcase13()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'HELdyeu*',
            'password_confirmation' => 'HELdyeu*',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password must contain at least one number.'], $responseData['msg']);
    }


     /********  Test Case #14: Missing special characters in password */
     public function testcase14()
     {
         $request = new Request();
         $request->replace([
             'name' => 'abc',
             'email' => 'abc131@gmail.com',
             'password' => 'HELdyeu12',
             'password_confirmation' => 'HELdyeu12',
             'phone' => '0334-6983532'
         ]);
 
         $controller = new UserController();
 
         $response = $controller->register($request);
 
         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('msg', $responseData);
         $this->assertEquals(['The password must contain at least one symbol.'], $responseData['msg']);
    }


    /********  Test Case #15:  Missing password confirmation  */
    public function testcase15()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'HELdyeu12*',
            'password_confirmation' => '',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password confirmation field is required.'], $responseData['msg']);
    }


    /********  Test Case #16:   password confirmation does not match  */
    public function testcase16()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'HELdyeu12*',
            'password_confirmation' => 'HELdyeu1',
            'phone' => '0334-6983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(['The password confirmation and password must match.'], $responseData['msg']);
    }


    /********  Test Case #17:  mobile number not of 11 digits   */
    public function testcase17()
    {
        $request = new Request();
        $request->replace([
            'name' => 'abc',
            'email' => 'abc131@gmail.com',
            'password' => 'HELdyeu12*',
            'password_confirmation' => 'HELdyeu12*',
            'phone' => '036983532'
        ]);

        $controller = new UserController();

        $response = $controller->register($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('msg', $responseData);
        $this->assertEquals(["The phone must be at least 11 characters."], $responseData['msg']);
    }
}