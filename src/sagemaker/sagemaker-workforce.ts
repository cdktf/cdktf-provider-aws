// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}
  */
  readonly workforceName: string;
  /**
  * cognito_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}
  */
  readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
  /**
  * oidc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}
  */
  readonly oidcConfig?: SagemakerWorkforceOidcConfig;
  /**
  * source_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}
  */
  readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
}
export interface SagemakerWorkforceCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}
  */
  readonly userPool: string;
}

export function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    user_pool: cdktf.stringToTerraform(struct!.userPool),
  }
}

export class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerWorkforceCognitoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._userPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPool = this._userPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceCognitoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._userPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._userPool = value.userPool;
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

  // user_pool - computed: false, optional: false, required: true
  private _userPool?: string; 
  public get userPool() {
    return this.getStringAttribute('user_pool');
  }
  public set userPool(value: string) {
    this._userPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolInput() {
    return this._userPool;
  }
}
export interface SagemakerWorkforceOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}
  */
  readonly jwksUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}
  */
  readonly logoutEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    logout_endpoint: cdktf.stringToTerraform(struct!.logoutEndpoint),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
  }
}

export class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerWorkforceOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._logoutEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutEndpoint = this._logoutEndpoint;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._jwksUri = undefined;
      this._logoutEndpoint = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._jwksUri = value.jwksUri;
      this._logoutEndpoint = value.logoutEndpoint;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: false, required: true
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // logout_endpoint - computed: false, optional: false, required: true
  private _logoutEndpoint?: string; 
  public get logoutEndpoint() {
    return this.getStringAttribute('logout_endpoint');
  }
  public set logoutEndpoint(value: string) {
    this._logoutEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEndpointInput() {
    return this._logoutEndpoint;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface SagemakerWorkforceSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}
  */
  readonly cidrs: string[];
}

export function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
  }
}

export class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerWorkforceSourceIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceSourceIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce aws_sagemaker_workforce}
*/
export class SagemakerWorkforce extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_workforce";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce aws_sagemaker_workforce} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerWorkforceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workforce',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._workforceName = config.workforceName;
    this._cognitoConfig.internalValue = config.cognitoConfig;
    this._oidcConfig.internalValue = config.oidcConfig;
    this._sourceIpConfig.internalValue = config.sourceIpConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // workforce_name - computed: false, optional: false, required: true
  private _workforceName?: string; 
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName;
  }

  // cognito_config - computed: false, optional: true, required: false
  private _cognitoConfig = new SagemakerWorkforceCognitoConfigOutputReference(this, "cognito_config", true);
  public get cognitoConfig() {
    return this._cognitoConfig;
  }
  public putCognitoConfig(value: SagemakerWorkforceCognitoConfig) {
    this._cognitoConfig.internalValue = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig.internalValue;
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig = new SagemakerWorkforceOidcConfigOutputReference(this, "oidc_config", true);
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: SagemakerWorkforceOidcConfig) {
    this._oidcConfig.internalValue = value;
  }
  public resetOidcConfig() {
    this._oidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }

  // source_ip_config - computed: false, optional: true, required: false
  private _sourceIpConfig = new SagemakerWorkforceSourceIpConfigOutputReference(this, "source_ip_config", true);
  public get sourceIpConfig() {
    return this._sourceIpConfig;
  }
  public putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig) {
    this._sourceIpConfig.internalValue = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workforce_name: cdktf.stringToTerraform(this._workforceName),
      cognito_config: sagemakerWorkforceCognitoConfigToTerraform(this._cognitoConfig.internalValue),
      oidc_config: sagemakerWorkforceOidcConfigToTerraform(this._oidcConfig.internalValue),
      source_ip_config: sagemakerWorkforceSourceIpConfigToTerraform(this._sourceIpConfig.internalValue),
    };
  }
}
