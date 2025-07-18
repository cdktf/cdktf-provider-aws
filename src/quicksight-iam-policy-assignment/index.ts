/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightIamPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}
  */
  readonly assignmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}
  */
  readonly assignmentStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}
  */
  readonly policyArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#region QuicksightIamPolicyAssignment#region}
  */
  readonly region?: string;
  /**
  * identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}
  */
  readonly identities?: QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable;
}
export interface QuicksightIamPolicyAssignmentIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}
  */
  readonly user?: string[];
}

export function quicksightIamPolicyAssignmentIdentitiesToTerraform(struct?: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.user),
  }
}


export function quicksightIamPolicyAssignmentIdentitiesToHclTerraform(struct?: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.user),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightIamPolicyAssignmentIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._user = value.user;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string[]; 
  public get user() {
    return cdktf.Fn.tolist(this.getListAttribute('user'));
  }
  public set user(value: string[]) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class QuicksightIamPolicyAssignmentIdentitiesList extends cdktf.ComplexList {
  public internalValue? : QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable

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
  public get(index: number): QuicksightIamPolicyAssignmentIdentitiesOutputReference {
    return new QuicksightIamPolicyAssignmentIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}
*/
export class QuicksightIamPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_iam_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightIamPolicyAssignment to import
  * @param importFromId The id of the existing QuicksightIamPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightIamPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_iam_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightIamPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightIamPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_iam_policy_assignment',
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
    this._assignmentName = config.assignmentName;
    this._assignmentStatus = config.assignmentStatus;
    this._awsAccountId = config.awsAccountId;
    this._namespace = config.namespace;
    this._policyArn = config.policyArn;
    this._region = config.region;
    this._identities.internalValue = config.identities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_id - computed: true, optional: false, required: false
  public get assignmentId() {
    return this.getStringAttribute('assignment_id');
  }

  // assignment_name - computed: false, optional: false, required: true
  private _assignmentName?: string; 
  public get assignmentName() {
    return this.getStringAttribute('assignment_name');
  }
  public set assignmentName(value: string) {
    this._assignmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentNameInput() {
    return this._assignmentName;
  }

  // assignment_status - computed: false, optional: false, required: true
  private _assignmentStatus?: string; 
  public get assignmentStatus() {
    return this.getStringAttribute('assignment_status');
  }
  public set assignmentStatus(value: string) {
    this._assignmentStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentStatusInput() {
    return this._assignmentStatus;
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy_arn - computed: false, optional: true, required: false
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
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

  // identities - computed: false, optional: true, required: false
  private _identities = new QuicksightIamPolicyAssignmentIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_name: cdktf.stringToTerraform(this._assignmentName),
      assignment_status: cdktf.stringToTerraform(this._assignmentStatus),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      namespace: cdktf.stringToTerraform(this._namespace),
      policy_arn: cdktf.stringToTerraform(this._policyArn),
      region: cdktf.stringToTerraform(this._region),
      identities: cdktf.listMapper(quicksightIamPolicyAssignmentIdentitiesToTerraform, true)(this._identities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_name: {
        value: cdktf.stringToHclTerraform(this._assignmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_status: {
        value: cdktf.stringToHclTerraform(this._assignmentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_arn: {
        value: cdktf.stringToHclTerraform(this._policyArn),
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
      identities: {
        value: cdktf.listMapperHcl(quicksightIamPolicyAssignmentIdentitiesToHclTerraform, true)(this._identities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightIamPolicyAssignmentIdentitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
