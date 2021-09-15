// https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#workforce_name SagemakerWorkforce#workforce_name}
  */
  readonly workforceName: string;
  /**
  * cognito_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cognito_config SagemakerWorkforce#cognito_config}
  */
  readonly cognitoConfig?: SagemakerWorkforceCognitoConfig[];
  /**
  * oidc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#oidc_config SagemakerWorkforce#oidc_config}
  */
  readonly oidcConfig?: SagemakerWorkforceOidcConfig[];
  /**
  * source_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#source_ip_config SagemakerWorkforce#source_ip_config}
  */
  readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig[];
}
export interface SagemakerWorkforceCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_pool SagemakerWorkforce#user_pool}
  */
  readonly userPool: string;
}

function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    user_pool: cdktf.stringToTerraform(struct!.userPool),
  }
}

export interface SagemakerWorkforceOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_secret SagemakerWorkforce#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#issuer SagemakerWorkforce#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#jwks_uri SagemakerWorkforce#jwks_uri}
  */
  readonly jwksUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#logout_endpoint SagemakerWorkforce#logout_endpoint}
  */
  readonly logoutEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#token_endpoint SagemakerWorkforce#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface SagemakerWorkforceSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cidrs SagemakerWorkforce#cidrs}
  */
  readonly cidrs: string[];
}

function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
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
    this._cognitoConfig = config.cognitoConfig;
    this._oidcConfig = config.oidcConfig;
    this._sourceIpConfig = config.sourceIpConfig;
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
  private _workforceName: string;
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName
  }

  // cognito_config - computed: false, optional: true, required: false
  private _cognitoConfig?: SagemakerWorkforceCognitoConfig[];
  public get cognitoConfig() {
    return this.interpolationForAttribute('cognito_config') as any;
  }
  public set cognitoConfig(value: SagemakerWorkforceCognitoConfig[] ) {
    this._cognitoConfig = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig?: SagemakerWorkforceOidcConfig[];
  public get oidcConfig() {
    return this.interpolationForAttribute('oidc_config') as any;
  }
  public set oidcConfig(value: SagemakerWorkforceOidcConfig[] ) {
    this._oidcConfig = value;
  }
  public resetOidcConfig() {
    this._oidcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig
  }

  // source_ip_config - computed: false, optional: true, required: false
  private _sourceIpConfig?: SagemakerWorkforceSourceIpConfig[];
  public get sourceIpConfig() {
    return this.interpolationForAttribute('source_ip_config') as any;
  }
  public set sourceIpConfig(value: SagemakerWorkforceSourceIpConfig[] ) {
    this._sourceIpConfig = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workforce_name: cdktf.stringToTerraform(this._workforceName),
      cognito_config: cdktf.listMapper(sagemakerWorkforceCognitoConfigToTerraform)(this._cognitoConfig),
      oidc_config: cdktf.listMapper(sagemakerWorkforceOidcConfigToTerraform)(this._oidcConfig),
      source_ip_config: cdktf.listMapper(sagemakerWorkforceSourceIpConfigToTerraform)(this._sourceIpConfig),
    };
  }
}
