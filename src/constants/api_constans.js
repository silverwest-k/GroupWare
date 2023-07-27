// 로그인관련 API
export const LOGIN_API = "/auth/login"  // 로그인
export const LOGOUT_API = "/auth/logout" // 로그아웃

// 계정관련 API
export const CREATE_ID_API = "/auth/admin/signup"   // 계정등록
export const MEMBER_INFO_API ="/auth/admin/members" //(+id) GET 직원상세정보
export const DELETE_ID_API ="/auth/admin/members" // (+사번) DELETE 계정삭제

// 문서관련 API
export const REPORT_DOCUMENT_LIST_API = "/documents/mylist" // 상신문서함
export const TEMP_DOCUMENT_LIST_API = "/documents/savelist" // 임시저장함
export const ALL_DOCUMENT_LIST_API = "/documents/list"      // 모든문서

export const DOCUMENT_CREATE_API="/documents/create"    // 문서작성
export const DOCUMENT_READ_API ="/documents/read"       // 문서 상세보기
export const DOCUMENT_UPDATE_API ="/documents/update"   // 문서수정
export const DOCUMENT_DELETE_API="/documents/delete"    // 문서 삭제


// 정보조회 API
export const MY_INFO_API = "/member/me" //내정보
export const TEAM_INFO_API = "/approval/team" //팀 리스트
export const TEAM_MEMBER_INFO_API ="/approval/team" //팀별 팀원리스트
export const POSITION_INFO_API = "/approval/position" // 직급 리스트
export const MEMBER_LIST_INFO_API ="/auth/admin/members" // 전직원 리스트