/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrBlockPublicAccessConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}
  */
  readonly blockPublicSecurityGroupRules: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#region EmrBlockPublicAccessConfiguration#region}
  */
  readonly region?: string;
  /**
  * permitted_public_security_group_rule_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}
  */
  readonly permittedPublicSecurityGroupRuleRange?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable;
}
export interface EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}
  */
  readonly maxRange: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}
  */
  readonly minRange: number;
}

export function emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToTerraform(struct?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_range: cdktf.numberToTerraform(struct!.maxRange),
    min_range: cdktf.numberToTerraform(struct!.minRange),
  }
}


export function emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToHclTerraform(struct?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_range: {
      value: cdktf.numberToHclTerraform(struct!.maxRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_range: {
      value: cdktf.numberToHclTerraform(struct!.minRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRange = this._maxRange;
    }
    if (this._minRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRange = this._minRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRange = undefined;
      this._minRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRange = value.maxRange;
      this._minRange = value.minRange;
    }
  }

  // max_range - computed: false, optional: false, required: true
  private _maxRange?: number; 
  public get maxRange() {
    return this.getNumberAttribute('max_range');
  }
  public set maxRange(value: number) {
    this._maxRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeInput() {
    return this._maxRange;
  }

  // min_range - computed: false, optional: false, required: true
  private _minRange?: number; 
  public get minRange() {
    return this.getNumberAttribute('min_range');
  }
  public set minRange(value: number) {
    this._minRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minRangeInput() {
    return this._minRange;
  }
}

export class EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList extends cdktf.ComplexList {
  public internalValue? : EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable

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
  public get(index: number): EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference {
    return new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration}
*/
export class EmrBlockPublicAccessConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_block_public_access_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrBlockPublicAccessConfiguration to import
  * @param importFromId The id of the existing EmrBlockPublicAccessConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrBlockPublicAccessConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_block_public_access_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrBlockPublicAccessConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EmrBlockPublicAccessConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_block_public_access_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._blockPublicSecurityGroupRules = config.blockPublicSecurityGroupRules;
    this._id = config.id;
    this._region = config.region;
    this._permittedPublicSecurityGroupRuleRange.internalValue = config.permittedPublicSecurityGroupRuleRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_public_security_group_rules - computed: false, optional: false, required: true
  private _blockPublicSecurityGroupRules?: boolean | cdktf.IResolvable; 
  public get blockPublicSecurityGroupRules() {
    return this.getBooleanAttribute('block_public_security_group_rules');
  }
  public set blockPublicSecurityGroupRules(value: boolean | cdktf.IResolvable) {
    this._blockPublicSecurityGroupRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicSecurityGroupRulesInput() {
    return this._blockPublicSecurityGroupRules;
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

  // permitted_public_security_group_rule_range - computed: false, optional: true, required: false
  private _permittedPublicSecurityGroupRuleRange = new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList(this, "permitted_public_security_group_rule_range", false);
  public get permittedPublicSecurityGroupRuleRange() {
    return this._permittedPublicSecurityGroupRuleRange;
  }
  public putPermittedPublicSecurityGroupRuleRange(value: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable) {
    this._permittedPublicSecurityGroupRuleRange.internalValue = value;
  }
  public resetPermittedPublicSecurityGroupRuleRange() {
    this._permittedPublicSecurityGroupRuleRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedPublicSecurityGroupRuleRangeInput() {
    return this._permittedPublicSecurityGroupRuleRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_security_group_rules: cdktf.booleanToTerraform(this._blockPublicSecurityGroupRules),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      permitted_public_security_group_rule_range: cdktf.listMapper(emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToTerraform, true)(this._permittedPublicSecurityGroupRuleRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_public_security_group_rules: {
        value: cdktf.booleanToHclTerraform(this._blockPublicSecurityGroupRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permitted_public_security_group_rule_range: {
        value: cdktf.listMapperHcl(emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToHclTerraform, true)(this._permittedPublicSecurityGroupRuleRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
