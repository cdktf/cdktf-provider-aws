/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}
  */
  readonly branchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}
  */
  readonly buildType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}
  */
  readonly manualCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}
  */
  readonly projectName: string;
  /**
  * filter_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}
  */
  readonly filterGroup?: CodebuildWebhookFilterGroup[] | cdktf.IResolvable;
  /**
  * scope_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}
  */
  readonly scopeConfiguration?: CodebuildWebhookScopeConfiguration;
}
export interface CodebuildWebhookFilterGroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
  */
  readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}
  */
  readonly type: string;
}

export function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_matched_pattern: cdktf.booleanToTerraform(struct!.excludeMatchedPattern),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function codebuildWebhookFilterGroupFilterToHclTerraform(struct?: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_matched_pattern: {
      value: cdktf.booleanToHclTerraform(struct!.excludeMatchedPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildWebhookFilterGroupFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CodebuildWebhookFilterGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeMatchedPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeMatchedPattern = this._excludeMatchedPattern;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeMatchedPattern = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeMatchedPattern = value.excludeMatchedPattern;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // exclude_matched_pattern - computed: false, optional: true, required: false
  private _excludeMatchedPattern?: boolean | cdktf.IResolvable; 
  public get excludeMatchedPattern() {
    return this.getBooleanAttribute('exclude_matched_pattern');
  }
  public set excludeMatchedPattern(value: boolean | cdktf.IResolvable) {
    this._excludeMatchedPattern = value;
  }
  public resetExcludeMatchedPattern() {
    this._excludeMatchedPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMatchedPatternInput() {
    return this._excludeMatchedPattern;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CodebuildWebhookFilterGroupFilterList extends cdktf.ComplexList {
  public internalValue? : CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable

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
  public get(index: number): CodebuildWebhookFilterGroupFilterOutputReference {
    return new CodebuildWebhookFilterGroupFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildWebhookFilterGroup {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}
  */
  readonly filter?: CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable;
}

export function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform, true)(struct!.filter),
  }
}


export function codebuildWebhookFilterGroupToHclTerraform(struct?: CodebuildWebhookFilterGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(codebuildWebhookFilterGroupFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildWebhookFilterGroupFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildWebhookFilterGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CodebuildWebhookFilterGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildWebhookFilterGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new CodebuildWebhookFilterGroupFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CodebuildWebhookFilterGroupList extends cdktf.ComplexList {
  public internalValue? : CodebuildWebhookFilterGroup[] | cdktf.IResolvable

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
  public get(index: number): CodebuildWebhookFilterGroupOutputReference {
    return new CodebuildWebhookFilterGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildWebhookScopeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}
  */
  readonly scope: string;
}

export function codebuildWebhookScopeConfigurationToTerraform(struct?: CodebuildWebhookScopeConfigurationOutputReference | CodebuildWebhookScopeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function codebuildWebhookScopeConfigurationToHclTerraform(struct?: CodebuildWebhookScopeConfigurationOutputReference | CodebuildWebhookScopeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildWebhookScopeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildWebhookScopeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildWebhookScopeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._name = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._name = value.name;
      this._scope = value.scope;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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
    return this._name;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook aws_codebuild_webhook}
*/
export class CodebuildWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codebuild_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodebuildWebhook to import
  * @param importFromId The id of the existing CodebuildWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodebuildWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codebuild_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook aws_codebuild_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._branchFilter = config.branchFilter;
    this._buildType = config.buildType;
    this._id = config.id;
    this._manualCreation = config.manualCreation;
    this._projectName = config.projectName;
    this._filterGroup.internalValue = config.filterGroup;
    this._scopeConfiguration.internalValue = config.scopeConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_filter - computed: false, optional: true, required: false
  private _branchFilter?: string; 
  public get branchFilter() {
    return this.getStringAttribute('branch_filter');
  }
  public set branchFilter(value: string) {
    this._branchFilter = value;
  }
  public resetBranchFilter() {
    this._branchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter;
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
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

  // manual_creation - computed: false, optional: true, required: false
  private _manualCreation?: boolean | cdktf.IResolvable; 
  public get manualCreation() {
    return this.getBooleanAttribute('manual_creation');
  }
  public set manualCreation(value: boolean | cdktf.IResolvable) {
    this._manualCreation = value;
  }
  public resetManualCreation() {
    this._manualCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualCreationInput() {
    return this._manualCreation;
  }

  // payload_url - computed: true, optional: false, required: false
  public get payloadUrl() {
    return this.getStringAttribute('payload_url');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup = new CodebuildWebhookFilterGroupList(this, "filter_group", true);
  public get filterGroup() {
    return this._filterGroup;
  }
  public putFilterGroup(value: CodebuildWebhookFilterGroup[] | cdktf.IResolvable) {
    this._filterGroup.internalValue = value;
  }
  public resetFilterGroup() {
    this._filterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup.internalValue;
  }

  // scope_configuration - computed: false, optional: true, required: false
  private _scopeConfiguration = new CodebuildWebhookScopeConfigurationOutputReference(this, "scope_configuration");
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
  public putScopeConfiguration(value: CodebuildWebhookScopeConfiguration) {
    this._scopeConfiguration.internalValue = value;
  }
  public resetScopeConfiguration() {
    this._scopeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeConfigurationInput() {
    return this._scopeConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_filter: cdktf.stringToTerraform(this._branchFilter),
      build_type: cdktf.stringToTerraform(this._buildType),
      id: cdktf.stringToTerraform(this._id),
      manual_creation: cdktf.booleanToTerraform(this._manualCreation),
      project_name: cdktf.stringToTerraform(this._projectName),
      filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform, true)(this._filterGroup.internalValue),
      scope_configuration: codebuildWebhookScopeConfigurationToTerraform(this._scopeConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_filter: {
        value: cdktf.stringToHclTerraform(this._branchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_type: {
        value: cdktf.stringToHclTerraform(this._buildType),
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
      manual_creation: {
        value: cdktf.booleanToHclTerraform(this._manualCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_group: {
        value: cdktf.listMapperHcl(codebuildWebhookFilterGroupToHclTerraform, true)(this._filterGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodebuildWebhookFilterGroupList",
      },
      scope_configuration: {
        value: codebuildWebhookScopeConfigurationToHclTerraform(this._scopeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildWebhookScopeConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
