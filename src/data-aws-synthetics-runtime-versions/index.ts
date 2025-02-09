// https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/synthetics_runtime_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSyntheticsRuntimeVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * runtime_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/synthetics_runtime_versions#runtime_versions DataAwsSyntheticsRuntimeVersions#runtime_versions}
  */
  readonly runtimeVersions?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable;
}
export interface DataAwsSyntheticsRuntimeVersionsRuntimeVersions {
}

export function dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToTerraform(struct?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToHclTerraform(struct?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable | undefined) {
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

  // deprecation_date - computed: true, optional: false, required: false
  public get deprecationDate() {
    return this.getStringAttribute('deprecation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
}

export class DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference {
    return new DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/synthetics_runtime_versions aws_synthetics_runtime_versions}
*/
export class DataAwsSyntheticsRuntimeVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_synthetics_runtime_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersions to import
  * @param importFromId The id of the existing DataAwsSyntheticsRuntimeVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/synthetics_runtime_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_synthetics_runtime_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/data-sources/synthetics_runtime_versions aws_synthetics_runtime_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSyntheticsRuntimeVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSyntheticsRuntimeVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_synthetics_runtime_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.0',
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
    this._runtimeVersions.internalValue = config.runtimeVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // runtime_versions - computed: false, optional: true, required: false
  private _runtimeVersions = new DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList(this, "runtime_versions", false);
  public get runtimeVersions() {
    return this._runtimeVersions;
  }
  public putRuntimeVersions(value: DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable) {
    this._runtimeVersions.internalValue = value;
  }
  public resetRuntimeVersions() {
    this._runtimeVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionsInput() {
    return this._runtimeVersions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      runtime_versions: cdktf.listMapper(dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToTerraform, true)(this._runtimeVersions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      runtime_versions: {
        value: cdktf.listMapperHcl(dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToHclTerraform, true)(this._runtimeVersions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
