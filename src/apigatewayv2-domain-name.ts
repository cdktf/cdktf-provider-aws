// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
  readonly domainName: string;
  readonly tags?: { [key: string]: string };
  /** domain_name_configuration block */
  readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration[];
  /** timeouts block */
  readonly timeouts?: Apigatewayv2DomainNameTimeouts;
}
export interface Apigatewayv2DomainNameDomainNameConfiguration {
  readonly certificateArn: string;
  readonly endpointType: string;
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

export interface Apigatewayv2DomainNameTimeouts {
  readonly update?: string;
}

function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Apigatewayv2DomainName extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._domainNameConfiguration = config.domainNameConfiguration;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      domain_name_configuration: cdktf.listMapper(apigatewayv2DomainNameDomainNameConfigurationToTerraform)(this._domainNameConfiguration),
      timeouts: apigatewayv2DomainNameTimeoutsToTerraform(this._timeouts),
    };
  }
}
