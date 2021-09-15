// https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#name SsmResourceDataSync#name}
  */
  readonly name: string;
  /**
  * s3_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#s3_destination SsmResourceDataSync#s3_destination}
  */
  readonly s3Destination: SsmResourceDataSyncS3Destination[];
}
export interface SsmResourceDataSyncS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#prefix SsmResourceDataSync#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#region SsmResourceDataSync#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}
  */
  readonly syncFormat?: string;
}

function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3Destination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
    sync_format: cdktf.stringToTerraform(struct!.syncFormat),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync}
*/
export class SsmResourceDataSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_resource_data_sync";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmResourceDataSyncConfig
  */
  public constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_resource_data_sync',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._s3Destination = config.s3Destination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination: SsmResourceDataSyncS3Destination[];
  public get s3Destination() {
    return this.interpolationForAttribute('s3_destination') as any;
  }
  public set s3Destination(value: SsmResourceDataSyncS3Destination[]) {
    this._s3Destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      s3_destination: cdktf.listMapper(ssmResourceDataSyncS3DestinationToTerraform)(this._s3Destination),
    };
  }
}
