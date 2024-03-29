import React, { useState } from "react";
import { Table, Space } from "antd";
import "./styles.css";
import {
  SettingOutlined,
  DeleteOutlined,
  LeftSquareTwoTone,
} from "@ant-design/icons";
import { cursorTo } from "readline";

function VaultTable() {
  const columns = [
    {
      title: "Cofre",
      width: "40%",
      dataIndex: "name",
      key: "cofre",
      sorter: {
        compare: (a: { id: number }, b: { id: number }) => a.id - b.id,
      },
    },

    {
      title: "Quantidade de pastas",
      width: "40%",
      dataIndex: "permissions",
      render: (text: any) => {
        return {
          children: <p>{JSON.stringify(text.length)}</p>,
        };
      },

      key: "permission",
      sorter: {
        compare: (a: { id: number }, b: { id: number }) => a.id - b.id,
      },
      ellipsis: true,
    },

    {
      title: "",
      align: "right" as "right",
      dataIndex: "options",
      key: "options",
      render: (options: any) => {
        return (
          <div>
            <span>
              <Space size="small">
                <SettingOutlined style={{ color: "black" }} />
                <DeleteOutlined style={{ color: "lightgray" }} />
              </Space>
            </span>
          </div>
        );
      },
    },
  ];
  const dataSource = [
    {
      id: 772,
      organization_id: 145,
      name: "CloudsPark",
      icon: "ambulance",
      vault_permission_ids: [1030],
      folders: [
        {
          id: 1868,
          name: "TiFlux",
          folder_id: null,
          vault_id: 772,
          created_at: "2019-10-22T14:24:54.313-03:00",
          updated_at: "2019-10-22T14:24:54.313-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 1030,
          vault_id: 772,
          technical_group_id: null,
          user_id: 911,
          permission: 1,
          created_at: "2019-10-22T14:24:39.963-03:00",
          updated_at: "2019-10-22T14:24:39.963-03:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 84,
      organization_id: 145,
      name: "Cofre de senhas dos clientes.",
      icon: "key",
      vault_permission_ids: [],
      folders: [
        {
          id: 95,
          name: "Cliente 1",
          folder_id: null,
          vault_id: 84,
          created_at: "2019-02-14T16:34:49.622-02:00",
          updated_at: "2019-02-14T16:34:49.622-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [],
    },
    {
      id: 10,
      organization_id: 145,
      name: "Cofre Técnicos",
      icon: "folder-open",
      vault_permission_ids: [13],
      folders: [
        {
          id: 9,
          name: "Senhas Servidores",
          folder_id: null,
          vault_id: 10,
          created_at: "2019-01-17T10:53:23.749-02:00",
          updated_at: "2019-12-17T16:56:46.822-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 13,
          vault_id: 10,
          technical_group_id: 789,
          user_id: null,
          permission: 0,
          created_at: "2019-01-17T10:56:11.217-02:00",
          updated_at: "2019-01-17T10:56:11.217-02:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 554,
      organization_id: 145,
      name: "Facebook",
      icon: "bluetooth-b",
      vault_permission_ids: [744, 745],
      folders: [
        {
          id: 1026,
          name: "afoa",
          folder_id: null,
          vault_id: 554,
          created_at: "2019-08-21T17:33:37.098-03:00",
          updated_at: "2019-08-21T17:33:37.098-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 744,
          vault_id: 554,
          technical_group_id: null,
          user_id: 3182,
          permission: 0,
          created_at: "2019-08-21T17:33:23.327-03:00",
          updated_at: "2019-08-21T17:33:23.327-03:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 45,
      organization_id: 145,
      name: "Hospedagem",
      icon: "apple",
      vault_permission_ids: [45],
      folders: [
        {
          id: 51,
          name: "Amazon",
          folder_id: null,
          vault_id: 45,
          created_at: "2019-01-29T10:27:09.589-02:00",
          updated_at: "2019-01-29T10:27:09.589-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 45,
          vault_id: 45,
          technical_group_id: null,
          user_id: 1071,
          permission: 0,
          created_at: "2019-01-29T10:26:49.017-02:00",
          updated_at: "2019-01-29T10:26:49.017-02:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 521,
      organization_id: 145,
      name: "teste",
      icon: "",
      vault_permission_ids: [],
      folders: [],
      permissions: [],
    },
    {
      id: 1102,
      organization_id: 145,
      name: "TESTE",
      icon: "",
      vault_permission_ids: [],
      folders: [
        {
          id: 9079,
          name: "Servidor",
          folder_id: null,
          vault_id: 1102,
          created_at: "2020-01-10T11:40:14.106-03:00",
          updated_at: "2020-01-10T11:40:14.106-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [],
    },
    {
      id: 431,
      organization_id: 145,
      name: "TESTE COFRE",

      vault_permission_ids: [4975, 4971],
      folders: [
        {
          id: 14325,
          name: "outra pasta legal",
          folder_id: null,
          vault_id: 431,
          created_at: "2021-02-25T15:04:16.363-03:00",
          updated_at: "2021-02-25T15:04:16.363-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
        {
          id: 14324,
          name: "pasta legal",
          folder_id: null,
          vault_id: 431,
          created_at: "2021-02-25T15:03:53.789-03:00",
          updated_at: "2021-02-25T15:03:53.789-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
        {
          id: 842,
          name: "PASTA TESTE",
          folder_id: null,
          vault_id: 431,
          created_at: "2019-07-12T11:22:18.981-03:00",
          updated_at: "2019-07-12T11:22:18.981-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 4975,
          vault_id: 431,
          technical_group_id: null,
          user_id: 6052,
          permission: 1,
          created_at: "2021-02-25T14:55:50.300-03:00",
          updated_at: "2021-02-25T14:55:50.300-03:00",
          organization_id: 145,
        },
        {
          id: 4971,
          vault_id: 431,
          technical_group_id: null,
          user_id: 3182,
          permission: 1,
          created_at: "2021-02-25T14:49:40.276-03:00",
          updated_at: "2021-02-25T14:49:40.276-03:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 383,
      organization_id: 145,
      name: "Teste Diego",
      icon: "anchor",
      vault_permission_ids: [451, 452],
      folders: [],
      permissions: [
        {
          id: 451,
          vault_id: 383,
          technical_group_id: null,
          user_id: 1187,
          permission: 1,
          created_at: "2019-06-06T10:30:27.740-03:00",
          updated_at: "2019-06-06T10:30:27.740-03:00",
          organization_id: 145,
        },
        {
          id: 452,
          vault_id: 383,
          technical_group_id: null,
          user_id: 8537,
          permission: 0,
          created_at: "2019-06-06T10:30:27.749-03:00",
          updated_at: "2019-06-06T10:30:27.749-03:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 1019,
      organization_id: 145,
      name: "Teste somente leitura",
      icon: "address-card",
      vault_permission_ids: [3331],
      folders: [
        {
          id: 8853,
          name: "Teste teste",
          folder_id: null,
          vault_id: 1019,
          created_at: "2019-12-02T09:12:58.466-03:00",
          updated_at: "2019-12-02T09:12:58.466-03:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 3331,
          vault_id: 1019,
          technical_group_id: null,
          user_id: 2086,
          permission: 0,
          created_at: "2019-12-02T09:12:45.828-03:00",
          updated_at: "2019-12-02T09:12:45.828-03:00",
          organization_id: 145,
        },
      ],
    },
    {
      id: 41,
      organization_id: 145,
      name: "TI",
      icon: "bug",
      vault_permission_ids: [42],
      folders: [
        {
          id: 43,
          name: "Cloud",
          folder_id: null,
          vault_id: 41,
          created_at: "2019-01-28T15:36:27.025-02:00",
          updated_at: "2019-01-28T15:36:27.025-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
        {
          id: 44,
          name: "Hospedagem",
          folder_id: null,
          vault_id: 41,
          created_at: "2019-01-28T15:37:19.110-02:00",
          updated_at: "2019-01-28T15:37:19.110-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
        {
          id: 45,
          name: "Lojas e-comerce",
          folder_id: null,
          vault_id: 41,
          created_at: "2019-01-28T15:37:27.455-02:00",
          updated_at: "2019-01-28T15:37:27.455-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
        {
          id: 46,
          name: "Servidores",
          folder_id: null,
          vault_id: 41,
          created_at: "2019-01-28T15:37:35.461-02:00",
          updated_at: "2019-01-28T15:37:35.461-02:00",
          organization_id: 145,
          updated_by_id: null,
        },
      ],
      permissions: [
        {
          id: 42,
          vault_id: 41,
          technical_group_id: null,
          user_id: 971,
          permission: 0,
          created_at: "2019-01-28T15:36:11.547-02:00",
          updated_at: "2019-01-28T15:36:11.547-02:00",
          organization_id: 145,
        },
      ],
    },
  ];

  function onChange(sorter: any) {
    console.log("params", sorter);
  }

  return (
    <Table
      dataSource={dataSource}
      pagination={{ pageSize: 11 }}
      columns={columns}
      onChange={onChange}
      style={{ margin: "20px" }}
      size="small"
    />
  );
}

export default VaultTable;
