// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EFS
*/
export interface DataAwsEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#creation_token DataAwsEfsFileSystem#creation_token}
  */
  readonly creationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#file_system_id DataAwsEfsFileSystem#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#tags DataAwsEfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsEfsFileSystemLifecyclePolicy extends cdktf.ComplexComputedList {

  // transition_to_ia - computed: true, optional: false, required: false
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }

  // transition_to_primary_storage_class - computed: true, optional: false, required: false
  public get transitionToPrimaryStorageClass() {
    return this.getStringAttribute('transition_to_primary_storage_class');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system}
*/
export class DataAwsEfsFileSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_efs_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEfsFileSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEfsFileSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._creationToken = config.creationToken;
    this._fileSystemId = config.fileSystemId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // creation_token - computed: true, optional: true, required: false
  private _creationToken?: string; 
  public get creationToken() {
    return this.getStringAttribute('creation_token');
  }
  public set creationToken(value: string) {
    this._creationToken = value;
  }
  public resetCreationToken() {
    this._creationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTokenInput() {
    return this._creationToken;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // lifecycle_policy - computed: true, optional: false, required: false
  public lifecyclePolicy(index: string) {
    return new DataAwsEfsFileSystemLifecyclePolicy(this, 'lifecycle_policy', index);
  }

  // performance_mode - computed: true, optional: false, required: false
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }

  // provisioned_throughput_in_mibps - computed: true, optional: false, required: false
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getNumberAttribute('size_in_bytes');
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

  // throughput_mode - computed: true, optional: false, required: false
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_token: cdktf.stringToTerraform(this._creationToken),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
