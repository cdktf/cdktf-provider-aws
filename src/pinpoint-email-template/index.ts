/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointEmailTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * email_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}
  */
  readonly emailTemplate?: PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable;
}
export interface PinpointEmailTemplateEmailTemplateHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}
  */
  readonly value?: string;
}

export function pinpointEmailTemplateEmailTemplateHeaderToTerraform(struct?: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pinpointEmailTemplateEmailTemplateHeaderToHclTerraform(struct?: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointEmailTemplateEmailTemplateHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PinpointEmailTemplateEmailTemplateHeaderList extends cdktf.ComplexList {
  public internalValue? : PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable

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
  public get(index: number): PinpointEmailTemplateEmailTemplateHeaderOutputReference {
    return new PinpointEmailTemplateEmailTemplateHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PinpointEmailTemplateEmailTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}
  */
  readonly defaultSubstitutions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}
  */
  readonly htmlPart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}
  */
  readonly recommenderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}
  */
  readonly textPart?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#header PinpointEmailTemplate#header}
  */
  readonly header?: PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable;
}

export function pinpointEmailTemplateEmailTemplateToTerraform(struct?: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_substitutions: cdktf.stringToTerraform(struct!.defaultSubstitutions),
    description: cdktf.stringToTerraform(struct!.description),
    html_part: cdktf.stringToTerraform(struct!.htmlPart),
    recommender_id: cdktf.stringToTerraform(struct!.recommenderId),
    subject: cdktf.stringToTerraform(struct!.subject),
    text_part: cdktf.stringToTerraform(struct!.textPart),
    header: cdktf.listMapper(pinpointEmailTemplateEmailTemplateHeaderToTerraform, true)(struct!.header),
  }
}


export function pinpointEmailTemplateEmailTemplateToHclTerraform(struct?: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_substitutions: {
      value: cdktf.stringToHclTerraform(struct!.defaultSubstitutions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html_part: {
      value: cdktf.stringToHclTerraform(struct!.htmlPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommender_id: {
      value: cdktf.stringToHclTerraform(struct!.recommenderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_part: {
      value: cdktf.stringToHclTerraform(struct!.textPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(pinpointEmailTemplateEmailTemplateHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "PinpointEmailTemplateEmailTemplateHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointEmailTemplateEmailTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PinpointEmailTemplateEmailTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSubstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubstitutions = this._defaultSubstitutions;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._htmlPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlPart = this._htmlPart;
    }
    if (this._recommenderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommenderId = this._recommenderId;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPart = this._textPart;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSubstitutions = undefined;
      this._description = undefined;
      this._htmlPart = undefined;
      this._recommenderId = undefined;
      this._subject = undefined;
      this._textPart = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSubstitutions = value.defaultSubstitutions;
      this._description = value.description;
      this._htmlPart = value.htmlPart;
      this._recommenderId = value.recommenderId;
      this._subject = value.subject;
      this._textPart = value.textPart;
      this._header.internalValue = value.header;
    }
  }

  // default_substitutions - computed: false, optional: true, required: false
  private _defaultSubstitutions?: string; 
  public get defaultSubstitutions() {
    return this.getStringAttribute('default_substitutions');
  }
  public set defaultSubstitutions(value: string) {
    this._defaultSubstitutions = value;
  }
  public resetDefaultSubstitutions() {
    this._defaultSubstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubstitutionsInput() {
    return this._defaultSubstitutions;
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

  // html_part - computed: false, optional: true, required: false
  private _htmlPart?: string; 
  public get htmlPart() {
    return this.getStringAttribute('html_part');
  }
  public set htmlPart(value: string) {
    this._htmlPart = value;
  }
  public resetHtmlPart() {
    this._htmlPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlPartInput() {
    return this._htmlPart;
  }

  // recommender_id - computed: false, optional: true, required: false
  private _recommenderId?: string; 
  public get recommenderId() {
    return this.getStringAttribute('recommender_id');
  }
  public set recommenderId(value: string) {
    this._recommenderId = value;
  }
  public resetRecommenderId() {
    this._recommenderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderIdInput() {
    return this._recommenderId;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_part - computed: false, optional: true, required: false
  private _textPart?: string; 
  public get textPart() {
    return this.getStringAttribute('text_part');
  }
  public set textPart(value: string) {
    this._textPart = value;
  }
  public resetTextPart() {
    this._textPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textPartInput() {
    return this._textPart;
  }

  // header - computed: false, optional: true, required: false
  private _header = new PinpointEmailTemplateEmailTemplateHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class PinpointEmailTemplateEmailTemplateList extends cdktf.ComplexList {
  public internalValue? : PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable

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
  public get(index: number): PinpointEmailTemplateEmailTemplateOutputReference {
    return new PinpointEmailTemplateEmailTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template}
*/
export class PinpointEmailTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpoint_email_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PinpointEmailTemplate to import
  * @param importFromId The id of the existing PinpointEmailTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PinpointEmailTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpoint_email_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PinpointEmailTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PinpointEmailTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_email_template',
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
    this._tags = config.tags;
    this._templateName = config.templateName;
    this._emailTemplate.internalValue = config.emailTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // email_template - computed: false, optional: true, required: false
  private _emailTemplate = new PinpointEmailTemplateEmailTemplateList(this, "email_template", false);
  public get emailTemplate() {
    return this._emailTemplate;
  }
  public putEmailTemplate(value: PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable) {
    this._emailTemplate.internalValue = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      template_name: cdktf.stringToTerraform(this._templateName),
      email_template: cdktf.listMapper(pinpointEmailTemplateEmailTemplateToTerraform, true)(this._emailTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.listMapperHcl(pinpointEmailTemplateEmailTemplateToHclTerraform, true)(this._emailTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PinpointEmailTemplateEmailTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
