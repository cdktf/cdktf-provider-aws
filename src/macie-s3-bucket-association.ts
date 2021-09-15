// https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly classificationType?: MacieS3BucketAssociationClassificationType[];
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

function macieS3BucketAssociationClassificationTypeToTerraform(struct?: MacieS3BucketAssociationClassificationType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    continuous: cdktf.stringToTerraform(struct!.continuous),
    one_time: cdktf.stringToTerraform(struct!.oneTime),
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
  private _bucketName: string;
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
  private _memberAccountId?: string;
  public get memberAccountId() {
    return this.getStringAttribute('member_account_id');
  }
  public set memberAccountId(value: string ) {
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
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string ) {
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
  private _classificationType?: MacieS3BucketAssociationClassificationType[];
  public get classificationType() {
    return this.interpolationForAttribute('classification_type') as any;
  }
  public set classificationType(value: MacieS3BucketAssociationClassificationType[] ) {
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
      classification_type: cdktf.listMapper(macieS3BucketAssociationClassificationTypeToTerraform)(this._classificationType),
    };
  }
}
