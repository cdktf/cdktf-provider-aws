// https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodepipelineCustomActionTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}
  */
  readonly version: string;
  /**
  * configuration_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}
  */
  readonly configurationProperty?: CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable;
  /**
  * input_artifact_details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}
  */
  readonly inputArtifactDetails: CodepipelineCustomActionTypeInputArtifactDetails;
  /**
  * output_artifact_details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}
  */
  readonly outputArtifactDetails: CodepipelineCustomActionTypeOutputArtifactDetails;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}
  */
  readonly settings?: CodepipelineCustomActionTypeSettings;
}
export interface CodepipelineCustomActionTypeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}
  */
  readonly key: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}
  */
  readonly queryable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}
  */
  readonly secret: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}
  */
  readonly type?: string;
}

export function codepipelineCustomActionTypeConfigurationPropertyToTerraform(struct?: CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.booleanToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    queryable: cdktf.booleanToTerraform(struct!.queryable),
    required: cdktf.booleanToTerraform(struct!.required),
    secret: cdktf.booleanToTerraform(struct!.secret),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CodepipelineCustomActionTypeConfigurationPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryable !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryable = this._queryable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
      this._name = undefined;
      this._queryable = undefined;
      this._required = undefined;
      this._secret = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
      this._name = value.name;
      this._queryable = value.queryable;
      this._required = value.required;
      this._secret = value.secret;
      this._type = value.type;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // key - computed: false, optional: false, required: true
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // queryable - computed: false, optional: true, required: false
  private _queryable?: boolean | cdktf.IResolvable; 
  public get queryable() {
    return this.getBooleanAttribute('queryable');
  }
  public set queryable(value: boolean | cdktf.IResolvable) {
    this._queryable = value;
  }
  public resetQueryable() {
    this._queryable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryableInput() {
    return this._queryable;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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
}

export class CodepipelineCustomActionTypeConfigurationPropertyList extends cdktf.ComplexList {
  public internalValue? : CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable

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
  public get(index: number): CodepipelineCustomActionTypeConfigurationPropertyOutputReference {
    return new CodepipelineCustomActionTypeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineCustomActionTypeInputArtifactDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
  */
  readonly maximumCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
  */
  readonly minimumCount: number;
}

export function codepipelineCustomActionTypeInputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference | CodepipelineCustomActionTypeInputArtifactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_count: cdktf.numberToTerraform(struct!.maximumCount),
    minimum_count: cdktf.numberToTerraform(struct!.minimumCount),
  }
}

export class CodepipelineCustomActionTypeInputArtifactDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineCustomActionTypeInputArtifactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCount = this._maximumCount;
    }
    if (this._minimumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCount = this._minimumCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeInputArtifactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumCount = undefined;
      this._minimumCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumCount = value.maximumCount;
      this._minimumCount = value.minimumCount;
    }
  }

  // maximum_count - computed: false, optional: false, required: true
  private _maximumCount?: number; 
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }
  public set maximumCount(value: number) {
    this._maximumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCountInput() {
    return this._maximumCount;
  }

  // minimum_count - computed: false, optional: false, required: true
  private _minimumCount?: number; 
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
  public set minimumCount(value: number) {
    this._minimumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCountInput() {
    return this._minimumCount;
  }
}
export interface CodepipelineCustomActionTypeOutputArtifactDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
  */
  readonly maximumCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
  */
  readonly minimumCount: number;
}

export function codepipelineCustomActionTypeOutputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference | CodepipelineCustomActionTypeOutputArtifactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_count: cdktf.numberToTerraform(struct!.maximumCount),
    minimum_count: cdktf.numberToTerraform(struct!.minimumCount),
  }
}

export class CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineCustomActionTypeOutputArtifactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCount = this._maximumCount;
    }
    if (this._minimumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCount = this._minimumCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeOutputArtifactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumCount = undefined;
      this._minimumCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumCount = value.maximumCount;
      this._minimumCount = value.minimumCount;
    }
  }

  // maximum_count - computed: false, optional: false, required: true
  private _maximumCount?: number; 
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }
  public set maximumCount(value: number) {
    this._maximumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCountInput() {
    return this._maximumCount;
  }

  // minimum_count - computed: false, optional: false, required: true
  private _minimumCount?: number; 
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
  public set minimumCount(value: number) {
    this._minimumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCountInput() {
    return this._minimumCount;
  }
}
export interface CodepipelineCustomActionTypeSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}
  */
  readonly entityUrlTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}
  */
  readonly executionUrlTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}
  */
  readonly revisionUrlTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}
  */
  readonly thirdPartyConfigurationUrl?: string;
}

export function codepipelineCustomActionTypeSettingsToTerraform(struct?: CodepipelineCustomActionTypeSettingsOutputReference | CodepipelineCustomActionTypeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_url_template: cdktf.stringToTerraform(struct!.entityUrlTemplate),
    execution_url_template: cdktf.stringToTerraform(struct!.executionUrlTemplate),
    revision_url_template: cdktf.stringToTerraform(struct!.revisionUrlTemplate),
    third_party_configuration_url: cdktf.stringToTerraform(struct!.thirdPartyConfigurationUrl),
  }
}

export class CodepipelineCustomActionTypeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodepipelineCustomActionTypeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityUrlTemplate = this._entityUrlTemplate;
    }
    if (this._executionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionUrlTemplate = this._executionUrlTemplate;
    }
    if (this._revisionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionUrlTemplate = this._revisionUrlTemplate;
    }
    if (this._thirdPartyConfigurationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyConfigurationUrl = this._thirdPartyConfigurationUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityUrlTemplate = undefined;
      this._executionUrlTemplate = undefined;
      this._revisionUrlTemplate = undefined;
      this._thirdPartyConfigurationUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityUrlTemplate = value.entityUrlTemplate;
      this._executionUrlTemplate = value.executionUrlTemplate;
      this._revisionUrlTemplate = value.revisionUrlTemplate;
      this._thirdPartyConfigurationUrl = value.thirdPartyConfigurationUrl;
    }
  }

  // entity_url_template - computed: false, optional: true, required: false
  private _entityUrlTemplate?: string; 
  public get entityUrlTemplate() {
    return this.getStringAttribute('entity_url_template');
  }
  public set entityUrlTemplate(value: string) {
    this._entityUrlTemplate = value;
  }
  public resetEntityUrlTemplate() {
    this._entityUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityUrlTemplateInput() {
    return this._entityUrlTemplate;
  }

  // execution_url_template - computed: false, optional: true, required: false
  private _executionUrlTemplate?: string; 
  public get executionUrlTemplate() {
    return this.getStringAttribute('execution_url_template');
  }
  public set executionUrlTemplate(value: string) {
    this._executionUrlTemplate = value;
  }
  public resetExecutionUrlTemplate() {
    this._executionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUrlTemplateInput() {
    return this._executionUrlTemplate;
  }

  // revision_url_template - computed: false, optional: true, required: false
  private _revisionUrlTemplate?: string; 
  public get revisionUrlTemplate() {
    return this.getStringAttribute('revision_url_template');
  }
  public set revisionUrlTemplate(value: string) {
    this._revisionUrlTemplate = value;
  }
  public resetRevisionUrlTemplate() {
    this._revisionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionUrlTemplateInput() {
    return this._revisionUrlTemplate;
  }

  // third_party_configuration_url - computed: false, optional: true, required: false
  private _thirdPartyConfigurationUrl?: string; 
  public get thirdPartyConfigurationUrl() {
    return this.getStringAttribute('third_party_configuration_url');
  }
  public set thirdPartyConfigurationUrl(value: string) {
    this._thirdPartyConfigurationUrl = value;
  }
  public resetThirdPartyConfigurationUrl() {
    this._thirdPartyConfigurationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyConfigurationUrlInput() {
    return this._thirdPartyConfigurationUrl;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type aws_codepipeline_custom_action_type}
*/
export class CodepipelineCustomActionType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codepipeline_custom_action_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type aws_codepipeline_custom_action_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelineCustomActionTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CodepipelineCustomActionTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline_custom_action_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._providerName = config.providerName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._configurationProperty.internalValue = config.configurationProperty;
    this._inputArtifactDetails.internalValue = config.inputArtifactDetails;
    this._outputArtifactDetails.internalValue = config.outputArtifactDetails;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // configuration_property - computed: false, optional: true, required: false
  private _configurationProperty = new CodepipelineCustomActionTypeConfigurationPropertyList(this, "configuration_property", false);
  public get configurationProperty() {
    return this._configurationProperty;
  }
  public putConfigurationProperty(value: CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable) {
    this._configurationProperty.internalValue = value;
  }
  public resetConfigurationProperty() {
    this._configurationProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPropertyInput() {
    return this._configurationProperty.internalValue;
  }

  // input_artifact_details - computed: false, optional: false, required: true
  private _inputArtifactDetails = new CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(this, "input_artifact_details");
  public get inputArtifactDetails() {
    return this._inputArtifactDetails;
  }
  public putInputArtifactDetails(value: CodepipelineCustomActionTypeInputArtifactDetails) {
    this._inputArtifactDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactDetailsInput() {
    return this._inputArtifactDetails.internalValue;
  }

  // output_artifact_details - computed: false, optional: false, required: true
  private _outputArtifactDetails = new CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(this, "output_artifact_details");
  public get outputArtifactDetails() {
    return this._outputArtifactDetails;
  }
  public putOutputArtifactDetails(value: CodepipelineCustomActionTypeOutputArtifactDetails) {
    this._outputArtifactDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactDetailsInput() {
    return this._outputArtifactDetails.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CodepipelineCustomActionTypeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CodepipelineCustomActionTypeSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      provider_name: cdktf.stringToTerraform(this._providerName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      configuration_property: cdktf.listMapper(codepipelineCustomActionTypeConfigurationPropertyToTerraform, true)(this._configurationProperty.internalValue),
      input_artifact_details: codepipelineCustomActionTypeInputArtifactDetailsToTerraform(this._inputArtifactDetails.internalValue),
      output_artifact_details: codepipelineCustomActionTypeOutputArtifactDetailsToTerraform(this._outputArtifactDetails.internalValue),
      settings: codepipelineCustomActionTypeSettingsToTerraform(this._settings.internalValue),
    };
  }
}
