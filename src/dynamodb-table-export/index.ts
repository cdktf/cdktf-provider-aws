// https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbTableExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}
  */
  readonly exportFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}
  */
  readonly exportTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}
  */
  readonly s3BucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}
  */
  readonly s3Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}
  */
  readonly s3SseAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}
  */
  readonly s3SseKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}
  */
  readonly tableArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}
  */
  readonly timeouts?: DynamodbTableExportTimeouts;
}
export interface DynamodbTableExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}
  */
  readonly delete?: string;
}

export function dynamodbTableExportTimeoutsToTerraform(struct?: DynamodbTableExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dynamodbTableExportTimeoutsToHclTerraform(struct?: DynamodbTableExportTimeouts | cdktf.IResolvable): any {
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

export class DynamodbTableExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbTableExportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamodbTableExportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export}
*/
export class DynamodbTableExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_table_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbTableExport to import
  * @param importFromId The id of the existing DynamodbTableExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbTableExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dynamodb_table_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbTableExportConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbTableExportConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table_export',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.45.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportFormat = config.exportFormat;
    this._exportTime = config.exportTime;
    this._id = config.id;
    this._s3Bucket = config.s3Bucket;
    this._s3BucketOwner = config.s3BucketOwner;
    this._s3Prefix = config.s3Prefix;
    this._s3SseAlgorithm = config.s3SseAlgorithm;
    this._s3SseKmsKeyId = config.s3SseKmsKeyId;
    this._tableArn = config.tableArn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // billed_size_in_bytes - computed: true, optional: false, required: false
  public get billedSizeInBytes() {
    return this.getNumberAttribute('billed_size_in_bytes');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // export_status - computed: true, optional: false, required: false
  public get exportStatus() {
    return this.getStringAttribute('export_status');
  }

  // export_time - computed: true, optional: true, required: false
  private _exportTime?: string; 
  public get exportTime() {
    return this.getStringAttribute('export_time');
  }
  public set exportTime(value: string) {
    this._exportTime = value;
  }
  public resetExportTime() {
    this._exportTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTimeInput() {
    return this._exportTime;
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

  // item_count - computed: true, optional: false, required: false
  public get itemCount() {
    return this.getNumberAttribute('item_count');
  }

  // manifest_files_s3_key - computed: true, optional: false, required: false
  public get manifestFilesS3Key() {
    return this.getStringAttribute('manifest_files_s3_key');
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_bucket_owner - computed: true, optional: true, required: false
  private _s3BucketOwner?: string; 
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }
  public set s3BucketOwner(value: string) {
    this._s3BucketOwner = value;
  }
  public resetS3BucketOwner() {
    this._s3BucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketOwnerInput() {
    return this._s3BucketOwner;
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

  // s3_sse_algorithm - computed: true, optional: true, required: false
  private _s3SseAlgorithm?: string; 
  public get s3SseAlgorithm() {
    return this.getStringAttribute('s3_sse_algorithm');
  }
  public set s3SseAlgorithm(value: string) {
    this._s3SseAlgorithm = value;
  }
  public resetS3SseAlgorithm() {
    this._s3SseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SseAlgorithmInput() {
    return this._s3SseAlgorithm;
  }

  // s3_sse_kms_key_id - computed: false, optional: true, required: false
  private _s3SseKmsKeyId?: string; 
  public get s3SseKmsKeyId() {
    return this.getStringAttribute('s3_sse_kms_key_id');
  }
  public set s3SseKmsKeyId(value: string) {
    this._s3SseKmsKeyId = value;
  }
  public resetS3SseKmsKeyId() {
    this._s3SseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SseKmsKeyIdInput() {
    return this._s3SseKmsKeyId;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // table_arn - computed: false, optional: false, required: true
  private _tableArn?: string; 
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }
  public set tableArn(value: string) {
    this._tableArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableArnInput() {
    return this._tableArn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DynamodbTableExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynamodbTableExportTimeouts) {
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
      export_format: cdktf.stringToTerraform(this._exportFormat),
      export_time: cdktf.stringToTerraform(this._exportTime),
      id: cdktf.stringToTerraform(this._id),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_bucket_owner: cdktf.stringToTerraform(this._s3BucketOwner),
      s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
      s3_sse_algorithm: cdktf.stringToTerraform(this._s3SseAlgorithm),
      s3_sse_kms_key_id: cdktf.stringToTerraform(this._s3SseKmsKeyId),
      table_arn: cdktf.stringToTerraform(this._tableArn),
      timeouts: dynamodbTableExportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_format: {
        value: cdktf.stringToHclTerraform(this._exportFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_time: {
        value: cdktf.stringToHclTerraform(this._exportTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_owner: {
        value: cdktf.stringToHclTerraform(this._s3BucketOwner),
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
      s3_sse_algorithm: {
        value: cdktf.stringToHclTerraform(this._s3SseAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_sse_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._s3SseKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_arn: {
        value: cdktf.stringToHclTerraform(this._tableArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dynamodbTableExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbTableExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
