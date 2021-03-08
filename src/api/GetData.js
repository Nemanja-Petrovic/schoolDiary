export const api = {
  classes: `${process.env.REACT_APP_API}/classes`,
  students: `${process.env.REACT_APP_API}/students`,
  teachers: `${process.env.REACT_APP_API}/teachers`,
};

export const editNewMember = (history, membersList, memberId, groupName) =>
  membersList
    ? {
        history,
        member: membersList.find((member) => member._id === memberId),
        id: memberId,
        groupName,
      }
    : undefined;

export async function getData(uri, obj) {
  try {
    const response = await fetch(uri, obj);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const fetchData = async (key, callback) => {
  try {
    const data = await getData(api[key]);
    callback(data);
  } catch (err) {
    console.log(err);
  }
};

export const addMember = (key, memberInfo) => {
  return memberInfo._id
    ? updateMember(key, memberInfo)
    : createMember(key, memberInfo);
};

export const createMember = (key, memberInfo) => {
  return fetch(api[key], {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(memberInfo),
  }).then((res) => res.json());
};

export const updateMember = (key, updatedMember) => {
  return fetch(`${api[key]}/${updatedMember._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedMember),
  }).then((res) => res.json());
};

export const deleteMember = async (key, memberId) => {
  await fetch(`${api[key]}/${memberId}`, {
    method: "DELETE",
  });
};
