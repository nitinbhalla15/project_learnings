export default function UserList({ user }) {
    return <div className="m-2 mx-10 p-4 flex justify-between bg-black rounded-2xl">
        <div className="flex w-1/4 gap-4">
            <div className="bg-white text-black rounded-full font-bold text-2xl p-3">
                {user.initial!=undefined && user.initial.substring(0,1)}
            </div>
            <div className="text-white p-3 text-2xl rounded-xl font-bold">
                {user.userName}
            </div>
        </div>
        <div className="bg-white text-black p-3 rounded-2xl cursor-pointer flex justify-center">
            <button>Send Money</button>
        </div>
    </div>
}