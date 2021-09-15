// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name Apigatewayv2DomainName#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags Apigatewayv2DomainName#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags_all Apigatewayv2DomainName#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * domain_name_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}
  */
  readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration[];
  /**
  * mutual_tls_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#timeouts Apigatewayv2DomainName#timeouts}
  */
  readonly timeouts?: Apigatewayv2DomainNameTimeouts;
}
export interface Apigatewayv2DomainNameDomainNameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#certificate_arn Apigatewayv2DomainName#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#endpoint_type Apigatewayv2DomainName#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#security_policy Apigatewayv2DomainName#security_policy}
  */
  readonly securityPolicy: string;
}

function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct?: Apigatewayv2DomainNameDomainNameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
  }
}

export interface Apigatewayv2DomainNameMutualTlsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_uri Apigatewayv2DomainName#truststore_uri}
  */
  readonly truststoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_version Apigatewayv2DomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}

function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}

export interface Apigatewayv2DomainNameTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#create Apigatewayv2DomainName#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#update Apigatewayv2DomainName#update}
  */
  readonly update?: string;
}

function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name}
*/
export class Apigatewayv2DomainName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apigatewayv2_domain_name";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2DomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2DomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._domainNameConfiguration = config.domainNameConfiguration;
    this._mutualTlsAuthentication = config.mutualTlsAuthentication;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_mapping_selection_expression - computed: true, optional: false, required: false
  public get apiMappingSelectionExpression() {
    return this.getStringAttribute('api_mapping_selection_expression');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // domain_name_configuration - computed: false, optional: false, required: true
  private _domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration[];
  public get domainNameConfiguration() {
    return this.interpolationForAttribute('domain_name_configuration') as any;
  }
  public set domainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration[]) {
    this._domainNameConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameConfigurationInput() {
    return this._domainNameConfiguration
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication[];
  public get mutualTlsAuthentication() {
    return this.interpolationForAttribute('mutual_tls_authentication') as any;
  }
  public set mutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication[] ) {
    this._mutualTlsAuthentication = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Apigatewayv2DomainNameTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Apigatewayv2DomainNameTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      domain_name_configuration: cdktf.listMapper(apigatewayv2DomainNameDomainNameConfigurationToTerraform)(this._domainNameConfiguration),
      mutual_tls_authentication: cdktf.listMapper(apigatewayv2DomainNameMutualTlsAuthenticationToTerraform)(this._mutualTlsAuthentication),
      timeouts: apigatewayv2DomainNameTimeoutsToTerraform(this._timeouts),
    };
  }
}
