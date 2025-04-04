// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEksClusterVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}
  */
  readonly clusterVersionsOnly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}
  */
  readonly defaultOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}
  */
  readonly includeAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}
  */
  readonly versionStatus?: string;
}
export interface DataAwsEksClusterVersionsClusterVersions {
}

export function dataAwsEksClusterVersionsClusterVersionsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsEksClusterVersionsClusterVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // default_platform_version - computed: true, optional: false, required: false
  public get defaultPlatformVersion() {
    return this.getStringAttribute('default_platform_version');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getBooleanAttribute('default_version');
  }

  // end_of_extended_support_date - computed: true, optional: false, required: false
  public get endOfExtendedSupportDate() {
    return this.getStringAttribute('end_of_extended_support_date');
  }

  // end_of_standard_support_date - computed: true, optional: false, required: false
  public get endOfStandardSupportDate() {
    return this.getStringAttribute('end_of_standard_support_date');
  }

  // kubernetes_patch_version - computed: true, optional: false, required: false
  public get kubernetesPatchVersion() {
    return this.getStringAttribute('kubernetes_patch_version');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version_status - computed: true, optional: false, required: false
  public get versionStatus() {
    return this.getStringAttribute('version_status');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}
*/
export class DataAwsEksClusterVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_cluster_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEksClusterVersions to import
  * @param importFromId The id of the existing DataAwsEksClusterVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEksClusterVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_cluster_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEksClusterVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEksClusterVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.0',
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
    this._clusterType = config.clusterType;
    this._clusterVersionsOnly = config.clusterVersionsOnly;
    this._defaultOnly = config.defaultOnly;
    this._includeAll = config.includeAll;
    this._versionStatus = config.versionStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_versions - computed: true, optional: false, required: false
  private _clusterVersions = new DataAwsEksClusterVersionsClusterVersionsList(this, "cluster_versions", false);
  public get clusterVersions() {
    return this._clusterVersions;
  }

  // cluster_versions_only - computed: false, optional: true, required: false
  private _clusterVersionsOnly?: string[]; 
  public get clusterVersionsOnly() {
    return this.getListAttribute('cluster_versions_only');
  }
  public set clusterVersionsOnly(value: string[]) {
    this._clusterVersionsOnly = value;
  }
  public resetClusterVersionsOnly() {
    this._clusterVersionsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionsOnlyInput() {
    return this._clusterVersionsOnly;
  }

  // default_only - computed: false, optional: true, required: false
  private _defaultOnly?: boolean | cdktf.IResolvable; 
  public get defaultOnly() {
    return this.getBooleanAttribute('default_only');
  }
  public set defaultOnly(value: boolean | cdktf.IResolvable) {
    this._defaultOnly = value;
  }
  public resetDefaultOnly() {
    this._defaultOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnlyInput() {
    return this._defaultOnly;
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktf.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktf.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // version_status - computed: false, optional: true, required: false
  private _versionStatus?: string; 
  public get versionStatus() {
    return this.getStringAttribute('version_status');
  }
  public set versionStatus(value: string) {
    this._versionStatus = value;
  }
  public resetVersionStatus() {
    this._versionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStatusInput() {
    return this._versionStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_versions_only: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterVersionsOnly),
      default_only: cdktf.booleanToTerraform(this._defaultOnly),
      include_all: cdktf.booleanToTerraform(this._includeAll),
      version_status: cdktf.stringToTerraform(this._versionStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_versions_only: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterVersionsOnly),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_only: {
        value: cdktf.booleanToHclTerraform(this._defaultOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_all: {
        value: cdktf.booleanToHclTerraform(this._includeAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_status: {
        value: cdktf.stringToHclTerraform(this._versionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
