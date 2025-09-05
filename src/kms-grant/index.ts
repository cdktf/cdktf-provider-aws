/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}
  */
  readonly grantCreationTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#grantee_principal KmsGrant#grantee_principal}
  */
  readonly granteePrincipal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#id KmsGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#key_id KmsGrant#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#name KmsGrant#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#operations KmsGrant#operations}
  */
  readonly operations: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#region KmsGrant#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#retire_on_delete KmsGrant#retire_on_delete}
  */
  readonly retireOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#retiring_principal KmsGrant#retiring_principal}
  */
  readonly retiringPrincipal?: string;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#constraints KmsGrant#constraints}
  */
  readonly constraints?: KmsGrantConstraints[] | cdktf.IResolvable;
}
export interface KmsGrantConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}
  */
  readonly encryptionContextEquals?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}
  */
  readonly encryptionContextSubset?: { [key: string]: string };
}

export function kmsGrantConstraintsToTerraform(struct?: KmsGrantConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_context_equals: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptionContextEquals),
    encryption_context_subset: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptionContextSubset),
  }
}


export function kmsGrantConstraintsToHclTerraform(struct?: KmsGrantConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_context_equals: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptionContextEquals),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encryption_context_subset: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptionContextSubset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsGrantConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsGrantConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContextEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextEquals = this._encryptionContextEquals;
    }
    if (this._encryptionContextSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextSubset = this._encryptionContextSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsGrantConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = undefined;
      this._encryptionContextSubset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = value.encryptionContextEquals;
      this._encryptionContextSubset = value.encryptionContextSubset;
    }
  }

  // encryption_context_equals - computed: false, optional: true, required: false
  private _encryptionContextEquals?: { [key: string]: string }; 
  public get encryptionContextEquals() {
    return this.getStringMapAttribute('encryption_context_equals');
  }
  public set encryptionContextEquals(value: { [key: string]: string }) {
    this._encryptionContextEquals = value;
  }
  public resetEncryptionContextEquals() {
    this._encryptionContextEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextEqualsInput() {
    return this._encryptionContextEquals;
  }

  // encryption_context_subset - computed: false, optional: true, required: false
  private _encryptionContextSubset?: { [key: string]: string }; 
  public get encryptionContextSubset() {
    return this.getStringMapAttribute('encryption_context_subset');
  }
  public set encryptionContextSubset(value: { [key: string]: string }) {
    this._encryptionContextSubset = value;
  }
  public resetEncryptionContextSubset() {
    this._encryptionContextSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextSubsetInput() {
    return this._encryptionContextSubset;
  }
}

export class KmsGrantConstraintsList extends cdktf.ComplexList {
  public internalValue? : KmsGrantConstraints[] | cdktf.IResolvable

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
  public get(index: number): KmsGrantConstraintsOutputReference {
    return new KmsGrantConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant aws_kms_grant}
*/
export class KmsGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsGrant to import
  * @param importFromId The id of the existing KmsGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kms_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/kms_grant aws_kms_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsGrantConfig
  */
  public constructor(scope: Construct, id: string, config: KmsGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grantCreationTokens = config.grantCreationTokens;
    this._granteePrincipal = config.granteePrincipal;
    this._id = config.id;
    this._keyId = config.keyId;
    this._name = config.name;
    this._operations = config.operations;
    this._region = config.region;
    this._retireOnDelete = config.retireOnDelete;
    this._retiringPrincipal = config.retiringPrincipal;
    this._constraints.internalValue = config.constraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grant_creation_tokens - computed: false, optional: true, required: false
  private _grantCreationTokens?: string[]; 
  public get grantCreationTokens() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_creation_tokens'));
  }
  public set grantCreationTokens(value: string[]) {
    this._grantCreationTokens = value;
  }
  public resetGrantCreationTokens() {
    this._grantCreationTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantCreationTokensInput() {
    return this._grantCreationTokens;
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // grant_token - computed: true, optional: false, required: false
  public get grantToken() {
    return this.getStringAttribute('grant_token');
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal?: string; 
  public get granteePrincipal() {
    return this.getStringAttribute('grantee_principal');
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteePrincipalInput() {
    return this._granteePrincipal;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retire_on_delete - computed: false, optional: true, required: false
  private _retireOnDelete?: boolean | cdktf.IResolvable; 
  public get retireOnDelete() {
    return this.getBooleanAttribute('retire_on_delete');
  }
  public set retireOnDelete(value: boolean | cdktf.IResolvable) {
    this._retireOnDelete = value;
  }
  public resetRetireOnDelete() {
    this._retireOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retireOnDeleteInput() {
    return this._retireOnDelete;
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string; 
  public get retiringPrincipal() {
    return this.getStringAttribute('retiring_principal');
  }
  public set retiringPrincipal(value: string) {
    this._retiringPrincipal = value;
  }
  public resetRetiringPrincipal() {
    this._retiringPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiringPrincipalInput() {
    return this._retiringPrincipal;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new KmsGrantConstraintsList(this, "constraints", true);
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: KmsGrantConstraints[] | cdktf.IResolvable) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_creation_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantCreationTokens),
      grantee_principal: cdktf.stringToTerraform(this._granteePrincipal),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      name: cdktf.stringToTerraform(this._name),
      operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operations),
      region: cdktf.stringToTerraform(this._region),
      retire_on_delete: cdktf.booleanToTerraform(this._retireOnDelete),
      retiring_principal: cdktf.stringToTerraform(this._retiringPrincipal),
      constraints: cdktf.listMapper(kmsGrantConstraintsToTerraform, true)(this._constraints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grant_creation_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantCreationTokens),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      grantee_principal: {
        value: cdktf.stringToHclTerraform(this._granteePrincipal),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retire_on_delete: {
        value: cdktf.booleanToHclTerraform(this._retireOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retiring_principal: {
        value: cdktf.stringToHclTerraform(this._retiringPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: cdktf.listMapperHcl(kmsGrantConstraintsToHclTerraform, true)(this._constraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KmsGrantConstraintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
