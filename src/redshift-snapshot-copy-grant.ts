// https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSnapshotCopyGrantConfig extends cdktf.TerraformMetaArguments {
  readonly kmsKeyId?: string;
  readonly snapshotCopyGrantName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class RedshiftSnapshotCopyGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_snapshot_copy_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyId = config.kmsKeyId;
    this._snapshotCopyGrantName = config.snapshotCopyGrantName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // snapshot_copy_grant_name - computed: false, optional: false, required: true
  private _snapshotCopyGrantName: string;
  public get snapshotCopyGrantName() {
    return this.getStringAttribute('snapshot_copy_grant_name');
  }
  public set snapshotCopyGrantName(value: string) {
    this._snapshotCopyGrantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCopyGrantNameInput() {
    return this._snapshotCopyGrantName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      snapshot_copy_grant_name: cdktf.stringToTerraform(this._snapshotCopyGrantName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
