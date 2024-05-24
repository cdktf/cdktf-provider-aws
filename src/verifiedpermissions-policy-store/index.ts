// https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedpermissionsPolicyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}
  */
  readonly description?: string;
  /**
  * validation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}
  */
  readonly validationSettings?: VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsPolicyStoreValidationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}
  */
  readonly mode: string;
}

export function verifiedpermissionsPolicyStoreValidationSettingsToTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function verifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyStoreValidationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class VerifiedpermissionsPolicyStoreValidationSettingsList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyStoreValidationSettingsOutputReference {
    return new VerifiedpermissionsPolicyStoreValidationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}
*/
export class VerifiedpermissionsPolicyStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedpermissions_policy_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import
  * @param importFromId The id of the existing VerifiedpermissionsPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedpermissions_policy_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedpermissionsPolicyStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VerifiedpermissionsPolicyStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedpermissions_policy_store',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.0',
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
    this._validationSettings.internalValue = config.validationSettings;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_store_id - computed: true, optional: false, required: false
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }

  // validation_settings - computed: false, optional: true, required: false
  private _validationSettings = new VerifiedpermissionsPolicyStoreValidationSettingsList(this, "validation_settings", false);
  public get validationSettings() {
    return this._validationSettings;
  }
  public putValidationSettings(value: VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable) {
    this._validationSettings.internalValue = value;
  }
  public resetValidationSettings() {
    this._validationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSettingsInput() {
    return this._validationSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      validation_settings: cdktf.listMapper(verifiedpermissionsPolicyStoreValidationSettingsToTerraform, true)(this._validationSettings.internalValue),
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
      validation_settings: {
        value: cdktf.listMapperHcl(verifiedpermissionsPolicyStoreValidationSettingsToHclTerraform, true)(this._validationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedpermissionsPolicyStoreValidationSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
