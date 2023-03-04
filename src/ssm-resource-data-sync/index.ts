// https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}
  */
  readonly name: string;
  /**
  * s3_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}
  */
  readonly s3Destination: SsmResourceDataSyncS3Destination;
}
export interface SsmResourceDataSyncS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}
  */
  readonly syncFormat?: string;
}

export function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3DestinationOutputReference | SsmResourceDataSyncS3Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
    sync_format: cdktf.stringToTerraform(struct!.syncFormat),
  }
}

export class SsmResourceDataSyncS3DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmResourceDataSyncS3Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._syncFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncFormat = this._syncFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmResourceDataSyncS3Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._region = undefined;
      this._syncFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._region = value.region;
      this._syncFormat = value.syncFormat;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sync_format - computed: false, optional: true, required: false
  private _syncFormat?: string; 
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }
  public set syncFormat(value: string) {
    this._syncFormat = value;
  }
  public resetSyncFormat() {
    this._syncFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFormatInput() {
    return this._syncFormat;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync aws_ssm_resource_data_sync}
*/
export class SsmResourceDataSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_resource_data_sync";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync aws_ssm_resource_data_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmResourceDataSyncConfig
  */
  public constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_resource_data_sync',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._s3Destination.internalValue = config.s3Destination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination = new SsmResourceDataSyncS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: SsmResourceDataSyncS3Destination) {
    this._s3Destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      s3_destination: ssmResourceDataSyncS3DestinationToTerraform(this._s3Destination.internalValue),
    };
  }
}
