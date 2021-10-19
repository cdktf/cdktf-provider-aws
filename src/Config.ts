// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export namespace Config {
  export interface ConfigAggregateAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#account_id ConfigAggregateAuthorization#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#region ConfigAggregateAuthorization#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags ConfigAggregateAuthorization#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags_all ConfigAggregateAuthorization#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization}
  */
  export class ConfigAggregateAuthorization extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_aggregate_authorization";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigAggregateAuthorizationConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigAggregateAuthorizationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_aggregate_authorization',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._region = config.region;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string) {
      this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        region: cdktf.stringToTerraform(this._region),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#description ConfigConfigRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#input_parameters ConfigConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#name ConfigConfigRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags ConfigConfigRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags_all ConfigConfigRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * scope block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#scope ConfigConfigRule#scope}
    */
    readonly scope?: ConfigConfigRuleScope;
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source ConfigConfigRule#source}
    */
    readonly source: ConfigConfigRuleSource;
  }
  export interface ConfigConfigRuleScope {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_id ConfigConfigRule#compliance_resource_id}
    */
    readonly complianceResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_types ConfigConfigRule#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_key ConfigConfigRule#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_value ConfigConfigRule#tag_value}
    */
    readonly tagValue?: string;
  }

  function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      compliance_resource_id: cdktf.stringToTerraform(struct!.complianceResourceId),
      compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.complianceResourceTypes),
      tag_key: cdktf.stringToTerraform(struct!.tagKey),
      tag_value: cdktf.stringToTerraform(struct!.tagValue),
    }
  }

  export class ConfigConfigRuleScopeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // compliance_resource_id - computed: false, optional: true, required: false
    private _complianceResourceId?: string | undefined; 
    public get complianceResourceId() {
      return this.getStringAttribute('compliance_resource_id');
    }
    public set complianceResourceId(value: string | undefined) {
      this._complianceResourceId = value;
    }
    public resetComplianceResourceId() {
      this._complianceResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceIdInput() {
      return this._complianceResourceId
    }

    // compliance_resource_types - computed: false, optional: true, required: false
    private _complianceResourceTypes?: string[] | undefined; 
    public get complianceResourceTypes() {
      return this.getListAttribute('compliance_resource_types');
    }
    public set complianceResourceTypes(value: string[] | undefined) {
      this._complianceResourceTypes = value;
    }
    public resetComplianceResourceTypes() {
      this._complianceResourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceTypesInput() {
      return this._complianceResourceTypes
    }

    // tag_key - computed: false, optional: true, required: false
    private _tagKey?: string | undefined; 
    public get tagKey() {
      return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string | undefined) {
      this._tagKey = value;
    }
    public resetTagKey() {
      this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
      return this._tagKey
    }

    // tag_value - computed: false, optional: true, required: false
    private _tagValue?: string | undefined; 
    public get tagValue() {
      return this.getStringAttribute('tag_value');
    }
    public set tagValue(value: string | undefined) {
      this._tagValue = value;
    }
    public resetTagValue() {
      this._tagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueInput() {
      return this._tagValue
    }
  }
  export interface ConfigConfigRuleSourceSourceDetail {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#event_source ConfigConfigRule#event_source}
    */
    readonly eventSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#message_type ConfigConfigRule#message_type}
    */
    readonly messageType?: string;
  }

  function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      event_source: cdktf.stringToTerraform(struct!.eventSource),
      maximum_execution_frequency: cdktf.stringToTerraform(struct!.maximumExecutionFrequency),
      message_type: cdktf.stringToTerraform(struct!.messageType),
    }
  }

  export interface ConfigConfigRuleSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#owner ConfigConfigRule#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_identifier ConfigConfigRule#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * source_detail block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_detail ConfigConfigRule#source_detail}
    */
    readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
  }

  function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      owner: cdktf.stringToTerraform(struct!.owner),
      source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
      source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform)(struct!.sourceDetail),
    }
  }

  export class ConfigConfigRuleSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
      this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
      return this._owner
    }

    // source_identifier - computed: false, optional: false, required: true
    private _sourceIdentifier?: string; 
    public get sourceIdentifier() {
      return this.getStringAttribute('source_identifier');
    }
    public set sourceIdentifier(value: string) {
      this._sourceIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdentifierInput() {
      return this._sourceIdentifier
    }

    // source_detail - computed: false, optional: true, required: false
    private _sourceDetail?: ConfigConfigRuleSourceSourceDetail[] | undefined; 
    public get sourceDetail() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('source_detail') as any;
    }
    public set sourceDetail(value: ConfigConfigRuleSourceSourceDetail[] | undefined) {
      this._sourceDetail = value;
    }
    public resetSourceDetail() {
      this._sourceDetail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDetailInput() {
      return this._sourceDetail
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}
  */
  export class ConfigConfigRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_config_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_config_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._inputParameters = config.inputParameters;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._scope = config.scope;
      this._source = config.source;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string | undefined; 
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string | undefined) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string | undefined; 
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string | undefined) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
      return this.getStringAttribute('rule_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // scope - computed: false, optional: true, required: false
    private _scope?: ConfigConfigRuleScope | undefined; 
    private __scopeOutput = new ConfigConfigRuleScopeOutputReference(this as any, "scope", true);
    public get scope() {
      return this.__scopeOutput;
    }
    public putScope(value: ConfigConfigRuleScope | undefined) {
      this._scope = value;
    }
    public resetScope() {
      this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
      return this._scope
    }

    // source - computed: false, optional: false, required: true
    private _source?: ConfigConfigRuleSource; 
    private __sourceOutput = new ConfigConfigRuleSourceOutputReference(this as any, "source", true);
    public get source() {
      return this.__sourceOutput;
    }
    public putSource(value: ConfigConfigRuleSource) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        scope: configConfigRuleScopeToTerraform(this._scope),
        source: configConfigRuleSourceToTerraform(this._source),
      };
    }
  }
  export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * account_aggregation_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
    */
    readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
    /**
    * organization_aggregation_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
    */
    readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
  }
  export interface ConfigConfigurationAggregatorAccountAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
  }

  function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
      all_regions: cdktf.booleanToTerraform(struct!.allRegions),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    }
  }

  export class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // account_ids - computed: false, optional: false, required: true
    private _accountIds?: string[]; 
    public get accountIds() {
      return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
      this._accountIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
      return this._accountIds
    }

    // all_regions - computed: false, optional: true, required: false
    private _allRegions?: boolean | cdktf.IResolvable | undefined; 
    public get allRegions() {
      return this.getBooleanAttribute('all_regions') as any;
    }
    public set allRegions(value: boolean | cdktf.IResolvable | undefined) {
      this._allRegions = value;
    }
    public resetAllRegions() {
      this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allRegionsInput() {
      return this._allRegions
    }

    // regions - computed: false, optional: true, required: false
    private _regions?: string[] | undefined; 
    public get regions() {
      return this.getListAttribute('regions');
    }
    public set regions(value: string[] | undefined) {
      this._regions = value;
    }
    public resetRegions() {
      this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
      return this._regions
    }
  }
  export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
    */
    readonly roleArn: string;
  }

  function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      all_regions: cdktf.booleanToTerraform(struct!.allRegions),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // all_regions - computed: false, optional: true, required: false
    private _allRegions?: boolean | cdktf.IResolvable | undefined; 
    public get allRegions() {
      return this.getBooleanAttribute('all_regions') as any;
    }
    public set allRegions(value: boolean | cdktf.IResolvable | undefined) {
      this._allRegions = value;
    }
    public resetAllRegions() {
      this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allRegionsInput() {
      return this._allRegions
    }

    // regions - computed: false, optional: true, required: false
    private _regions?: string[] | undefined; 
    public get regions() {
      return this.getListAttribute('regions');
    }
    public set regions(value: string[] | undefined) {
      this._regions = value;
    }
    public resetRegions() {
      this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
      return this._regions
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
  */
  export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_aggregator";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_aggregator',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._accountAggregationSource = config.accountAggregationSource;
      this._organizationAggregationSource = config.organizationAggregationSource;
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

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // account_aggregation_source - computed: false, optional: true, required: false
    private _accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource | undefined; 
    private __accountAggregationSourceOutput = new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(this as any, "account_aggregation_source", true);
    public get accountAggregationSource() {
      return this.__accountAggregationSourceOutput;
    }
    public putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined) {
      this._accountAggregationSource = value;
    }
    public resetAccountAggregationSource() {
      this._accountAggregationSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountAggregationSourceInput() {
      return this._accountAggregationSource
    }

    // organization_aggregation_source - computed: false, optional: true, required: false
    private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined; 
    private __organizationAggregationSourceOutput = new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(this as any, "organization_aggregation_source", true);
    public get organizationAggregationSource() {
      return this.__organizationAggregationSourceOutput;
    }
    public putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined) {
      this._organizationAggregationSource = value;
    }
    public resetOrganizationAggregationSource() {
      this._organizationAggregationSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationAggregationSourceInput() {
      return this._organizationAggregationSource
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        account_aggregation_source: configConfigurationAggregatorAccountAggregationSourceToTerraform(this._accountAggregationSource),
        organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource),
      };
    }
  }
  export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#name ConfigConfigurationRecorder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#role_arn ConfigConfigurationRecorder#role_arn}
    */
    readonly roleArn: string;
    /**
    * recording_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#recording_group ConfigConfigurationRecorder#recording_group}
    */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
  }
  export interface ConfigConfigurationRecorderRecordingGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#all_supported ConfigConfigurationRecorder#all_supported}
    */
    readonly allSupported?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
    */
    readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
  }

  function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      all_supported: cdktf.booleanToTerraform(struct!.allSupported),
      include_global_resource_types: cdktf.booleanToTerraform(struct!.includeGlobalResourceTypes),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
    }
  }

  export class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // all_supported - computed: false, optional: true, required: false
    private _allSupported?: boolean | cdktf.IResolvable | undefined; 
    public get allSupported() {
      return this.getBooleanAttribute('all_supported') as any;
    }
    public set allSupported(value: boolean | cdktf.IResolvable | undefined) {
      this._allSupported = value;
    }
    public resetAllSupported() {
      this._allSupported = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allSupportedInput() {
      return this._allSupported
    }

    // include_global_resource_types - computed: false, optional: true, required: false
    private _includeGlobalResourceTypes?: boolean | cdktf.IResolvable | undefined; 
    public get includeGlobalResourceTypes() {
      return this.getBooleanAttribute('include_global_resource_types') as any;
    }
    public set includeGlobalResourceTypes(value: boolean | cdktf.IResolvable | undefined) {
      this._includeGlobalResourceTypes = value;
    }
    public resetIncludeGlobalResourceTypes() {
      this._includeGlobalResourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeGlobalResourceTypesInput() {
      return this._includeGlobalResourceTypes
    }

    // resource_types - computed: false, optional: true, required: false
    private _resourceTypes?: string[] | undefined; 
    public get resourceTypes() {
      return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[] | undefined) {
      this._resourceTypes = value;
    }
    public resetResourceTypes() {
      this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
      return this._resourceTypes
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}
  */
  export class ConfigConfigurationRecorder extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_recorder";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_recorder',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._roleArn = config.roleArn;
      this._recordingGroup = config.recordingGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // recording_group - computed: false, optional: true, required: false
    private _recordingGroup?: ConfigConfigurationRecorderRecordingGroup | undefined; 
    private __recordingGroupOutput = new ConfigConfigurationRecorderRecordingGroupOutputReference(this as any, "recording_group", true);
    public get recordingGroup() {
      return this.__recordingGroupOutput;
    }
    public putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup | undefined) {
      this._recordingGroup = value;
    }
    public resetRecordingGroup() {
      this._recordingGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingGroupInput() {
      return this._recordingGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        recording_group: configConfigurationRecorderRecordingGroupToTerraform(this._recordingGroup),
      };
    }
  }
  export interface ConfigConfigurationRecorderStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#is_enabled ConfigConfigurationRecorderStatus#is_enabled}
    */
    readonly isEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#name ConfigConfigurationRecorderStatus#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status}
  */
  export class ConfigConfigurationRecorderStatus extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_recorder_status";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderStatusConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderStatusConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_recorder_status',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._isEnabled = config.isEnabled;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_enabled - computed: false, optional: false, required: true
    private _isEnabled?: boolean | cdktf.IResolvable; 
    public get isEnabled() {
      return this.getBooleanAttribute('is_enabled') as any;
    }
    public set isEnabled(value: boolean | cdktf.IResolvable) {
      this._isEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
      return this._isEnabled
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        is_enabled: cdktf.booleanToTerraform(this._isEnabled),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#name ConfigConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_body ConfigConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_s3_uri ConfigConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#input_parameter ConfigConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigConformancePackInputParameter[];
  }
  export interface ConfigConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_name ConfigConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_value ConfigConformancePack#parameter_value}
    */
    readonly parameterValue: string;
  }

  function configConformancePackInputParameterToTerraform(struct?: ConfigConformancePackInputParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      parameter_name: cdktf.stringToTerraform(struct!.parameterName),
      parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}
  */
  export class ConfigConformancePack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_conformance_pack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConformancePackConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConformancePackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_conformance_pack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deliveryS3Bucket = config.deliveryS3Bucket;
      this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
      this._name = config.name;
      this._templateBody = config.templateBody;
      this._templateS3Uri = config.templateS3Uri;
      this._inputParameter = config.inputParameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delivery_s3_bucket - computed: false, optional: true, required: false
    private _deliveryS3Bucket?: string | undefined; 
    public get deliveryS3Bucket() {
      return this.getStringAttribute('delivery_s3_bucket');
    }
    public set deliveryS3Bucket(value: string | undefined) {
      this._deliveryS3Bucket = value;
    }
    public resetDeliveryS3Bucket() {
      this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3BucketInput() {
      return this._deliveryS3Bucket
    }

    // delivery_s3_key_prefix - computed: false, optional: true, required: false
    private _deliveryS3KeyPrefix?: string | undefined; 
    public get deliveryS3KeyPrefix() {
      return this.getStringAttribute('delivery_s3_key_prefix');
    }
    public set deliveryS3KeyPrefix(value: string | undefined) {
      this._deliveryS3KeyPrefix = value;
    }
    public resetDeliveryS3KeyPrefix() {
      this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3KeyPrefixInput() {
      return this._deliveryS3KeyPrefix
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // template_body - computed: false, optional: true, required: false
    private _templateBody?: string | undefined; 
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string | undefined) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_s3_uri - computed: false, optional: true, required: false
    private _templateS3Uri?: string | undefined; 
    public get templateS3Uri() {
      return this.getStringAttribute('template_s3_uri');
    }
    public set templateS3Uri(value: string | undefined) {
      this._templateS3Uri = value;
    }
    public resetTemplateS3Uri() {
      this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateS3UriInput() {
      return this._templateS3Uri
    }

    // input_parameter - computed: false, optional: true, required: false
    private _inputParameter?: ConfigConformancePackInputParameter[] | undefined; 
    public get inputParameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('input_parameter') as any;
    }
    public set inputParameter(value: ConfigConformancePackInputParameter[] | undefined) {
      this._inputParameter = value;
    }
    public resetInputParameter() {
      this._inputParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParameterInput() {
      return this._inputParameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
        delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
        name: cdktf.stringToTerraform(this._name),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
        input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform)(this._inputParameter),
      };
    }
  }
  export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#name ConfigDeliveryChannel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
    */
    readonly s3KmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * snapshot_delivery_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
    */
    readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties;
  }
  export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
    */
    readonly deliveryFrequency?: string;
  }

  function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delivery_frequency: cdktf.stringToTerraform(struct!.deliveryFrequency),
    }
  }

  export class ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delivery_frequency - computed: false, optional: true, required: false
    private _deliveryFrequency?: string | undefined; 
    public get deliveryFrequency() {
      return this.getStringAttribute('delivery_frequency');
    }
    public set deliveryFrequency(value: string | undefined) {
      this._deliveryFrequency = value;
    }
    public resetDeliveryFrequency() {
      this._deliveryFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryFrequencyInput() {
      return this._deliveryFrequency
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}
  */
  export class ConfigDeliveryChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_delivery_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigDeliveryChannelConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_delivery_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._s3BucketName = config.s3BucketName;
      this._s3KeyPrefix = config.s3KeyPrefix;
      this._s3KmsKeyArn = config.s3KmsKeyArn;
      this._snsTopicArn = config.snsTopicArn;
      this._snapshotDeliveryProperties = config.snapshotDeliveryProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // s3_bucket_name - computed: false, optional: false, required: true
    private _s3BucketName?: string; 
    public get s3BucketName() {
      return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
      this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
      return this._s3BucketName
    }

    // s3_key_prefix - computed: false, optional: true, required: false
    private _s3KeyPrefix?: string | undefined; 
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string | undefined) {
      this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
      this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
      return this._s3KeyPrefix
    }

    // s3_kms_key_arn - computed: false, optional: true, required: false
    private _s3KmsKeyArn?: string | undefined; 
    public get s3KmsKeyArn() {
      return this.getStringAttribute('s3_kms_key_arn');
    }
    public set s3KmsKeyArn(value: string | undefined) {
      this._s3KmsKeyArn = value;
    }
    public resetS3KmsKeyArn() {
      this._s3KmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyArnInput() {
      return this._s3KmsKeyArn
    }

    // sns_topic_arn - computed: false, optional: true, required: false
    private _snsTopicArn?: string | undefined; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string | undefined) {
      this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
      this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // snapshot_delivery_properties - computed: false, optional: true, required: false
    private _snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties | undefined; 
    private __snapshotDeliveryPropertiesOutput = new ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(this as any, "snapshot_delivery_properties", true);
    public get snapshotDeliveryProperties() {
      return this.__snapshotDeliveryPropertiesOutput;
    }
    public putSnapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties | undefined) {
      this._snapshotDeliveryProperties = value;
    }
    public resetSnapshotDeliveryProperties() {
      this._snapshotDeliveryProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotDeliveryPropertiesInput() {
      return this._snapshotDeliveryProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
        s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        snapshot_delivery_properties: configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(this._snapshotDeliveryProperties),
      };
    }
  }
  export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#name ConfigOrganizationConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_body ConfigOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#input_parameter ConfigOrganizationConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigOrganizationConformancePackInputParameter[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#timeouts ConfigOrganizationConformancePack#timeouts}
    */
    readonly timeouts?: ConfigOrganizationConformancePackTimeouts;
  }
  export interface ConfigOrganizationConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_name ConfigOrganizationConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_value ConfigOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue: string;
  }

  function configOrganizationConformancePackInputParameterToTerraform(struct?: ConfigOrganizationConformancePackInputParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      parameter_name: cdktf.stringToTerraform(struct!.parameterName),
      parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    }
  }

  export interface ConfigOrganizationConformancePackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#create ConfigOrganizationConformancePack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delete ConfigOrganizationConformancePack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#update ConfigOrganizationConformancePack#update}
    */
    readonly update?: string;
  }

  function configOrganizationConformancePackTimeoutsToTerraform(struct?: ConfigOrganizationConformancePackTimeoutsOutputReference | ConfigOrganizationConformancePackTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ConfigOrganizationConformancePackTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack}
  */
  export class ConfigOrganizationConformancePack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_conformance_pack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_conformance_pack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deliveryS3Bucket = config.deliveryS3Bucket;
      this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
      this._excludedAccounts = config.excludedAccounts;
      this._name = config.name;
      this._templateBody = config.templateBody;
      this._templateS3Uri = config.templateS3Uri;
      this._inputParameter = config.inputParameter;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delivery_s3_bucket - computed: false, optional: true, required: false
    private _deliveryS3Bucket?: string | undefined; 
    public get deliveryS3Bucket() {
      return this.getStringAttribute('delivery_s3_bucket');
    }
    public set deliveryS3Bucket(value: string | undefined) {
      this._deliveryS3Bucket = value;
    }
    public resetDeliveryS3Bucket() {
      this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3BucketInput() {
      return this._deliveryS3Bucket
    }

    // delivery_s3_key_prefix - computed: false, optional: true, required: false
    private _deliveryS3KeyPrefix?: string | undefined; 
    public get deliveryS3KeyPrefix() {
      return this.getStringAttribute('delivery_s3_key_prefix');
    }
    public set deliveryS3KeyPrefix(value: string | undefined) {
      this._deliveryS3KeyPrefix = value;
    }
    public resetDeliveryS3KeyPrefix() {
      this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3KeyPrefixInput() {
      return this._deliveryS3KeyPrefix
    }

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[] | undefined; 
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] | undefined) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // template_body - computed: false, optional: true, required: false
    private _templateBody?: string | undefined; 
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string | undefined) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_s3_uri - computed: false, optional: true, required: false
    private _templateS3Uri?: string | undefined; 
    public get templateS3Uri() {
      return this.getStringAttribute('template_s3_uri');
    }
    public set templateS3Uri(value: string | undefined) {
      this._templateS3Uri = value;
    }
    public resetTemplateS3Uri() {
      this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateS3UriInput() {
      return this._templateS3Uri
    }

    // input_parameter - computed: false, optional: true, required: false
    private _inputParameter?: ConfigOrganizationConformancePackInputParameter[] | undefined; 
    public get inputParameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('input_parameter') as any;
    }
    public set inputParameter(value: ConfigOrganizationConformancePackInputParameter[] | undefined) {
      this._inputParameter = value;
    }
    public resetInputParameter() {
      this._inputParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParameterInput() {
      return this._inputParameter
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationConformancePackTimeouts | undefined; 
    private __timeoutsOutput = new ConfigOrganizationConformancePackTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ConfigOrganizationConformancePackTimeouts | undefined) {
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
        delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
        delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        name: cdktf.stringToTerraform(this._name),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
        input_parameter: cdktf.listMapper(configOrganizationConformancePackInputParameterToTerraform)(this._inputParameter),
        timeouts: configOrganizationConformancePackTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigOrganizationCustomRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#description ConfigOrganizationCustomRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#input_parameters ConfigOrganizationCustomRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}
    */
    readonly lambdaFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#name ConfigOrganizationCustomRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#trigger_types ConfigOrganizationCustomRule#trigger_types}
    */
    readonly triggerTypes: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#timeouts ConfigOrganizationCustomRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationCustomRuleTimeouts;
  }
  export interface ConfigOrganizationCustomRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#create ConfigOrganizationCustomRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#delete ConfigOrganizationCustomRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#update ConfigOrganizationCustomRule#update}
    */
    readonly update?: string;
  }

  function configOrganizationCustomRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomRuleTimeoutsOutputReference | ConfigOrganizationCustomRuleTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ConfigOrganizationCustomRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule}
  */
  export class ConfigOrganizationCustomRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_custom_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationCustomRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_custom_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._excludedAccounts = config.excludedAccounts;
      this._inputParameters = config.inputParameters;
      this._lambdaFunctionArn = config.lambdaFunctionArn;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._resourceIdScope = config.resourceIdScope;
      this._resourceTypesScope = config.resourceTypesScope;
      this._tagKeyScope = config.tagKeyScope;
      this._tagValueScope = config.tagValueScope;
      this._triggerTypes = config.triggerTypes;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[] | undefined; 
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] | undefined) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string | undefined; 
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string | undefined) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // lambda_function_arn - computed: false, optional: false, required: true
    private _lambdaFunctionArn?: string; 
    public get lambdaFunctionArn() {
      return this.getStringAttribute('lambda_function_arn');
    }
    public set lambdaFunctionArn(value: string) {
      this._lambdaFunctionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnInput() {
      return this._lambdaFunctionArn
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string | undefined; 
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string | undefined) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_id_scope - computed: false, optional: true, required: false
    private _resourceIdScope?: string | undefined; 
    public get resourceIdScope() {
      return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string | undefined) {
      this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
      this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
      return this._resourceIdScope
    }

    // resource_types_scope - computed: false, optional: true, required: false
    private _resourceTypesScope?: string[] | undefined; 
    public get resourceTypesScope() {
      return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[] | undefined) {
      this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
      this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
      return this._resourceTypesScope
    }

    // tag_key_scope - computed: false, optional: true, required: false
    private _tagKeyScope?: string | undefined; 
    public get tagKeyScope() {
      return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string | undefined) {
      this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
      this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
      return this._tagKeyScope
    }

    // tag_value_scope - computed: false, optional: true, required: false
    private _tagValueScope?: string | undefined; 
    public get tagValueScope() {
      return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string | undefined) {
      this._tagValueScope = value;
    }
    public resetTagValueScope() {
      this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
      return this._tagValueScope
    }

    // trigger_types - computed: false, optional: false, required: true
    private _triggerTypes?: string[]; 
    public get triggerTypes() {
      return this.getListAttribute('trigger_types');
    }
    public set triggerTypes(value: string[]) {
      this._triggerTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerTypesInput() {
      return this._triggerTypes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationCustomRuleTimeouts | undefined; 
    private __timeoutsOutput = new ConfigOrganizationCustomRuleTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ConfigOrganizationCustomRuleTimeouts | undefined) {
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
        description: cdktf.stringToTerraform(this._description),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        lambda_function_arn: cdktf.stringToTerraform(this._lambdaFunctionArn),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
        resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
        tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
        tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
        trigger_types: cdktf.listMapper(cdktf.stringToTerraform)(this._triggerTypes),
        timeouts: configOrganizationCustomRuleTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigOrganizationManagedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#description ConfigOrganizationManagedRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#input_parameters ConfigOrganizationManagedRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#name ConfigOrganizationManagedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#rule_identifier ConfigOrganizationManagedRule#rule_identifier}
    */
    readonly ruleIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#timeouts ConfigOrganizationManagedRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
  }
  export interface ConfigOrganizationManagedRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#create ConfigOrganizationManagedRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#delete ConfigOrganizationManagedRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#update ConfigOrganizationManagedRule#update}
    */
    readonly update?: string;
  }

  function configOrganizationManagedRuleTimeoutsToTerraform(struct?: ConfigOrganizationManagedRuleTimeoutsOutputReference | ConfigOrganizationManagedRuleTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ConfigOrganizationManagedRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule}
  */
  export class ConfigOrganizationManagedRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_managed_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationManagedRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_managed_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._excludedAccounts = config.excludedAccounts;
      this._inputParameters = config.inputParameters;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._resourceIdScope = config.resourceIdScope;
      this._resourceTypesScope = config.resourceTypesScope;
      this._ruleIdentifier = config.ruleIdentifier;
      this._tagKeyScope = config.tagKeyScope;
      this._tagValueScope = config.tagValueScope;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[] | undefined; 
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] | undefined) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string | undefined; 
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string | undefined) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string | undefined; 
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string | undefined) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_id_scope - computed: false, optional: true, required: false
    private _resourceIdScope?: string | undefined; 
    public get resourceIdScope() {
      return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string | undefined) {
      this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
      this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
      return this._resourceIdScope
    }

    // resource_types_scope - computed: false, optional: true, required: false
    private _resourceTypesScope?: string[] | undefined; 
    public get resourceTypesScope() {
      return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[] | undefined) {
      this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
      this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
      return this._resourceTypesScope
    }

    // rule_identifier - computed: false, optional: false, required: true
    private _ruleIdentifier?: string; 
    public get ruleIdentifier() {
      return this.getStringAttribute('rule_identifier');
    }
    public set ruleIdentifier(value: string) {
      this._ruleIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleIdentifierInput() {
      return this._ruleIdentifier
    }

    // tag_key_scope - computed: false, optional: true, required: false
    private _tagKeyScope?: string | undefined; 
    public get tagKeyScope() {
      return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string | undefined) {
      this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
      this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
      return this._tagKeyScope
    }

    // tag_value_scope - computed: false, optional: true, required: false
    private _tagValueScope?: string | undefined; 
    public get tagValueScope() {
      return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string | undefined) {
      this._tagValueScope = value;
    }
    public resetTagValueScope() {
      this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
      return this._tagValueScope
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationManagedRuleTimeouts | undefined; 
    private __timeoutsOutput = new ConfigOrganizationManagedRuleTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ConfigOrganizationManagedRuleTimeouts | undefined) {
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
        description: cdktf.stringToTerraform(this._description),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
        resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
        rule_identifier: cdktf.stringToTerraform(this._ruleIdentifier),
        tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
        tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
        timeouts: configOrganizationManagedRuleTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#config_rule_name ConfigRemediationConfiguration#config_rule_name}
    */
    readonly configRuleName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_type ConfigRemediationConfiguration#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_id ConfigRemediationConfiguration#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_type ConfigRemediationConfiguration#target_type}
    */
    readonly targetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_version ConfigRemediationConfiguration#target_version}
    */
    readonly targetVersion?: string;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#parameter ConfigRemediationConfiguration#parameter}
    */
    readonly parameter?: ConfigRemediationConfigurationParameter[];
  }
  export interface ConfigRemediationConfigurationParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#name ConfigRemediationConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_value ConfigRemediationConfiguration#resource_value}
    */
    readonly resourceValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#static_value ConfigRemediationConfiguration#static_value}
    */
    readonly staticValue?: string;
  }

  function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      resource_value: cdktf.stringToTerraform(struct!.resourceValue),
      static_value: cdktf.stringToTerraform(struct!.staticValue),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}
  */
  export class ConfigRemediationConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_remediation_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRemediationConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_remediation_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._configRuleName = config.configRuleName;
      this._resourceType = config.resourceType;
      this._targetId = config.targetId;
      this._targetType = config.targetType;
      this._targetVersion = config.targetVersion;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // config_rule_name - computed: false, optional: false, required: true
    private _configRuleName?: string; 
    public get configRuleName() {
      return this.getStringAttribute('config_rule_name');
    }
    public set configRuleName(value: string) {
      this._configRuleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configRuleNameInput() {
      return this._configRuleName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_type - computed: false, optional: true, required: false
    private _resourceType?: string | undefined; 
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string | undefined) {
      this._resourceType = value;
    }
    public resetResourceType() {
      this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
      return this._resourceType
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
      this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // target_version - computed: false, optional: true, required: false
    private _targetVersion?: string | undefined; 
    public get targetVersion() {
      return this.getStringAttribute('target_version');
    }
    public set targetVersion(value: string | undefined) {
      this._targetVersion = value;
    }
    public resetTargetVersion() {
      this._targetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetVersionInput() {
      return this._targetVersion
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: ConfigRemediationConfigurationParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: ConfigRemediationConfigurationParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        config_rule_name: cdktf.stringToTerraform(this._configRuleName),
        resource_type: cdktf.stringToTerraform(this._resourceType),
        target_id: cdktf.stringToTerraform(this._targetId),
        target_type: cdktf.stringToTerraform(this._targetType),
        target_version: cdktf.stringToTerraform(this._targetVersion),
        parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter),
      };
    }
  }
}
