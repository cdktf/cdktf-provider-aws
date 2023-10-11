// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSesv2EmailIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsSesv2EmailIdentityDkimSigningAttributes {
}

export function dataAwsSesv2EmailIdentityDkimSigningAttributesToTerraform(struct?: DataAwsSesv2EmailIdentityDkimSigningAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2EmailIdentityDkimSigningAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2EmailIdentityDkimSigningAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_signing_key_length - computed: true, optional: false, required: false
  public get currentSigningKeyLength() {
    return this.getStringAttribute('current_signing_key_length');
  }

  // domain_signing_private_key - computed: true, optional: false, required: false
  public get domainSigningPrivateKey() {
    return this.getStringAttribute('domain_signing_private_key');
  }

  // domain_signing_selector - computed: true, optional: false, required: false
  public get domainSigningSelector() {
    return this.getStringAttribute('domain_signing_selector');
  }

  // last_key_generation_timestamp - computed: true, optional: false, required: false
  public get lastKeyGenerationTimestamp() {
    return this.getStringAttribute('last_key_generation_timestamp');
  }

  // next_signing_key_length - computed: true, optional: false, required: false
  public get nextSigningKeyLength() {
    return this.getStringAttribute('next_signing_key_length');
  }

  // signing_attributes_origin - computed: true, optional: false, required: false
  public get signingAttributesOrigin() {
    return this.getStringAttribute('signing_attributes_origin');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getListAttribute('tokens');
  }
}

export class DataAwsSesv2EmailIdentityDkimSigningAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference {
    return new DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}
*/
export class DataAwsSesv2EmailIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSesv2EmailIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: true, optional: false, required: false
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }

  // dkim_signing_attributes - computed: true, optional: false, required: false
  private _dkimSigningAttributes = new DataAwsSesv2EmailIdentityDkimSigningAttributesList(this, "dkim_signing_attributes", false);
  public get dkimSigningAttributes() {
    return this._dkimSigningAttributes;
  }

  // email_identity - computed: false, optional: false, required: true
  private _emailIdentity?: string; 
  public get emailIdentity() {
    return this.getStringAttribute('email_identity');
  }
  public set emailIdentity(value: string) {
    this._emailIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdentityInput() {
    return this._emailIdentity;
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

  // identity_type - computed: true, optional: false, required: false
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // verified_for_sending_status - computed: true, optional: false, required: false
  public get verifiedForSendingStatus() {
    return this.getBooleanAttribute('verified_for_sending_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
