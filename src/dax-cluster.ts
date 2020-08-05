// https://www.terraform.io/docs/providers/aws/r/dax_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "cluster_address": {
        "type": "string",
        "computed": true
      },
      "cluster_name": {
        "type": "string",
        "required": true
      },
      "configuration_endpoint": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "iam_role_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "node_type": {
        "type": "string",
        "required": true
      },
      "nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "address": "string",
              "availability_zone": "string",
              "id": "string",
              "port": "number"
            }
          ]
        ],
        "computed": true
      },
      "notification_topic_arn": {
        "type": "string",
        "optional": true
      },
      "parameter_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "replication_factor": {
        "type": "number",
        "required": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "subnet_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "server_side_encryption": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "optional": true
            }
          }
        },
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

export interface DaxClusterConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly clusterName: string;
  readonly description?: string;
  readonly iamRoleArn: string;
  readonly maintenanceWindow?: string;
  readonly nodeType: string;
  readonly notificationTopicArn?: string;
  readonly parameterGroupName?: string;
  readonly replicationFactor: number;
  readonly securityGroupIds?: string[];
  readonly subnetGroupName?: string;
  readonly tags?: { [key: string]: string };
  /** server_side_encryption block */
  readonly serverSideEncryption?: DaxClusterServerSideEncryption[];
  /** timeouts block */
  readonly timeouts?: DaxClusterTimeouts;
}
export class DaxClusterNodes extends ComplexComputedList {

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DaxClusterServerSideEncryption {
  readonly enabled?: boolean;
}
export interface DaxClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DaxCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DaxClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dax_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._clusterName = config.clusterName;
    this._description = config.description;
    this._iamRoleArn = config.iamRoleArn;
    this._maintenanceWindow = config.maintenanceWindow;
    this._nodeType = config.nodeType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._parameterGroupName = config.parameterGroupName;
    this._replicationFactor = config.replicationFactor;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
    this._serverSideEncryption = config.serverSideEncryption;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones;
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // cluster_address - computed: true, optional: false, required: true
  public get clusterAddress() {
    return this.getStringAttribute('cluster_address');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // configuration_endpoint - computed: true, optional: false, required: true
  public get configurationEndpoint() {
    return this.getStringAttribute('configuration_endpoint');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn: string;
  public get iamRoleArn() {
    return this._iamRoleArn;
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this._maintenanceWindow ?? this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string | undefined) {
    this._maintenanceWindow = value;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: string;
  public get nodeType() {
    return this._nodeType;
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }

  // nodes - computed: true, optional: false, required: true
  public nodes(index: string) {
    return new DaxClusterNodes(this, 'nodes', index);
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string;
  public get notificationTopicArn() {
    return this._notificationTopicArn;
  }
  public set notificationTopicArn(value: string | undefined) {
    this._notificationTopicArn = value;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this._parameterGroupName ?? this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string | undefined) {
    this._parameterGroupName = value;
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor: number;
  public get replicationFactor() {
    return this._replicationFactor;
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds ?? this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string;
  public get subnetGroupName() {
    return this._subnetGroupName ?? this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string | undefined) {
    this._subnetGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: DaxClusterServerSideEncryption[];
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public set serverSideEncryption(value: DaxClusterServerSideEncryption[] | undefined) {
    this._serverSideEncryption = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DaxClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DaxClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: this._availabilityZones,
      cluster_name: this._clusterName,
      description: this._description,
      iam_role_arn: this._iamRoleArn,
      maintenance_window: this._maintenanceWindow,
      node_type: this._nodeType,
      notification_topic_arn: this._notificationTopicArn,
      parameter_group_name: this._parameterGroupName,
      replication_factor: this._replicationFactor,
      security_group_ids: this._securityGroupIds,
      subnet_group_name: this._subnetGroupName,
      tags: this._tags,
      server_side_encryption: this._serverSideEncryption,
      timeouts: this._timeouts,
    };
  }
}
