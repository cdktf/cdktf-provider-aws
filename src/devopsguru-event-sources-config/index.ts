/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsguruEventSourcesConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * event_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config#event_sources DevopsguruEventSourcesConfig#event_sources}
  */
  readonly eventSources?: DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable;
}
export interface DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config#status DevopsguruEventSourcesConfig#status}
  */
  readonly status: string;
}

export function devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToTerraform(struct?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToHclTerraform(struct?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList extends cdktf.ComplexList {
  public internalValue? : DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable

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
  public get(index: number): DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference {
    return new DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsguruEventSourcesConfigEventSources {
  /**
  * amazon_code_guru_profiler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config#amazon_code_guru_profiler DevopsguruEventSourcesConfig#amazon_code_guru_profiler}
  */
  readonly amazonCodeGuruProfiler?: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable;
}

export function devopsguruEventSourcesConfigEventSourcesToTerraform(struct?: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_code_guru_profiler: cdktf.listMapper(devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToTerraform, true)(struct!.amazonCodeGuruProfiler),
  }
}


export function devopsguruEventSourcesConfigEventSourcesToHclTerraform(struct?: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_code_guru_profiler: {
      value: cdktf.listMapperHcl(devopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerToHclTerraform, true)(struct!.amazonCodeGuruProfiler),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsguruEventSourcesConfigEventSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonCodeGuruProfiler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonCodeGuruProfiler = this._amazonCodeGuruProfiler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsguruEventSourcesConfigEventSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonCodeGuruProfiler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonCodeGuruProfiler.internalValue = value.amazonCodeGuruProfiler;
    }
  }

  // amazon_code_guru_profiler - computed: false, optional: true, required: false
  private _amazonCodeGuruProfiler = new DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfilerList(this, "amazon_code_guru_profiler", false);
  public get amazonCodeGuruProfiler() {
    return this._amazonCodeGuruProfiler;
  }
  public putAmazonCodeGuruProfiler(value: DevopsguruEventSourcesConfigEventSourcesAmazonCodeGuruProfiler[] | cdktf.IResolvable) {
    this._amazonCodeGuruProfiler.internalValue = value;
  }
  public resetAmazonCodeGuruProfiler() {
    this._amazonCodeGuruProfiler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonCodeGuruProfilerInput() {
    return this._amazonCodeGuruProfiler.internalValue;
  }
}

export class DevopsguruEventSourcesConfigEventSourcesList extends cdktf.ComplexList {
  public internalValue? : DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable

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
  public get(index: number): DevopsguruEventSourcesConfigEventSourcesOutputReference {
    return new DevopsguruEventSourcesConfigEventSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config}
*/
export class DevopsguruEventSourcesConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_event_sources_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsguruEventSourcesConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsguruEventSourcesConfig to import
  * @param importFromId The id of the existing DevopsguruEventSourcesConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsguruEventSourcesConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_event_sources_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/devopsguru_event_sources_config aws_devopsguru_event_sources_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsguruEventSourcesConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DevopsguruEventSourcesConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_event_sources_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._eventSources.internalValue = config.eventSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // event_sources - computed: false, optional: true, required: false
  private _eventSources = new DevopsguruEventSourcesConfigEventSourcesList(this, "event_sources", false);
  public get eventSources() {
    return this._eventSources;
  }
  public putEventSources(value: DevopsguruEventSourcesConfigEventSources[] | cdktf.IResolvable) {
    this._eventSources.internalValue = value;
  }
  public resetEventSources() {
    this._eventSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourcesInput() {
    return this._eventSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_sources: cdktf.listMapper(devopsguruEventSourcesConfigEventSourcesToTerraform, true)(this._eventSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_sources: {
        value: cdktf.listMapperHcl(devopsguruEventSourcesConfigEventSourcesToHclTerraform, true)(this._eventSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsguruEventSourcesConfigEventSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
