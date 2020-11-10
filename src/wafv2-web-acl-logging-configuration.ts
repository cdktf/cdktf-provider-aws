// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html
// generated from terraform resource schema

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination_configs - computed: false, optional: false, required: true
  private _logDestinationConfigs: string[];
  public get logDestinationConfigs() {
    return this.getListAttribute('log_destination_configs');
  }
  public set logDestinationConfigs(value: string[]) {
    this._logDestinationConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationConfigsInput() {
    return this._logDestinationConfigs
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

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
  public get redactedFields() {
    return this.interpolationForAttribute('redacted_fields') as any;
  }
  public set redactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[] ) {
    this._redactedFields = value;
  }
  public resetRedactedFields() {
    this._redactedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_destination_configs: this._logDestinationConfigs,
      resource_arn: this._resourceArn,
      redacted_fields: this._redactedFields,
    };
  }
}
