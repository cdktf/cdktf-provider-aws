// https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}
  */
  readonly frameworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}
  */
  readonly roles: AuditmanagerAssessmentRoles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * assessment_reports_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}
  */
  readonly assessmentReportsDestination?: AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}
  */
  readonly scope?: AuditmanagerAssessmentScope[] | cdktf.IResolvable;
}
export interface AuditmanagerAssessmentRoles {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}
  */
  readonly roleType: string;
}

export function auditmanagerAssessmentRolesToTerraform(struct?: AuditmanagerAssessmentRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}

export class AuditmanagerAssessmentRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._roleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._roleType = value.roleType;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}

export class AuditmanagerAssessmentRolesList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerAssessmentRoles[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerAssessmentRolesOutputReference {
    return new AuditmanagerAssessmentRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerAssessmentRolesAll {
}

export function auditmanagerAssessmentRolesAllToTerraform(struct?: AuditmanagerAssessmentRolesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AuditmanagerAssessmentRolesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentRolesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentRolesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
}

export class AuditmanagerAssessmentRolesAllList extends cdktf.ComplexList {

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
  public get(index: number): AuditmanagerAssessmentRolesAllOutputReference {
    return new AuditmanagerAssessmentRolesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerAssessmentAssessmentReportsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}
  */
  readonly destinationType: string;
}

export function auditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
  }
}

export class AuditmanagerAssessmentAssessmentReportsDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentAssessmentReportsDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._destinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._destinationType = value.destinationType;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }
}

export class AuditmanagerAssessmentAssessmentReportsDestinationList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerAssessmentAssessmentReportsDestinationOutputReference {
    return new AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerAssessmentScopeAwsAccounts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function auditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class AuditmanagerAssessmentScopeAwsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentScopeAwsAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AuditmanagerAssessmentScopeAwsAccountsList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerAssessmentScopeAwsAccountsOutputReference {
    return new AuditmanagerAssessmentScopeAwsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerAssessmentScopeAwsServices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}
  */
  readonly serviceName: string;
}

export function auditmanagerAssessmentScopeAwsServicesToTerraform(struct?: AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AuditmanagerAssessmentScopeAwsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentScopeAwsServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class AuditmanagerAssessmentScopeAwsServicesList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerAssessmentScopeAwsServicesOutputReference {
    return new AuditmanagerAssessmentScopeAwsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerAssessmentScope {
  /**
  * aws_accounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}
  */
  readonly awsAccounts?: AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable;
  /**
  * aws_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}
  */
  readonly awsServices?: AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable;
}

export function auditmanagerAssessmentScopeToTerraform(struct?: AuditmanagerAssessmentScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_accounts: cdktf.listMapper(auditmanagerAssessmentScopeAwsAccountsToTerraform, true)(struct!.awsAccounts),
    aws_services: cdktf.listMapper(auditmanagerAssessmentScopeAwsServicesToTerraform, true)(struct!.awsServices),
  }
}

export class AuditmanagerAssessmentScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerAssessmentScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccounts = this._awsAccounts?.internalValue;
    }
    if (this._awsServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServices = this._awsServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerAssessmentScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccounts.internalValue = undefined;
      this._awsServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccounts.internalValue = value.awsAccounts;
      this._awsServices.internalValue = value.awsServices;
    }
  }

  // aws_accounts - computed: false, optional: true, required: false
  private _awsAccounts = new AuditmanagerAssessmentScopeAwsAccountsList(this, "aws_accounts", true);
  public get awsAccounts() {
    return this._awsAccounts;
  }
  public putAwsAccounts(value: AuditmanagerAssessmentScopeAwsAccounts[] | cdktf.IResolvable) {
    this._awsAccounts.internalValue = value;
  }
  public resetAwsAccounts() {
    this._awsAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountsInput() {
    return this._awsAccounts.internalValue;
  }

  // aws_services - computed: false, optional: true, required: false
  private _awsServices = new AuditmanagerAssessmentScopeAwsServicesList(this, "aws_services", true);
  public get awsServices() {
    return this._awsServices;
  }
  public putAwsServices(value: AuditmanagerAssessmentScopeAwsServices[] | cdktf.IResolvable) {
    this._awsServices.internalValue = value;
  }
  public resetAwsServices() {
    this._awsServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServicesInput() {
    return this._awsServices.internalValue;
  }
}

export class AuditmanagerAssessmentScopeList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerAssessmentScope[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerAssessmentScopeOutputReference {
    return new AuditmanagerAssessmentScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment aws_auditmanager_assessment}
*/
export class AuditmanagerAssessment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_assessment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment aws_auditmanager_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_assessment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._frameworkId = config.frameworkId;
    this._name = config.name;
    this._roles.internalValue = config.roles;
    this._tags = config.tags;
    this._assessmentReportsDestination.internalValue = config.assessmentReportsDestination;
    this._scope.internalValue = config.scope;
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

  // framework_id - computed: false, optional: false, required: true
  private _frameworkId?: string; 
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }
  public set frameworkId(value: string) {
    this._frameworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkIdInput() {
    return this._frameworkId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new AuditmanagerAssessmentRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: AuditmanagerAssessmentRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // roles_all - computed: true, optional: false, required: false
  private _rolesAll = new AuditmanagerAssessmentRolesAllList(this, "roles_all", true);
  public get rolesAll() {
    return this._rolesAll;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // assessment_reports_destination - computed: false, optional: true, required: false
  private _assessmentReportsDestination = new AuditmanagerAssessmentAssessmentReportsDestinationList(this, "assessment_reports_destination", false);
  public get assessmentReportsDestination() {
    return this._assessmentReportsDestination;
  }
  public putAssessmentReportsDestination(value: AuditmanagerAssessmentAssessmentReportsDestination[] | cdktf.IResolvable) {
    this._assessmentReportsDestination.internalValue = value;
  }
  public resetAssessmentReportsDestination() {
    this._assessmentReportsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentReportsDestinationInput() {
    return this._assessmentReportsDestination.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new AuditmanagerAssessmentScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: AuditmanagerAssessmentScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      framework_id: cdktf.stringToTerraform(this._frameworkId),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(auditmanagerAssessmentRolesToTerraform, false)(this._roles.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      assessment_reports_destination: cdktf.listMapper(auditmanagerAssessmentAssessmentReportsDestinationToTerraform, true)(this._assessmentReportsDestination.internalValue),
      scope: cdktf.listMapper(auditmanagerAssessmentScopeToTerraform, true)(this._scope.internalValue),
    };
  }
}
