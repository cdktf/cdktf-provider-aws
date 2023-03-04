// https://www.terraform.io/docs/providers/aws/r/appmesh_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}
  */
  readonly virtualRouterName: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}
  */
  readonly spec: AppmeshRouteSpec;
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AppmeshRouteSpecGrpcRouteActionWeightedTargetList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference {
    return new AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecGrpcRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable;
}

export function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform, true)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new AppmeshRouteSpecGrpcRouteActionWeightedTargetList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
      this._range.internalValue = value.range;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // range - computed: false, optional: true, required: false
  private _range = new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct!.match),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
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

  // match - computed: false, optional: true, required: false
  private _match = new AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference {
    return new AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecGrpcRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}
  */
  readonly methodName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#metadata AppmeshRoute#metadata}
  */
  readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable;
}

export function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_name: cdktf.stringToTerraform(struct!.methodName),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform, true)(struct!.metadata),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methodName = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._serviceName = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methodName = value.methodName;
      this._port = value.port;
      this._prefix = value.prefix;
      this._serviceName = value.serviceName;
      this._metadata.internalValue = value.metadata;
    }
  }

  // method_name - computed: false, optional: true, required: false
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AppmeshRouteSpecGrpcRouteMatchMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined {
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

  public set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}
  */
  readonly grpcRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grpcRetryEvents),
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRetryEvents = this._grpcRetryEvents;
    }
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcRetryEvents = undefined;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcRetryEvents = value.grpcRetryEvents;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // grpc_retry_events - computed: false, optional: true, required: false
  private _grpcRetryEvents?: string[]; 
  public get grpcRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('grpc_retry_events'));
  }
  public set grpcRetryEvents(value: string[]) {
    this._grpcRetryEvents = value;
  }
  public resetGrpcRetryEvents() {
    this._grpcRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRetryEventsInput() {
    return this._grpcRetryEvents;
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined {
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

  public set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined {
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

  public set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecGrpcRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
}

export function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRouteTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRouteTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshRouteSpecGrpcRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecGrpcRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecGrpcRouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout;
}

export function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecGrpcRouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecGrpcRouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshRouteSpecGrpcRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshRouteSpecGrpcRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new AppmeshRouteSpecGrpcRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecGrpcRouteMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AppmeshRouteSpecHttp2RouteActionWeightedTargetList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference {
    return new AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecHttp2RouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable;
}

export function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform, true)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new AppmeshRouteSpecHttp2RouteActionWeightedTargetList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
      this._range.internalValue = value.range;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // range - computed: false, optional: true, required: false
  private _range = new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct!.match),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
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

  // match - computed: false, optional: true, required: false
  private _match = new AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference {
    return new AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecHttp2RouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}
  */
  readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable;
}

export function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform, true)(struct!.header),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._port = value.port;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._header.internalValue = value.header;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AppmeshRouteSpecHttp2RouteMatchHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable) {
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
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttp2RouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
}

export function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2RouteTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2RouteTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshRouteSpecHttp2Route {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttp2RouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttp2RouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout;
}

export function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecHttp2RouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecHttp2RouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttp2Route | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttp2Route | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshRouteSpecHttp2RouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshRouteSpecHttp2RouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshRouteSpecHttp2RouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecHttp2RouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AppmeshRouteSpecHttpRouteActionWeightedTargetList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference {
    return new AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecHttpRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable;
}

export function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform, true)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new AppmeshRouteSpecHttpRouteActionWeightedTargetList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
}

export function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
      this._range.internalValue = value.range;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // range - computed: false, optional: true, required: false
  private _range = new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
}

export function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct!.match),
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
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

  // match - computed: false, optional: true, required: false
  private _match = new AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecHttpRouteMatchHeaderOutputReference {
    return new AppmeshRouteSpecHttpRouteMatchHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecHttpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}
  */
  readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable;
}

export function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform, true)(struct!.header),
  }
}

export class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._port = value.port;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._header.internalValue = value.header;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AppmeshRouteSpecHttpRouteMatchHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable) {
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
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteTimeoutIdle | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined {
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

  public set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecHttpRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
}

export function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRouteTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRouteTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshRouteSpecHttpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttpRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttpRouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecHttpRouteTimeout;
}

export function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecHttpRouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecHttpRouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecHttpRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshRouteSpecHttpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshRouteSpecHttpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshRouteSpecHttpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecHttpRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AppmeshRouteSpecHttpRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AppmeshRouteSpecHttpRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AppmeshRouteSpecTcpRouteActionWeightedTargetList extends cdktf.ComplexList {
  public internalValue? : AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable

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
  public get(index: number): AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference {
    return new AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshRouteSpecTcpRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable;
}

export function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform, true)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecTcpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecTcpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new AppmeshRouteSpecTcpRouteActionWeightedTargetList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface AppmeshRouteSpecTcpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}
  */
  readonly port?: number;
}

export function appmeshRouteSpecTcpRouteMatchToTerraform(struct?: AppmeshRouteSpecTcpRouteMatchOutputReference | AppmeshRouteSpecTcpRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class AppmeshRouteSpecTcpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecTcpRouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecTcpRouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecTcpRouteTimeoutIdle | undefined {
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

  public set internalValue(value: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AppmeshRouteSpecTcpRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle;
}

export function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct!.idle),
  }
}

export class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecTcpRouteTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecTcpRouteTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }
}
export interface AppmeshRouteSpecTcpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecTcpRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecTcpRouteMatch;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecTcpRouteTimeout;
}

export function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecTcpRouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecTcpRouteMatchToTerraform(struct!.match),
    timeout: appmeshRouteSpecTcpRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpecTcpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpecTcpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshRouteSpecTcpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshRouteSpecTcpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new AppmeshRouteSpecTcpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshRouteSpecTcpRouteMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AppmeshRouteSpecTcpRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AppmeshRouteSpecTcpRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface AppmeshRouteSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}
  */
  readonly priority?: number;
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_route AppmeshRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshRouteSpecGrpcRoute;
  /**
  * http2_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http2_route AppmeshRoute#http2_route}
  */
  readonly http2Route?: AppmeshRouteSpecHttp2Route;
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_route AppmeshRoute#http_route}
  */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute;
  /**
  * tcp_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_route AppmeshRoute#tcp_route}
  */
  readonly tcpRoute?: AppmeshRouteSpecTcpRoute;
}

export function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    grpc_route: appmeshRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: appmeshRouteSpecHttp2RouteToTerraform(struct!.http2Route),
    http_route: appmeshRouteSpecHttpRouteToTerraform(struct!.httpRoute),
    tcp_route: appmeshRouteSpecTcpRouteToTerraform(struct!.tcpRoute),
  }
}

export class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshRouteSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._http2Route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Route = this._http2Route?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    if (this._tcpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRoute = this._tcpRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshRouteSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._grpcRoute.internalValue = undefined;
      this._http2Route.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
      this._tcpRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
      this._tcpRoute.internalValue = value.tcpRoute;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new AppmeshRouteSpecGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: AppmeshRouteSpecGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route = new AppmeshRouteSpecHttp2RouteOutputReference(this, "http2_route");
  public get http2Route() {
    return this._http2Route;
  }
  public putHttp2Route(value: AppmeshRouteSpecHttp2Route) {
    this._http2Route.internalValue = value;
  }
  public resetHttp2Route() {
    this._http2Route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new AppmeshRouteSpecHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: AppmeshRouteSpecHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }

  // tcp_route - computed: false, optional: true, required: false
  private _tcpRoute = new AppmeshRouteSpecTcpRouteOutputReference(this, "tcp_route");
  public get tcpRoute() {
    return this._tcpRoute;
  }
  public putTcpRoute(value: AppmeshRouteSpecTcpRoute) {
    this._tcpRoute.internalValue = value;
  }
  public resetTcpRoute() {
    this._tcpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRouteInput() {
    return this._tcpRoute.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route aws_appmesh_route}
*/
export class AppmeshRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route aws_appmesh_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_route',
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
    this._id = config.id;
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualRouterName = config.virtualRouterName;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
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

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName?: string; 
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AppmeshRouteSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshRouteSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
      spec: appmeshRouteSpecToTerraform(this._spec.internalValue),
    };
  }
}
