// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface RdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#database_name RdsGlobalCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#deletion_protection RdsGlobalCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine RdsGlobalCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine_version RdsGlobalCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#force_destroy RdsGlobalCluster#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}
  */
  readonly sourceDbClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#storage_encrypted RdsGlobalCluster#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
}
export class RdsGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {

  // db_cluster_arn - computed: true, optional: false, required: false
  public get dbClusterArn() {
    return this.getStringAttribute('db_cluster_arn');
  }

  // is_writer - computed: true, optional: false, required: false
  public get isWriter() {
    return this.getBooleanAttribute('is_writer') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster}
*/
export class RdsGlobalCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_rds_global_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsGlobalClusterConfig
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection') as any;
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // global_cluster_members - computed: true, optional: false, required: false
  public globalClusterMembers(index: string) {
    return new RdsGlobalClusterGlobalClusterMembers(this, 'global_cluster_members', index);
  }

  // global_cluster_resource_id - computed: true, optional: false, required: false
  public get globalClusterResourceId() {
    return this.getStringAttribute('global_cluster_resource_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_db_cluster_identifier - computed: true, optional: true, required: false
  private _sourceDbClusterIdentifier?: string; 
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string) {
    this._sourceDbClusterIdentifier = value;
  }
  public resetSourceDbClusterIdentifier() {
    this._sourceDbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdentifierInput() {
    return this._sourceDbClusterIdentifier;
  }

  // storage_encrypted - computed: true, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable; 
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted') as any;
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      source_db_cluster_identifier: cdktf.stringToTerraform(this._sourceDbClusterIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
    };
  }
}
