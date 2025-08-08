/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceswebDataProtectionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}
  */
  readonly additionalEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}
  */
  readonly customerManagedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}
  */
  readonly displayName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#region WorkspaceswebDataProtectionSettings#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * inline_redaction_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}
  */
  readonly inlineRedactionConfiguration?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}
  */
  readonly keywordRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}
  */
  readonly patternDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}
  */
  readonly patternName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}
  */
  readonly patternRegex: string;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword_regex: cdktf.stringToTerraform(struct!.keywordRegex),
    pattern_description: cdktf.stringToTerraform(struct!.patternDescription),
    pattern_name: cdktf.stringToTerraform(struct!.patternName),
    pattern_regex: cdktf.stringToTerraform(struct!.patternRegex),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword_regex: {
      value: cdktf.stringToHclTerraform(struct!.keywordRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_description: {
      value: cdktf.stringToHclTerraform(struct!.patternDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_name: {
      value: cdktf.stringToHclTerraform(struct!.patternName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_regex: {
      value: cdktf.stringToHclTerraform(struct!.patternRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywordRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordRegex = this._keywordRegex;
    }
    if (this._patternDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternDescription = this._patternDescription;
    }
    if (this._patternName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternName = this._patternName;
    }
    if (this._patternRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRegex = this._patternRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywordRegex = undefined;
      this._patternDescription = undefined;
      this._patternName = undefined;
      this._patternRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywordRegex = value.keywordRegex;
      this._patternDescription = value.patternDescription;
      this._patternName = value.patternName;
      this._patternRegex = value.patternRegex;
    }
  }

  // keyword_regex - computed: false, optional: true, required: false
  private _keywordRegex?: string; 
  public get keywordRegex() {
    return this.getStringAttribute('keyword_regex');
  }
  public set keywordRegex(value: string) {
    this._keywordRegex = value;
  }
  public resetKeywordRegex() {
    this._keywordRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordRegexInput() {
    return this._keywordRegex;
  }

  // pattern_description - computed: false, optional: true, required: false
  private _patternDescription?: string; 
  public get patternDescription() {
    return this.getStringAttribute('pattern_description');
  }
  public set patternDescription(value: string) {
    this._patternDescription = value;
  }
  public resetPatternDescription() {
    this._patternDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternDescriptionInput() {
    return this._patternDescription;
  }

  // pattern_name - computed: false, optional: false, required: true
  private _patternName?: string; 
  public get patternName() {
    return this.getStringAttribute('pattern_name');
  }
  public set patternName(value: string) {
    this._patternName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNameInput() {
    return this._patternName;
  }

  // pattern_regex - computed: false, optional: false, required: true
  private _patternRegex?: string; 
  public get patternRegex() {
    return this.getStringAttribute('pattern_regex');
  }
  public set patternRegex(value: string) {
    this._patternRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRegexInput() {
    return this._patternRegex;
  }
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference {
    return new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}
  */
  readonly redactionPlaceHolderText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}
  */
  readonly redactionPlaceHolderType: string;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redaction_place_holder_text: cdktf.stringToTerraform(struct!.redactionPlaceHolderText),
    redaction_place_holder_type: cdktf.stringToTerraform(struct!.redactionPlaceHolderType),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redaction_place_holder_text: {
      value: cdktf.stringToHclTerraform(struct!.redactionPlaceHolderText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redaction_place_holder_type: {
      value: cdktf.stringToHclTerraform(struct!.redactionPlaceHolderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redactionPlaceHolderText !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolderText = this._redactionPlaceHolderText;
    }
    if (this._redactionPlaceHolderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolderType = this._redactionPlaceHolderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redactionPlaceHolderText = undefined;
      this._redactionPlaceHolderType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redactionPlaceHolderText = value.redactionPlaceHolderText;
      this._redactionPlaceHolderType = value.redactionPlaceHolderType;
    }
  }

  // redaction_place_holder_text - computed: false, optional: true, required: false
  private _redactionPlaceHolderText?: string; 
  public get redactionPlaceHolderText() {
    return this.getStringAttribute('redaction_place_holder_text');
  }
  public set redactionPlaceHolderText(value: string) {
    this._redactionPlaceHolderText = value;
  }
  public resetRedactionPlaceHolderText() {
    this._redactionPlaceHolderText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderTextInput() {
    return this._redactionPlaceHolderText;
  }

  // redaction_place_holder_type - computed: false, optional: false, required: true
  private _redactionPlaceHolderType?: string; 
  public get redactionPlaceHolderType() {
    return this.getStringAttribute('redaction_place_holder_type');
  }
  public set redactionPlaceHolderType(value: string) {
    this._redactionPlaceHolderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderTypeInput() {
    return this._redactionPlaceHolderType;
  }
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference {
    return new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}
  */
  readonly builtInPatternId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}
  */
  readonly confidenceLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}
  */
  readonly enforcedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}
  */
  readonly exemptUrls?: string[];
  /**
  * custom_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}
  */
  readonly customPattern?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable;
  /**
  * redaction_place_holder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}
  */
  readonly redactionPlaceHolder?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_pattern_id: cdktf.stringToTerraform(struct!.builtInPatternId),
    confidence_level: cdktf.numberToTerraform(struct!.confidenceLevel),
    enforced_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enforcedUrls),
    exempt_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptUrls),
    custom_pattern: cdktf.listMapper(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToTerraform, true)(struct!.customPattern),
    redaction_place_holder: cdktf.listMapper(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToTerraform, true)(struct!.redactionPlaceHolder),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_pattern_id: {
      value: cdktf.stringToHclTerraform(struct!.builtInPatternId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confidence_level: {
      value: cdktf.numberToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enforcedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exempt_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_pattern: {
      value: cdktf.listMapperHcl(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToHclTerraform, true)(struct!.customPattern),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList",
    },
    redaction_place_holder: {
      value: cdktf.listMapperHcl(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToHclTerraform, true)(struct!.redactionPlaceHolder),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInPatternId !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInPatternId = this._builtInPatternId;
    }
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._enforcedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedUrls = this._enforcedUrls;
    }
    if (this._exemptUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptUrls = this._exemptUrls;
    }
    if (this._customPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPattern = this._customPattern?.internalValue;
    }
    if (this._redactionPlaceHolder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolder = this._redactionPlaceHolder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtInPatternId = undefined;
      this._confidenceLevel = undefined;
      this._enforcedUrls = undefined;
      this._exemptUrls = undefined;
      this._customPattern.internalValue = undefined;
      this._redactionPlaceHolder.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtInPatternId = value.builtInPatternId;
      this._confidenceLevel = value.confidenceLevel;
      this._enforcedUrls = value.enforcedUrls;
      this._exemptUrls = value.exemptUrls;
      this._customPattern.internalValue = value.customPattern;
      this._redactionPlaceHolder.internalValue = value.redactionPlaceHolder;
    }
  }

  // built_in_pattern_id - computed: false, optional: true, required: false
  private _builtInPatternId?: string; 
  public get builtInPatternId() {
    return this.getStringAttribute('built_in_pattern_id');
  }
  public set builtInPatternId(value: string) {
    this._builtInPatternId = value;
  }
  public resetBuiltInPatternId() {
    this._builtInPatternId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInPatternIdInput() {
    return this._builtInPatternId;
  }

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: number; 
  public get confidenceLevel() {
    return this.getNumberAttribute('confidence_level');
  }
  public set confidenceLevel(value: number) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // enforced_urls - computed: false, optional: true, required: false
  private _enforcedUrls?: string[]; 
  public get enforcedUrls() {
    return this.getListAttribute('enforced_urls');
  }
  public set enforcedUrls(value: string[]) {
    this._enforcedUrls = value;
  }
  public resetEnforcedUrls() {
    this._enforcedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedUrlsInput() {
    return this._enforcedUrls;
  }

  // exempt_urls - computed: false, optional: true, required: false
  private _exemptUrls?: string[]; 
  public get exemptUrls() {
    return this.getListAttribute('exempt_urls');
  }
  public set exemptUrls(value: string[]) {
    this._exemptUrls = value;
  }
  public resetExemptUrls() {
    this._exemptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptUrlsInput() {
    return this._exemptUrls;
  }

  // custom_pattern - computed: false, optional: true, required: false
  private _customPattern = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList(this, "custom_pattern", false);
  public get customPattern() {
    return this._customPattern;
  }
  public putCustomPattern(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable) {
    this._customPattern.internalValue = value;
  }
  public resetCustomPattern() {
    this._customPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternInput() {
    return this._customPattern.internalValue;
  }

  // redaction_place_holder - computed: false, optional: true, required: false
  private _redactionPlaceHolder = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList(this, "redaction_place_holder", false);
  public get redactionPlaceHolder() {
    return this._redactionPlaceHolder;
  }
  public putRedactionPlaceHolder(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable) {
    this._redactionPlaceHolder.internalValue = value;
  }
  public resetRedactionPlaceHolder() {
    this._redactionPlaceHolder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderInput() {
    return this._redactionPlaceHolder.internalValue;
  }
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference {
    return new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}
  */
  readonly globalConfidenceLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}
  */
  readonly globalEnforcedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}
  */
  readonly globalExemptUrls?: string[];
  /**
  * inline_redaction_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_pattern WorkspaceswebDataProtectionSettings#inline_redaction_pattern}
  */
  readonly inlineRedactionPattern?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_confidence_level: cdktf.numberToTerraform(struct!.globalConfidenceLevel),
    global_enforced_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalEnforcedUrls),
    global_exempt_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalExemptUrls),
    inline_redaction_pattern: cdktf.listMapper(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToTerraform, true)(struct!.inlineRedactionPattern),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_confidence_level: {
      value: cdktf.numberToHclTerraform(struct!.globalConfidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_enforced_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalEnforcedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_exempt_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalExemptUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inline_redaction_pattern: {
      value: cdktf.listMapperHcl(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToHclTerraform, true)(struct!.inlineRedactionPattern),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalConfidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConfidenceLevel = this._globalConfidenceLevel;
    }
    if (this._globalEnforcedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalEnforcedUrls = this._globalEnforcedUrls;
    }
    if (this._globalExemptUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalExemptUrls = this._globalExemptUrls;
    }
    if (this._inlineRedactionPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRedactionPattern = this._inlineRedactionPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalConfidenceLevel = undefined;
      this._globalEnforcedUrls = undefined;
      this._globalExemptUrls = undefined;
      this._inlineRedactionPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalConfidenceLevel = value.globalConfidenceLevel;
      this._globalEnforcedUrls = value.globalEnforcedUrls;
      this._globalExemptUrls = value.globalExemptUrls;
      this._inlineRedactionPattern.internalValue = value.inlineRedactionPattern;
    }
  }

  // global_confidence_level - computed: false, optional: true, required: false
  private _globalConfidenceLevel?: number; 
  public get globalConfidenceLevel() {
    return this.getNumberAttribute('global_confidence_level');
  }
  public set globalConfidenceLevel(value: number) {
    this._globalConfidenceLevel = value;
  }
  public resetGlobalConfidenceLevel() {
    this._globalConfidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConfidenceLevelInput() {
    return this._globalConfidenceLevel;
  }

  // global_enforced_urls - computed: false, optional: true, required: false
  private _globalEnforcedUrls?: string[]; 
  public get globalEnforcedUrls() {
    return this.getListAttribute('global_enforced_urls');
  }
  public set globalEnforcedUrls(value: string[]) {
    this._globalEnforcedUrls = value;
  }
  public resetGlobalEnforcedUrls() {
    this._globalEnforcedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalEnforcedUrlsInput() {
    return this._globalEnforcedUrls;
  }

  // global_exempt_urls - computed: false, optional: true, required: false
  private _globalExemptUrls?: string[]; 
  public get globalExemptUrls() {
    return this.getListAttribute('global_exempt_urls');
  }
  public set globalExemptUrls(value: string[]) {
    this._globalExemptUrls = value;
  }
  public resetGlobalExemptUrls() {
    this._globalExemptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalExemptUrlsInput() {
    return this._globalExemptUrls;
  }

  // inline_redaction_pattern - computed: false, optional: true, required: false
  private _inlineRedactionPattern = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList(this, "inline_redaction_pattern", false);
  public get inlineRedactionPattern() {
    return this._inlineRedactionPattern;
  }
  public putInlineRedactionPattern(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable) {
    this._inlineRedactionPattern.internalValue = value;
  }
  public resetInlineRedactionPattern() {
    this._inlineRedactionPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRedactionPatternInput() {
    return this._inlineRedactionPattern.internalValue;
  }
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference {
    return new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings}
*/
export class WorkspaceswebDataProtectionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_data_protection_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import
  * @param importFromId The id of the existing WorkspaceswebDataProtectionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_data_protection_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebDataProtectionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebDataProtectionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_data_protection_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalEncryptionContext = config.additionalEncryptionContext;
    this._customerManagedKey = config.customerManagedKey;
    this._description = config.description;
    this._displayName = config.displayName;
    this._region = config.region;
    this._tags = config.tags;
    this._inlineRedactionConfiguration.internalValue = config.inlineRedactionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_encryption_context - computed: false, optional: true, required: false
  private _additionalEncryptionContext?: { [key: string]: string }; 
  public get additionalEncryptionContext() {
    return this.getStringMapAttribute('additional_encryption_context');
  }
  public set additionalEncryptionContext(value: { [key: string]: string }) {
    this._additionalEncryptionContext = value;
  }
  public resetAdditionalEncryptionContext() {
    this._additionalEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEncryptionContextInput() {
    return this._additionalEncryptionContext;
  }

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey?: string; 
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }
  public set customerManagedKey(value: string) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey;
  }

  // data_protection_settings_arn - computed: true, optional: false, required: false
  public get dataProtectionSettingsArn() {
    return this.getStringAttribute('data_protection_settings_arn');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // inline_redaction_configuration - computed: false, optional: true, required: false
  private _inlineRedactionConfiguration = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList(this, "inline_redaction_configuration", false);
  public get inlineRedactionConfiguration() {
    return this._inlineRedactionConfiguration;
  }
  public putInlineRedactionConfiguration(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable) {
    this._inlineRedactionConfiguration.internalValue = value;
  }
  public resetInlineRedactionConfiguration() {
    this._inlineRedactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRedactionConfigurationInput() {
    return this._inlineRedactionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalEncryptionContext),
      customer_managed_key: cdktf.stringToTerraform(this._customerManagedKey),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      inline_redaction_configuration: cdktf.listMapper(workspaceswebDataProtectionSettingsInlineRedactionConfigurationToTerraform, true)(this._inlineRedactionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      customer_managed_key: {
        value: cdktf.stringToHclTerraform(this._customerManagedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      inline_redaction_configuration: {
        value: cdktf.listMapperHcl(workspaceswebDataProtectionSettingsInlineRedactionConfigurationToHclTerraform, true)(this._inlineRedactionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
