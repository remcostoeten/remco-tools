import React from "react";

type InProgressIconProps = {
    w?: string;
    h?: string;
    fill?: string;
}

export default function InProgressIcon({ w,h,fill }: InProgressIconProps) {
    return <><svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        width={w}
        height={h}
        fill={fill}
        viewBox="0 0 100 125"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
    >
        <path d="M37.215,51.323c1.156,0.746,2.312,1.493,3.469,2.239c1.119-1.94,2.237-3.879,3.356-5.819  c-1.474-0.579-2.947-1.158-4.421-1.737c-0.149-0.059-0.173-0.12-0.234,0.028c-0.117,0.285-0.234,0.57-0.351,0.855  c-0.39,0.951-0.78,1.903-1.171,2.854C37.647,50.27,37.431,50.796,37.215,51.323z" />
        <path d="M48.217,58.425c1.599,1.032,3.198,2.064,4.796,3.096c-0.677-2.631-1.353-5.262-2.03-7.893  C50.061,55.227,49.139,56.826,48.217,58.425z" />
        <path d="M93.985,76.234c-0.478-0.829-0.956-1.657-1.434-2.486c-1.268-2.2-2.537-4.399-3.805-6.599  c-1.811-3.141-3.622-6.281-5.433-9.422c-2.106-3.652-4.212-7.304-6.318-10.956c-2.153-3.734-4.306-7.467-6.459-11.201  c-1.952-3.386-3.905-6.771-5.857-10.157c-1.504-2.608-3.008-5.216-4.511-7.823c-0.807-1.4-1.615-2.8-2.422-4.201  c-0.484-0.839-0.996-1.659-1.612-2.411c-1.682-2.05-4.136-3.63-6.884-3.296c-3.354,0.409-5.542,3.206-7.118,5.939  c-0.892,1.547-1.784,3.094-2.677,4.642c-1.563,2.71-3.125,5.419-4.688,8.129c-1.985,3.442-3.97,6.885-5.955,10.327  c-2.16,3.745-4.319,7.491-6.479,11.236c-2.087,3.619-4.173,7.237-6.26,10.856c-1.766,3.062-3.531,6.124-5.297,9.186  c-1.197,2.076-2.394,4.152-3.591,6.227c-0.71,1.231-1.488,2.46-2.038,3.773c-0.947,2.261-1.313,4.927-0.169,7.189  c1.114,2.203,3.397,3.003,5.743,3.467c1.616,0.319,3.268-0.164,4.906-0.164c2.329,0,4.658,0,6.987,0c3.493,0,6.986,0,10.479,0  c4.16,0,8.319,0,12.479,0c4.329,0,8.657,0,12.986,0c4,0,8.001,0,12.001,0c3.175,0,6.349,0,9.524,0c1.852,0,3.703,0,5.555,0  c2.81,0,5.778,0.114,7.957-1.855c1.31-1.184,2.049-2.624,2.144-4.38C95.858,80.058,95.068,78.11,93.985,76.234z M48.619,38.129  c0.182-3.081,3.2-5.308,6.199-4.579c2.986,0.726,4.641,4.087,3.401,6.898c-0.97,2.2-3.447,3.418-5.782,2.85  C50.111,42.733,48.478,40.516,48.619,38.129C48.782,35.363,48.456,40.895,48.619,38.129z M73.178,76.84  c-1.112,0.54-2.415,0.769-3.637,0.846c-3.12,0.197-6.163-0.85-8.711-2.615c0.847-1.222,1.693-2.444,2.54-3.665  c-1.357-0.876-2.715-1.752-4.072-2.629c-0.3-0.194-0.601-0.388-0.901-0.582c-0.067-0.043-0.133-0.086-0.2-0.129  c-0.006-0.004-0.019-0.016-0.027-0.017c-0.235,0.131-0.488,0.229-0.751,0.285c-1.472,0.313-2.822-0.65-3.186-2.065  c-0.057-0.222-0.114-0.445-0.171-0.667c-0.015-0.057-0.023-0.22-0.077-0.255c-0.147-0.095-0.294-0.189-0.44-0.284  c-0.72-0.465-1.44-0.93-2.16-1.394c-1.464-0.945-2.928-1.89-4.392-2.835c-0.04-0.026-0.08-0.052-0.12-0.077  c-0.377,0.654-0.755,1.309-1.132,1.963c-0.03,0.053,0.154,0.246,0.185,0.29c0.201,0.279,0.402,0.557,0.603,0.836  c1.104,1.53,2.208,3.059,3.312,4.589c0.493,0.683,0.849,1.399,0.731,2.277c-0.079,0.586-0.383,1.082-0.655,1.593  c-0.916,1.723-1.831,3.445-2.747,5.168c-0.353,0.665-0.707,1.329-1.06,1.994c-0.446,0.84-1.084,1.504-2.067,1.676  c-1.613,0.281-3.131-0.994-3.146-2.625c-0.007-0.749,0.35-1.35,0.687-1.983c0.905-1.703,1.811-3.407,2.716-5.11  c0.13-0.244,0.259-0.488,0.389-0.732c0.058-0.108,0.078-0.105,0.008-0.201c-0.431-0.597-0.862-1.194-1.292-1.791  c-0.605-0.838-1.21-1.677-1.816-2.515c-0.203-0.281-0.406-0.562-0.609-0.843c-0.047-0.064-0.093-0.129-0.14-0.193  c-0.044-0.061-0.509-0.164-0.511-0.16c-0.475,0.824-0.95,1.648-1.426,2.472c-1.983,3.438-3.965,6.876-5.948,10.314  c-0.301,0.521-0.601,1.042-0.902,1.563c-0.233,0.404-0.449,0.804-0.806,1.121c-1.28,1.132-3.357,0.756-4.155-0.757  c-0.454-0.86-0.383-1.851,0.095-2.681c1.491-2.586,2.982-5.171,4.473-7.757c1.82-3.156,3.641-6.313,5.461-9.469  c0.47-0.816,0.914-1.643,1.385-2.459c0.237-0.411,0.474-0.821,0.71-1.232c0.121-0.21,0.153-0.187-0.045-0.315  c-0.778-0.502-1.557-1.005-2.335-1.507c-0.341-0.22-0.682-0.44-1.023-0.661c-0.062-0.04-0.124-0.08-0.187-0.12  c-0.028-0.018-0.377,0.155-0.43,0.172c-0.258,0.081-0.529,0.123-0.799,0.123c-1.624,0-2.903-1.496-2.654-3.097  c0.081-0.519,0.341-1.025,0.539-1.508c0.349-0.851,0.698-1.702,1.047-2.554c0.675-1.646,1.35-3.292,2.025-4.938  c0.356-0.869,0.947-1.569,1.889-1.824c0.68-0.185,1.321-0.052,1.955,0.197c3.323,1.306,6.646,2.612,9.969,3.918  c1.311,0.515,2.622,1.03,3.932,1.545c0.725,0.285,1.342,0.735,1.677,1.466c0.145,0.316,0.217,0.662,0.303,0.998  c0.898,3.49,1.795,6.981,2.693,10.471c0.441,1.714,0.881,3.427,1.322,5.141c0.109,0.425,0.218,0.849,0.328,1.274  c0.033,0.129,0.068,0.258,0.089,0.39c0.022,0.136-0.044,0.418,0.079,0.497c0.084,0.054,0.167,0.108,0.251,0.162  c1.255,0.81,2.511,1.621,3.766,2.431c0.415,0.268,0.831,0.536,1.246,0.805c0.105,0.068,0.136-0.1,0.193-0.182  c0.241-0.348,0.483-0.697,0.724-1.045c0.471-0.679,0.942-1.359,1.412-2.038c2.446,1.695,4.478,4.027,5.439,6.874  c0.426,1.261,0.693,2.669,0.56,4.007C73.182,76.801,73.18,76.82,73.178,76.84z" />

    </svg></>;
}
