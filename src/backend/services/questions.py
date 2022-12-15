import json


from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select ,update
from .database import *
Connection = sessionmaker(bind=engine,expire_on_commit=False,class_=AsyncSession)
con = scoped_session(Connection)
def __verify_question_format():
    return True


import models.question
import models.task
import models.user

import schemas.questions
import schemas.users

import services.questions
import services.users
from services.tasks import task_service




class Questions:
    async def get_question(self, task: services.tasks.Task | int, question_id: int) -> schemas.questions.Question | None:
        if isinstance(task, int):
            task = await task_service.get_task(task)
        for question in task.questions:
            if question.question_id == question_id:
                return question
        return None
    async def create_answer(self, 
        current_user: schemas.users.User,
        answer: schemas.answers.AnswerRequest,
    ) -> str | None:

        # TODO
        if answer.question_type == 'multi_choice':
            new_answer = schemas.answers.MultiChoiceAnswer()
        elif  answer.question_type == 'single_choice':
            new_answer = schemas.answers.SingleChoiceAnswer()
        elif  answer.question_type == 'ranking':
            new_answer = schemas.answers.RankingAnswer()
        elif  answer.question_type == 'open':
            new_answer = schemas.answers.OpenAnswer()
        
        new_answer.date_answered = answer.date_answered
        new_answer.question_id = self.question_id
        with con.begin():
            res= await con.execute(select(models.user.Respondent).where(models.user.Respondent.username == answer.respondent))
            target = res.scalar().first
        new_answer.respondent_id = target.id
        new_answer.question_type = answer.question_type
        new_answer.respondent_name = answer.respondent
        return True
        
    async def create_question_from_file(
        self,
        task_id:int,
        file_path:str
    ):
        if not __verify_question_format():
            return False
        file = json.load(open(file_path,'r'))
        async with con.begin():
            result = await con.execute(select(models.task.Task).where(models.task.Task.id==task_id))
            target = result.scalars().first()
            type = target.type
        for question in file:
            await self.create_question(type,file[question]['prompt'],file_path,file[question]['options'],task_id)
        return {
            'status':'ok'
        }

    async def get_question(self, task_id: int, question_id: int) -> schemas.questions.Question | None:

        async with con.begin():
            result = await con.execute(select(models.question.Question).where(models.question.Question.id==id))
            target = result.scalars().first()
            if target is None:
                return{
                    "status":"not found",
                },400
        return {
            "status":"ok",
            "type" :target.type,
            "prompt":target.prompt,
            "resource":target.resource,
            "options":target.options,
            "task_id":target.task_id
        },200



    async def edit_question(id,type,prompt,resource,options,task_id):
        async with con.begin():
            result = await con.execute(select(models.question.Question).where(models.question.Question.id==id))
            target = result.scalars().first()
            if target is None:
                return{
                    "status":"not found",
                },400
            target.type= type
            target.prompt =prompt
            target.resource = resource
            target.options = options
            target.task_id = task_id
            await con.flush()
            con.expunge(target)
        return {
            "status":"ok",
            "type" :target.type,
            "prompt":target.prompt,
            "resource":target.resource,
            "options":target.options,
            "task_id":target.task_id
        },200
        

    async def delete_question(task_id, question_id):
        async with con.begin():
            result = await con.execute(select(models.question.Question).where(models.question.Question.id==id))
            target = result.scalars().first()
            if target == None:
                return {
                    "status": 'not found'
                },400
            await con.delete(target)
            # for item in result:
            #     await con.delete(item)
        await con.commit()
        return {
            'status':'ok'
        },200


question_service = Questions()