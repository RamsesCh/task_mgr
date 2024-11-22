import { NextResponse } from "next/server";
import { dbConection } from "@/config/db.js";
import Task from "@/app/models/Task.js";

export async function PUT(request, { params }) {
    try {
        await dbConection();
        const data = await request.json();
        const newData = await Task.findOneAndUpdate({ _id: params.idTask }, data, {
            new: true
        });

        return NextResponse.json({
            data: newData
        });
    } catch (err) {
        return NextResponse.json(err.message, {
            status: 400,
        });
    }

}

export async function DELETE(request, { params }) {
    try {
        await dbConection();
        const task = await Task.findOneAndDelete({ _id: params.idTask });
        return NextResponse.json({
            data: task,
        });
    } catch (err) {
        return NextResponse.json(err.message, {
            status: 400,
        });
    }

}
