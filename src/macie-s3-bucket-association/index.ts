// https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieS3BucketAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}
  */
  readonly memberAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}
  */
  readonly prefix?: string;
  /**
  * classification_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}
  */
  readonly classificationType?: MacieS3BucketAssociationClassificationType;
}
export interface MacieS3BucketAssociationClassificationType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}
  */
  readonly continuous?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}
  */
  readonly oneTime?: string;
}

export function macieS3BucketAssociationClassificationTypeToTerraform(struct?: MacieS3BucketAssociationClassificationTypeOutputReference | MacieS3BucketAssociationClassificationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: cdktf.stringToTerraform(struct!.continuous),
    one_time: cdktf.stringToTerraform(struct!.oneTime),
  }
}

export class MacieS3BucketAssociationClassificationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MacieS3BucketAssociationClassificationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous;
    }
    if (this._oneTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTime = this._oneTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MacieS3BucketAssociationClassificationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuous = undefined;
      this._oneTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuous = value.continuous;
      this._oneTime = value.oneTime;
    }
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous?: string; 
  public get continuous() {
    return this.getStringAttribute('continuous');
  }
  public set continuous(value: string) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // one_time - computed: false, optional: true, required: false
  private _oneTime?: string; 
  public get oneTime() {
    return this.getStringAttribute('one_time');
  }
  public set oneTime(value: string) {
    this._oneTime = value;
  }
  public resetOneTime() {
    this._oneTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeInput() {
    return this._oneTime;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association}
*/
export class MacieS3BucketAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie_s3_bucket_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieS3BucketAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MacieS3BucketAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie_s3_bucket_association',
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
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._memberAccountId = config.memberAccountId;
    this._prefix = config.prefix;
    this._classificationType.internalValue = config.classificationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member_account_id - computed: false, optional: true, required: false
  private _memberAccountId?: string; 
  public get memberAccountId() {
    return this.getStringAttribute('member_account_id');
  }
  public set memberAccountId(value: string) {
    this._memberAccountId = value;
  }
  public resetMemberAccountId() {
    this._memberAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountIdInput() {
    return this._memberAccountId;
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

  // classification_type - computed: false, optional: true, required: false
  private _classificationType = new MacieS3BucketAssociationClassificationTypeOutputReference(this, "classification_type");
  public get classificationType() {
    return this._classificationType;
  }
  public putClassificationType(value: MacieS3BucketAssociationClassificationType) {
    this._classificationType.internalValue = value;
  }
  public resetClassificationType() {
    this._classificationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTypeInput() {
    return this._classificationType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      member_account_id: cdktf.stringToTerraform(this._memberAccountId),
      prefix: cdktf.stringToTerraform(this._prefix),
      classification_type: macieS3BucketAssociationClassificationTypeToTerraform(this._classificationType.internalValue),
    };
  }
}
