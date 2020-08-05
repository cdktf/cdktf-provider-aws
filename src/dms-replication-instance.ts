// https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allocated_storage": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "apply_immediately": {
        "type": "bool",
        "optional": true
      },
      "auto_minor_version_upgrade": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "engine_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "multi_az": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "replication_instance_arn": {
        "type": "string",
        "computed": true
      },
      "replication_instance_class": {
        "type": "string",
        "required": true
      },
      "replication_instance_id": {
        "type": "string",
        "required": true
      },
      "replication_instance_private_ips": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "replication_instance_public_ips": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "replication_subnet_group_id": {
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
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
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

// Configuration

export interface DmsReplicationInstanceConfig extends TerraformMetaArguments {
  readonly allocatedStorage?: number;
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly engineVersion?: string;
  readonly kmsKeyArn?: string;
  readonly multiAz?: boolean;
  readonly preferredMaintenanceWindow?: string;
  readonly publiclyAccessible?: boolean;
  readonly replicationInstanceClass: string;
  readonly replicationInstanceId: string;
  readonly replicationSubnetGroupId?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** timeouts block */
  readonly timeouts?: DmsReplicationInstanceTimeouts;
}
export interface DmsReplicationInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DmsReplicationInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedStorage = config.allocatedStorage;
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._engineVersion = config.engineVersion;
    this._kmsKeyArn = config.kmsKeyArn;
    this._multiAz = config.multiAz;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicationInstanceClass = config.replicationInstanceClass;
    this._replicationInstanceId = config.replicationInstanceId;
    this._replicationSubnetGroupId = config.replicationSubnetGroupId;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number;
  public get allocatedStorage() {
    return this._allocatedStorage ?? this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number | undefined) {
    this._allocatedStorage = value;
  }

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this._applyImmediately;
  }
  public set applyImmediately(value: boolean | undefined) {
    this._applyImmediately = value;
  }

  // auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this._autoMinorVersionUpgrade ?? this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | undefined) {
    this._autoMinorVersionUpgrade = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this._engineVersion ?? this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string | undefined) {
    this._engineVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn ?? this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean;
  public get multiAz() {
    return this._multiAz ?? this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | undefined) {
    this._multiAz = value;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this._preferredMaintenanceWindow ?? this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string | undefined) {
    this._preferredMaintenanceWindow = value;
  }

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this._publiclyAccessible ?? this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | undefined) {
    this._publiclyAccessible = value;
  }

  // replication_instance_arn - computed: true, optional: false, required: true
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }

  // replication_instance_class - computed: false, optional: false, required: true
  private _replicationInstanceClass: string;
  public get replicationInstanceClass() {
    return this._replicationInstanceClass;
  }
  public set replicationInstanceClass(value: string) {
    this._replicationInstanceClass = value;
  }

  // replication_instance_id - computed: false, optional: false, required: true
  private _replicationInstanceId: string;
  public get replicationInstanceId() {
    return this._replicationInstanceId;
  }
  public set replicationInstanceId(value: string) {
    this._replicationInstanceId = value;
  }

  // replication_instance_private_ips - computed: true, optional: false, required: true
  public get replicationInstancePrivateIps() {
    return this.getListAttribute('replication_instance_private_ips');
  }

  // replication_instance_public_ips - computed: true, optional: false, required: true
  public get replicationInstancePublicIps() {
    return this.getListAttribute('replication_instance_public_ips');
  }

  // replication_subnet_group_id - computed: true, optional: true, required: false
  private _replicationSubnetGroupId?: string;
  public get replicationSubnetGroupId() {
    return this._replicationSubnetGroupId ?? this.getStringAttribute('replication_subnet_group_id');
  }
  public set replicationSubnetGroupId(value: string | undefined) {
    this._replicationSubnetGroupId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds ?? this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DmsReplicationInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DmsReplicationInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: this._allocatedStorage,
      apply_immediately: this._applyImmediately,
      auto_minor_version_upgrade: this._autoMinorVersionUpgrade,
      availability_zone: this._availabilityZone,
      engine_version: this._engineVersion,
      kms_key_arn: this._kmsKeyArn,
      multi_az: this._multiAz,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      publicly_accessible: this._publiclyAccessible,
      replication_instance_class: this._replicationInstanceClass,
      replication_instance_id: this._replicationInstanceId,
      replication_subnet_group_id: this._replicationSubnetGroupId,
      tags: this._tags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      timeouts: this._timeouts,
    };
  }
}
