// https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface RdsGlobalClusterConfig extends TerraformMetaArguments {
  readonly databaseName?: string;
  readonly deletionProtection?: boolean;
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly forceDestroy?: boolean;
  readonly globalClusterIdentifier: string;
  readonly sourceDbClusterIdentifier?: string;
  readonly storageEncrypted?: boolean;
}
export class RdsGlobalClusterGlobalClusterMembers extends ComplexComputedList {

  // db_cluster_arn - computed: true, optional: false, required: true
  public get dbClusterArn() {
    return this.getStringAttribute('db_cluster_arn');
  }

  // is_writer - computed: true, optional: false, required: true
  public get isWriter() {
    return this.getBooleanAttribute('is_writer');
  }
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
    this._forceDestroy = config.forceDestroy;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
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

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine ?? this.getStringAttribute('engine');
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier: string;
  public get globalClusterIdentifier() {
    return this._globalClusterIdentifier;
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }

  // global_cluster_members - computed: true, optional: false, required: true
  public globalClusterMembers(index: string) {
    return new RdsGlobalClusterGlobalClusterMembers(this, 'global_cluster_members', index);
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

  // source_db_cluster_identifier - computed: true, optional: true, required: false
  private _sourceDbClusterIdentifier?: string;
  public get sourceDbClusterIdentifier() {
    return this._sourceDbClusterIdentifier ?? this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string | undefined) {
    this._sourceDbClusterIdentifier = value;
  }

  // storage_encrypted - computed: true, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this._storageEncrypted ?? this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | undefined) {
    this._storageEncrypted = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: this._databaseName,
      deletion_protection: this._deletionProtection,
      engine: this._engine,
      engine_version: this._engineVersion,
      force_destroy: this._forceDestroy,
      global_cluster_identifier: this._globalClusterIdentifier,
      source_db_cluster_identifier: this._sourceDbClusterIdentifier,
      storage_encrypted: this._storageEncrypted,
    };
  }
}
