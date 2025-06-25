from fastapi import APIRouter

router = APIRouter(prefix = "/api")

@router.get('/thread-info')
async def newGetter(thread_name: str):
    return {"is_ok": True, 
            "thread_name": thread_name}
