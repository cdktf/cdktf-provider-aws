// https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}
  */
  readonly efsFileSystemArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags_all DatasyncLocationEfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * ec2_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#ec2_config DatasyncLocationEfs#ec2_config}
  */
  readonly ec2Config: DatasyncLocationEfsEc2Config[];
}
export interface DatasyncLocationEfsEc2Config {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}
  */
  readonly subnetArn: string;
}

function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupArns),
    subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs}
*/
export class DatasyncLocationEfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_efs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationEfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_efs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._efsFileSystemArn = config.efsFileSystemArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ec2Config = config.ec2Config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // efs_file_system_arn - computed: false, optional: false, required: true
  private _efsFileSystemArn: string;
  public get efsFileSystemArn() {
    return this.getStringAttribute('efs_file_system_arn');
  }
  public set efsFileSystemArn(value: string) {
    this._efsFileSystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemArnInput() {
    return this._efsFileSystemArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string ) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
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

  // ec2_config - computed: false, optional: false, required: true
  private _ec2Config: DatasyncLocationEfsEc2Config[];
  public get ec2Config() {
    return this.interpolationForAttribute('ec2_config') as any;
  }
  public set ec2Config(value: DatasyncLocationEfsEc2Config[]) {
    this._ec2Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigInput() {
    return this._ec2Config
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      efs_file_system_arn: cdktf.stringToTerraform(this._efsFileSystemArn),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      ec2_config: cdktf.listMapper(datasyncLocationEfsEc2ConfigToTerraform)(this._ec2Config),
    };
  }
}
