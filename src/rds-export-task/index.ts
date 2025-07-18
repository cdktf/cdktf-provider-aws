/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsExportTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#export_only RdsExportTask#export_only}
  */
  readonly exportOnly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}
  */
  readonly exportTaskIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#kms_key_id RdsExportTask#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#region RdsExportTask#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#s3_prefix RdsExportTask#s3_prefix}
  */
  readonly s3Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#source_arn RdsExportTask#source_arn}
  */
  readonly sourceArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#timeouts RdsExportTask#timeouts}
  */
  readonly timeouts?: RdsExportTaskTimeouts;
}
export interface RdsExportTaskTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#create RdsExportTask#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#delete RdsExportTask#delete}
  */
  readonly delete?: string;
}

export function rdsExportTaskTimeoutsToTerraform(struct?: RdsExportTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function rdsExportTaskTimeoutsToHclTerraform(struct?: RdsExportTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsExportTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsExportTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsExportTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task aws_rds_export_task}
*/
export class RdsExportTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_export_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsExportTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsExportTask to import
  * @param importFromId The id of the existing RdsExportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsExportTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_export_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_export_task aws_rds_export_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsExportTaskConfig
  */
  public constructor(scope: Construct, id: string, config: RdsExportTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_export_task',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportOnly = config.exportOnly;
    this._exportTaskIdentifier = config.exportTaskIdentifier;
    this._iamRoleArn = config.iamRoleArn;
    this._kmsKeyId = config.kmsKeyId;
    this._region = config.region;
    this._s3BucketName = config.s3BucketName;
    this._s3Prefix = config.s3Prefix;
    this._sourceArn = config.sourceArn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_only - computed: false, optional: true, required: false
  private _exportOnly?: string[]; 
  public get exportOnly() {
    return this.getListAttribute('export_only');
  }
  public set exportOnly(value: string[]) {
    this._exportOnly = value;
  }
  public resetExportOnly() {
    this._exportOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportOnlyInput() {
    return this._exportOnly;
  }

  // export_task_identifier - computed: false, optional: false, required: true
  private _exportTaskIdentifier?: string; 
  public get exportTaskIdentifier() {
    return this.getStringAttribute('export_task_identifier');
  }
  public set exportTaskIdentifier(value: string) {
    this._exportTaskIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTaskIdentifierInput() {
    return this._exportTaskIdentifier;
  }

  // failure_cause - computed: true, optional: false, required: false
  public get failureCause() {
    return this.getStringAttribute('failure_cause');
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_prefix - computed: true, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_end_time - computed: true, optional: false, required: false
  public get taskEndTime() {
    return this.getStringAttribute('task_end_time');
  }

  // task_start_time - computed: true, optional: false, required: false
  public get taskStartTime() {
    return this.getStringAttribute('task_start_time');
  }

  // warning_message - computed: true, optional: false, required: false
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsExportTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsExportTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_only: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportOnly),
      export_task_identifier: cdktf.stringToTerraform(this._exportTaskIdentifier),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      region: cdktf.stringToTerraform(this._region),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      timeouts: rdsExportTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_only: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportOnly),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      export_task_identifier: {
        value: cdktf.stringToHclTerraform(this._exportTaskIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_prefix: {
        value: cdktf.stringToHclTerraform(this._s3Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_arn: {
        value: cdktf.stringToHclTerraform(this._sourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: rdsExportTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsExportTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
