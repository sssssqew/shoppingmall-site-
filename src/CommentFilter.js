import React, { Component } from 'react'


// this.props.comment : "너는 진짜 못말리는 바보 똥개다"
// 초기 comment  상태: [""너는", "진짜", "못말리는", "바보", "똥개다"]
// 걸러진 comment 상태: ["너는", "진짜", "못말리는"]

class CommentFilter extends Component{
    state = {
        comment: this.props.comment.split(' '),
        insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을']
    }
    filterComment = () => {
        const { insults } = this.state // 댓글을 음절 단위로 끊기

        for(let insult of insults){ // 욕설 필터링
            this.setState({comment: this.state.comment.filter(word => !word.includes(insult)) })
        }
    }
    componentDidMount(){
        this.filterComment()
    }
    render(){
        const { comment } = this.state
        console.log(comment)
        return (
            <>
                <h2>{comment.join(' ')}</h2>
            </>
        )
    }
}
export default CommentFilter