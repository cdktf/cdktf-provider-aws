/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrometheusScraperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}
  */
  readonly scrapeConfiguration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}
  */
  readonly destination?: PrometheusScraperDestination[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#source PrometheusScraper#source}
  */
  readonly source?: PrometheusScraperSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}
  */
  readonly timeouts?: PrometheusScraperTimeouts;
}
export interface PrometheusScraperDestinationAmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}
  */
  readonly workspaceArn: string;
}

export function prometheusScraperDestinationAmpToTerraform(struct?: PrometheusScraperDestinationAmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_arn: cdktf.stringToTerraform(struct!.workspaceArn),
  }
}


export function prometheusScraperDestinationAmpToHclTerraform(struct?: PrometheusScraperDestinationAmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_arn: {
      value: cdktf.stringToHclTerraform(struct!.workspaceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperDestinationAmpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrometheusScraperDestinationAmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceArn = this._workspaceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperDestinationAmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceArn = value.workspaceArn;
    }
  }

  // workspace_arn - computed: false, optional: false, required: true
  private _workspaceArn?: string; 
  public get workspaceArn() {
    return this.getStringAttribute('workspace_arn');
  }
  public set workspaceArn(value: string) {
    this._workspaceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceArnInput() {
    return this._workspaceArn;
  }
}

export class PrometheusScraperDestinationAmpList extends cdktf.ComplexList {
  public internalValue? : PrometheusScraperDestinationAmp[] | cdktf.IResolvable

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
  public get(index: number): PrometheusScraperDestinationAmpOutputReference {
    return new PrometheusScraperDestinationAmpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperDestination {
  /**
  * amp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#amp PrometheusScraper#amp}
  */
  readonly amp?: PrometheusScraperDestinationAmp[] | cdktf.IResolvable;
}

export function prometheusScraperDestinationToTerraform(struct?: PrometheusScraperDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amp: cdktf.listMapper(prometheusScraperDestinationAmpToTerraform, true)(struct!.amp),
  }
}


export function prometheusScraperDestinationToHclTerraform(struct?: PrometheusScraperDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amp: {
      value: cdktf.listMapperHcl(prometheusScraperDestinationAmpToHclTerraform, true)(struct!.amp),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusScraperDestinationAmpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrometheusScraperDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amp = this._amp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amp.internalValue = value.amp;
    }
  }

  // amp - computed: false, optional: true, required: false
  private _amp = new PrometheusScraperDestinationAmpList(this, "amp", false);
  public get amp() {
    return this._amp;
  }
  public putAmp(value: PrometheusScraperDestinationAmp[] | cdktf.IResolvable) {
    this._amp.internalValue = value;
  }
  public resetAmp() {
    this._amp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampInput() {
    return this._amp.internalValue;
  }
}

export class PrometheusScraperDestinationList extends cdktf.ComplexList {
  public internalValue? : PrometheusScraperDestination[] | cdktf.IResolvable

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
  public get(index: number): PrometheusScraperDestinationOutputReference {
    return new PrometheusScraperDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperSourceEks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function prometheusScraperSourceEksToTerraform(struct?: PrometheusScraperSourceEks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function prometheusScraperSourceEksToHclTerraform(struct?: PrometheusScraperSourceEks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperSourceEksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrometheusScraperSourceEks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperSourceEks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class PrometheusScraperSourceEksList extends cdktf.ComplexList {
  public internalValue? : PrometheusScraperSourceEks[] | cdktf.IResolvable

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
  public get(index: number): PrometheusScraperSourceEksOutputReference {
    return new PrometheusScraperSourceEksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperSource {
  /**
  * eks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#eks PrometheusScraper#eks}
  */
  readonly eks?: PrometheusScraperSourceEks[] | cdktf.IResolvable;
}

export function prometheusScraperSourceToTerraform(struct?: PrometheusScraperSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eks: cdktf.listMapper(prometheusScraperSourceEksToTerraform, true)(struct!.eks),
  }
}


export function prometheusScraperSourceToHclTerraform(struct?: PrometheusScraperSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eks: {
      value: cdktf.listMapperHcl(prometheusScraperSourceEksToHclTerraform, true)(struct!.eks),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusScraperSourceEksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrometheusScraperSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eks = this._eks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eks.internalValue = value.eks;
    }
  }

  // eks - computed: false, optional: true, required: false
  private _eks = new PrometheusScraperSourceEksList(this, "eks", false);
  public get eks() {
    return this._eks;
  }
  public putEks(value: PrometheusScraperSourceEks[] | cdktf.IResolvable) {
    this._eks.internalValue = value;
  }
  public resetEks() {
    this._eks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInput() {
    return this._eks.internalValue;
  }
}

export class PrometheusScraperSourceList extends cdktf.ComplexList {
  public internalValue? : PrometheusScraperSource[] | cdktf.IResolvable

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
  public get(index: number): PrometheusScraperSourceOutputReference {
    return new PrometheusScraperSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#create PrometheusScraper#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#delete PrometheusScraper#delete}
  */
  readonly delete?: string;
}

export function prometheusScraperTimeoutsToTerraform(struct?: PrometheusScraperTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function prometheusScraperTimeoutsToHclTerraform(struct?: PrometheusScraperTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrometheusScraperTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper aws_prometheus_scraper}
*/
export class PrometheusScraper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_prometheus_scraper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrometheusScraper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrometheusScraper to import
  * @param importFromId The id of the existing PrometheusScraper that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrometheusScraper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_prometheus_scraper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/prometheus_scraper aws_prometheus_scraper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrometheusScraperConfig
  */
  public constructor(scope: Construct, id: string, config: PrometheusScraperConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_prometheus_scraper',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
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
    this._alias = config.alias;
    this._scrapeConfiguration = config.scrapeConfiguration;
    this._tags = config.tags;
    this._destination.internalValue = config.destination;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // scrape_configuration - computed: false, optional: false, required: true
  private _scrapeConfiguration?: string; 
  public get scrapeConfiguration() {
    return this.getStringAttribute('scrape_configuration');
  }
  public set scrapeConfiguration(value: string) {
    this._scrapeConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeConfigurationInput() {
    return this._scrapeConfiguration;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new PrometheusScraperDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: PrometheusScraperDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PrometheusScraperSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: PrometheusScraperSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrometheusScraperTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrometheusScraperTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      scrape_configuration: cdktf.stringToTerraform(this._scrapeConfiguration),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      destination: cdktf.listMapper(prometheusScraperDestinationToTerraform, true)(this._destination.internalValue),
      source: cdktf.listMapper(prometheusScraperSourceToTerraform, true)(this._source.internalValue),
      timeouts: prometheusScraperTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_configuration: {
        value: cdktf.stringToHclTerraform(this._scrapeConfiguration),
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
      destination: {
        value: cdktf.listMapperHcl(prometheusScraperDestinationToHclTerraform, true)(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrometheusScraperDestinationList",
      },
      source: {
        value: cdktf.listMapperHcl(prometheusScraperSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrometheusScraperSourceList",
      },
      timeouts: {
        value: prometheusScraperTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrometheusScraperTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
