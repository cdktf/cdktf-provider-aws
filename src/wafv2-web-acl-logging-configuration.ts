// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_destination_configs": {
        "type": [
          "set",
          "string"
        ],
        "description": "AWS Kinesis Firehose Delivery Stream ARNs",
        "required": true
      },
      "resource_arn": {
        "type": "string",
        "description": "AWS WebACL ARN",
        "required": true
      }
    },
    "block_types": {
      "redacted_fields": {
        "nesting_mode": "set",
        "block": {
          "block_types": {
            "all_query_arguments": {
              "nesting_mode": "list",
              "block": {},
              "max_items": 1
            },
            "body": {
              "nesting_mode": "list",
              "block": {},
              "max_items": 1
            },
            "method": {
              "nesting_mode": "list",
              "block": {},
              "max_items": 1
            },
            "query_string": {
              "nesting_mode": "list",
              "block": {},
              "max_items": 1
            },
            "single_header": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "single_query_argument": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "uri_path": {
              "nesting_mode": "list",
              "block": {},
              "max_items": 1
            }
          }
        },
        "max_items": 100
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Wafv2WebAclLoggingConfigurationConfig extends TerraformMetaArguments {
  /** AWS Kinesis Firehose Delivery Stream ARNs */
  readonly logDestinationConfigs: string[];
  /** AWS WebACL ARN */
  readonly resourceArn: string;
  /** redacted_fields block */
  readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsBody {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
  readonly name: string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument {
  readonly name: string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFields {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2WebAclLoggingConfigurationRedactedFieldsBody[];
  /** method block */
  readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod[];
  /** query_string block */
  readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath[];
}

// Resource

export class Wafv2WebAclLoggingConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logDestinationConfigs = config.logDestinationConfigs;
    this._resourceArn = config.resourceArn;
    this._redactedFields = config.redactedFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_destination_configs - computed: false, optional: false, required: true
  private _logDestinationConfigs: string[];
  public get logDestinationConfigs() {
    return this._logDestinationConfigs;
  }
  public set logDestinationConfigs(value: string[]) {
    this._logDestinationConfigs = value;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this._resourceArn;
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
  public get redactedFields() {
    return this._redactedFields;
  }
  public set redactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[] | undefined) {
    this._redactedFields = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      log_destination_configs: this._logDestinationConfigs,
      resource_arn: this._resourceArn,
      redacted_fields: this._redactedFields,
    };
  }
}
