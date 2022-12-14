from pydantic import BaseModel
from .answers import Answer


question_types = [
    'single_choice',
    'multi_choice',
    'ranking',
    'bounding_box',
    'open',
]


class Question(BaseModel):
    question_id: int
    question_type: str
    prompt: str
    resource: str | None
    task_id: int
    answers: list[Answer]

class ClosedQuestion(Question):
    options: list[str]

class SingleChoiceQuestion(ClosedQuestion):
    question_type='single_choice'
class MultiChoiceQuestion(ClosedQuestion):
    question_type='multi_choice'
class RankingQuestion(ClosedQuestion):
    question_type='ranking'



class OpenQuestion(Question):
    question_type='open'