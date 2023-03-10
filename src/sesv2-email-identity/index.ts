// https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2EmailIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}
  */
  readonly configurationSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * dkim_signing_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}
  */
  readonly dkimSigningAttributes?: Sesv2EmailIdentityDkimSigningAttributes;
}
export interface Sesv2EmailIdentityDkimSigningAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}
  */
  readonly domainSigningPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}
  */
  readonly domainSigningSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}
  */
  readonly nextSigningKeyLength?: string;
}

export function sesv2EmailIdentityDkimSigningAttributesToTerraform(struct?: Sesv2EmailIdentityDkimSigningAttributesOutputReference | Sesv2EmailIdentityDkimSigningAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_signing_private_key: cdktf.stringToTerraform(struct!.domainSigningPrivateKey),
    domain_signing_selector: cdktf.stringToTerraform(struct!.domainSigningSelector),
    next_signing_key_length: cdktf.stringToTerraform(struct!.nextSigningKeyLength),
  }
}

export class Sesv2EmailIdentityDkimSigningAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2EmailIdentityDkimSigningAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainSigningPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSigningPrivateKey = this._domainSigningPrivateKey;
    }
    if (this._domainSigningSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSigningSelector = this._domainSigningSelector;
    }
    if (this._nextSigningKeyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextSigningKeyLength = this._nextSigningKeyLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2EmailIdentityDkimSigningAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainSigningPrivateKey = undefined;
      this._domainSigningSelector = undefined;
      this._nextSigningKeyLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainSigningPrivateKey = value.domainSigningPrivateKey;
      this._domainSigningSelector = value.domainSigningSelector;
      this._nextSigningKeyLength = value.nextSigningKeyLength;
    }
  }

  // current_signing_key_length - computed: true, optional: false, required: false
  public get currentSigningKeyLength() {
    return this.getStringAttribute('current_signing_key_length');
  }

  // domain_signing_private_key - computed: false, optional: true, required: false
  private _domainSigningPrivateKey?: string; 
  public get domainSigningPrivateKey() {
    return this.getStringAttribute('domain_signing_private_key');
  }
  public set domainSigningPrivateKey(value: string) {
    this._domainSigningPrivateKey = value;
  }
  public resetDomainSigningPrivateKey() {
    this._domainSigningPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSigningPrivateKeyInput() {
    return this._domainSigningPrivateKey;
  }

  // domain_signing_selector - computed: false, optional: true, required: false
  private _domainSigningSelector?: string; 
  public get domainSigningSelector() {
    return this.getStringAttribute('domain_signing_selector');
  }
  public set domainSigningSelector(value: string) {
    this._domainSigningSelector = value;
  }
  public resetDomainSigningSelector() {
    this._domainSigningSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSigningSelectorInput() {
    return this._domainSigningSelector;
  }

  // last_key_generation_timestamp - computed: true, optional: false, required: false
  public get lastKeyGenerationTimestamp() {
    return this.getStringAttribute('last_key_generation_timestamp');
  }

  // next_signing_key_length - computed: true, optional: true, required: false
  private _nextSigningKeyLength?: string; 
  public get nextSigningKeyLength() {
    return this.getStringAttribute('next_signing_key_length');
  }
  public set nextSigningKeyLength(value: string) {
    this._nextSigningKeyLength = value;
  }
  public resetNextSigningKeyLength() {
    this._nextSigningKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextSigningKeyLengthInput() {
    return this._nextSigningKeyLength;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}
*/
export class Sesv2EmailIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2EmailIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2EmailIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity',
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
    this._configurationSetName = config.configurationSetName;
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._dkimSigningAttributes.internalValue = config.dkimSigningAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: true, required: false
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  public resetConfigurationSetName() {
    this._configurationSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
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

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // verified_for_sending_status - computed: true, optional: false, required: false
  public get verifiedForSendingStatus() {
    return this.getBooleanAttribute('verified_for_sending_status');
  }

  // dkim_signing_attributes - computed: false, optional: true, required: false
  private _dkimSigningAttributes = new Sesv2EmailIdentityDkimSigningAttributesOutputReference(this, "dkim_signing_attributes");
  public get dkimSigningAttributes() {
    return this._dkimSigningAttributes;
  }
  public putDkimSigningAttributes(value: Sesv2EmailIdentityDkimSigningAttributes) {
    this._dkimSigningAttributes.internalValue = value;
  }
  public resetDkimSigningAttributes() {
    this._dkimSigningAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dkimSigningAttributesInput() {
    return this._dkimSigningAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      dkim_signing_attributes: sesv2EmailIdentityDkimSigningAttributesToTerraform(this._dkimSigningAttributes.internalValue),
    };
  }
}
