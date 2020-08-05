// https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html
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
      "database_name": {
        "type": "string",
        "optional": true
      },
      "deletion_protection": {
        "type": "bool",
        "optional": true
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
      "global_cluster_identifier": {
        "type": "string",
        "required": true
      },
      "global_cluster_resource_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "storage_encrypted": {
        "type": "bool",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RdsGlobalClusterConfig extends TerraformMetaArguments {
  readonly databaseName?: string;
  readonly deletionProtection?: boolean;
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly globalClusterIdentifier: string;
  readonly storageEncrypted?: boolean;
}

// Resource

export class RdsGlobalCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RdsGlobalClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_global_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._deletionProtection = config.deletionProtection;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._storageEncrypted = config.storageEncrypted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string | undefined) {
    this._databaseName = value;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
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

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier: string;
  public get globalClusterIdentifier() {
    return this._globalClusterIdentifier;
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }

  // global_cluster_resource_id - computed: true, optional: false, required: true
  public get globalClusterResourceId() {
    return this.getStringAttribute('global_cluster_resource_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this._storageEncrypted;
  }
  public set storageEncrypted(value: boolean | undefined) {
    this._storageEncrypted = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: this._databaseName,
      deletion_protection: this._deletionProtection,
      engine: this._engine,
      engine_version: this._engineVersion,
      global_cluster_identifier: this._globalClusterIdentifier,
      storage_encrypted: this._storageEncrypted,
    };
  }
}
