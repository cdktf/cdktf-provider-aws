// https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alias": {
        "type": "string",
        "computed": true
      },
      "customer_user_name": {
        "type": "string",
        "computed": true
      },
      "directory_id": {
        "type": "string",
        "required": true
      },
      "directory_name": {
        "type": "string",
        "computed": true
      },
      "directory_type": {
        "type": "string",
        "computed": true
      },
      "dns_ip_addresses": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "iam_role_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "registration_code": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "workspace_security_group_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "self_service_permissions": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "change_compute_type": {
              "type": "bool",
              "optional": true
            },
            "increase_volume_size": {
              "type": "bool",
              "optional": true
            },
            "rebuild_workspace": {
              "type": "bool",
              "optional": true
            },
            "restart_workspace": {
              "type": "bool",
              "optional": true
            },
            "switch_running_mode": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends TerraformMetaArguments {
  readonly directoryId: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** self_service_permissions block */
  readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
}
export interface WorkspacesDirectorySelfServicePermissions {
  readonly changeComputeType?: boolean;
  readonly increaseVolumeSize?: boolean;
  readonly rebuildWorkspace?: boolean;
  readonly restartWorkspace?: boolean;
  readonly switchRunningMode?: boolean;
}

// Resource

export class WorkspacesDirectory extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._selfServicePermissions = config.selfServicePermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // customer_user_name - computed: true, optional: false, required: true
  public get customerUserName() {
    return this.getStringAttribute('customer_user_name');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this._directoryId;
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }

  // directory_name - computed: true, optional: false, required: true
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // directory_type - computed: true, optional: false, required: true
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // dns_ip_addresses - computed: true, optional: false, required: true
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // iam_role_id - computed: true, optional: false, required: true
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_group_ids - computed: true, optional: false, required: true
  public get ipGroupIds() {
    return this.getListAttribute('ip_group_ids');
  }

  // registration_code - computed: true, optional: false, required: true
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workspace_security_group_id - computed: true, optional: false, required: true
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // self_service_permissions - computed: false, optional: true, required: false
  private _selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
  public get selfServicePermissions() {
    return this._selfServicePermissions;
  }
  public set selfServicePermissions(value: WorkspacesDirectorySelfServicePermissions[] | undefined) {
    this._selfServicePermissions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      self_service_permissions: this._selfServicePermissions,
    };
  }
}
