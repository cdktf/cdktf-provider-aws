// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DataAwsDbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}
  */
  readonly dbClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}
  */
  readonly dbClusterSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_public DataAwsDbClusterSnapshot#include_public}
  */
  readonly includePublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_shared DataAwsDbClusterSnapshot#include_shared}
  */
  readonly includeShared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#most_recent DataAwsDbClusterSnapshot#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}
  */
  readonly snapshotType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#tags DataAwsDbClusterSnapshot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot}
*/
export class DataAwsDbClusterSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_cluster_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDbClusterSnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsDbClusterSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_db_cluster_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
    this._includePublic = config.includePublic;
    this._includeShared = config.includeShared;
    this._mostRecent = config.mostRecent;
    this._snapshotType = config.snapshotType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // db_cluster_identifier - computed: false, optional: true, required: false
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  public resetDbClusterIdentifier() {
    this._dbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_cluster_snapshot_arn - computed: true, optional: false, required: false
  public get dbClusterSnapshotArn() {
    return this.getStringAttribute('db_cluster_snapshot_arn');
  }

  // db_cluster_snapshot_identifier - computed: false, optional: true, required: false
  private _dbClusterSnapshotIdentifier?: string; 
  public get dbClusterSnapshotIdentifier() {
    return this.getStringAttribute('db_cluster_snapshot_identifier');
  }
  public set dbClusterSnapshotIdentifier(value: string) {
    this._dbClusterSnapshotIdentifier = value;
  }
  public resetDbClusterSnapshotIdentifier() {
    this._dbClusterSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterSnapshotIdentifierInput() {
    return this._dbClusterSnapshotIdentifier;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_public - computed: false, optional: true, required: false
  private _includePublic?: boolean | cdktf.IResolvable; 
  public get includePublic() {
    return this.getBooleanAttribute('include_public') as any;
  }
  public set includePublic(value: boolean | cdktf.IResolvable) {
    this._includePublic = value;
  }
  public resetIncludePublic() {
    this._includePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePublicInput() {
    return this._includePublic;
  }

  // include_shared - computed: false, optional: true, required: false
  private _includeShared?: boolean | cdktf.IResolvable; 
  public get includeShared() {
    return this.getBooleanAttribute('include_shared') as any;
  }
  public set includeShared(value: boolean | cdktf.IResolvable) {
    this._includeShared = value;
  }
  public resetIncludeShared() {
    this._includeShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSharedInput() {
    return this._includeShared;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent') as any;
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_create_time - computed: true, optional: false, required: false
  public get snapshotCreateTime() {
    return this.getStringAttribute('snapshot_create_time');
  }

  // snapshot_type - computed: false, optional: true, required: false
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
  public get sourceDbClusterSnapshotArn() {
    return this.getStringAttribute('source_db_cluster_snapshot_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted') as any;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
      db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
      include_public: cdktf.booleanToTerraform(this._includePublic),
      include_shared: cdktf.booleanToTerraform(this._includeShared),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      snapshot_type: cdktf.stringToTerraform(this._snapshotType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
