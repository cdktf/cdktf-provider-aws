// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
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
  readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration;
  /**
  * mutual_tls_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication;
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

export function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct?: Apigatewayv2DomainNameDomainNameConfigurationOutputReference | Apigatewayv2DomainNameDomainNameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
  }
}

export class Apigatewayv2DomainNameDomainNameConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Apigatewayv2DomainNameDomainNameConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._certificateArn) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._endpointType) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._securityPolicy) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2DomainNameDomainNameConfiguration | undefined) {
    if (value === undefined) {
      this._certificateArn = undefined;
      this._endpointType = undefined;
      this._securityPolicy = undefined;
    }
    else {
      this._certificateArn = value.certificateArn;
      this._endpointType = value.endpointType;
      this._securityPolicy = value.securityPolicy;
    }
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // security_policy - computed: false, optional: false, required: true
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
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

export function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference | Apigatewayv2DomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}

export class Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Apigatewayv2DomainNameMutualTlsAuthentication | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._truststoreUri) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    if (this._truststoreVersion) {
      hasAnyValues = true;
      internalValueResult.truststoreVersion = this._truststoreVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2DomainNameMutualTlsAuthentication | undefined) {
    if (value === undefined) {
      this._truststoreUri = undefined;
      this._truststoreVersion = undefined;
    }
    else {
      this._truststoreUri = value.truststoreUri;
      this._truststoreVersion = value.truststoreVersion;
    }
  }

  // truststore_uri - computed: false, optional: false, required: true
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }

  // truststore_version - computed: false, optional: true, required: false
  private _truststoreVersion?: string; 
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
  public set truststoreVersion(value: string) {
    this._truststoreVersion = value;
  }
  public resetTruststoreVersion() {
    this._truststoreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreVersionInput() {
    return this._truststoreVersion;
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

export function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeoutsOutputReference | Apigatewayv2DomainNameTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class Apigatewayv2DomainNameTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Apigatewayv2DomainNameTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2DomainNameTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
    this._domainNameConfiguration.internalValue = config.domainNameConfiguration;
    this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
    this._timeouts.internalValue = config.timeouts;
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
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // domain_name_configuration - computed: false, optional: false, required: true
  private _domainNameConfiguration = new Apigatewayv2DomainNameDomainNameConfigurationOutputReference(this as any, "domain_name_configuration", true);
  public get domainNameConfiguration() {
    return this._domainNameConfiguration;
  }
  public putDomainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration) {
    this._domainNameConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameConfigurationInput() {
    return this._domainNameConfiguration.internalValue;
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication = new Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(this as any, "mutual_tls_authentication", true);
  public get mutualTlsAuthentication() {
    return this._mutualTlsAuthentication;
  }
  public putMutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication) {
    this._mutualTlsAuthentication.internalValue = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Apigatewayv2DomainNameTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Apigatewayv2DomainNameTimeouts) {
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
      domain_name: cdktf.stringToTerraform(this._domainName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      domain_name_configuration: apigatewayv2DomainNameDomainNameConfigurationToTerraform(this._domainNameConfiguration.internalValue),
      mutual_tls_authentication: apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication.internalValue),
      timeouts: apigatewayv2DomainNameTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
