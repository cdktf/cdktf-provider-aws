// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "ca_cert_identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "db_subnet_group_name": {
        "type": "string",
        "computed": true
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
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "preferred_backup_window": {
        "type": "string",
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
        "computed": true
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

export interface DocdbClusterInstanceConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly caCertIdentifier?: string;
  readonly clusterIdentifier: string;
  readonly engine?: string;
  readonly identifier?: string;
  readonly identifierPrefix?: string;
  readonly instanceClass: string;
  readonly preferredMaintenanceWindow?: string;
  readonly promotionTier?: number;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DocdbClusterInstanceTimeouts;
}
export interface DocdbClusterInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DocdbClusterInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DocdbClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster_instance',
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
    this._caCertIdentifier = config.caCertIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._engine = config.engine;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._promotionTier = config.promotionTier;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ca_cert_identifier - computed: true, optional: true, required: false
  private _caCertIdentifier?: string;
  public get caCertIdentifier() {
    return this._caCertIdentifier ?? this.getStringAttribute('ca_cert_identifier');
  }
  public set caCertIdentifier(value: string | undefined) {
    this._caCertIdentifier = value;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // db_subnet_group_name - computed: true, optional: false, required: true
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
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

  // engine_version - computed: true, optional: false, required: true
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
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

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: true
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
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

  // publicly_accessible - computed: true, optional: false, required: true
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
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
  private _timeouts?: DocdbClusterInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DocdbClusterInstanceTimeouts | undefined) {
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
      ca_cert_identifier: this._caCertIdentifier,
      cluster_identifier: this._clusterIdentifier,
      engine: this._engine,
      identifier: this._identifier,
      identifier_prefix: this._identifierPrefix,
      instance_class: this._instanceClass,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      promotion_tier: this._promotionTier,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
