// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTrustStoreRevocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}
  */
  readonly revocationsS3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}
  */
  readonly revocationsS3Key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}
  */
  readonly revocationsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}
  */
  readonly trustStoreArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}
  */
  readonly timeouts?: LbTrustStoreRevocationTimeouts;
}
export interface LbTrustStoreRevocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}
  */
  readonly create?: string;
}

export function lbTrustStoreRevocationTimeoutsToTerraform(struct?: LbTrustStoreRevocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function lbTrustStoreRevocationTimeoutsToHclTerraform(struct?: LbTrustStoreRevocationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbTrustStoreRevocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbTrustStoreRevocationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbTrustStoreRevocationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}
*/
export class LbTrustStoreRevocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_trust_store_revocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbTrustStoreRevocation to import
  * @param importFromId The id of the existing LbTrustStoreRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbTrustStoreRevocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_trust_store_revocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbTrustStoreRevocationConfig
  */
  public constructor(scope: Construct, id: string, config: LbTrustStoreRevocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_trust_store_revocation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
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
    this._id = config.id;
    this._revocationsS3Bucket = config.revocationsS3Bucket;
    this._revocationsS3Key = config.revocationsS3Key;
    this._revocationsS3ObjectVersion = config.revocationsS3ObjectVersion;
    this._trustStoreArn = config.trustStoreArn;
    this._timeouts.internalValue = config.timeouts;
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

  // revocation_id - computed: true, optional: false, required: false
  public get revocationId() {
    return this.getNumberAttribute('revocation_id');
  }

  // revocations_s3_bucket - computed: false, optional: false, required: true
  private _revocationsS3Bucket?: string; 
  public get revocationsS3Bucket() {
    return this.getStringAttribute('revocations_s3_bucket');
  }
  public set revocationsS3Bucket(value: string) {
    this._revocationsS3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3BucketInput() {
    return this._revocationsS3Bucket;
  }

  // revocations_s3_key - computed: false, optional: false, required: true
  private _revocationsS3Key?: string; 
  public get revocationsS3Key() {
    return this.getStringAttribute('revocations_s3_key');
  }
  public set revocationsS3Key(value: string) {
    this._revocationsS3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3KeyInput() {
    return this._revocationsS3Key;
  }

  // revocations_s3_object_version - computed: false, optional: true, required: false
  private _revocationsS3ObjectVersion?: string; 
  public get revocationsS3ObjectVersion() {
    return this.getStringAttribute('revocations_s3_object_version');
  }
  public set revocationsS3ObjectVersion(value: string) {
    this._revocationsS3ObjectVersion = value;
  }
  public resetRevocationsS3ObjectVersion() {
    this._revocationsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationsS3ObjectVersionInput() {
    return this._revocationsS3ObjectVersion;
  }

  // trust_store_arn - computed: false, optional: false, required: true
  private _trustStoreArn?: string; 
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
  public set trustStoreArn(value: string) {
    this._trustStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreArnInput() {
    return this._trustStoreArn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbTrustStoreRevocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbTrustStoreRevocationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      revocations_s3_bucket: cdktf.stringToTerraform(this._revocationsS3Bucket),
      revocations_s3_key: cdktf.stringToTerraform(this._revocationsS3Key),
      revocations_s3_object_version: cdktf.stringToTerraform(this._revocationsS3ObjectVersion),
      trust_store_arn: cdktf.stringToTerraform(this._trustStoreArn),
      timeouts: lbTrustStoreRevocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocations_s3_bucket: {
        value: cdktf.stringToHclTerraform(this._revocationsS3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocations_s3_key: {
        value: cdktf.stringToHclTerraform(this._revocationsS3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocations_s3_object_version: {
        value: cdktf.stringToHclTerraform(this._revocationsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_arn: {
        value: cdktf.stringToHclTerraform(this._trustStoreArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbTrustStoreRevocationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbTrustStoreRevocationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
