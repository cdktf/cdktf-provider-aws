// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_mapping_selection_expression": {
        "type": "string",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "domain_name_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "certificate_arn": {
              "type": "string",
              "required": true
            },
            "endpoint_type": {
              "type": "string",
              "required": true
            },
            "hosted_zone_id": {
              "type": "string",
              "computed": true
            },
            "security_policy": {
              "type": "string",
              "required": true
            },
            "target_domain_name": {
              "type": "string",
              "computed": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2DomainNameConfig extends TerraformMetaArguments {
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
export interface Apigatewayv2DomainNameTimeouts {
  readonly update?: string;
}

// Resource

export class Apigatewayv2DomainName extends TerraformResource {

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

  // api_mapping_selection_expression - computed: true, optional: false, required: true
  public get apiMappingSelectionExpression() {
    return this.getStringAttribute('api_mapping_selection_expression');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // domain_name_configuration - computed: false, optional: false, required: true
  private _domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration[];
  public get domainNameConfiguration() {
    return this._domainNameConfiguration;
  }
  public set domainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration[]) {
    this._domainNameConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Apigatewayv2DomainNameTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: Apigatewayv2DomainNameTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      tags: this._tags,
      domain_name_configuration: this._domainNameConfiguration,
      timeouts: this._timeouts,
    };
  }
}
