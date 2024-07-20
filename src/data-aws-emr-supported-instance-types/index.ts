/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEmrSupportedInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}
  */
  readonly releaseLabel: string;
  /**
  * supported_instance_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types#supported_instance_types DataAwsEmrSupportedInstanceTypes#supported_instance_types}
  */
  readonly supportedInstanceTypes?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable;
}
export interface DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes {
}

export function dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToTerraform(struct?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToHclTerraform(struct?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // ebs_optimized_available - computed: true, optional: false, required: false
  public get ebsOptimizedAvailable() {
    return this.getBooleanAttribute('ebs_optimized_available');
  }

  // ebs_optimized_by_default - computed: true, optional: false, required: false
  public get ebsOptimizedByDefault() {
    return this.getBooleanAttribute('ebs_optimized_by_default');
  }

  // ebs_storage_only - computed: true, optional: false, required: false
  public get ebsStorageOnly() {
    return this.getBooleanAttribute('ebs_storage_only');
  }

  // instance_family_id - computed: true, optional: false, required: false
  public get instanceFamilyId() {
    return this.getStringAttribute('instance_family_id');
  }

  // is_64_bits_only - computed: true, optional: false, required: false
  public get is64BitsOnly() {
    return this.getBooleanAttribute('is_64_bits_only');
  }

  // memory_gb - computed: true, optional: false, required: false
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }

  // number_of_disks - computed: true, optional: false, required: false
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }

  // storage_gb - computed: true, optional: false, required: false
  public get storageGb() {
    return this.getNumberAttribute('storage_gb');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcpu - computed: true, optional: false, required: false
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
}

export class DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList extends cdktf.ComplexList {
  public internalValue? : DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference {
    return new DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types}
*/
export class DataAwsEmrSupportedInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_supported_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEmrSupportedInstanceTypes to import
  * @param importFromId The id of the existing DataAwsEmrSupportedInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEmrSupportedInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_supported_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEmrSupportedInstanceTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEmrSupportedInstanceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_supported_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.59.0',
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
    this._releaseLabel = config.releaseLabel;
    this._supportedInstanceTypes.internalValue = config.supportedInstanceTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // supported_instance_types - computed: false, optional: true, required: false
  private _supportedInstanceTypes = new DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList(this, "supported_instance_types", false);
  public get supportedInstanceTypes() {
    return this._supportedInstanceTypes;
  }
  public putSupportedInstanceTypes(value: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable) {
    this._supportedInstanceTypes.internalValue = value;
  }
  public resetSupportedInstanceTypes() {
    this._supportedInstanceTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInstanceTypesInput() {
    return this._supportedInstanceTypes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      supported_instance_types: cdktf.listMapper(dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToTerraform, true)(this._supportedInstanceTypes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      release_label: {
        value: cdktf.stringToHclTerraform(this._releaseLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_instance_types: {
        value: cdktf.listMapperHcl(dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToHclTerraform, true)(this._supportedInstanceTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
