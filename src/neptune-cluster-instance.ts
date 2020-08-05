// https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "address": {
        "type": "string",
        "computed": true
      },
      "apply_immediately": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_minor_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "dbi_resource_id": {
        "type": "string",
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "engine": {
        "type": "string",
        "optional": true
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
      "identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_class": {
        "type": "string",
        "required": true
      },
      "kms_key_arn": {
        "type": "string",
        "computed": true
      },
      "neptune_parameter_group_name": {
        "type": "string",
        "optional": true
      },
      "neptune_subnet_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "preferred_backup_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "promotion_tier": {
        "type": "number",
        "optional": true
      },
      "publicly_accessible": {
        "type": "bool",
        "optional": true
      },
      "storage_encrypted": {
        "type": "bool",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "writer": {
        "type": "bool",
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

export interface NeptuneClusterInstanceConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly clusterIdentifier: string;
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly identifier?: string;
  readonly identifierPrefix?: string;
  readonly instanceClass: string;
  readonly neptuneParameterGroupName?: string;
  readonly neptuneSubnetGroupName?: string;
  readonly port?: number;
  readonly preferredBackupWindow?: string;
  readonly preferredMaintenanceWindow?: string;
  readonly promotionTier?: number;
  readonly publiclyAccessible?: boolean;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: NeptuneClusterInstanceTimeouts;
}
export interface NeptuneClusterInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class NeptuneClusterInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NeptuneClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_neptune_cluster_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._clusterIdentifier = config.clusterIdentifier;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._neptuneParameterGroupName = config.neptuneParameterGroupName;
    this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._promotionTier = config.promotionTier;
    this._publiclyAccessible = config.publiclyAccessible;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this._applyImmediately ?? this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | undefined) {
    this._applyImmediately = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this._autoMinorVersionUpgrade;
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

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // dbi_resource_id - computed: true, optional: false, required: true
  public get dbiResourceId() {
    return this.getStringAttribute('dbi_resource_id');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine;
  }
  public set engine(value: string | undefined) {
    this._engine = value;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string;
  public get identifier() {
    return this._identifier ?? this.getStringAttribute('identifier');
  }
  public set identifier(value: string | undefined) {
    this._identifier = value;
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string;
  public get identifierPrefix() {
    return this._identifierPrefix ?? this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string | undefined) {
    this._identifierPrefix = value;
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass: string;
  public get instanceClass() {
    return this._instanceClass;
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }

  // kms_key_arn - computed: true, optional: false, required: true
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // neptune_parameter_group_name - computed: false, optional: true, required: false
  private _neptuneParameterGroupName?: string;
  public get neptuneParameterGroupName() {
    return this._neptuneParameterGroupName;
  }
  public set neptuneParameterGroupName(value: string | undefined) {
    this._neptuneParameterGroupName = value;
  }

  // neptune_subnet_group_name - computed: true, optional: true, required: false
  private _neptuneSubnetGroupName?: string;
  public get neptuneSubnetGroupName() {
    return this._neptuneSubnetGroupName ?? this.getStringAttribute('neptune_subnet_group_name');
  }
  public set neptuneSubnetGroupName(value: string | undefined) {
    this._neptuneSubnetGroupName = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string;
  public get preferredBackupWindow() {
    return this._preferredBackupWindow ?? this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string | undefined) {
    this._preferredBackupWindow = value;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this._preferredMaintenanceWindow ?? this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string | undefined) {
    this._preferredMaintenanceWindow = value;
  }

  // promotion_tier - computed: false, optional: true, required: false
  private _promotionTier?: number;
  public get promotionTier() {
    return this._promotionTier;
  }
  public set promotionTier(value: number | undefined) {
    this._promotionTier = value;
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this._publiclyAccessible;
  }
  public set publiclyAccessible(value: boolean | undefined) {
    this._publiclyAccessible = value;
  }

  // storage_encrypted - computed: true, optional: false, required: true
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // writer - computed: true, optional: false, required: true
  public get writer() {
    return this.getBooleanAttribute('writer');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NeptuneClusterInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NeptuneClusterInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      auto_minor_version_upgrade: this._autoMinorVersionUpgrade,
      availability_zone: this._availabilityZone,
      cluster_identifier: this._clusterIdentifier,
      engine: this._engine,
      engine_version: this._engineVersion,
      identifier: this._identifier,
      identifier_prefix: this._identifierPrefix,
      instance_class: this._instanceClass,
      neptune_parameter_group_name: this._neptuneParameterGroupName,
      neptune_subnet_group_name: this._neptuneSubnetGroupName,
      port: this._port,
      preferred_backup_window: this._preferredBackupWindow,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      promotion_tier: this._promotionTier,
      publicly_accessible: this._publiclyAccessible,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
