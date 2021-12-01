// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#cluster_name EksIdentityProviderConfig#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags EksIdentityProviderConfig#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags_all EksIdentityProviderConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#oidc EksIdentityProviderConfig#oidc}
  */
  readonly oidc: EksIdentityProviderConfigOidc;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#timeouts EksIdentityProviderConfig#timeouts}
  */
  readonly timeouts?: EksIdentityProviderConfigTimeouts;
}
export interface EksIdentityProviderConfigOidc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#client_id EksIdentityProviderConfig#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_claim EksIdentityProviderConfig#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_prefix EksIdentityProviderConfig#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
  */
  readonly identityProviderConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#issuer_url EksIdentityProviderConfig#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#required_claims EksIdentityProviderConfig#required_claims}
  */
  readonly requiredClaims?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_claim EksIdentityProviderConfig#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_prefix EksIdentityProviderConfig#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidcOutputReference | EksIdentityProviderConfigOidc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    identity_provider_config_name: cdktf.stringToTerraform(struct!.identityProviderConfigName),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claims: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requiredClaims),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}

export class EksIdentityProviderConfigOidcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksIdentityProviderConfigOidc | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._groupsClaim) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._identityProviderConfigName) {
      hasAnyValues = true;
      internalValueResult.identityProviderConfigName = this._identityProviderConfigName;
    }
    if (this._issuerUrl) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._requiredClaims) {
      hasAnyValues = true;
      internalValueResult.requiredClaims = this._requiredClaims;
    }
    if (this._usernameClaim) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksIdentityProviderConfigOidc | undefined) {
    if (value === undefined) {
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._identityProviderConfigName = undefined;
      this._issuerUrl = undefined;
      this._requiredClaims = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else {
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._identityProviderConfigName = value.identityProviderConfigName;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaims = value.requiredClaims;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // identity_provider_config_name - computed: false, optional: false, required: true
  private _identityProviderConfigName?: string; 
  public get identityProviderConfigName() {
    return this.getStringAttribute('identity_provider_config_name');
  }
  public set identityProviderConfigName(value: string) {
    this._identityProviderConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderConfigNameInput() {
    return this._identityProviderConfigName;
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

  // required_claims - computed: false, optional: true, required: false
  private _requiredClaims?: { [key: string]: string } | cdktf.IResolvable; 
  public get requiredClaims() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_claims') as any;
  }
  public set requiredClaims(value: { [key: string]: string } | cdktf.IResolvable) {
    this._requiredClaims = value;
  }
  public resetRequiredClaims() {
    this._requiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimsInput() {
    return this._requiredClaims;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}
export interface EksIdentityProviderConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#create EksIdentityProviderConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#delete EksIdentityProviderConfig#delete}
  */
  readonly delete?: string;
}

export function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeoutsOutputReference | EksIdentityProviderConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EksIdentityProviderConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksIdentityProviderConfigTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksIdentityProviderConfigTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
*/
export class EksIdentityProviderConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_identity_provider_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksIdentityProviderConfigConfig
  */
  public constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_identity_provider_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._oidc.internalValue = config.oidc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // oidc - computed: false, optional: false, required: true
  private _oidc = new EksIdentityProviderConfigOidcOutputReference(this as any, "oidc", true);
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: EksIdentityProviderConfigOidc) {
    this._oidc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksIdentityProviderConfigTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksIdentityProviderConfigTimeouts) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      oidc: eksIdentityProviderConfigOidcToTerraform(this._oidc.internalValue),
      timeouts: eksIdentityProviderConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
