// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2WebAclLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Kinesis Firehose Delivery Stream ARNs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#log_destination_configs Wafv2WebAclLoggingConfiguration#log_destination_configs}
  */
  readonly logDestinationConfigs: string[];
  /**
  * AWS WebACL ARN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#resource_arn Wafv2WebAclLoggingConfiguration#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * logging_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#logging_filter Wafv2WebAclLoggingConfiguration#logging_filter}
  */
  readonly loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter[];
  /**
  * redacted_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#redacted_fields Wafv2WebAclLoggingConfiguration#redacted_fields}
  */
  readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action Wafv2WebAclLoggingConfiguration#action}
  */
  readonly action: string;
}

function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name Wafv2WebAclLoggingConfiguration#label_name}
  */
  readonly labelName: string;
}

function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
  }
}

export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition {
  /**
  * action_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action_condition Wafv2WebAclLoggingConfiguration#action_condition}
  */
  readonly actionCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition[];
  /**
  * label_name_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name_condition Wafv2WebAclLoggingConfiguration#label_name_condition}
  */
  readonly labelNameCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition[];
}

function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform)(struct!.actionCondition),
    label_name_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform)(struct!.labelNameCondition),
  }
}

export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#behavior Wafv2WebAclLoggingConfiguration#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#requirement Wafv2WebAclLoggingConfiguration#requirement}
  */
  readonly requirement: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#condition Wafv2WebAclLoggingConfiguration#condition}
  */
  readonly condition: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[];
}

function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    requirement: cdktf.stringToTerraform(struct!.requirement),
    condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform)(struct!.condition),
  }
}

export interface Wafv2WebAclLoggingConfigurationLoggingFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#default_behavior Wafv2WebAclLoggingConfiguration#default_behavior}
  */
  readonly defaultBehavior: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#filter Wafv2WebAclLoggingConfiguration#filter}
  */
  readonly filter: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[];
}

function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_behavior: cdktf.stringToTerraform(struct!.defaultBehavior),
    filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform)(struct!.filter),
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments {
}

function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsBody {
}

function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}

function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}

function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}
  */
  readonly name: string;
}

function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}
  */
  readonly name: string;
}

function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}

function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2WebAclLoggingConfigurationRedactedFields {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#all_query_arguments Wafv2WebAclLoggingConfiguration#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments[];
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#body Wafv2WebAclLoggingConfiguration#body}
  */
  readonly body?: Wafv2WebAclLoggingConfigurationRedactedFieldsBody[];
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#method Wafv2WebAclLoggingConfiguration#method}
  */
  readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod[];
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#query_string Wafv2WebAclLoggingConfiguration#query_string}
  */
  readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString[];
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_header Wafv2WebAclLoggingConfiguration#single_header}
  */
  readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader[];
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_query_argument Wafv2WebAclLoggingConfiguration#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument[];
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#uri_path Wafv2WebAclLoggingConfiguration#uri_path}
  */
  readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath[];
}

function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform)(struct!.uriPath),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}
*/
export class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafv2_web_acl_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclLoggingConfigurationConfig
  */
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
    this._loggingFilter = config.loggingFilter;
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

  // logging_filter - computed: false, optional: true, required: false
  private _loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter[];
  public get loggingFilter() {
    return this.interpolationForAttribute('logging_filter') as any;
  }
  public set loggingFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilter[] ) {
    this._loggingFilter = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter
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
      log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform)(this._logDestinationConfigs),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      logging_filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterToTerraform)(this._loggingFilter),
      redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform)(this._redactedFields),
    };
  }
}
