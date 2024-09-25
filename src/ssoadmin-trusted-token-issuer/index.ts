// https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminTrustedTokenIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}
  */
  readonly clientToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}
  */
  readonly trustedTokenIssuerType: string;
  /**
  * trusted_token_issuer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_configuration SsoadminTrustedTokenIssuer#trusted_token_issuer_configuration}
  */
  readonly trustedTokenIssuerConfiguration?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable;
}
export interface SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}
  */
  readonly claimAttributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}
  */
  readonly identityStoreAttributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}
  */
  readonly jwksRetrievalOption: string;
}

export function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_attribute_path: cdktf.stringToTerraform(struct!.claimAttributePath),
    identity_store_attribute_path: cdktf.stringToTerraform(struct!.identityStoreAttributePath),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    jwks_retrieval_option: cdktf.stringToTerraform(struct!.jwksRetrievalOption),
  }
}


export function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToHclTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.claimAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_store_attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.identityStoreAttributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_retrieval_option: {
      value: cdktf.stringToHclTerraform(struct!.jwksRetrievalOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimAttributePath = this._claimAttributePath;
    }
    if (this._identityStoreAttributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityStoreAttributePath = this._identityStoreAttributePath;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._jwksRetrievalOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksRetrievalOption = this._jwksRetrievalOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimAttributePath = undefined;
      this._identityStoreAttributePath = undefined;
      this._issuerUrl = undefined;
      this._jwksRetrievalOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimAttributePath = value.claimAttributePath;
      this._identityStoreAttributePath = value.identityStoreAttributePath;
      this._issuerUrl = value.issuerUrl;
      this._jwksRetrievalOption = value.jwksRetrievalOption;
    }
  }

  // claim_attribute_path - computed: false, optional: false, required: true
  private _claimAttributePath?: string; 
  public get claimAttributePath() {
    return this.getStringAttribute('claim_attribute_path');
  }
  public set claimAttributePath(value: string) {
    this._claimAttributePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimAttributePathInput() {
    return this._claimAttributePath;
  }

  // identity_store_attribute_path - computed: false, optional: false, required: true
  private _identityStoreAttributePath?: string; 
  public get identityStoreAttributePath() {
    return this.getStringAttribute('identity_store_attribute_path');
  }
  public set identityStoreAttributePath(value: string) {
    this._identityStoreAttributePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreAttributePathInput() {
    return this._identityStoreAttributePath;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // jwks_retrieval_option - computed: false, optional: false, required: true
  private _jwksRetrievalOption?: string; 
  public get jwksRetrievalOption() {
    return this.getStringAttribute('jwks_retrieval_option');
  }
  public set jwksRetrievalOption(value: string) {
    this._jwksRetrievalOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksRetrievalOptionInput() {
    return this._jwksRetrievalOption;
  }
}

export class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList extends cdktf.ComplexList {
  public internalValue? : SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference {
    return new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration {
  /**
  * oidc_jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#oidc_jwt_configuration SsoadminTrustedTokenIssuer#oidc_jwt_configuration}
  */
  readonly oidcJwtConfiguration?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable;
}

export function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_jwt_configuration: cdktf.listMapper(ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToTerraform, true)(struct!.oidcJwtConfiguration),
  }
}


export function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToHclTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_jwt_configuration: {
      value: cdktf.listMapperHcl(ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToHclTerraform, true)(struct!.oidcJwtConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcJwtConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcJwtConfiguration = this._oidcJwtConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidcJwtConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidcJwtConfiguration.internalValue = value.oidcJwtConfiguration;
    }
  }

  // oidc_jwt_configuration - computed: false, optional: true, required: false
  private _oidcJwtConfiguration = new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList(this, "oidc_jwt_configuration", false);
  public get oidcJwtConfiguration() {
    return this._oidcJwtConfiguration;
  }
  public putOidcJwtConfiguration(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable) {
    this._oidcJwtConfiguration.internalValue = value;
  }
  public resetOidcJwtConfiguration() {
    this._oidcJwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcJwtConfigurationInput() {
    return this._oidcJwtConfiguration.internalValue;
  }
}

export class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList extends cdktf.ComplexList {
  public internalValue? : SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference {
    return new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer}
*/
export class SsoadminTrustedTokenIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_trusted_token_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminTrustedTokenIssuer to import
  * @param importFromId The id of the existing SsoadminTrustedTokenIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminTrustedTokenIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_trusted_token_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminTrustedTokenIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminTrustedTokenIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_trusted_token_issuer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.68.0',
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
    this._clientToken = config.clientToken;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._tags = config.tags;
    this._trustedTokenIssuerType = config.trustedTokenIssuerType;
    this._trustedTokenIssuerConfiguration.internalValue = config.trustedTokenIssuerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_token - computed: false, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // trusted_token_issuer_type - computed: false, optional: false, required: true
  private _trustedTokenIssuerType?: string; 
  public get trustedTokenIssuerType() {
    return this.getStringAttribute('trusted_token_issuer_type');
  }
  public set trustedTokenIssuerType(value: string) {
    this._trustedTokenIssuerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedTokenIssuerTypeInput() {
    return this._trustedTokenIssuerType;
  }

  // trusted_token_issuer_configuration - computed: false, optional: true, required: false
  private _trustedTokenIssuerConfiguration = new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList(this, "trusted_token_issuer_configuration", false);
  public get trustedTokenIssuerConfiguration() {
    return this._trustedTokenIssuerConfiguration;
  }
  public putTrustedTokenIssuerConfiguration(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable) {
    this._trustedTokenIssuerConfiguration.internalValue = value;
  }
  public resetTrustedTokenIssuerConfiguration() {
    this._trustedTokenIssuerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedTokenIssuerConfigurationInput() {
    return this._trustedTokenIssuerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_token: cdktf.stringToTerraform(this._clientToken),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trusted_token_issuer_type: cdktf.stringToTerraform(this._trustedTokenIssuerType),
      trusted_token_issuer_configuration: cdktf.listMapper(ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToTerraform, true)(this._trustedTokenIssuerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_token: {
        value: cdktf.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktf.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trusted_token_issuer_type: {
        value: cdktf.stringToHclTerraform(this._trustedTokenIssuerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_token_issuer_configuration: {
        value: cdktf.listMapperHcl(ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToHclTerraform, true)(this._trustedTokenIssuerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
