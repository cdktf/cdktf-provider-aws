// https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
  readonly attributes?: { [key: string]: string };
  readonly fixedRate: number;
  readonly host: string;
  readonly httpMethod: string;
  readonly priority: number;
  readonly reservoirSize: number;
  readonly resourceArn: string;
  readonly ruleName?: string;
  readonly serviceName: string;
  readonly serviceType: string;
  readonly urlPath: string;
  readonly version: number;
}

// Resource

export class XraySamplingRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: XraySamplingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_xray_sampling_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributes = config.attributes;
    this._fixedRate = config.fixedRate;
    this._host = config.host;
    this._httpMethod = config.httpMethod;
    this._priority = config.priority;
    this._reservoirSize = config.reservoirSize;
    this._resourceArn = config.resourceArn;
    this._ruleName = config.ruleName;
    this._serviceName = config.serviceName;
    this._serviceType = config.serviceType;
    this._urlPath = config.urlPath;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string };
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } ) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
  }

  // fixed_rate - computed: false, optional: false, required: true
  private _fixedRate: number;
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }
  public set fixedRate(value: number) {
    this._fixedRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedRateInput() {
    return this._fixedRate
  }

  // host - computed: false, optional: false, required: true
  private _host: string;
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod: string;
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // reservoir_size - computed: false, optional: false, required: true
  private _reservoirSize: number;
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }
  public set reservoirSize(value: number) {
    this._reservoirSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservoirSizeInput() {
    return this._reservoirSize
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string;
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string ) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType: string;
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType
  }

  // url_path - computed: false, optional: false, required: true
  private _urlPath: string;
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath
  }

  // version - computed: false, optional: false, required: true
  private _version: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
      fixed_rate: cdktf.numberToTerraform(this._fixedRate),
      host: cdktf.stringToTerraform(this._host),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      priority: cdktf.numberToTerraform(this._priority),
      reservoir_size: cdktf.numberToTerraform(this._reservoirSize),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_type: cdktf.stringToTerraform(this._serviceType),
      url_path: cdktf.stringToTerraform(this._urlPath),
      version: cdktf.numberToTerraform(this._version),
    };
  }
}
