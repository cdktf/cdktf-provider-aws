// https://www.terraform.io/docs/providers/aws/r/eks_node_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ami_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "cluster_name": {
        "type": "string",
        "required": true
      },
      "disk_size": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "force_update_version": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_types": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "labels": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "node_group_name": {
        "type": "string",
        "required": true
      },
      "node_role_arn": {
        "type": "string",
        "required": true
      },
      "release_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resources": {
        "type": [
          "list",
          [
            "object",
            {
              "autoscaling_groups": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "remote_access_security_group_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "remote_access": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "ec2_ssh_key": {
              "type": "string",
              "optional": true
            },
            "source_security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "scaling_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "desired_size": {
              "type": "number",
              "required": true
            },
            "max_size": {
              "type": "number",
              "required": true
            },
            "min_size": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface EksNodeGroupConfig extends TerraformMetaArguments {
  readonly amiType?: string;
  readonly clusterName: string;
  readonly diskSize?: number;
  readonly forceUpdateVersion?: boolean;
  readonly instanceTypes?: string[];
  readonly labels?: { [key: string]: string };
  readonly nodeGroupName: string;
  readonly nodeRoleArn: string;
  readonly releaseVersion?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** remote_access block */
  readonly remoteAccess?: EksNodeGroupRemoteAccess[];
  /** scaling_config block */
  readonly scalingConfig: EksNodeGroupScalingConfig[];
  /** timeouts block */
  readonly timeouts?: EksNodeGroupTimeouts;
}
export class EksNodeGroupResourcesAutoscalingGroups extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class EksNodeGroupResources extends ComplexComputedList {

  // autoscaling_groups - computed: true, optional: false, required: true
  public get autoscalingGroups() {
    return 'not implemented' as any;
  }

  // remote_access_security_group_id - computed: true, optional: false, required: true
  public get remoteAccessSecurityGroupId() {
    return this.getStringAttribute('remote_access_security_group_id');
  }
}
export interface EksNodeGroupRemoteAccess {
  readonly ec2SshKey?: string;
  readonly sourceSecurityGroupIds?: string[];
}
export interface EksNodeGroupScalingConfig {
  readonly desiredSize: number;
  readonly maxSize: number;
  readonly minSize: number;
}
export interface EksNodeGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class EksNodeGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EksNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_node_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amiType = config.amiType;
    this._clusterName = config.clusterName;
    this._diskSize = config.diskSize;
    this._forceUpdateVersion = config.forceUpdateVersion;
    this._instanceTypes = config.instanceTypes;
    this._labels = config.labels;
    this._nodeGroupName = config.nodeGroupName;
    this._nodeRoleArn = config.nodeRoleArn;
    this._releaseVersion = config.releaseVersion;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._version = config.version;
    this._remoteAccess = config.remoteAccess;
    this._scalingConfig = config.scalingConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami_type - computed: true, optional: true, required: false
  private _amiType?: string;
  public get amiType() {
    return this._amiType ?? this.getStringAttribute('ami_type');
  }
  public set amiType(value: string | undefined) {
    this._amiType = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number;
  public get diskSize() {
    return this._diskSize ?? this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number | undefined) {
    this._diskSize = value;
  }

  // force_update_version - computed: false, optional: true, required: false
  private _forceUpdateVersion?: boolean;
  public get forceUpdateVersion() {
    return this._forceUpdateVersion;
  }
  public set forceUpdateVersion(value: boolean | undefined) {
    this._forceUpdateVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_types - computed: true, optional: true, required: false
  private _instanceTypes?: string[];
  public get instanceTypes() {
    return this._instanceTypes ?? this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[] | undefined) {
    this._instanceTypes = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // node_group_name - computed: false, optional: false, required: true
  private _nodeGroupName: string;
  public get nodeGroupName() {
    return this._nodeGroupName;
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }

  // node_role_arn - computed: false, optional: false, required: true
  private _nodeRoleArn: string;
  public get nodeRoleArn() {
    return this._nodeRoleArn;
  }
  public set nodeRoleArn(value: string) {
    this._nodeRoleArn = value;
  }

  // release_version - computed: true, optional: true, required: false
  private _releaseVersion?: string;
  public get releaseVersion() {
    return this._releaseVersion ?? this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string | undefined) {
    this._releaseVersion = value;
  }

  // resources - computed: true, optional: false, required: true
  public resources(index: string) {
    return new EksNodeGroupResources(this, 'resources', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
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

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess?: EksNodeGroupRemoteAccess[];
  public get remoteAccess() {
    return this._remoteAccess;
  }
  public set remoteAccess(value: EksNodeGroupRemoteAccess[] | undefined) {
    this._remoteAccess = value;
  }

  // scaling_config - computed: false, optional: false, required: true
  private _scalingConfig: EksNodeGroupScalingConfig[];
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public set scalingConfig(value: EksNodeGroupScalingConfig[]) {
    this._scalingConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksNodeGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EksNodeGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ami_type: this._amiType,
      cluster_name: this._clusterName,
      disk_size: this._diskSize,
      force_update_version: this._forceUpdateVersion,
      instance_types: this._instanceTypes,
      labels: this._labels,
      node_group_name: this._nodeGroupName,
      node_role_arn: this._nodeRoleArn,
      release_version: this._releaseVersion,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      version: this._version,
      remote_access: this._remoteAccess,
      scaling_config: this._scalingConfig,
      timeouts: this._timeouts,
    };
  }
}
