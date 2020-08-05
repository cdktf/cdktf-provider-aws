// https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "attributes": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "fixed_rate": {
        "type": "number",
        "required": true
      },
      "host": {
        "type": "string",
        "required": true
      },
      "http_method": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "priority": {
        "type": "number",
        "required": true
      },
      "reservoir_size": {
        "type": "number",
        "required": true
      },
      "resource_arn": {
        "type": "string",
        "required": true
      },
      "rule_name": {
        "type": "string",
        "optional": true
      },
      "service_name": {
        "type": "string",
        "required": true
      },
      "service_type": {
        "type": "string",
        "required": true
      },
      "url_path": {
        "type": "string",
        "required": true
      },
      "version": {
        "type": "number",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface XraySamplingRuleConfig extends TerraformMetaArguments {
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

export class XraySamplingRule extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string };
  public get attributes() {
    return this._attributes;
  }
  public set attributes(value: { [key: string]: string } | undefined) {
    this._attributes = value;
  }

  // fixed_rate - computed: false, optional: false, required: true
  private _fixedRate: number;
  public get fixedRate() {
    return this._fixedRate;
  }
  public set fixedRate(value: number) {
    this._fixedRate = value;
  }

  // host - computed: false, optional: false, required: true
  private _host: string;
  public get host() {
    return this._host;
  }
  public set host(value: string) {
    this._host = value;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod: string;
  public get httpMethod() {
    return this._httpMethod;
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // reservoir_size - computed: false, optional: false, required: true
  private _reservoirSize: number;
  public get reservoirSize() {
    return this._reservoirSize;
  }
  public set reservoirSize(value: number) {
    this._reservoirSize = value;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this._resourceArn;
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string;
  public get ruleName() {
    return this._ruleName;
  }
  public set ruleName(value: string | undefined) {
    this._ruleName = value;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType: string;
  public get serviceType() {
    return this._serviceType;
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }

  // url_path - computed: false, optional: false, required: true
  private _urlPath: string;
  public get urlPath() {
    return this._urlPath;
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: number;
  public get version() {
    return this._version;
  }
  public set version(value: number) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: this._attributes,
      fixed_rate: this._fixedRate,
      host: this._host,
      http_method: this._httpMethod,
      priority: this._priority,
      reservoir_size: this._reservoirSize,
      resource_arn: this._resourceArn,
      rule_name: this._ruleName,
      service_name: this._serviceName,
      service_type: this._serviceType,
      url_path: this._urlPath,
      version: this._version,
    };
  }
}
