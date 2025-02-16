export const MEMBER_ROLE = {
  OWNER: 'Owner',
  ADMIN: 'Admin',
  OBSERVER: 'Observer',
  MEMBER: 'Member',
};

export const MEMBER_STATUS = {
  CONFIRMED: 'Confirmed', // remove this when we have the new API
  PENDING: 'Pending',
  ONBOARDING: 'Onboarding',
  ACTIVE: 'Active',
};

export const APIKEY_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'stale',
  REVOKED: 'revoked',
  UNUSED: 'unused',
};

export const USER_PERMISSIONS = {
  ORGANIZATIONS_EDIT: 'organizations:edit',
  ORGANIZATIONS_DELETE: 'organizations:delete',
  ORGANIZATIONS_READ: 'organizations:read',
  COLLABORATORS_ADD: 'collaborators:add',
  COLLABORATORS_REMOVE: 'collaborators:remove',
  COLLABORATORS_EDIT: 'collaborators:edit',
  COLLABORATORS_READ: 'collaborators:read',
  PROJECTS_EDIT: 'projects:edit',
  PROJECTS_DELETE: 'projects:delete',
  PROJECTS_READ: 'projects:read',
  APIKEYS_EDIT: 'apikeys:edit',
  APIKEYS_DELETE: 'apikeys:delete',
  APIKEYS_READ: 'apikeys:read',
  TOPICS_CREATE: 'topics:create',
  TOPICS_EDIT: 'topics:edit',
  TOPICS_DESTROY: 'topics:destroy',
  TOPICS_READ: 'topics:read',
  METRICS_READ: 'metrics:read',
};

export const TOPIC_STATE = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  ARCHIVED: 'Archived',
  DELETTING: 'Deleting',
};
