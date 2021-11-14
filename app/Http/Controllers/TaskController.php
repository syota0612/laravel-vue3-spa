<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(){
        return Task::all();
    }

    public function show(Task $task){
        return $task;
    }

    public function store(Request $request){
        return Task::create($request->all());
    }

    public function update(Request $request, Task $task){
        return $task->update($request->all());
    }

    public function destroy(Task $task){
        return $task->delete();
    }
}
