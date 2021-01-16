// https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
  readonly s3BucketArn: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  /** s3_config block */
  readonly s3Config: DatasyncLocationS3S3Config[];
}
export interface DatasyncLocationS3S3Config {
  readonly bucketAccessRoleArn: string;
}

function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
  }
}


// Resource

export class DatasyncLocationS3 extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._s3BucketArn = config.s3BucketArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._s3Config = config.s3Config;
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
      s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      s3_config: cdktf.listMapper(datasyncLocationS3S3ConfigToTerraform)(this._s3Config),
    };
  }
}
