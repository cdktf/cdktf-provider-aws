// https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#agent_arns DatasyncLocationS3#agent_arns}
  */
  readonly agentArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
  */
  readonly s3BucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}
  */
  readonly s3StorageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}
  */
  readonly subdirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags_all DatasyncLocationS3#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * s3_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
  */
  readonly s3Config: DatasyncLocationS3S3Config[];
}
export interface DatasyncLocationS3S3Config {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
  */
  readonly bucketAccessRoleArn: string;
}

function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3}
*/
export class DatasyncLocationS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_s3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationS3Config
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationS3Config) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_s3',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentArns = config.agentArns;
    this._s3BucketArn = config.s3BucketArn;
    this._s3StorageClass = config.s3StorageClass;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3Config = config.s3Config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: true, required: false
  private _agentArns?: string[];
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[] ) {
    this._agentArns = value;
  }
  public resetAgentArns() {
    this._agentArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn: string;
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn
  }

  // s3_storage_class - computed: true, optional: true, required: false
  private _s3StorageClass?: string;
  public get s3StorageClass() {
    return this.getStringAttribute('s3_storage_class');
  }
  public set s3StorageClass(value: string) {
    this._s3StorageClass = value;
  }
  public resetS3StorageClass() {
    this._s3StorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageClassInput() {
    return this._s3StorageClass
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // s3_config - computed: false, optional: false, required: true
  private _s3Config: DatasyncLocationS3S3Config[];
  public get s3Config() {
    return this.interpolationForAttribute('s3_config') as any;
  }
  public set s3Config(value: DatasyncLocationS3S3Config[]) {
    this._s3Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
      s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
      s3_storage_class: cdktf.stringToTerraform(this._s3StorageClass),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      s3_config: cdktf.listMapper(datasyncLocationS3S3ConfigToTerraform)(this._s3Config),
    };
  }
}
