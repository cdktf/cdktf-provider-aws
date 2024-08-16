/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsoadminApplicationAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}
  */
  readonly applicationArn: string;
  /**
  * application_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments#application_assignments DataAwsSsoadminApplicationAssignments#application_assignments}
  */
  readonly applicationAssignments?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationAssignmentsApplicationAssignments {
}

export function dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToTerraform(struct?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToHclTerraform(struct?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined) {
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

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
}

export class DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference {
    return new DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments}
*/
export class DataAwsSsoadminApplicationAssignments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplicationAssignments to import
  * @param importFromId The id of the existing DataAwsSsoadminApplicationAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsoadminApplicationAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsoadminApplicationAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsoadminApplicationAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application_assignments',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.0',
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
    this._applicationArn = config.applicationArn;
    this._applicationAssignments.internalValue = config.applicationAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // application_assignments - computed: false, optional: true, required: false
  private _applicationAssignments = new DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList(this, "application_assignments", false);
  public get applicationAssignments() {
    return this._applicationAssignments;
  }
  public putApplicationAssignments(value: DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable) {
    this._applicationAssignments.internalValue = value;
  }
  public resetApplicationAssignments() {
    this._applicationAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAssignmentsInput() {
    return this._applicationAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktf.stringToTerraform(this._applicationArn),
      application_assignments: cdktf.listMapper(dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToTerraform, true)(this._applicationAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktf.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_assignments: {
        value: cdktf.listMapperHcl(dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToHclTerraform, true)(this._applicationAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
