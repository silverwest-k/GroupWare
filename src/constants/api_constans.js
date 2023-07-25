// 로그인관련 API
export const LOGIN_API = "/auth/login"
export const LOGOUT_API = "/auth/logout"

// 계정관련 API
export const CREATE_ID_API = "/auth/admin/signup"
export const DELETE_ID_API ="/auth/admin/members"

// 문서관련 API
export const REPORT_DOCUMENT_LIST_API = "/documents/list"
export const TEMP_DOCUMENT_LIST_API = "/documents/savelist"
export const DOCUMENT_CREATE_API="/documents/create"
export const DOCUMENT_READ_API ="/documents/read"
export const DOCUMENT_UPDATE_API ="/documents/update"
export const DOCUMENT_DELETE_API="/documents/delete"


// 정보조회 API
export const MY_INFO_API = "/member/me"
export const TEAM_INFO_API = "/approval/team"

//  /approval/team/(홍보팀/인사팀/총무팀/법무팀/개발팀/영업팀) : (GET) 팀원 목록
export const TEAM_MEMBER_INFO_API ="/approval/team"
export const POSITION_INFO_API = "/approval/position"
export const MEMBER_LIST_INFO_API ="/auth/admin/members"