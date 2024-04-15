// https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * custom_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}
  */
  readonly customResponseBody?: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}
  */
  readonly rule?: Wafv2RuleGroupRule[] | cdktf.IResolvable;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
  */
  readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
}
export interface Wafv2RuleGroupCustomResponseBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}
  */
  readonly key: string;
}

export function wafv2RuleGroupCustomResponseBodyToTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function wafv2RuleGroupCustomResponseBodyToHclTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupCustomResponseBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._key = value.key;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class Wafv2RuleGroupCustomResponseBodyList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupCustomResponseBodyOutputReference {
    return new Wafv2RuleGroupCustomResponseBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
  */
  readonly value: string;
}

export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
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

export class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
  */
  readonly insertHeader: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionAllow {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
}

export function wafv2RuleGroupRuleActionAllowToTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2RuleGroupRuleActionAllowToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2RuleGroupRuleActionAllowCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionAllowCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
  */
  readonly value: string;
}

export function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
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

export class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference {
    return new Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}
  */
  readonly responseHeader?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response_body_key: cdktf.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_header: cdktf.listMapper(wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform, true)(struct!.responseHeader),
  }
}


export function wafv2RuleGroupRuleActionBlockCustomResponseToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktf.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList(this, "response_header", true);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionBlock {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}
  */
  readonly customResponse?: Wafv2RuleGroupRuleActionBlockCustomResponse;
}

export function wafv2RuleGroupRuleActionBlockToTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response: wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct!.customResponse),
  }
}


export function wafv2RuleGroupRuleActionBlockToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response: {
      value: wafv2RuleGroupRuleActionBlockCustomResponseToHclTerraform(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionBlockCustomResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference(this, "custom_response");
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: Wafv2RuleGroupRuleActionBlockCustomResponse) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
  */
  readonly value: string;
}

export function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
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

export class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
  */
  readonly insertHeader: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionCaptcha {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling;
}

export function wafv2RuleGroupRuleActionCaptchaToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaOutputReference | Wafv2RuleGroupRuleActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2RuleGroupRuleActionCaptchaToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaOutputReference | Wafv2RuleGroupRuleActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
  */
  readonly value: string;
}

export function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
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

export class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionChallengeCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
  */
  readonly insertHeader: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionChallenge {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling;
}

export function wafv2RuleGroupRuleActionChallengeToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeOutputReference | Wafv2RuleGroupRuleActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2RuleGroupRuleActionChallengeToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeOutputReference | Wafv2RuleGroupRuleActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
  */
  readonly value: string;
}

export function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
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

export class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
  */
  readonly insertHeader: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2RuleGroupRuleActionCountCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2RuleGroupRuleActionCount {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
}

export function wafv2RuleGroupRuleActionCountToTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2RuleGroupRuleActionCountToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2RuleGroupRuleActionCountCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionCountCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleActionCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleActionCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2RuleGroupRuleAction {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}
  */
  readonly allow?: Wafv2RuleGroupRuleActionAllow;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}
  */
  readonly block?: Wafv2RuleGroupRuleActionBlock;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}
  */
  readonly captcha?: Wafv2RuleGroupRuleActionCaptcha;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}
  */
  readonly challenge?: Wafv2RuleGroupRuleActionChallenge;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}
  */
  readonly count?: Wafv2RuleGroupRuleActionCount;
}

export function wafv2RuleGroupRuleActionToTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: wafv2RuleGroupRuleActionAllowToTerraform(struct!.allow),
    block: wafv2RuleGroupRuleActionBlockToTerraform(struct!.block),
    captcha: wafv2RuleGroupRuleActionCaptchaToTerraform(struct!.captcha),
    challenge: wafv2RuleGroupRuleActionChallengeToTerraform(struct!.challenge),
    count: wafv2RuleGroupRuleActionCountToTerraform(struct!.count),
  }
}


export function wafv2RuleGroupRuleActionToHclTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: wafv2RuleGroupRuleActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionAllowList",
    },
    block: {
      value: wafv2RuleGroupRuleActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionBlockList",
    },
    captcha: {
      value: wafv2RuleGroupRuleActionCaptchaToHclTerraform(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionCaptchaList",
    },
    challenge: {
      value: wafv2RuleGroupRuleActionChallengeToHclTerraform(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionChallengeList",
    },
    count: {
      value: wafv2RuleGroupRuleActionCountToHclTerraform(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionCountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new Wafv2RuleGroupRuleActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: Wafv2RuleGroupRuleActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new Wafv2RuleGroupRuleActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: Wafv2RuleGroupRuleActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new Wafv2RuleGroupRuleActionCaptchaOutputReference(this, "captcha");
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: Wafv2RuleGroupRuleActionCaptcha) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new Wafv2RuleGroupRuleActionChallengeOutputReference(this, "challenge");
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: Wafv2RuleGroupRuleActionChallenge) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new Wafv2RuleGroupRuleActionCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: Wafv2RuleGroupRuleActionCount) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}
export interface Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}
  */
  readonly immunityTime?: number;
}

export function wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time: cdktf.numberToTerraform(struct!.immunityTime),
  }
}


export function wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time: {
      value: cdktf.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface Wafv2RuleGroupRuleCaptchaConfig {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}
  */
  readonly immunityTimeProperty?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty;
}

export function wafv2RuleGroupRuleCaptchaConfigToTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigOutputReference | Wafv2RuleGroupRuleCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time_property: wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function wafv2RuleGroupRuleCaptchaConfigToHclTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigOutputReference | Wafv2RuleGroupRuleCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time_property: {
      value: wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleCaptchaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleCaptchaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleCaptchaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface Wafv2RuleGroupRuleRuleLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleRuleLabelToTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafv2RuleGroupRuleRuleLabelToHclTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleRuleLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2RuleGroupRuleRuleLabelList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleRuleLabelOutputReference {
    return new Wafv2RuleGroupRuleRuleLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function wafv2RuleGroupRuleVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
export interface Wafv2RuleGroupRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}
  */
  readonly action: Wafv2RuleGroupRuleAction;
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}
  */
  readonly captchaConfig?: Wafv2RuleGroupRuleCaptchaConfig;
  /**
  * rule_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}
  */
  readonly ruleLabel?: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
  */
  readonly statement?: any;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
  */
  readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig;
}

export function wafv2RuleGroupRuleToTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: wafv2RuleGroupRuleActionToTerraform(struct!.action),
    captcha_config: wafv2RuleGroupRuleCaptchaConfigToTerraform(struct!.captchaConfig),
    rule_label: cdktf.listMapper(wafv2RuleGroupRuleRuleLabelToTerraform, true)(struct!.ruleLabel),
    statement: cdktf.anyToTerraform(struct!.statement),
    visibility_config: wafv2RuleGroupRuleVisibilityConfigToTerraform(struct!.visibilityConfig),
  }
}


export function wafv2RuleGroupRuleToHclTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: wafv2RuleGroupRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleActionList",
    },
    captcha_config: {
      value: wafv2RuleGroupRuleCaptchaConfigToHclTerraform(struct!.captchaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleCaptchaConfigList",
    },
    rule_label: {
      value: cdktf.listMapperHcl(wafv2RuleGroupRuleRuleLabelToHclTerraform, true)(struct!.ruleLabel),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2RuleGroupRuleRuleLabelList",
    },
    statement: {
      value: cdktf.anyToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "any",
    },
    visibility_config: {
      value: wafv2RuleGroupRuleVisibilityConfigToHclTerraform(struct!.visibilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2RuleGroupRuleVisibilityConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._captchaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaConfig = this._captchaConfig?.internalValue;
    }
    if (this._ruleLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleLabel = this._ruleLabel?.internalValue;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._visibilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityConfig = this._visibilityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
      this._captchaConfig.internalValue = undefined;
      this._ruleLabel.internalValue = undefined;
      this._statement = undefined;
      this._visibilityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
      this._captchaConfig.internalValue = value.captchaConfig;
      this._ruleLabel.internalValue = value.ruleLabel;
      this._statement = value.statement;
      this._visibilityConfig.internalValue = value.visibilityConfig;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: false, required: true
  private _action = new Wafv2RuleGroupRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: Wafv2RuleGroupRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new Wafv2RuleGroupRuleCaptchaConfigOutputReference(this, "captcha_config");
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: Wafv2RuleGroupRuleCaptchaConfig) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // rule_label - computed: false, optional: true, required: false
  private _ruleLabel = new Wafv2RuleGroupRuleRuleLabelList(this, "rule_label", true);
  public get ruleLabel() {
    return this._ruleLabel;
  }
  public putRuleLabel(value: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable) {
    this._ruleLabel.internalValue = value;
  }
  public resetRuleLabel() {
    this._ruleLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLabelInput() {
    return this._ruleLabel.internalValue;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: any; 
  public get statement() {
    return this.interpolationForAttribute('statement');
  }
  public set statement(value: any) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2RuleGroupRuleVisibilityConfigOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2RuleGroupRuleVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }
}

export class Wafv2RuleGroupRuleList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRule[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleOutputReference {
    return new Wafv2RuleGroupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2RuleGroupVisibilityConfigToTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function wafv2RuleGroupVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2RuleGroupVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}
*/
export class Wafv2RuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2RuleGroup to import
  * @param importFromId The id of the existing Wafv2RuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2RuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2RuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.45.0',
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
    this._capacity = config.capacity;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customResponseBody.internalValue = config.customResponseBody;
    this._rule.internalValue = config.rule;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // custom_response_body - computed: false, optional: true, required: false
  private _customResponseBody = new Wafv2RuleGroupCustomResponseBodyList(this, "custom_response_body", true);
  public get customResponseBody() {
    return this._customResponseBody;
  }
  public putCustomResponseBody(value: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable) {
    this._customResponseBody.internalValue = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new Wafv2RuleGroupRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: Wafv2RuleGroupRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2RuleGroupVisibilityConfigOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      custom_response_body: cdktf.listMapper(wafv2RuleGroupCustomResponseBodyToTerraform, true)(this._customResponseBody.internalValue),
      rule: cdktf.listMapper(wafv2RuleGroupRuleToTerraform, true)(this._rule.internalValue),
      visibility_config: wafv2RuleGroupVisibilityConfigToTerraform(this._visibilityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
      custom_response_body: {
        value: cdktf.listMapperHcl(wafv2RuleGroupCustomResponseBodyToHclTerraform, true)(this._customResponseBody.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Wafv2RuleGroupCustomResponseBodyList",
      },
      rule: {
        value: cdktf.listMapperHcl(wafv2RuleGroupRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Wafv2RuleGroupRuleList",
      },
      visibility_config: {
        value: wafv2RuleGroupVisibilityConfigToHclTerraform(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2RuleGroupVisibilityConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
