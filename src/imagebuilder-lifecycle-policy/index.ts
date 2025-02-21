// https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * policy_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#policy_detail ImagebuilderLifecyclePolicy#policy_detail}
  */
  readonly policyDetail?: ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable;
  /**
  * resource_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}
  */
  readonly resourceSelection?: ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
  */
  readonly amis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}
  */
  readonly containers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}
  */
  readonly snapshots?: boolean | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amis: cdktf.booleanToTerraform(struct!.amis),
    containers: cdktf.booleanToTerraform(struct!.containers),
    snapshots: cdktf.booleanToTerraform(struct!.snapshots),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amis: {
      value: cdktf.booleanToHclTerraform(struct!.amis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.booleanToHclTerraform(struct!.containers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.snapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amis !== undefined) {
      hasAnyValues = true;
      internalValueResult.amis = this._amis;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._snapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amis = undefined;
      this._containers = undefined;
      this._snapshots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amis = value.amis;
      this._containers = value.containers;
      this._snapshots = value.snapshots;
    }
  }

  // amis - computed: true, optional: true, required: false
  private _amis?: boolean | cdktf.IResolvable; 
  public get amis() {
    return this.getBooleanAttribute('amis');
  }
  public set amis(value: boolean | cdktf.IResolvable) {
    this._amis = value;
  }
  public resetAmis() {
    this._amis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amisInput() {
    return this._amis;
  }

  // containers - computed: true, optional: true, required: false
  private _containers?: boolean | cdktf.IResolvable; 
  public get containers() {
    return this.getBooleanAttribute('containers');
  }
  public set containers(value: boolean | cdktf.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // snapshots - computed: true, optional: true, required: false
  private _snapshots?: boolean | cdktf.IResolvable; 
  public get snapshots() {
    return this.getBooleanAttribute('snapshots');
  }
  public set snapshots(value: boolean | cdktf.IResolvable) {
    this._snapshots = value;
  }
  public resetSnapshots() {
    this._snapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * include_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}
  */
  readonly includeResources?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailActionToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    include_resources: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToTerraform, true)(struct!.includeResources),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailActionToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_resources: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToHclTerraform, true)(struct!.includeResources),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._includeResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeResources = this._includeResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._includeResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._includeResources.internalValue = value.includeResources;
    }
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

  // include_resources - computed: false, optional: true, required: false
  private _includeResources = new ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList(this, "include_resources", false);
  public get includeResources() {
    return this._includeResources;
  }
  public putIncludeResources(value: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable) {
    this._includeResources.internalValue = value;
  }
  public resetIncludeResources() {
    this._includeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResourcesInput() {
    return this._includeResources.internalValue;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailActionList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
  */
  readonly value: number;
}

export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}
  */
  readonly sharedAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
  /**
  * last_launched block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}
  */
  readonly lastLaunched?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    shared_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sharedAccounts),
    tag_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagMap),
    last_launched: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToTerraform, true)(struct!.lastLaunched),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shared_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sharedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    last_launched: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToHclTerraform, true)(struct!.lastLaunched),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._sharedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAccounts = this._sharedAccounts;
    }
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    if (this._lastLaunched?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastLaunched = this._lastLaunched?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isPublic = undefined;
      this._regions = undefined;
      this._sharedAccounts = undefined;
      this._tagMap = undefined;
      this._lastLaunched.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isPublic = value.isPublic;
      this._regions = value.regions;
      this._sharedAccounts = value.sharedAccounts;
      this._tagMap = value.tagMap;
      this._lastLaunched.internalValue = value.lastLaunched;
    }
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // shared_accounts - computed: false, optional: true, required: false
  private _sharedAccounts?: string[]; 
  public get sharedAccounts() {
    return this.getListAttribute('shared_accounts');
  }
  public set sharedAccounts(value: string[]) {
    this._sharedAccounts = value;
  }
  public resetSharedAccounts() {
    this._sharedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccountsInput() {
    return this._sharedAccounts;
  }

  // tag_map - computed: false, optional: true, required: false
  private _tagMap?: { [key: string]: string }; 
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }

  // last_launched - computed: false, optional: true, required: false
  private _lastLaunched = new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList(this, "last_launched", false);
  public get lastLaunched() {
    return this._lastLaunched;
  }
  public putLastLaunched(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable) {
    this._lastLaunched.internalValue = value;
  }
  public resetLastLaunched() {
    this._lastLaunched.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLaunchedInput() {
    return this._lastLaunched.internalValue;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
  /**
  * amis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
  */
  readonly amis?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagMap),
    amis: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToTerraform, true)(struct!.amis),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    amis: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToHclTerraform, true)(struct!.amis),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    if (this._amis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amis = this._amis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagMap = undefined;
      this._amis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagMap = value.tagMap;
      this._amis.internalValue = value.amis;
    }
  }

  // tag_map - computed: false, optional: true, required: false
  private _tagMap?: { [key: string]: string }; 
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }

  // amis - computed: false, optional: true, required: false
  private _amis = new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList(this, "amis", false);
  public get amis() {
    return this._amis;
  }
  public putAmis(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable) {
    this._amis.internalValue = value;
  }
  public resetAmis() {
    this._amis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amisInput() {
    return this._amis.internalValue;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}
  */
  readonly retainAtLeast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
  */
  readonly value: number;
}

export function imagebuilderLifecyclePolicyPolicyDetailFilterToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_at_least: cdktf.numberToTerraform(struct!.retainAtLeast),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailFilterToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_at_least: {
      value: cdktf.numberToHclTerraform(struct!.retainAtLeast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainAtLeast !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAtLeast = this._retainAtLeast;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainAtLeast = undefined;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainAtLeast = value.retainAtLeast;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // retain_at_least - computed: false, optional: true, required: false
  private _retainAtLeast?: number; 
  public get retainAtLeast() {
    return this.getNumberAttribute('retain_at_least');
  }
  public set retainAtLeast(value: number) {
    this._retainAtLeast = value;
  }
  public resetRetainAtLeast() {
    this._retainAtLeast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAtLeastInput() {
    return this._retainAtLeast;
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailFilterList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetail {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}
  */
  readonly action?: ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable;
  /**
  * exclusion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}
  */
  readonly exclusionRules?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}
  */
  readonly filter?: ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailActionToTerraform, true)(struct!.action),
    exclusion_rules: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToTerraform, true)(struct!.exclusionRules),
    filter: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailFilterToTerraform, true)(struct!.filter),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailActionList",
    },
    exclusion_rules: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToHclTerraform, true)(struct!.exclusionRules),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList",
    },
    filter: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._exclusionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRules = this._exclusionRules?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._exclusionRules.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._exclusionRules.internalValue = value.exclusionRules;
      this._filter.internalValue = value.filter;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new ImagebuilderLifecyclePolicyPolicyDetailActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // exclusion_rules - computed: false, optional: true, required: false
  private _exclusionRules = new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList(this, "exclusion_rules", false);
  public get exclusionRules() {
    return this._exclusionRules;
  }
  public putExclusionRules(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable) {
    this._exclusionRules.internalValue = value;
  }
  public resetExclusionRules() {
    this._exclusionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRulesInput() {
    return this._exclusionRules.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ImagebuilderLifecyclePolicyPolicyDetailFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable) {
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

export class ImagebuilderLifecyclePolicyPolicyDetailList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyResourceSelectionRecipe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}
  */
  readonly semanticVersion: string;
}

export function imagebuilderLifecyclePolicyResourceSelectionRecipeToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    semantic_version: cdktf.stringToTerraform(struct!.semanticVersion),
  }
}


export function imagebuilderLifecyclePolicyResourceSelectionRecipeToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable): any {
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
    semantic_version: {
      value: cdktf.stringToHclTerraform(struct!.semanticVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._semanticVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticVersion = this._semanticVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._semanticVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._semanticVersion = value.semanticVersion;
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

  // semantic_version - computed: false, optional: false, required: true
  private _semanticVersion?: string; 
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string) {
    this._semanticVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticVersionInput() {
    return this._semanticVersion;
  }
}

export class ImagebuilderLifecyclePolicyResourceSelectionRecipeList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference {
    return new ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyResourceSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
  /**
  * recipe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#recipe ImagebuilderLifecyclePolicy#recipe}
  */
  readonly recipe?: ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable;
}

export function imagebuilderLifecyclePolicyResourceSelectionToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagMap),
    recipe: cdktf.listMapper(imagebuilderLifecyclePolicyResourceSelectionRecipeToTerraform, true)(struct!.recipe),
  }
}


export function imagebuilderLifecyclePolicyResourceSelectionToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    recipe: {
      value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyResourceSelectionRecipeToHclTerraform, true)(struct!.recipe),
      isBlock: true,
      type: "set",
      storageClassType: "ImagebuilderLifecyclePolicyResourceSelectionRecipeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyResourceSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    if (this._recipe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipe = this._recipe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagMap = undefined;
      this._recipe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagMap = value.tagMap;
      this._recipe.internalValue = value.recipe;
    }
  }

  // tag_map - computed: false, optional: true, required: false
  private _tagMap?: { [key: string]: string }; 
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }

  // recipe - computed: false, optional: true, required: false
  private _recipe = new ImagebuilderLifecyclePolicyResourceSelectionRecipeList(this, "recipe", true);
  public get recipe() {
    return this._recipe;
  }
  public putRecipe(value: ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable) {
    this._recipe.internalValue = value;
  }
  public resetRecipe() {
    this._recipe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeInput() {
    return this._recipe.internalValue;
  }
}

export class ImagebuilderLifecyclePolicyResourceSelectionList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionOutputReference {
    return new ImagebuilderLifecyclePolicyResourceSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy}
*/
export class ImagebuilderLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import
  * @param importFromId The id of the existing ImagebuilderLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_imagebuilder_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.88.0',
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
    this._description = config.description;
    this._executionRole = config.executionRole;
    this._name = config.name;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._tags = config.tags;
    this._policyDetail.internalValue = config.policyDetail;
    this._resourceSelection.internalValue = config.resourceSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // id - computed: true, optional: false, required: false
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
    return this._name;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // policy_detail - computed: false, optional: true, required: false
  private _policyDetail = new ImagebuilderLifecyclePolicyPolicyDetailList(this, "policy_detail", true);
  public get policyDetail() {
    return this._policyDetail;
  }
  public putPolicyDetail(value: ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable) {
    this._policyDetail.internalValue = value;
  }
  public resetPolicyDetail() {
    this._policyDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailInput() {
    return this._policyDetail.internalValue;
  }

  // resource_selection - computed: false, optional: true, required: false
  private _resourceSelection = new ImagebuilderLifecyclePolicyResourceSelectionList(this, "resource_selection", false);
  public get resourceSelection() {
    return this._resourceSelection;
  }
  public putResourceSelection(value: ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable) {
    this._resourceSelection.internalValue = value;
  }
  public resetResourceSelection() {
    this._resourceSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectionInput() {
    return this._resourceSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      execution_role: cdktf.stringToTerraform(this._executionRole),
      name: cdktf.stringToTerraform(this._name),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      policy_detail: cdktf.listMapper(imagebuilderLifecyclePolicyPolicyDetailToTerraform, true)(this._policyDetail.internalValue),
      resource_selection: cdktf.listMapper(imagebuilderLifecyclePolicyResourceSelectionToTerraform, true)(this._resourceSelection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role: {
        value: cdktf.stringToHclTerraform(this._executionRole),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      policy_detail: {
        value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailToHclTerraform, true)(this._policyDetail.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailList",
      },
      resource_selection: {
        value: cdktf.listMapperHcl(imagebuilderLifecyclePolicyResourceSelectionToHclTerraform, true)(this._resourceSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagebuilderLifecyclePolicyResourceSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
