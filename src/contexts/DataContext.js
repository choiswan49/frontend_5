import React, {createContext, useState, useEffect} from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const datas = [
    {
      id : 1, 
      title: `스텔라루멘(XLM) 서비스 안정화를 위한 입출금 일시 중단 안내`,
      body : `스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단 안내
  
      안녕하세요, 코인원입니다.
      
      스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화를 위한 입출금 일시 중단을 다음과 같이 안내드립니다.
     
      `,
      datetime : `2023-07-27`
    },
    {
      id : 2, 
      title: `안녕하세요, 코인원입니다`,
      body : `
      - 중단 시점: 2023년 7월 27일(목), 14:05 (KST) ~ 2023년 7월 27일(목), 17:27 (KST)
      
      - 중단 사유: 스텔라루멘(XLM), 아쿠아(AQUA) 서비스 안정화
      
      - 중단 영향: 기간 내 스텔라루멘(XLM) 입출금, 아쿠아(AQUA) 출금 중단
      `,
      datetime : `2023-07-25`
    },
    {
      id : 3, 
      title: `아쿠아(AQUA)`,
      body : `
      유의 사항
      
      ⁃ 입출금 재개 시점은 네트워크 안정성 확인 후 본 공지 업데이트 내용을 통해 안내 드리겠습니다.
      
      ⁃ 입출금 중단과 무관하게 스텔라루멘(XLM), 아쿠아(AQUA) 거래는 정상 이용 가능합니다.
      
      ⁃ 입출금 중단 기간동안 입금되는 스텔라루멘(XLM), 아쿠아(AQUA)의 경우 반영이 되지 않을 수 있으니 주의하시기 바랍니다.
      
      
      
      이용에 불편을 드린 점 양해 부탁드립니다.
      
      
      
      감사합니다.
      `,
      datetime : `2023-07-20`
    },
  ]
  
export const DataContext = createContext({})

export const DataProvider = ({children})=>{
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setPostsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [searchPost, setSearchPost] = useState([]);

    const [updatePost, setUpdatePost] = useState(true);

    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()
        const id = posts.length ? posts.length + 1 : 1;
        // const id = new Date.now();
        const datetime = format(new Date(), 'yyyy-MM-dd');

        const newPost = {
            id, title : postTitle, body : postBody , datetime
        }

        const newPosts = [newPost, ...posts]
        setPosts(newPosts);
        // setSearchPost(posts);
        console.log(newPosts.length)
        setPostTitle('')
        setPostBody('')
        navigate('/posts')

    }
    const onDeleteHandle = (id)=>{
        const filter =posts.filter(data=>Number(data.id) !== Number(id))
        setSearchPost(filter)
        setPosts(filter)
        navigate('/posts')
    }

    // 화면 갱신 역할로 분리
    useEffect(()=>{
        const sortPosts = datas.sort((next,prev)=>prev.id-next.id) // 역순 sort
        setPosts(sortPosts)
    }, [])
    
    useEffect(()=>{
        // axios
        const filter = posts.filter(data=>data.title.includes(search))
        setPostsLoading(false)
        setSearchPost(filter)
    },[posts, search])

    

    return(
        <DataContext.Provider value={{
                posts, setPosts, search, setSearch,
                isPostsLoading, setPostsLoading,
                searchPost, setSearchPost,
                onDeleteHandle,
                onSubmit,
                postTitle, setPostTitle, postBody, setPostBody,
                updatePost, setUpdatePost
            }}>
            {children}
        </DataContext.Provider>
    )
}