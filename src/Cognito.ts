// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export namespace Cognito {
  export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#allow_classic_flow CognitoIdentityPool#allow_classic_flow}
    */
    readonly allowClassicFlow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}
    */
    readonly allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#developer_provider_name CognitoIdentityPool#developer_provider_name}
    */
    readonly developerProviderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#identity_pool_name CognitoIdentityPool#identity_pool_name}
    */
    readonly identityPoolName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}
    */
    readonly openidConnectProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#saml_provider_arns CognitoIdentityPool#saml_provider_arns}
    */
    readonly samlProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#supported_login_providers CognitoIdentityPool#supported_login_providers}
    */
    readonly supportedLoginProviders?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#tags CognitoIdentityPool#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#tags_all CognitoIdentityPool#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * cognito_identity_providers block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}
    */
    readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[];
  }
  export interface CognitoIdentityPoolCognitoIdentityProviders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#client_id CognitoIdentityPool#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#provider_name CognitoIdentityPool#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#server_side_token_check CognitoIdentityPool#server_side_token_check}
    */
    readonly serverSideTokenCheck?: boolean | cdktf.IResolvable;
  }

  function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      provider_name: cdktf.stringToTerraform(struct!.providerName),
      server_side_token_check: cdktf.booleanToTerraform(struct!.serverSideTokenCheck),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool}
  */
  export class CognitoIdentityPool extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_identity_pool";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoIdentityPoolConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_identity_pool',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowClassicFlow = config.allowClassicFlow;
      this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
      this._developerProviderName = config.developerProviderName;
      this._identityPoolName = config.identityPoolName;
      this._openidConnectProviderArns = config.openidConnectProviderArns;
      this._samlProviderArns = config.samlProviderArns;
      this._supportedLoginProviders = config.supportedLoginProviders;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._cognitoIdentityProviders = config.cognitoIdentityProviders;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_classic_flow - computed: false, optional: true, required: false
    private _allowClassicFlow?: boolean | cdktf.IResolvable | undefined; 
    public get allowClassicFlow() {
      return this.getBooleanAttribute('allow_classic_flow') as any;
    }
    public set allowClassicFlow(value: boolean | cdktf.IResolvable | undefined) {
      this._allowClassicFlow = value;
    }
    public resetAllowClassicFlow() {
      this._allowClassicFlow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowClassicFlowInput() {
      return this._allowClassicFlow
    }

    // allow_unauthenticated_identities - computed: false, optional: true, required: false
    private _allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable | undefined; 
    public get allowUnauthenticatedIdentities() {
      return this.getBooleanAttribute('allow_unauthenticated_identities') as any;
    }
    public set allowUnauthenticatedIdentities(value: boolean | cdktf.IResolvable | undefined) {
      this._allowUnauthenticatedIdentities = value;
    }
    public resetAllowUnauthenticatedIdentities() {
      this._allowUnauthenticatedIdentities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowUnauthenticatedIdentitiesInput() {
      return this._allowUnauthenticatedIdentities
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // developer_provider_name - computed: false, optional: true, required: false
    private _developerProviderName?: string | undefined; 
    public get developerProviderName() {
      return this.getStringAttribute('developer_provider_name');
    }
    public set developerProviderName(value: string | undefined) {
      this._developerProviderName = value;
    }
    public resetDeveloperProviderName() {
      this._developerProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get developerProviderNameInput() {
      return this._developerProviderName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_pool_name - computed: false, optional: false, required: true
    private _identityPoolName?: string; 
    public get identityPoolName() {
      return this.getStringAttribute('identity_pool_name');
    }
    public set identityPoolName(value: string) {
      this._identityPoolName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolNameInput() {
      return this._identityPoolName
    }

    // openid_connect_provider_arns - computed: false, optional: true, required: false
    private _openidConnectProviderArns?: string[] | undefined; 
    public get openidConnectProviderArns() {
      return this.getListAttribute('openid_connect_provider_arns');
    }
    public set openidConnectProviderArns(value: string[] | undefined) {
      this._openidConnectProviderArns = value;
    }
    public resetOpenidConnectProviderArns() {
      this._openidConnectProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openidConnectProviderArnsInput() {
      return this._openidConnectProviderArns
    }

    // saml_provider_arns - computed: false, optional: true, required: false
    private _samlProviderArns?: string[] | undefined; 
    public get samlProviderArns() {
      return this.getListAttribute('saml_provider_arns');
    }
    public set samlProviderArns(value: string[] | undefined) {
      this._samlProviderArns = value;
    }
    public resetSamlProviderArns() {
      this._samlProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlProviderArnsInput() {
      return this._samlProviderArns
    }

    // supported_login_providers - computed: false, optional: true, required: false
    private _supportedLoginProviders?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get supportedLoginProviders() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('supported_login_providers') as any;
    }
    public set supportedLoginProviders(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._supportedLoginProviders = value;
    }
    public resetSupportedLoginProviders() {
      this._supportedLoginProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedLoginProvidersInput() {
      return this._supportedLoginProviders
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // cognito_identity_providers - computed: false, optional: true, required: false
    private _cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[] | undefined; 
    public get cognitoIdentityProviders() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cognito_identity_providers') as any;
    }
    public set cognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] | undefined) {
      this._cognitoIdentityProviders = value;
    }
    public resetCognitoIdentityProviders() {
      this._cognitoIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoIdentityProvidersInput() {
      return this._cognitoIdentityProviders
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
        allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
        developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
        identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
        openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
        saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
        supported_login_providers: cdktf.hashMapper(cdktf.anyToTerraform)(this._supportedLoginProviders),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders),
      };
    }
  }
  export interface CognitoIdentityPoolRolesAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#roles CognitoIdentityPoolRolesAttachment#roles}
    */
    readonly roles: { [key: string]: string } | cdktf.IResolvable;
    /**
    * role_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}
    */
    readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
  }
  export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#claim CognitoIdentityPoolRolesAttachment#claim}
    */
    readonly claim: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#match_type CognitoIdentityPoolRolesAttachment#match_type}
    */
    readonly matchType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_arn CognitoIdentityPoolRolesAttachment#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#value CognitoIdentityPoolRolesAttachment#value}
    */
    readonly value: string;
  }

  function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      claim: cdktf.stringToTerraform(struct!.claim),
      match_type: cdktf.stringToTerraform(struct!.matchType),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}
    */
    readonly ambiguousRoleResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}
    */
    readonly identityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#type CognitoIdentityPoolRolesAttachment#type}
    */
    readonly type: string;
    /**
    * mapping_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}
    */
    readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[];
  }

  function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ambiguous_role_resolution: cdktf.stringToTerraform(struct!.ambiguousRoleResolution),
      identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
      type: cdktf.stringToTerraform(struct!.type),
      mapping_rule: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform)(struct!.mappingRule),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment}
  */
  export class CognitoIdentityPoolRolesAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_identity_pool_roles_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolRolesAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_identity_pool_roles_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._identityPoolId = config.identityPoolId;
      this._roles = config.roles;
      this._roleMapping = config.roleMapping;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_pool_id - computed: false, optional: false, required: true
    private _identityPoolId?: string; 
    public get identityPoolId() {
      return this.getStringAttribute('identity_pool_id');
    }
    public set identityPoolId(value: string) {
      this._identityPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolIdInput() {
      return this._identityPoolId
    }

    // roles - computed: false, optional: false, required: true
    private _roles?: { [key: string]: string } | cdktf.IResolvable; 
    public get roles() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('roles') as any;
    }
    public set roles(value: { [key: string]: string } | cdktf.IResolvable) {
      this._roles = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
      return this._roles
    }

    // role_mapping - computed: false, optional: true, required: false
    private _roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[] | undefined; 
    public get roleMapping() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('role_mapping') as any;
    }
    public set roleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[] | undefined) {
      this._roleMapping = value;
    }
    public resetRoleMapping() {
      this._roleMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleMappingInput() {
      return this._roleMapping
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        identity_pool_id: cdktf.stringToTerraform(this._identityPoolId),
        roles: cdktf.hashMapper(cdktf.anyToTerraform)(this._roles),
        role_mapping: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform)(this._roleMapping),
      };
    }
  }
  export interface CognitoIdentityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#attribute_mapping CognitoIdentityProvider#attribute_mapping}
    */
    readonly attributeMapping?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#idp_identifiers CognitoIdentityProvider#idp_identifiers}
    */
    readonly idpIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_details CognitoIdentityProvider#provider_details}
    */
    readonly providerDetails: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_name CognitoIdentityProvider#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_type CognitoIdentityProvider#provider_type}
    */
    readonly providerType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#user_pool_id CognitoIdentityProvider#user_pool_id}
    */
    readonly userPoolId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider}
  */
  export class CognitoIdentityProvider extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_identity_provider";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityProviderConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoIdentityProviderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_identity_provider',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._attributeMapping = config.attributeMapping;
      this._idpIdentifiers = config.idpIdentifiers;
      this._providerDetails = config.providerDetails;
      this._providerName = config.providerName;
      this._providerType = config.providerType;
      this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attribute_mapping - computed: true, optional: true, required: false
    private _attributeMapping?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get attributeMapping() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attribute_mapping') as any;
    }
    public set attributeMapping(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._attributeMapping = value;
    }
    public resetAttributeMapping() {
      this._attributeMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeMappingInput() {
      return this._attributeMapping
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idp_identifiers - computed: false, optional: true, required: false
    private _idpIdentifiers?: string[] | undefined; 
    public get idpIdentifiers() {
      return this.getListAttribute('idp_identifiers');
    }
    public set idpIdentifiers(value: string[] | undefined) {
      this._idpIdentifiers = value;
    }
    public resetIdpIdentifiers() {
      this._idpIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idpIdentifiersInput() {
      return this._idpIdentifiers
    }

    // provider_details - computed: false, optional: false, required: true
    private _providerDetails?: { [key: string]: string } | cdktf.IResolvable; 
    public get providerDetails() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('provider_details') as any;
    }
    public set providerDetails(value: { [key: string]: string } | cdktf.IResolvable) {
      this._providerDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerDetailsInput() {
      return this._providerDetails
    }

    // provider_name - computed: false, optional: false, required: true
    private _providerName?: string; 
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
      this._providerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
      return this._providerName
    }

    // provider_type - computed: false, optional: false, required: true
    private _providerType?: string; 
    public get providerType() {
      return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string) {
      this._providerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
      return this._providerType
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        attribute_mapping: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributeMapping),
        idp_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._idpIdentifiers),
        provider_details: cdktf.hashMapper(cdktf.anyToTerraform)(this._providerDetails),
        provider_name: cdktf.stringToTerraform(this._providerName),
        provider_type: cdktf.stringToTerraform(this._providerType),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      };
    }
  }
  export interface CognitoResourceServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#identifier CognitoResourceServer#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#name CognitoResourceServer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#user_pool_id CognitoResourceServer#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * scope block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope CognitoResourceServer#scope}
    */
    readonly scope?: CognitoResourceServerScope[];
  }
  export interface CognitoResourceServerScope {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_description CognitoResourceServer#scope_description}
    */
    readonly scopeDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_name CognitoResourceServer#scope_name}
    */
    readonly scopeName: string;
  }

  function cognitoResourceServerScopeToTerraform(struct?: CognitoResourceServerScope): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      scope_description: cdktf.stringToTerraform(struct!.scopeDescription),
      scope_name: cdktf.stringToTerraform(struct!.scopeName),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server}
  */
  export class CognitoResourceServer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_resource_server";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoResourceServerConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoResourceServerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_resource_server',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._identifier = config.identifier;
      this._name = config.name;
      this._userPoolId = config.userPoolId;
      this._scope = config.scope;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identifier - computed: false, optional: false, required: true
    private _identifier?: string; 
    public get identifier() {
      return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
      this._identifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
      return this._identifier
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
      return this._name
    }

    // scope_identifiers - computed: true, optional: false, required: false
    public get scopeIdentifiers() {
      return this.getListAttribute('scope_identifiers');
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // scope - computed: false, optional: true, required: false
    private _scope?: CognitoResourceServerScope[] | undefined; 
    public get scope() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('scope') as any;
    }
    public set scope(value: CognitoResourceServerScope[] | undefined) {
      this._scope = value;
    }
    public resetScope() {
      this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
      return this._scope
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        identifier: cdktf.stringToTerraform(this._identifier),
        name: cdktf.stringToTerraform(this._name),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
        scope: cdktf.listMapper(cognitoResourceServerScopeToTerraform)(this._scope),
      };
    }
  }
  export interface CognitoUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#description CognitoUserGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#name CognitoUserGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#precedence CognitoUserGroup#precedence}
    */
    readonly precedence?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#role_arn CognitoUserGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html#user_pool_id CognitoUserGroup#user_pool_id}
    */
    readonly userPoolId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group}
  */
  export class CognitoUserGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserGroupConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoUserGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._precedence = config.precedence;
      this._roleArn = config.roleArn;
      this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // precedence - computed: false, optional: true, required: false
    private _precedence?: number | undefined; 
    public get precedence() {
      return this.getNumberAttribute('precedence');
    }
    public set precedence(value: number | undefined) {
      this._precedence = value;
    }
    public resetPrecedence() {
      this._precedence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get precedenceInput() {
      return this._precedence
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        precedence: cdktf.numberToTerraform(this._precedence),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      };
    }
  }
  export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#alias_attributes CognitoUserPool#alias_attributes}
    */
    readonly aliasAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
    */
    readonly autoVerifiedAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_message CognitoUserPool#email_verification_message}
    */
    readonly emailVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_subject CognitoUserPool#email_verification_subject}
    */
    readonly emailVerificationSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mfa_configuration CognitoUserPool#mfa_configuration}
    */
    readonly mfaConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_authentication_message CognitoUserPool#sms_authentication_message}
    */
    readonly smsAuthenticationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_verification_message CognitoUserPool#sms_verification_message}
    */
    readonly smsVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags CognitoUserPool#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags_all CognitoUserPool#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_attributes CognitoUserPool#username_attributes}
    */
    readonly usernameAttributes?: string[];
    /**
    * account_recovery_setting block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#account_recovery_setting CognitoUserPool#account_recovery_setting}
    */
    readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
    /**
    * admin_create_user_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#admin_create_user_config CognitoUserPool#admin_create_user_config}
    */
    readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
    /**
    * device_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_configuration CognitoUserPool#device_configuration}
    */
    readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration;
    /**
    * email_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_configuration CognitoUserPool#email_configuration}
    */
    readonly emailConfiguration?: CognitoUserPoolEmailConfiguration;
    /**
    * lambda_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_config CognitoUserPool#lambda_config}
    */
    readonly lambdaConfig?: CognitoUserPoolLambdaConfig;
    /**
    * password_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#password_policy CognitoUserPool#password_policy}
    */
    readonly passwordPolicy?: CognitoUserPoolPasswordPolicy;
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#schema CognitoUserPool#schema}
    */
    readonly schema?: CognitoUserPoolSchema[];
    /**
    * sms_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_configuration CognitoUserPool#sms_configuration}
    */
    readonly smsConfiguration?: CognitoUserPoolSmsConfiguration;
    /**
    * software_token_mfa_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
    */
    readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration;
    /**
    * user_pool_add_ons block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
    */
    readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns;
    /**
    * username_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_configuration CognitoUserPool#username_configuration}
    */
    readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration;
    /**
    * verification_message_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verification_message_template CognitoUserPool#verification_message_template}
    */
    readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
  }
  export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#priority CognitoUserPool#priority}
    */
    readonly priority: number;
  }

  function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      priority: cdktf.numberToTerraform(struct!.priority),
    }
  }

  export interface CognitoUserPoolAccountRecoverySetting {
    /**
    * recovery_mechanism block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#recovery_mechanism CognitoUserPool#recovery_mechanism}
    */
    readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
  }

  function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct!.recoveryMechanism),
    }
  }

  export class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // recovery_mechanism - computed: false, optional: false, required: true
    private _recoveryMechanism?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]; 
    public get recoveryMechanism() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('recovery_mechanism') as any;
    }
    public set recoveryMechanism(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]) {
      this._recoveryMechanism = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryMechanismInput() {
      return this._recoveryMechanism
    }
  }
  export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
  }

  function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      email_message: cdktf.stringToTerraform(struct!.emailMessage),
      email_subject: cdktf.stringToTerraform(struct!.emailSubject),
      sms_message: cdktf.stringToTerraform(struct!.smsMessage),
    }
  }

  export class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // email_message - computed: false, optional: true, required: false
    private _emailMessage?: string | undefined; 
    public get emailMessage() {
      return this.getStringAttribute('email_message');
    }
    public set emailMessage(value: string | undefined) {
      this._emailMessage = value;
    }
    public resetEmailMessage() {
      this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailMessageInput() {
      return this._emailMessage
    }

    // email_subject - computed: false, optional: true, required: false
    private _emailSubject?: string | undefined; 
    public get emailSubject() {
      return this.getStringAttribute('email_subject');
    }
    public set emailSubject(value: string | undefined) {
      this._emailSubject = value;
    }
    public resetEmailSubject() {
      this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailSubjectInput() {
      return this._emailSubject
    }

    // sms_message - computed: false, optional: true, required: false
    private _smsMessage?: string | undefined; 
    public get smsMessage() {
      return this.getStringAttribute('sms_message');
    }
    public set smsMessage(value: string | undefined) {
      this._smsMessage = value;
    }
    public resetSmsMessage() {
      this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsMessageInput() {
      return this._smsMessage
    }
  }
  export interface CognitoUserPoolAdminCreateUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
    */
    readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
    /**
    * invite_message_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#invite_message_template CognitoUserPool#invite_message_template}
    */
    readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
  }

  function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_admin_create_user_only: cdktf.booleanToTerraform(struct!.allowAdminCreateUserOnly),
      invite_message_template: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct!.inviteMessageTemplate),
    }
  }

  export class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_admin_create_user_only - computed: false, optional: true, required: false
    private _allowAdminCreateUserOnly?: boolean | cdktf.IResolvable | undefined; 
    public get allowAdminCreateUserOnly() {
      return this.getBooleanAttribute('allow_admin_create_user_only') as any;
    }
    public set allowAdminCreateUserOnly(value: boolean | cdktf.IResolvable | undefined) {
      this._allowAdminCreateUserOnly = value;
    }
    public resetAllowAdminCreateUserOnly() {
      this._allowAdminCreateUserOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAdminCreateUserOnlyInput() {
      return this._allowAdminCreateUserOnly
    }

    // invite_message_template - computed: false, optional: true, required: false
    private _inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined; 
    private __inviteMessageTemplateOutput = new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this as any, "invite_message_template", true);
    public get inviteMessageTemplate() {
      return this.__inviteMessageTemplateOutput;
    }
    public putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined) {
      this._inviteMessageTemplate = value;
    }
    public resetInviteMessageTemplate() {
      this._inviteMessageTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inviteMessageTemplateInput() {
      return this._inviteMessageTemplate
    }
  }
  export interface CognitoUserPoolDeviceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
    */
    readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
    */
    readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
  }

  function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      challenge_required_on_new_device: cdktf.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
      device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
    }
  }

  export class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // challenge_required_on_new_device - computed: false, optional: true, required: false
    private _challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable | undefined; 
    public get challengeRequiredOnNewDevice() {
      return this.getBooleanAttribute('challenge_required_on_new_device') as any;
    }
    public set challengeRequiredOnNewDevice(value: boolean | cdktf.IResolvable | undefined) {
      this._challengeRequiredOnNewDevice = value;
    }
    public resetChallengeRequiredOnNewDevice() {
      this._challengeRequiredOnNewDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get challengeRequiredOnNewDeviceInput() {
      return this._challengeRequiredOnNewDevice
    }

    // device_only_remembered_on_user_prompt - computed: false, optional: true, required: false
    private _deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable | undefined; 
    public get deviceOnlyRememberedOnUserPrompt() {
      return this.getBooleanAttribute('device_only_remembered_on_user_prompt') as any;
    }
    public set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktf.IResolvable | undefined) {
      this._deviceOnlyRememberedOnUserPrompt = value;
    }
    public resetDeviceOnlyRememberedOnUserPrompt() {
      this._deviceOnlyRememberedOnUserPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceOnlyRememberedOnUserPromptInput() {
      return this._deviceOnlyRememberedOnUserPrompt
    }
  }
  export interface CognitoUserPoolEmailConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#configuration_set CognitoUserPool#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_sending_account CognitoUserPool#email_sending_account}
    */
    readonly emailSendingAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#from_email_address CognitoUserPool#from_email_address}
    */
    readonly fromEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#reply_to_email_address CognitoUserPool#reply_to_email_address}
    */
    readonly replyToEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#source_arn CognitoUserPool#source_arn}
    */
    readonly sourceArn?: string;
  }

  function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      configuration_set: cdktf.stringToTerraform(struct!.configurationSet),
      email_sending_account: cdktf.stringToTerraform(struct!.emailSendingAccount),
      from_email_address: cdktf.stringToTerraform(struct!.fromEmailAddress),
      reply_to_email_address: cdktf.stringToTerraform(struct!.replyToEmailAddress),
      source_arn: cdktf.stringToTerraform(struct!.sourceArn),
    }
  }

  export class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // configuration_set - computed: false, optional: true, required: false
    private _configurationSet?: string | undefined; 
    public get configurationSet() {
      return this.getStringAttribute('configuration_set');
    }
    public set configurationSet(value: string | undefined) {
      this._configurationSet = value;
    }
    public resetConfigurationSet() {
      this._configurationSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetInput() {
      return this._configurationSet
    }

    // email_sending_account - computed: false, optional: true, required: false
    private _emailSendingAccount?: string | undefined; 
    public get emailSendingAccount() {
      return this.getStringAttribute('email_sending_account');
    }
    public set emailSendingAccount(value: string | undefined) {
      this._emailSendingAccount = value;
    }
    public resetEmailSendingAccount() {
      this._emailSendingAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailSendingAccountInput() {
      return this._emailSendingAccount
    }

    // from_email_address - computed: false, optional: true, required: false
    private _fromEmailAddress?: string | undefined; 
    public get fromEmailAddress() {
      return this.getStringAttribute('from_email_address');
    }
    public set fromEmailAddress(value: string | undefined) {
      this._fromEmailAddress = value;
    }
    public resetFromEmailAddress() {
      this._fromEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromEmailAddressInput() {
      return this._fromEmailAddress
    }

    // reply_to_email_address - computed: false, optional: true, required: false
    private _replyToEmailAddress?: string | undefined; 
    public get replyToEmailAddress() {
      return this.getStringAttribute('reply_to_email_address');
    }
    public set replyToEmailAddress(value: string | undefined) {
      this._replyToEmailAddress = value;
    }
    public resetReplyToEmailAddress() {
      this._replyToEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replyToEmailAddressInput() {
      return this._replyToEmailAddress
    }

    // source_arn - computed: false, optional: true, required: false
    private _sourceArn?: string | undefined; 
    public get sourceArn() {
      return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string | undefined) {
      this._sourceArn = value;
    }
    public resetSourceArn() {
      this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
      return this._sourceArn
    }
  }
  export interface CognitoUserPoolLambdaConfigCustomEmailSender {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
  }

  function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
      lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
    }
  }

  export class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lambda_arn - computed: false, optional: false, required: true
    private _lambdaArn?: string; 
    public get lambdaArn() {
      return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
      this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
      return this._lambdaArn
    }

    // lambda_version - computed: false, optional: false, required: true
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
      return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
      this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
      return this._lambdaVersion
    }
  }
  export interface CognitoUserPoolLambdaConfigCustomSmsSender {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
  }

  function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
      lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
    }
  }

  export class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lambda_arn - computed: false, optional: false, required: true
    private _lambdaArn?: string; 
    public get lambdaArn() {
      return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
      this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
      return this._lambdaArn
    }

    // lambda_version - computed: false, optional: false, required: true
    private _lambdaVersion?: string; 
    public get lambdaVersion() {
      return this.getStringAttribute('lambda_version');
    }
    public set lambdaVersion(value: string) {
      this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaVersionInput() {
      return this._lambdaVersion
    }
  }
  export interface CognitoUserPoolLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#create_auth_challenge CognitoUserPool#create_auth_challenge}
    */
    readonly createAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_message CognitoUserPool#custom_message}
    */
    readonly customMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#define_auth_challenge CognitoUserPool#define_auth_challenge}
    */
    readonly defineAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#kms_key_id CognitoUserPool#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_authentication CognitoUserPool#post_authentication}
    */
    readonly postAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_confirmation CognitoUserPool#post_confirmation}
    */
    readonly postConfirmation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_authentication CognitoUserPool#pre_authentication}
    */
    readonly preAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_sign_up CognitoUserPool#pre_sign_up}
    */
    readonly preSignUp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_token_generation CognitoUserPool#pre_token_generation}
    */
    readonly preTokenGeneration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_migration CognitoUserPool#user_migration}
    */
    readonly userMigration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
    */
    readonly verifyAuthChallengeResponse?: string;
    /**
    * custom_email_sender block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_email_sender CognitoUserPool#custom_email_sender}
    */
    readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender;
    /**
    * custom_sms_sender block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_sms_sender CognitoUserPool#custom_sms_sender}
    */
    readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender;
  }

  function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create_auth_challenge: cdktf.stringToTerraform(struct!.createAuthChallenge),
      custom_message: cdktf.stringToTerraform(struct!.customMessage),
      define_auth_challenge: cdktf.stringToTerraform(struct!.defineAuthChallenge),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      post_authentication: cdktf.stringToTerraform(struct!.postAuthentication),
      post_confirmation: cdktf.stringToTerraform(struct!.postConfirmation),
      pre_authentication: cdktf.stringToTerraform(struct!.preAuthentication),
      pre_sign_up: cdktf.stringToTerraform(struct!.preSignUp),
      pre_token_generation: cdktf.stringToTerraform(struct!.preTokenGeneration),
      user_migration: cdktf.stringToTerraform(struct!.userMigration),
      verify_auth_challenge_response: cdktf.stringToTerraform(struct!.verifyAuthChallengeResponse),
      custom_email_sender: cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct!.customEmailSender),
      custom_sms_sender: cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct!.customSmsSender),
    }
  }

  export class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create_auth_challenge - computed: false, optional: true, required: false
    private _createAuthChallenge?: string | undefined; 
    public get createAuthChallenge() {
      return this.getStringAttribute('create_auth_challenge');
    }
    public set createAuthChallenge(value: string | undefined) {
      this._createAuthChallenge = value;
    }
    public resetCreateAuthChallenge() {
      this._createAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAuthChallengeInput() {
      return this._createAuthChallenge
    }

    // custom_message - computed: false, optional: true, required: false
    private _customMessage?: string | undefined; 
    public get customMessage() {
      return this.getStringAttribute('custom_message');
    }
    public set customMessage(value: string | undefined) {
      this._customMessage = value;
    }
    public resetCustomMessage() {
      this._customMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMessageInput() {
      return this._customMessage
    }

    // define_auth_challenge - computed: false, optional: true, required: false
    private _defineAuthChallenge?: string | undefined; 
    public get defineAuthChallenge() {
      return this.getStringAttribute('define_auth_challenge');
    }
    public set defineAuthChallenge(value: string | undefined) {
      this._defineAuthChallenge = value;
    }
    public resetDefineAuthChallenge() {
      this._defineAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defineAuthChallengeInput() {
      return this._defineAuthChallenge
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // post_authentication - computed: false, optional: true, required: false
    private _postAuthentication?: string | undefined; 
    public get postAuthentication() {
      return this.getStringAttribute('post_authentication');
    }
    public set postAuthentication(value: string | undefined) {
      this._postAuthentication = value;
    }
    public resetPostAuthentication() {
      this._postAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postAuthenticationInput() {
      return this._postAuthentication
    }

    // post_confirmation - computed: false, optional: true, required: false
    private _postConfirmation?: string | undefined; 
    public get postConfirmation() {
      return this.getStringAttribute('post_confirmation');
    }
    public set postConfirmation(value: string | undefined) {
      this._postConfirmation = value;
    }
    public resetPostConfirmation() {
      this._postConfirmation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postConfirmationInput() {
      return this._postConfirmation
    }

    // pre_authentication - computed: false, optional: true, required: false
    private _preAuthentication?: string | undefined; 
    public get preAuthentication() {
      return this.getStringAttribute('pre_authentication');
    }
    public set preAuthentication(value: string | undefined) {
      this._preAuthentication = value;
    }
    public resetPreAuthentication() {
      this._preAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preAuthenticationInput() {
      return this._preAuthentication
    }

    // pre_sign_up - computed: false, optional: true, required: false
    private _preSignUp?: string | undefined; 
    public get preSignUp() {
      return this.getStringAttribute('pre_sign_up');
    }
    public set preSignUp(value: string | undefined) {
      this._preSignUp = value;
    }
    public resetPreSignUp() {
      this._preSignUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preSignUpInput() {
      return this._preSignUp
    }

    // pre_token_generation - computed: false, optional: true, required: false
    private _preTokenGeneration?: string | undefined; 
    public get preTokenGeneration() {
      return this.getStringAttribute('pre_token_generation');
    }
    public set preTokenGeneration(value: string | undefined) {
      this._preTokenGeneration = value;
    }
    public resetPreTokenGeneration() {
      this._preTokenGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preTokenGenerationInput() {
      return this._preTokenGeneration
    }

    // user_migration - computed: false, optional: true, required: false
    private _userMigration?: string | undefined; 
    public get userMigration() {
      return this.getStringAttribute('user_migration');
    }
    public set userMigration(value: string | undefined) {
      this._userMigration = value;
    }
    public resetUserMigration() {
      this._userMigration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userMigrationInput() {
      return this._userMigration
    }

    // verify_auth_challenge_response - computed: false, optional: true, required: false
    private _verifyAuthChallengeResponse?: string | undefined; 
    public get verifyAuthChallengeResponse() {
      return this.getStringAttribute('verify_auth_challenge_response');
    }
    public set verifyAuthChallengeResponse(value: string | undefined) {
      this._verifyAuthChallengeResponse = value;
    }
    public resetVerifyAuthChallengeResponse() {
      this._verifyAuthChallengeResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifyAuthChallengeResponseInput() {
      return this._verifyAuthChallengeResponse
    }

    // custom_email_sender - computed: false, optional: true, required: false
    private _customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender | undefined; 
    private __customEmailSenderOutput = new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this as any, "custom_email_sender", true);
    public get customEmailSender() {
      return this.__customEmailSenderOutput;
    }
    public putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender | undefined) {
      this._customEmailSender = value;
    }
    public resetCustomEmailSender() {
      this._customEmailSender = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEmailSenderInput() {
      return this._customEmailSender
    }

    // custom_sms_sender - computed: false, optional: true, required: false
    private _customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender | undefined; 
    private __customSmsSenderOutput = new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this as any, "custom_sms_sender", true);
    public get customSmsSender() {
      return this.__customSmsSenderOutput;
    }
    public putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender | undefined) {
      this._customSmsSender = value;
    }
    public resetCustomSmsSender() {
      this._customSmsSender = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSmsSenderInput() {
      return this._customSmsSender
    }
  }
  export interface CognitoUserPoolPasswordPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#minimum_length CognitoUserPool#minimum_length}
    */
    readonly minimumLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_lowercase CognitoUserPool#require_lowercase}
    */
    readonly requireLowercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_numbers CognitoUserPool#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_symbols CognitoUserPool#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_uppercase CognitoUserPool#require_uppercase}
    */
    readonly requireUppercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
    */
    readonly temporaryPasswordValidityDays?: number;
  }

  function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
      require_lowercase: cdktf.booleanToTerraform(struct!.requireLowercase),
      require_numbers: cdktf.booleanToTerraform(struct!.requireNumbers),
      require_symbols: cdktf.booleanToTerraform(struct!.requireSymbols),
      require_uppercase: cdktf.booleanToTerraform(struct!.requireUppercase),
      temporary_password_validity_days: cdktf.numberToTerraform(struct!.temporaryPasswordValidityDays),
    }
  }

  export class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // minimum_length - computed: false, optional: true, required: false
    private _minimumLength?: number | undefined; 
    public get minimumLength() {
      return this.getNumberAttribute('minimum_length');
    }
    public set minimumLength(value: number | undefined) {
      this._minimumLength = value;
    }
    public resetMinimumLength() {
      this._minimumLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLengthInput() {
      return this._minimumLength
    }

    // require_lowercase - computed: false, optional: true, required: false
    private _requireLowercase?: boolean | cdktf.IResolvable | undefined; 
    public get requireLowercase() {
      return this.getBooleanAttribute('require_lowercase') as any;
    }
    public set requireLowercase(value: boolean | cdktf.IResolvable | undefined) {
      this._requireLowercase = value;
    }
    public resetRequireLowercase() {
      this._requireLowercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireLowercaseInput() {
      return this._requireLowercase
    }

    // require_numbers - computed: false, optional: true, required: false
    private _requireNumbers?: boolean | cdktf.IResolvable | undefined; 
    public get requireNumbers() {
      return this.getBooleanAttribute('require_numbers') as any;
    }
    public set requireNumbers(value: boolean | cdktf.IResolvable | undefined) {
      this._requireNumbers = value;
    }
    public resetRequireNumbers() {
      this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireNumbersInput() {
      return this._requireNumbers
    }

    // require_symbols - computed: false, optional: true, required: false
    private _requireSymbols?: boolean | cdktf.IResolvable | undefined; 
    public get requireSymbols() {
      return this.getBooleanAttribute('require_symbols') as any;
    }
    public set requireSymbols(value: boolean | cdktf.IResolvable | undefined) {
      this._requireSymbols = value;
    }
    public resetRequireSymbols() {
      this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireSymbolsInput() {
      return this._requireSymbols
    }

    // require_uppercase - computed: false, optional: true, required: false
    private _requireUppercase?: boolean | cdktf.IResolvable | undefined; 
    public get requireUppercase() {
      return this.getBooleanAttribute('require_uppercase') as any;
    }
    public set requireUppercase(value: boolean | cdktf.IResolvable | undefined) {
      this._requireUppercase = value;
    }
    public resetRequireUppercase() {
      this._requireUppercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireUppercaseInput() {
      return this._requireUppercase
    }

    // temporary_password_validity_days - computed: false, optional: true, required: false
    private _temporaryPasswordValidityDays?: number | undefined; 
    public get temporaryPasswordValidityDays() {
      return this.getNumberAttribute('temporary_password_validity_days');
    }
    public set temporaryPasswordValidityDays(value: number | undefined) {
      this._temporaryPasswordValidityDays = value;
    }
    public resetTemporaryPasswordValidityDays() {
      this._temporaryPasswordValidityDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get temporaryPasswordValidityDaysInput() {
      return this._temporaryPasswordValidityDays
    }
  }
  export interface CognitoUserPoolSchemaNumberAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_value CognitoUserPool#max_value}
    */
    readonly maxValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_value CognitoUserPool#min_value}
    */
    readonly minValue?: string;
  }

  function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_value: cdktf.stringToTerraform(struct!.maxValue),
      min_value: cdktf.stringToTerraform(struct!.minValue),
    }
  }

  export class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_value - computed: false, optional: true, required: false
    private _maxValue?: string | undefined; 
    public get maxValue() {
      return this.getStringAttribute('max_value');
    }
    public set maxValue(value: string | undefined) {
      this._maxValue = value;
    }
    public resetMaxValue() {
      this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
      return this._maxValue
    }

    // min_value - computed: false, optional: true, required: false
    private _minValue?: string | undefined; 
    public get minValue() {
      return this.getStringAttribute('min_value');
    }
    public set minValue(value: string | undefined) {
      this._minValue = value;
    }
    public resetMinValue() {
      this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
      return this._minValue
    }
  }
  export interface CognitoUserPoolSchemaStringAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_length CognitoUserPool#max_length}
    */
    readonly maxLength?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_length CognitoUserPool#min_length}
    */
    readonly minLength?: string;
  }

  function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_length: cdktf.stringToTerraform(struct!.maxLength),
      min_length: cdktf.stringToTerraform(struct!.minLength),
    }
  }

  export class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_length - computed: false, optional: true, required: false
    private _maxLength?: string | undefined; 
    public get maxLength() {
      return this.getStringAttribute('max_length');
    }
    public set maxLength(value: string | undefined) {
      this._maxLength = value;
    }
    public resetMaxLength() {
      this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLengthInput() {
      return this._maxLength
    }

    // min_length - computed: false, optional: true, required: false
    private _minLength?: string | undefined; 
    public get minLength() {
      return this.getStringAttribute('min_length');
    }
    public set minLength(value: string | undefined) {
      this._minLength = value;
    }
    public resetMinLength() {
      this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minLengthInput() {
      return this._minLength
    }
  }
  export interface CognitoUserPoolSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#attribute_data_type CognitoUserPool#attribute_data_type}
    */
    readonly attributeDataType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#developer_only_attribute CognitoUserPool#developer_only_attribute}
    */
    readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mutable CognitoUserPool#mutable}
    */
    readonly mutable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#required CognitoUserPool#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * number_attribute_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
    */
    readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints;
    /**
    * string_attribute_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
    */
    readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints;
  }

  function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      attribute_data_type: cdktf.stringToTerraform(struct!.attributeDataType),
      developer_only_attribute: cdktf.booleanToTerraform(struct!.developerOnlyAttribute),
      mutable: cdktf.booleanToTerraform(struct!.mutable),
      name: cdktf.stringToTerraform(struct!.name),
      required: cdktf.booleanToTerraform(struct!.required),
      number_attribute_constraints: cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct!.numberAttributeConstraints),
      string_attribute_constraints: cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct!.stringAttributeConstraints),
    }
  }

  export interface CognitoUserPoolSmsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#external_id CognitoUserPool#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sns_caller_arn CognitoUserPool#sns_caller_arn}
    */
    readonly snsCallerArn: string;
  }

  function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      external_id: cdktf.stringToTerraform(struct!.externalId),
      sns_caller_arn: cdktf.stringToTerraform(struct!.snsCallerArn),
    }
  }

  export class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // external_id - computed: false, optional: false, required: true
    private _externalId?: string; 
    public get externalId() {
      return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
      this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
      return this._externalId
    }

    // sns_caller_arn - computed: false, optional: false, required: true
    private _snsCallerArn?: string; 
    public get snsCallerArn() {
      return this.getStringAttribute('sns_caller_arn');
    }
    public set snsCallerArn(value: string) {
      this._snsCallerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsCallerArnInput() {
      return this._snsCallerArn
    }
  }
  export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#enabled CognitoUserPool#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface CognitoUserPoolUserPoolAddOns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#advanced_security_mode CognitoUserPool#advanced_security_mode}
    */
    readonly advancedSecurityMode: string;
  }

  function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      advanced_security_mode: cdktf.stringToTerraform(struct!.advancedSecurityMode),
    }
  }

  export class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // advanced_security_mode - computed: false, optional: false, required: true
    private _advancedSecurityMode?: string; 
    public get advancedSecurityMode() {
      return this.getStringAttribute('advanced_security_mode');
    }
    public set advancedSecurityMode(value: string) {
      this._advancedSecurityMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedSecurityModeInput() {
      return this._advancedSecurityMode
    }
  }
  export interface CognitoUserPoolUsernameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#case_sensitive CognitoUserPool#case_sensitive}
    */
    readonly caseSensitive: boolean | cdktf.IResolvable;
  }

  function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    }
  }

  export class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // case_sensitive - computed: false, optional: false, required: true
    private _caseSensitive?: boolean | cdktf.IResolvable; 
    public get caseSensitive() {
      return this.getBooleanAttribute('case_sensitive') as any;
    }
    public set caseSensitive(value: boolean | cdktf.IResolvable) {
      this._caseSensitive = value;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitiveInput() {
      return this._caseSensitive
    }
  }
  export interface CognitoUserPoolVerificationMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#default_email_option CognitoUserPool#default_email_option}
    */
    readonly defaultEmailOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message_by_link CognitoUserPool#email_message_by_link}
    */
    readonly emailMessageByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject_by_link CognitoUserPool#email_subject_by_link}
    */
    readonly emailSubjectByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
  }

  function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_email_option: cdktf.stringToTerraform(struct!.defaultEmailOption),
      email_message: cdktf.stringToTerraform(struct!.emailMessage),
      email_message_by_link: cdktf.stringToTerraform(struct!.emailMessageByLink),
      email_subject: cdktf.stringToTerraform(struct!.emailSubject),
      email_subject_by_link: cdktf.stringToTerraform(struct!.emailSubjectByLink),
      sms_message: cdktf.stringToTerraform(struct!.smsMessage),
    }
  }

  export class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_email_option - computed: false, optional: true, required: false
    private _defaultEmailOption?: string | undefined; 
    public get defaultEmailOption() {
      return this.getStringAttribute('default_email_option');
    }
    public set defaultEmailOption(value: string | undefined) {
      this._defaultEmailOption = value;
    }
    public resetDefaultEmailOption() {
      this._defaultEmailOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultEmailOptionInput() {
      return this._defaultEmailOption
    }

    // email_message - computed: true, optional: true, required: false
    private _emailMessage?: string | undefined; 
    public get emailMessage() {
      return this.getStringAttribute('email_message');
    }
    public set emailMessage(value: string | undefined) {
      this._emailMessage = value;
    }
    public resetEmailMessage() {
      this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailMessageInput() {
      return this._emailMessage
    }

    // email_message_by_link - computed: true, optional: true, required: false
    private _emailMessageByLink?: string | undefined; 
    public get emailMessageByLink() {
      return this.getStringAttribute('email_message_by_link');
    }
    public set emailMessageByLink(value: string | undefined) {
      this._emailMessageByLink = value;
    }
    public resetEmailMessageByLink() {
      this._emailMessageByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailMessageByLinkInput() {
      return this._emailMessageByLink
    }

    // email_subject - computed: true, optional: true, required: false
    private _emailSubject?: string | undefined; 
    public get emailSubject() {
      return this.getStringAttribute('email_subject');
    }
    public set emailSubject(value: string | undefined) {
      this._emailSubject = value;
    }
    public resetEmailSubject() {
      this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailSubjectInput() {
      return this._emailSubject
    }

    // email_subject_by_link - computed: true, optional: true, required: false
    private _emailSubjectByLink?: string | undefined; 
    public get emailSubjectByLink() {
      return this.getStringAttribute('email_subject_by_link');
    }
    public set emailSubjectByLink(value: string | undefined) {
      this._emailSubjectByLink = value;
    }
    public resetEmailSubjectByLink() {
      this._emailSubjectByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailSubjectByLinkInput() {
      return this._emailSubjectByLink
    }

    // sms_message - computed: true, optional: true, required: false
    private _smsMessage?: string | undefined; 
    public get smsMessage() {
      return this.getStringAttribute('sms_message');
    }
    public set smsMessage(value: string | undefined) {
      this._smsMessage = value;
    }
    public resetSmsMessage() {
      this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsMessageInput() {
      return this._smsMessage
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}
  */
  export class CognitoUserPool extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_pool";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoUserPoolConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_pool',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._aliasAttributes = config.aliasAttributes;
      this._autoVerifiedAttributes = config.autoVerifiedAttributes;
      this._emailVerificationMessage = config.emailVerificationMessage;
      this._emailVerificationSubject = config.emailVerificationSubject;
      this._mfaConfiguration = config.mfaConfiguration;
      this._name = config.name;
      this._smsAuthenticationMessage = config.smsAuthenticationMessage;
      this._smsVerificationMessage = config.smsVerificationMessage;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._usernameAttributes = config.usernameAttributes;
      this._accountRecoverySetting = config.accountRecoverySetting;
      this._adminCreateUserConfig = config.adminCreateUserConfig;
      this._deviceConfiguration = config.deviceConfiguration;
      this._emailConfiguration = config.emailConfiguration;
      this._lambdaConfig = config.lambdaConfig;
      this._passwordPolicy = config.passwordPolicy;
      this._schema = config.schema;
      this._smsConfiguration = config.smsConfiguration;
      this._softwareTokenMfaConfiguration = config.softwareTokenMfaConfiguration;
      this._userPoolAddOns = config.userPoolAddOns;
      this._usernameConfiguration = config.usernameConfiguration;
      this._verificationMessageTemplate = config.verificationMessageTemplate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_attributes - computed: false, optional: true, required: false
    private _aliasAttributes?: string[] | undefined; 
    public get aliasAttributes() {
      return this.getListAttribute('alias_attributes');
    }
    public set aliasAttributes(value: string[] | undefined) {
      this._aliasAttributes = value;
    }
    public resetAliasAttributes() {
      this._aliasAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasAttributesInput() {
      return this._aliasAttributes
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_verified_attributes - computed: false, optional: true, required: false
    private _autoVerifiedAttributes?: string[] | undefined; 
    public get autoVerifiedAttributes() {
      return this.getListAttribute('auto_verified_attributes');
    }
    public set autoVerifiedAttributes(value: string[] | undefined) {
      this._autoVerifiedAttributes = value;
    }
    public resetAutoVerifiedAttributes() {
      this._autoVerifiedAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoVerifiedAttributesInput() {
      return this._autoVerifiedAttributes
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // custom_domain - computed: true, optional: false, required: false
    public get customDomain() {
      return this.getStringAttribute('custom_domain');
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
      return this.getStringAttribute('domain');
    }

    // email_verification_message - computed: true, optional: true, required: false
    private _emailVerificationMessage?: string | undefined; 
    public get emailVerificationMessage() {
      return this.getStringAttribute('email_verification_message');
    }
    public set emailVerificationMessage(value: string | undefined) {
      this._emailVerificationMessage = value;
    }
    public resetEmailVerificationMessage() {
      this._emailVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailVerificationMessageInput() {
      return this._emailVerificationMessage
    }

    // email_verification_subject - computed: true, optional: true, required: false
    private _emailVerificationSubject?: string | undefined; 
    public get emailVerificationSubject() {
      return this.getStringAttribute('email_verification_subject');
    }
    public set emailVerificationSubject(value: string | undefined) {
      this._emailVerificationSubject = value;
    }
    public resetEmailVerificationSubject() {
      this._emailVerificationSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailVerificationSubjectInput() {
      return this._emailVerificationSubject
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // estimated_number_of_users - computed: true, optional: false, required: false
    public get estimatedNumberOfUsers() {
      return this.getNumberAttribute('estimated_number_of_users');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
      return this.getStringAttribute('last_modified_date');
    }

    // mfa_configuration - computed: false, optional: true, required: false
    private _mfaConfiguration?: string | undefined; 
    public get mfaConfiguration() {
      return this.getStringAttribute('mfa_configuration');
    }
    public set mfaConfiguration(value: string | undefined) {
      this._mfaConfiguration = value;
    }
    public resetMfaConfiguration() {
      this._mfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mfaConfigurationInput() {
      return this._mfaConfiguration
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
      return this._name
    }

    // sms_authentication_message - computed: false, optional: true, required: false
    private _smsAuthenticationMessage?: string | undefined; 
    public get smsAuthenticationMessage() {
      return this.getStringAttribute('sms_authentication_message');
    }
    public set smsAuthenticationMessage(value: string | undefined) {
      this._smsAuthenticationMessage = value;
    }
    public resetSmsAuthenticationMessage() {
      this._smsAuthenticationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsAuthenticationMessageInput() {
      return this._smsAuthenticationMessage
    }

    // sms_verification_message - computed: true, optional: true, required: false
    private _smsVerificationMessage?: string | undefined; 
    public get smsVerificationMessage() {
      return this.getStringAttribute('sms_verification_message');
    }
    public set smsVerificationMessage(value: string | undefined) {
      this._smsVerificationMessage = value;
    }
    public resetSmsVerificationMessage() {
      this._smsVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsVerificationMessageInput() {
      return this._smsVerificationMessage
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // username_attributes - computed: false, optional: true, required: false
    private _usernameAttributes?: string[] | undefined; 
    public get usernameAttributes() {
      return this.getListAttribute('username_attributes');
    }
    public set usernameAttributes(value: string[] | undefined) {
      this._usernameAttributes = value;
    }
    public resetUsernameAttributes() {
      this._usernameAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameAttributesInput() {
      return this._usernameAttributes
    }

    // account_recovery_setting - computed: false, optional: true, required: false
    private _accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting | undefined; 
    private __accountRecoverySettingOutput = new CognitoUserPoolAccountRecoverySettingOutputReference(this as any, "account_recovery_setting", true);
    public get accountRecoverySetting() {
      return this.__accountRecoverySettingOutput;
    }
    public putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting | undefined) {
      this._accountRecoverySetting = value;
    }
    public resetAccountRecoverySetting() {
      this._accountRecoverySetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountRecoverySettingInput() {
      return this._accountRecoverySetting
    }

    // admin_create_user_config - computed: false, optional: true, required: false
    private _adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig | undefined; 
    private __adminCreateUserConfigOutput = new CognitoUserPoolAdminCreateUserConfigOutputReference(this as any, "admin_create_user_config", true);
    public get adminCreateUserConfig() {
      return this.__adminCreateUserConfigOutput;
    }
    public putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig | undefined) {
      this._adminCreateUserConfig = value;
    }
    public resetAdminCreateUserConfig() {
      this._adminCreateUserConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminCreateUserConfigInput() {
      return this._adminCreateUserConfig
    }

    // device_configuration - computed: false, optional: true, required: false
    private _deviceConfiguration?: CognitoUserPoolDeviceConfiguration | undefined; 
    private __deviceConfigurationOutput = new CognitoUserPoolDeviceConfigurationOutputReference(this as any, "device_configuration", true);
    public get deviceConfiguration() {
      return this.__deviceConfigurationOutput;
    }
    public putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration | undefined) {
      this._deviceConfiguration = value;
    }
    public resetDeviceConfiguration() {
      this._deviceConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceConfigurationInput() {
      return this._deviceConfiguration
    }

    // email_configuration - computed: false, optional: true, required: false
    private _emailConfiguration?: CognitoUserPoolEmailConfiguration | undefined; 
    private __emailConfigurationOutput = new CognitoUserPoolEmailConfigurationOutputReference(this as any, "email_configuration", true);
    public get emailConfiguration() {
      return this.__emailConfigurationOutput;
    }
    public putEmailConfiguration(value: CognitoUserPoolEmailConfiguration | undefined) {
      this._emailConfiguration = value;
    }
    public resetEmailConfiguration() {
      this._emailConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailConfigurationInput() {
      return this._emailConfiguration
    }

    // lambda_config - computed: false, optional: true, required: false
    private _lambdaConfig?: CognitoUserPoolLambdaConfig | undefined; 
    private __lambdaConfigOutput = new CognitoUserPoolLambdaConfigOutputReference(this as any, "lambda_config", true);
    public get lambdaConfig() {
      return this.__lambdaConfigOutput;
    }
    public putLambdaConfig(value: CognitoUserPoolLambdaConfig | undefined) {
      this._lambdaConfig = value;
    }
    public resetLambdaConfig() {
      this._lambdaConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
      return this._lambdaConfig
    }

    // password_policy - computed: false, optional: true, required: false
    private _passwordPolicy?: CognitoUserPoolPasswordPolicy | undefined; 
    private __passwordPolicyOutput = new CognitoUserPoolPasswordPolicyOutputReference(this as any, "password_policy", true);
    public get passwordPolicy() {
      return this.__passwordPolicyOutput;
    }
    public putPasswordPolicy(value: CognitoUserPoolPasswordPolicy | undefined) {
      this._passwordPolicy = value;
    }
    public resetPasswordPolicy() {
      this._passwordPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordPolicyInput() {
      return this._passwordPolicy
    }

    // schema - computed: false, optional: true, required: false
    private _schema?: CognitoUserPoolSchema[] | undefined; 
    public get schema() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('schema') as any;
    }
    public set schema(value: CognitoUserPoolSchema[] | undefined) {
      this._schema = value;
    }
    public resetSchema() {
      this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
    }

    // sms_configuration - computed: false, optional: true, required: false
    private _smsConfiguration?: CognitoUserPoolSmsConfiguration | undefined; 
    private __smsConfigurationOutput = new CognitoUserPoolSmsConfigurationOutputReference(this as any, "sms_configuration", true);
    public get smsConfiguration() {
      return this.__smsConfigurationOutput;
    }
    public putSmsConfiguration(value: CognitoUserPoolSmsConfiguration | undefined) {
      this._smsConfiguration = value;
    }
    public resetSmsConfiguration() {
      this._smsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsConfigurationInput() {
      return this._smsConfiguration
    }

    // software_token_mfa_configuration - computed: false, optional: true, required: false
    private _softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined; 
    private __softwareTokenMfaConfigurationOutput = new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(this as any, "software_token_mfa_configuration", true);
    public get softwareTokenMfaConfiguration() {
      return this.__softwareTokenMfaConfigurationOutput;
    }
    public putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined) {
      this._softwareTokenMfaConfiguration = value;
    }
    public resetSoftwareTokenMfaConfiguration() {
      this._softwareTokenMfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwareTokenMfaConfigurationInput() {
      return this._softwareTokenMfaConfiguration
    }

    // user_pool_add_ons - computed: false, optional: true, required: false
    private _userPoolAddOns?: CognitoUserPoolUserPoolAddOns | undefined; 
    private __userPoolAddOnsOutput = new CognitoUserPoolUserPoolAddOnsOutputReference(this as any, "user_pool_add_ons", true);
    public get userPoolAddOns() {
      return this.__userPoolAddOnsOutput;
    }
    public putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns | undefined) {
      this._userPoolAddOns = value;
    }
    public resetUserPoolAddOns() {
      this._userPoolAddOns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolAddOnsInput() {
      return this._userPoolAddOns
    }

    // username_configuration - computed: false, optional: true, required: false
    private _usernameConfiguration?: CognitoUserPoolUsernameConfiguration | undefined; 
    private __usernameConfigurationOutput = new CognitoUserPoolUsernameConfigurationOutputReference(this as any, "username_configuration", true);
    public get usernameConfiguration() {
      return this.__usernameConfigurationOutput;
    }
    public putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration | undefined) {
      this._usernameConfiguration = value;
    }
    public resetUsernameConfiguration() {
      this._usernameConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameConfigurationInput() {
      return this._usernameConfiguration
    }

    // verification_message_template - computed: false, optional: true, required: false
    private _verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate | undefined; 
    private __verificationMessageTemplateOutput = new CognitoUserPoolVerificationMessageTemplateOutputReference(this as any, "verification_message_template", true);
    public get verificationMessageTemplate() {
      return this.__verificationMessageTemplateOutput;
    }
    public putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate | undefined) {
      this._verificationMessageTemplate = value;
    }
    public resetVerificationMessageTemplate() {
      this._verificationMessageTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verificationMessageTemplateInput() {
      return this._verificationMessageTemplate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
        auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
        email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
        email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
        mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
        name: cdktf.stringToTerraform(this._name),
        sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
        sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
        account_recovery_setting: cognitoUserPoolAccountRecoverySettingToTerraform(this._accountRecoverySetting),
        admin_create_user_config: cognitoUserPoolAdminCreateUserConfigToTerraform(this._adminCreateUserConfig),
        device_configuration: cognitoUserPoolDeviceConfigurationToTerraform(this._deviceConfiguration),
        email_configuration: cognitoUserPoolEmailConfigurationToTerraform(this._emailConfiguration),
        lambda_config: cognitoUserPoolLambdaConfigToTerraform(this._lambdaConfig),
        password_policy: cognitoUserPoolPasswordPolicyToTerraform(this._passwordPolicy),
        schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
        sms_configuration: cognitoUserPoolSmsConfigurationToTerraform(this._smsConfiguration),
        software_token_mfa_configuration: cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(this._softwareTokenMfaConfiguration),
        user_pool_add_ons: cognitoUserPoolUserPoolAddOnsToTerraform(this._userPoolAddOns),
        username_configuration: cognitoUserPoolUsernameConfigurationToTerraform(this._usernameConfiguration),
        verification_message_template: cognitoUserPoolVerificationMessageTemplateToTerraform(this._verificationMessageTemplate),
      };
    }
  }
  export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token_validity CognitoUserPoolClient#access_token_validity}
    */
    readonly accessTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
    */
    readonly allowedOauthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
    */
    readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
    */
    readonly allowedOauthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#callback_urls CognitoUserPoolClient#callback_urls}
    */
    readonly callbackUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
    */
    readonly defaultRedirectUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
    */
    readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
    */
    readonly explicitAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#generate_secret CognitoUserPoolClient#generate_secret}
    */
    readonly generateSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token_validity CognitoUserPoolClient#id_token_validity}
    */
    readonly idTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#logout_urls CognitoUserPoolClient#logout_urls}
    */
    readonly logoutUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#name CognitoUserPoolClient#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
    */
    readonly preventUserExistenceErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#read_attributes CognitoUserPoolClient#read_attributes}
    */
    readonly readAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
    */
    readonly refreshTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
    */
    readonly supportedIdentityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_pool_id CognitoUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#write_attributes CognitoUserPoolClient#write_attributes}
    */
    readonly writeAttributes?: string[];
    /**
    * analytics_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#analytics_configuration CognitoUserPoolClient#analytics_configuration}
    */
    readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
    /**
    * token_validity_units block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#token_validity_units CognitoUserPoolClient#token_validity_units}
    */
    readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
  }
  export interface CognitoUserPoolClientAnalyticsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_arn CognitoUserPoolClient#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_id CognitoUserPoolClient#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#external_id CognitoUserPoolClient#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#role_arn CognitoUserPoolClient#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_data_shared CognitoUserPoolClient#user_data_shared}
    */
    readonly userDataShared?: boolean | cdktf.IResolvable;
  }

  function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfigurationOutputReference | CognitoUserPoolClientAnalyticsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      application_arn: cdktf.stringToTerraform(struct!.applicationArn),
      application_id: cdktf.stringToTerraform(struct!.applicationId),
      external_id: cdktf.stringToTerraform(struct!.externalId),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
    }
  }

  export class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // application_arn - computed: false, optional: true, required: false
    private _applicationArn?: string | undefined; 
    public get applicationArn() {
      return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string | undefined) {
      this._applicationArn = value;
    }
    public resetApplicationArn() {
      this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
      return this._applicationArn
    }

    // application_id - computed: false, optional: true, required: false
    private _applicationId?: string | undefined; 
    public get applicationId() {
      return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string | undefined) {
      this._applicationId = value;
    }
    public resetApplicationId() {
      this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
      return this._applicationId
    }

    // external_id - computed: false, optional: true, required: false
    private _externalId?: string | undefined; 
    public get externalId() {
      return this.getStringAttribute('external_id');
    }
    public set externalId(value: string | undefined) {
      this._externalId = value;
    }
    public resetExternalId() {
      this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
      return this._externalId
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // user_data_shared - computed: false, optional: true, required: false
    private _userDataShared?: boolean | cdktf.IResolvable | undefined; 
    public get userDataShared() {
      return this.getBooleanAttribute('user_data_shared') as any;
    }
    public set userDataShared(value: boolean | cdktf.IResolvable | undefined) {
      this._userDataShared = value;
    }
    public resetUserDataShared() {
      this._userDataShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataSharedInput() {
      return this._userDataShared
    }
  }
  export interface CognitoUserPoolClientTokenValidityUnits {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token CognitoUserPoolClient#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token CognitoUserPoolClient#id_token}
    */
    readonly idToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token CognitoUserPoolClient#refresh_token}
    */
    readonly refreshToken?: string;
  }

  function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnitsOutputReference | CognitoUserPoolClientTokenValidityUnits): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_token: cdktf.stringToTerraform(struct!.accessToken),
      id_token: cdktf.stringToTerraform(struct!.idToken),
      refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    }
  }

  export class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_token - computed: false, optional: true, required: false
    private _accessToken?: string | undefined; 
    public get accessToken() {
      return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string | undefined) {
      this._accessToken = value;
    }
    public resetAccessToken() {
      this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
      return this._accessToken
    }

    // id_token - computed: false, optional: true, required: false
    private _idToken?: string | undefined; 
    public get idToken() {
      return this.getStringAttribute('id_token');
    }
    public set idToken(value: string | undefined) {
      this._idToken = value;
    }
    public resetIdToken() {
      this._idToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idTokenInput() {
      return this._idToken
    }

    // refresh_token - computed: false, optional: true, required: false
    private _refreshToken?: string | undefined; 
    public get refreshToken() {
      return this.getStringAttribute('refresh_token');
    }
    public set refreshToken(value: string | undefined) {
      this._refreshToken = value;
    }
    public resetRefreshToken() {
      this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenInput() {
      return this._refreshToken
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
  */
  export class CognitoUserPoolClient extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_pool_client";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_pool_client',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessTokenValidity = config.accessTokenValidity;
      this._allowedOauthFlows = config.allowedOauthFlows;
      this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
      this._allowedOauthScopes = config.allowedOauthScopes;
      this._callbackUrls = config.callbackUrls;
      this._defaultRedirectUri = config.defaultRedirectUri;
      this._enableTokenRevocation = config.enableTokenRevocation;
      this._explicitAuthFlows = config.explicitAuthFlows;
      this._generateSecret = config.generateSecret;
      this._idTokenValidity = config.idTokenValidity;
      this._logoutUrls = config.logoutUrls;
      this._name = config.name;
      this._preventUserExistenceErrors = config.preventUserExistenceErrors;
      this._readAttributes = config.readAttributes;
      this._refreshTokenValidity = config.refreshTokenValidity;
      this._supportedIdentityProviders = config.supportedIdentityProviders;
      this._userPoolId = config.userPoolId;
      this._writeAttributes = config.writeAttributes;
      this._analyticsConfiguration = config.analyticsConfiguration;
      this._tokenValidityUnits = config.tokenValidityUnits;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_token_validity - computed: false, optional: true, required: false
    private _accessTokenValidity?: number | undefined; 
    public get accessTokenValidity() {
      return this.getNumberAttribute('access_token_validity');
    }
    public set accessTokenValidity(value: number | undefined) {
      this._accessTokenValidity = value;
    }
    public resetAccessTokenValidity() {
      this._accessTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenValidityInput() {
      return this._accessTokenValidity
    }

    // allowed_oauth_flows - computed: false, optional: true, required: false
    private _allowedOauthFlows?: string[] | undefined; 
    public get allowedOauthFlows() {
      return this.getListAttribute('allowed_oauth_flows');
    }
    public set allowedOauthFlows(value: string[] | undefined) {
      this._allowedOauthFlows = value;
    }
    public resetAllowedOauthFlows() {
      this._allowedOauthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOauthFlowsInput() {
      return this._allowedOauthFlows
    }

    // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
    private _allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable | undefined; 
    public get allowedOauthFlowsUserPoolClient() {
      return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client') as any;
    }
    public set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable | undefined) {
      this._allowedOauthFlowsUserPoolClient = value;
    }
    public resetAllowedOauthFlowsUserPoolClient() {
      this._allowedOauthFlowsUserPoolClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOauthFlowsUserPoolClientInput() {
      return this._allowedOauthFlowsUserPoolClient
    }

    // allowed_oauth_scopes - computed: false, optional: true, required: false
    private _allowedOauthScopes?: string[] | undefined; 
    public get allowedOauthScopes() {
      return this.getListAttribute('allowed_oauth_scopes');
    }
    public set allowedOauthScopes(value: string[] | undefined) {
      this._allowedOauthScopes = value;
    }
    public resetAllowedOauthScopes() {
      this._allowedOauthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOauthScopesInput() {
      return this._allowedOauthScopes
    }

    // callback_urls - computed: true, optional: true, required: false
    private _callbackUrls?: string[] | undefined; 
    public get callbackUrls() {
      return this.getListAttribute('callback_urls');
    }
    public set callbackUrls(value: string[] | undefined) {
      this._callbackUrls = value;
    }
    public resetCallbackUrls() {
      this._callbackUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callbackUrlsInput() {
      return this._callbackUrls
    }

    // client_secret - computed: true, optional: false, required: false
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }

    // default_redirect_uri - computed: false, optional: true, required: false
    private _defaultRedirectUri?: string | undefined; 
    public get defaultRedirectUri() {
      return this.getStringAttribute('default_redirect_uri');
    }
    public set defaultRedirectUri(value: string | undefined) {
      this._defaultRedirectUri = value;
    }
    public resetDefaultRedirectUri() {
      this._defaultRedirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRedirectUriInput() {
      return this._defaultRedirectUri
    }

    // enable_token_revocation - computed: true, optional: true, required: false
    private _enableTokenRevocation?: boolean | cdktf.IResolvable | undefined; 
    public get enableTokenRevocation() {
      return this.getBooleanAttribute('enable_token_revocation') as any;
    }
    public set enableTokenRevocation(value: boolean | cdktf.IResolvable | undefined) {
      this._enableTokenRevocation = value;
    }
    public resetEnableTokenRevocation() {
      this._enableTokenRevocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTokenRevocationInput() {
      return this._enableTokenRevocation
    }

    // explicit_auth_flows - computed: false, optional: true, required: false
    private _explicitAuthFlows?: string[] | undefined; 
    public get explicitAuthFlows() {
      return this.getListAttribute('explicit_auth_flows');
    }
    public set explicitAuthFlows(value: string[] | undefined) {
      this._explicitAuthFlows = value;
    }
    public resetExplicitAuthFlows() {
      this._explicitAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explicitAuthFlowsInput() {
      return this._explicitAuthFlows
    }

    // generate_secret - computed: false, optional: true, required: false
    private _generateSecret?: boolean | cdktf.IResolvable | undefined; 
    public get generateSecret() {
      return this.getBooleanAttribute('generate_secret') as any;
    }
    public set generateSecret(value: boolean | cdktf.IResolvable | undefined) {
      this._generateSecret = value;
    }
    public resetGenerateSecret() {
      this._generateSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generateSecretInput() {
      return this._generateSecret
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // id_token_validity - computed: false, optional: true, required: false
    private _idTokenValidity?: number | undefined; 
    public get idTokenValidity() {
      return this.getNumberAttribute('id_token_validity');
    }
    public set idTokenValidity(value: number | undefined) {
      this._idTokenValidity = value;
    }
    public resetIdTokenValidity() {
      this._idTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idTokenValidityInput() {
      return this._idTokenValidity
    }

    // logout_urls - computed: true, optional: true, required: false
    private _logoutUrls?: string[] | undefined; 
    public get logoutUrls() {
      return this.getListAttribute('logout_urls');
    }
    public set logoutUrls(value: string[] | undefined) {
      this._logoutUrls = value;
    }
    public resetLogoutUrls() {
      this._logoutUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoutUrlsInput() {
      return this._logoutUrls
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
      return this._name
    }

    // prevent_user_existence_errors - computed: true, optional: true, required: false
    private _preventUserExistenceErrors?: string | undefined; 
    public get preventUserExistenceErrors() {
      return this.getStringAttribute('prevent_user_existence_errors');
    }
    public set preventUserExistenceErrors(value: string | undefined) {
      this._preventUserExistenceErrors = value;
    }
    public resetPreventUserExistenceErrors() {
      this._preventUserExistenceErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preventUserExistenceErrorsInput() {
      return this._preventUserExistenceErrors
    }

    // read_attributes - computed: false, optional: true, required: false
    private _readAttributes?: string[] | undefined; 
    public get readAttributes() {
      return this.getListAttribute('read_attributes');
    }
    public set readAttributes(value: string[] | undefined) {
      this._readAttributes = value;
    }
    public resetReadAttributes() {
      this._readAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readAttributesInput() {
      return this._readAttributes
    }

    // refresh_token_validity - computed: false, optional: true, required: false
    private _refreshTokenValidity?: number | undefined; 
    public get refreshTokenValidity() {
      return this.getNumberAttribute('refresh_token_validity');
    }
    public set refreshTokenValidity(value: number | undefined) {
      this._refreshTokenValidity = value;
    }
    public resetRefreshTokenValidity() {
      this._refreshTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenValidityInput() {
      return this._refreshTokenValidity
    }

    // supported_identity_providers - computed: false, optional: true, required: false
    private _supportedIdentityProviders?: string[] | undefined; 
    public get supportedIdentityProviders() {
      return this.getListAttribute('supported_identity_providers');
    }
    public set supportedIdentityProviders(value: string[] | undefined) {
      this._supportedIdentityProviders = value;
    }
    public resetSupportedIdentityProviders() {
      this._supportedIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedIdentityProvidersInput() {
      return this._supportedIdentityProviders
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // write_attributes - computed: false, optional: true, required: false
    private _writeAttributes?: string[] | undefined; 
    public get writeAttributes() {
      return this.getListAttribute('write_attributes');
    }
    public set writeAttributes(value: string[] | undefined) {
      this._writeAttributes = value;
    }
    public resetWriteAttributes() {
      this._writeAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeAttributesInput() {
      return this._writeAttributes
    }

    // analytics_configuration - computed: false, optional: true, required: false
    private _analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration | undefined; 
    private __analyticsConfigurationOutput = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this as any, "analytics_configuration", true);
    public get analyticsConfiguration() {
      return this.__analyticsConfigurationOutput;
    }
    public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration | undefined) {
      this._analyticsConfiguration = value;
    }
    public resetAnalyticsConfiguration() {
      this._analyticsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyticsConfigurationInput() {
      return this._analyticsConfiguration
    }

    // token_validity_units - computed: false, optional: true, required: false
    private _tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits | undefined; 
    private __tokenValidityUnitsOutput = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this as any, "token_validity_units", true);
    public get tokenValidityUnits() {
      return this.__tokenValidityUnitsOutput;
    }
    public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits | undefined) {
      this._tokenValidityUnits = value;
    }
    public resetTokenValidityUnits() {
      this._tokenValidityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValidityUnitsInput() {
      return this._tokenValidityUnits
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
        allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
        allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
        allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
        callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
        default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
        enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
        explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
        generate_secret: cdktf.booleanToTerraform(this._generateSecret),
        id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
        logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
        name: cdktf.stringToTerraform(this._name),
        prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
        read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
        refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
        supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
        write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
        analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration),
        token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits),
      };
    }
  }
  export interface CognitoUserPoolDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#certificate_arn CognitoUserPoolDomain#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#domain CognitoUserPoolDomain#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#user_pool_id CognitoUserPoolDomain#user_pool_id}
    */
    readonly userPoolId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain}
  */
  export class CognitoUserPoolDomain extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_pool_domain";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolDomainConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoUserPoolDomainConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_pool_domain',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateArn = config.certificateArn;
      this._domain = config.domain;
      this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }

    // certificate_arn - computed: false, optional: true, required: false
    private _certificateArn?: string | undefined; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string | undefined) {
      this._certificateArn = value;
    }
    public resetCertificateArn() {
      this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // cloudfront_distribution_arn - computed: true, optional: false, required: false
    public get cloudfrontDistributionArn() {
      return this.getStringAttribute('cloudfront_distribution_arn');
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // s3_bucket - computed: true, optional: false, required: false
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        domain: cdktf.stringToTerraform(this._domain),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      };
    }
  }
  export interface CognitoUserPoolUiCustomizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#client_id CognitoUserPoolUiCustomization#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#css CognitoUserPoolUiCustomization#css}
    */
    readonly css?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#image_file CognitoUserPoolUiCustomization#image_file}
    */
    readonly imageFile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}
    */
    readonly userPoolId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization}
  */
  export class CognitoUserPoolUiCustomization extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_pool_ui_customization";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolUiCustomizationConfig
    */
    public constructor(scope: Construct, id: string, config: CognitoUserPoolUiCustomizationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_pool_ui_customization',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientId = config.clientId;
      this._css = config.css;
      this._imageFile = config.imageFile;
      this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_id - computed: false, optional: true, required: false
    private _clientId?: string | undefined; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string | undefined) {
      this._clientId = value;
    }
    public resetClientId() {
      this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // css - computed: false, optional: true, required: false
    private _css?: string | undefined; 
    public get css() {
      return this.getStringAttribute('css');
    }
    public set css(value: string | undefined) {
      this._css = value;
    }
    public resetCss() {
      this._css = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cssInput() {
      return this._css
    }

    // css_version - computed: true, optional: false, required: false
    public get cssVersion() {
      return this.getStringAttribute('css_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_file - computed: false, optional: true, required: false
    private _imageFile?: string | undefined; 
    public get imageFile() {
      return this.getStringAttribute('image_file');
    }
    public set imageFile(value: string | undefined) {
      this._imageFile = value;
    }
    public resetImageFile() {
      this._imageFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageFileInput() {
      return this._imageFile
    }

    // image_url - computed: true, optional: false, required: false
    public get imageUrl() {
      return this.getStringAttribute('image_url');
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
      return this.getStringAttribute('last_modified_date');
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        client_id: cdktf.stringToTerraform(this._clientId),
        css: cdktf.stringToTerraform(this._css),
        image_file: cdktf.stringToTerraform(this._imageFile),
        user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      };
    }
  }
  export interface DataAwsCognitoUserPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html#name DataAwsCognitoUserPools#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html aws_cognito_user_pools}
  */
  export class DataAwsCognitoUserPools extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cognito_user_pools";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html aws_cognito_user_pools} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoUserPoolsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cognito_user_pools',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
}
