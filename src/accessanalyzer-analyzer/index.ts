/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}
  */
  readonly analyzerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}
  */
  readonly type?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#configuration AccessanalyzerAnalyzer#configuration}
  */
  readonly configuration?: AccessanalyzerAnalyzerConfiguration;
}
export interface AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#account_ids AccessanalyzerAnalyzer#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#resource_tags AccessanalyzerAnalyzer#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionToTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    resource_tags: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.resourceTags),
  }
}


export function accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_tags: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.resourceTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._resourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._resourceTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._resourceTags = value.resourceTags;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }
}

export class AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionList extends cdktf.ComplexList {
  public internalValue? : AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionOutputReference {
    return new AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#exclusion AccessanalyzerAnalyzer#exclusion}
  */
  readonly exclusion?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion[] | cdktf.IResolvable;
}

export function accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleToTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface AccessanalyzerAnalyzerConfigurationUnusedAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}
  */
  readonly unusedAccessAge?: number;
  /**
  * analysis_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#analysis_rule AccessanalyzerAnalyzer#analysis_rule}
  */
  readonly analysisRule?: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule;
}

export function accessanalyzerAnalyzerConfigurationUnusedAccessToTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unused_access_age: cdktf.numberToTerraform(struct!.unusedAccessAge),
    analysis_rule: accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleToTerraform(struct!.analysisRule),
  }
}


export function accessanalyzerAnalyzerConfigurationUnusedAccessToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unused_access_age: {
      value: cdktf.numberToHclTerraform(struct!.unusedAccessAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    analysis_rule: {
      value: accessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleToHclTerraform(struct!.analysisRule),
      isBlock: true,
      type: "list",
      storageClassType: "AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessanalyzerAnalyzerConfigurationUnusedAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unusedAccessAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.unusedAccessAge = this._unusedAccessAge;
    }
    if (this._analysisRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisRule = this._analysisRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessanalyzerAnalyzerConfigurationUnusedAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unusedAccessAge = undefined;
      this._analysisRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unusedAccessAge = value.unusedAccessAge;
      this._analysisRule.internalValue = value.analysisRule;
    }
  }

  // unused_access_age - computed: false, optional: true, required: false
  private _unusedAccessAge?: number; 
  public get unusedAccessAge() {
    return this.getNumberAttribute('unused_access_age');
  }
  public set unusedAccessAge(value: number) {
    this._unusedAccessAge = value;
  }
  public resetUnusedAccessAge() {
    this._unusedAccessAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedAccessAgeInput() {
    return this._unusedAccessAge;
  }

  // analysis_rule - computed: false, optional: true, required: false
  private _analysisRule = new AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRuleOutputReference(this, "analysis_rule");
  public get analysisRule() {
    return this._analysisRule;
  }
  public putAnalysisRule(value: AccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRule) {
    this._analysisRule.internalValue = value;
  }
  public resetAnalysisRule() {
    this._analysisRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisRuleInput() {
    return this._analysisRule.internalValue;
  }
}
export interface AccessanalyzerAnalyzerConfiguration {
  /**
  * unused_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#unused_access AccessanalyzerAnalyzer#unused_access}
  */
  readonly unusedAccess?: AccessanalyzerAnalyzerConfigurationUnusedAccess;
}

export function accessanalyzerAnalyzerConfigurationToTerraform(struct?: AccessanalyzerAnalyzerConfigurationOutputReference | AccessanalyzerAnalyzerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unused_access: accessanalyzerAnalyzerConfigurationUnusedAccessToTerraform(struct!.unusedAccess),
  }
}


export function accessanalyzerAnalyzerConfigurationToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationOutputReference | AccessanalyzerAnalyzerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unused_access: {
      value: accessanalyzerAnalyzerConfigurationUnusedAccessToHclTerraform(struct!.unusedAccess),
      isBlock: true,
      type: "list",
      storageClassType: "AccessanalyzerAnalyzerConfigurationUnusedAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessanalyzerAnalyzerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessanalyzerAnalyzerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unusedAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unusedAccess = this._unusedAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessanalyzerAnalyzerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unusedAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unusedAccess.internalValue = value.unusedAccess;
    }
  }

  // unused_access - computed: false, optional: true, required: false
  private _unusedAccess = new AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference(this, "unused_access");
  public get unusedAccess() {
    return this._unusedAccess;
  }
  public putUnusedAccess(value: AccessanalyzerAnalyzerConfigurationUnusedAccess) {
    this._unusedAccess.internalValue = value;
  }
  public resetUnusedAccess() {
    this._unusedAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedAccessInput() {
    return this._unusedAccess.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer}
*/
export class AccessanalyzerAnalyzer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_accessanalyzer_analyzer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessanalyzerAnalyzer to import
  * @param importFromId The id of the existing AccessanalyzerAnalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_accessanalyzer_analyzer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessanalyzerAnalyzerConfig
  */
  public constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_accessanalyzer_analyzer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyzerName = config.analyzerName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer_name - computed: false, optional: false, required: true
  private _analyzerName?: string; 
  public get analyzerName() {
    return this.getStringAttribute('analyzer_name');
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerNameInput() {
    return this._analyzerName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AccessanalyzerAnalyzerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AccessanalyzerAnalyzerConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer_name: cdktf.stringToTerraform(this._analyzerName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      configuration: accessanalyzerAnalyzerConfigurationToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyzer_name: {
        value: cdktf.stringToHclTerraform(this._analyzerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: accessanalyzerAnalyzerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessanalyzerAnalyzerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
