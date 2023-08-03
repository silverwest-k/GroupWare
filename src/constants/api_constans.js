// 로그인관련 API
export const LOGIN_API = "/auth/login"  // 로그인 (o)
export const LOGOUT_API = "/auth/logout" // 로그아웃 (o)

// 계정관련 API
export const CREATE_ID_API = "/auth/admin/signup"   // 계정등록 (o)
export const MY_INFO_CHANGE_API = "/member/profile"  // 본인 비밀번호 + 사진 변경
export const ACCOUNT_INFO_API ="/auth/admin/members"
                                                    //(+id) GET : 직원상세정보 (o)
                                                    // (+id) DELETE : 계정삭제 (o)
                                                    // (+id/password) POST {newPassword ""} : 관리자 -> 임직원 비밀번호 변경

// 문서관련 API
export const REPORT_DOCUMENT_LIST_API = "/documents/mylist" // 상신문서함 (o)
export const TEMP_DOCUMENT_LIST_API = "/documents/savelist" // 임시저장함 (o)
export const ALL_DOCUMENT_LIST_API = "/documents/list"      // 모든문서 - 관리자 only
export const DOCUMENT_CREATE_API="/documents/create"    // 문서작성 (o)
export const DOCUMENT_READ_API ="/documents"   // (+id) 문서 상세보기 (o)
export const DOCUMENT_UPDATE_API ="/documents/update"   // 문서수정
export const DOCUMENT_DELETE_API="/documents/delete"    // 문서 삭제 (o)

// 문서양식 API
export const CATEGORY_CREATE_API ="/templates/create" // 양식 생성 (o)
export const CATEGORY_DELETE_API = "/templates/delete"  // (+id) 양식 삭제 (o)
export const CATEGORY_LIST_API = "/templates/list"  // 양식 리스트 조회 (o)
export  const SHOW_CATEGORY_API="/templates/read" // (+id) 양식조회 (o)
export const UPDATE_CATEGORY_API ="/templates/update" // (+id) 양식수정 (o)

// 결재관련 API
export const APPROVAL_SIGN_API ="/approval/approve" // 결재승인, 반려
export const APPROVAL_BOOKMARK_CREATE_API= "/line/create" // 결재라인 즐겨찾기 추가 (o)
export const APPROVAL_BOOKMARK_DELETE_API="/line/delete" // (+id) 결재라인 즐겨찾기 삭제 (o)
export const APPROVAL_BOOKMARK_LIST_API="/line/list"  // 결재라인 즐겨찾기 리스트 (o)
export const APPROVAL_BOOKMARK_INFO_API="/line" //(+id) 즐겨찾기 결재라인 상세

// 정보조회 API
export const MY_INFO_API = "/member/me" //내정보 (o)
export const TEAM_INFO_API = "/approval/team" //팀 리스트 (o)
export const TEAM_MEMBER_INFO_API ="/approval/team" //팀별 팀원리스트 (o)
export const POSITION_INFO_API = "/approval/position" // 직급 리스트 (o)
export const MEMBER_LIST_INFO_API ="/auth/admin/members" // 전직원 리스트 (o)
