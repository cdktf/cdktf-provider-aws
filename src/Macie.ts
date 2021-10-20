// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie
*/
export namespace Macie {
  export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html#member_account_id MacieMemberAccountAssociation#member_account_id}
    */
    readonly memberAccountId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association}
  */
  export class MacieMemberAccountAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie_member_account_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieMemberAccountAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie_member_account_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._memberAccountId = config.memberAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // member_account_id - computed: false, optional: false, required: true
    private _memberAccountId?: string; 
    public get memberAccountId() {
      return this.getStringAttribute('member_account_id');
    }
    public set memberAccountId(value: string) {
      this._memberAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberAccountIdInput() {
      return this._memberAccountId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        member_account_id: cdktf.stringToTerraform(this._memberAccountId),
      };
    }
  }
  export interface MacieS3BucketAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#bucket_name MacieS3BucketAssociation#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#member_account_id MacieS3BucketAssociation#member_account_id}
    */
    readonly memberAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#prefix MacieS3BucketAssociation#prefix}
    */
    readonly prefix?: string;
    /**
    * classification_type block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#classification_type MacieS3BucketAssociation#classification_type}
    */
    readonly classificationType?: MacieS3BucketAssociationClassificationType;
  }
  export interface MacieS3BucketAssociationClassificationType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#continuous MacieS3BucketAssociation#continuous}
    */
    readonly continuous?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#one_time MacieS3BucketAssociation#one_time}
    */
    readonly oneTime?: string;
  }

  function macieS3BucketAssociationClassificationTypeToTerraform(struct?: MacieS3BucketAssociationClassificationTypeOutputReference | MacieS3BucketAssociationClassificationType): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      continuous: cdktf.stringToTerraform(struct!.continuous),
      one_time: cdktf.stringToTerraform(struct!.oneTime),
    }
  }

  export class MacieS3BucketAssociationClassificationTypeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // continuous - computed: false, optional: true, required: false
    private _continuous?: string | undefined; 
    public get continuous() {
      return this.getStringAttribute('continuous');
    }
    public set continuous(value: string | undefined) {
      this._continuous = value;
    }
    public resetContinuous() {
      this._continuous = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get continuousInput() {
      return this._continuous
    }

    // one_time - computed: false, optional: true, required: false
    private _oneTime?: string | undefined; 
    public get oneTime() {
      return this.getStringAttribute('one_time');
    }
    public set oneTime(value: string | undefined) {
      this._oneTime = value;
    }
    public resetOneTime() {
      this._oneTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oneTimeInput() {
      return this._oneTime
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association}
  */
  export class MacieS3BucketAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie_s3_bucket_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieS3BucketAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: MacieS3BucketAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie_s3_bucket_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucketName = config.bucketName;
      this._memberAccountId = config.memberAccountId;
      this._prefix = config.prefix;
      this._classificationType = config.classificationType;
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
      return this._bucketName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // member_account_id - computed: false, optional: true, required: false
    private _memberAccountId?: string | undefined; 
    public get memberAccountId() {
      return this.getStringAttribute('member_account_id');
    }
    public set memberAccountId(value: string | undefined) {
      this._memberAccountId = value;
    }
    public resetMemberAccountId() {
      this._memberAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memberAccountIdInput() {
      return this._memberAccountId
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // classification_type - computed: false, optional: true, required: false
    private _classificationType?: MacieS3BucketAssociationClassificationType | undefined; 
    private __classificationTypeOutput = new MacieS3BucketAssociationClassificationTypeOutputReference(this as any, "classification_type", true);
    public get classificationType() {
      return this.__classificationTypeOutput;
    }
    public putClassificationType(value: MacieS3BucketAssociationClassificationType | undefined) {
      this._classificationType = value;
    }
    public resetClassificationType() {
      this._classificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationTypeInput() {
      return this._classificationType
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket_name: cdktf.stringToTerraform(this._bucketName),
        member_account_id: cdktf.stringToTerraform(this._memberAccountId),
        prefix: cdktf.stringToTerraform(this._prefix),
        classification_type: macieS3BucketAssociationClassificationTypeToTerraform(this._classificationType),
      };
    }
  }
}
