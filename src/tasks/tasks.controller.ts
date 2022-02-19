import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilter } from './dto/get-tasks-fitler.dto';
import { UpdateTask } from './dto/update-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filters: GetTasksFilter): Promise<Task[]> {
    return this.tasksService.getTasks(filters);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Post()
  createTask(@Body() createTask: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTask);
  }

  @Put('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body() updateTask: UpdateTask,
  ): Promise<Task> {
    const { status } = updateTask;
    return this.tasksService.updateTask(id, status);
  }

  // 	  @Post()
  //   createTask(@Body() body) {
  //     console.log({ body });
  //   }
  // }
}
