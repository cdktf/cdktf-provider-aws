// https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterActivityStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}
  */
  readonly engineNativeAuditFieldsIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#id RdsClusterActivityStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}
  */
  readonly resourceArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream aws_rds_cluster_activity_stream}
*/
export class RdsClusterActivityStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster_activity_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream aws_rds_cluster_activity_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterActivityStreamConfig
  */
  public constructor(scope: Construct, id: string, config: RdsClusterActivityStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_activity_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._engineNativeAuditFieldsIncluded = config.engineNativeAuditFieldsIncluded;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._mode = config.mode;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine_native_audit_fields_included - computed: false, optional: true, required: false
  private _engineNativeAuditFieldsIncluded?: boolean | cdktf.IResolvable; 
  public get engineNativeAuditFieldsIncluded() {
    return this.getBooleanAttribute('engine_native_audit_fields_included');
  }
  public set engineNativeAuditFieldsIncluded(value: boolean | cdktf.IResolvable) {
    this._engineNativeAuditFieldsIncluded = value;
  }
  public resetEngineNativeAuditFieldsIncluded() {
    this._engineNativeAuditFieldsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNativeAuditFieldsIncludedInput() {
    return this._engineNativeAuditFieldsIncluded;
  }

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

  // kinesis_stream_name - computed: true, optional: false, required: false
  public get kinesisStreamName() {
    return this.getStringAttribute('kinesis_stream_name');
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_native_audit_fields_included: cdktf.booleanToTerraform(this._engineNativeAuditFieldsIncluded),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      mode: cdktf.stringToTerraform(this._mode),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
    };
  }
}
