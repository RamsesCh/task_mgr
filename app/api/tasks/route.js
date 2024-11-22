import { NextResponse } from 'next/server';
import { dbConection } from '@/config/db.js'
import Task from '@/app/models/Task.js';

export async function GET() {
  try {
    await dbConection();
    const tasks = await Task.find();
    return NextResponse.json({
      data: tasks,
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await dbConection();
    const dataTask = await request.json();
    const task = new Task(dataTask);

    const res = await task.save();

    return NextResponse.json({
      data: res
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 400
    });
  }

}