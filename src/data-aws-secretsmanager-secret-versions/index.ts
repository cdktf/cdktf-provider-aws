/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerSecretVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions#include_deprecated DataAwsSecretsmanagerSecretVersions#include_deprecated}
  */
  readonly includeDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions#secret_id DataAwsSecretsmanagerSecretVersions#secret_id}
  */
  readonly secretId: string;
}
export interface DataAwsSecretsmanagerSecretVersionsVersions {
}

export function dataAwsSecretsmanagerSecretVersionsVersionsToTerraform(struct?: DataAwsSecretsmanagerSecretVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSecretsmanagerSecretVersionsVersionsToHclTerraform(struct?: DataAwsSecretsmanagerSecretVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSecretsmanagerSecretVersionsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSecretsmanagerSecretVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSecretsmanagerSecretVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // last_accessed_date - computed: true, optional: false, required: false
  public get lastAccessedDate() {
    return this.getStringAttribute('last_accessed_date');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_stages - computed: true, optional: false, required: false
  public get versionStages() {
    return this.getListAttribute('version_stages');
  }
}

export class DataAwsSecretsmanagerSecretVersionsVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSecretsmanagerSecretVersionsVersionsOutputReference {
    return new DataAwsSecretsmanagerSecretVersionsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions aws_secretsmanager_secret_versions}
*/
export class DataAwsSecretsmanagerSecretVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSecretsmanagerSecretVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSecretsmanagerSecretVersions to import
  * @param importFromId The id of the existing DataAwsSecretsmanagerSecretVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSecretsmanagerSecretVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_secretsmanager_secret_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/secretsmanager_secret_versions aws_secretsmanager_secret_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecretsmanagerSecretVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.80.0',
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
    this._includeDeprecated = config.includeDeprecated;
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // include_deprecated - computed: false, optional: true, required: false
  private _includeDeprecated?: boolean | cdktf.IResolvable; 
  public get includeDeprecated() {
    return this.getBooleanAttribute('include_deprecated');
  }
  public set includeDeprecated(value: boolean | cdktf.IResolvable) {
    this._includeDeprecated = value;
  }
  public resetIncludeDeprecated() {
    this._includeDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeprecatedInput() {
    return this._includeDeprecated;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataAwsSecretsmanagerSecretVersionsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_deprecated: cdktf.booleanToTerraform(this._includeDeprecated),
      secret_id: cdktf.stringToTerraform(this._secretId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_deprecated: {
        value: cdktf.booleanToHclTerraform(this._includeDeprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
