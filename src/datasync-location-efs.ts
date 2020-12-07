// https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
  readonly efsFileSystemArn: string;
  readonly subdirectory?: string;
  readonly tags?: { [key: string]: string };
  /** ec2_config block */
  readonly ec2Config: DatasyncLocationEfsEc2Config[];
}
export interface DatasyncLocationEfsEc2Config {
  readonly securityGroupArns: string[];
  readonly subnetArn: string;
}

function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupArns),
    subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
  }
}


// Resource

export class DatasyncLocationEfs extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      ec2_config: cdktf.listMapper(datasyncLocationEfsEc2ConfigToTerraform)(this._ec2Config),
    };
  }
}
