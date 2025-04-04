// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritylakeSubscriberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}
  */
  readonly subscriberDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}
  */
  readonly subscriberName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}
  */
  readonly source?: SecuritylakeSubscriberSource[] | cdktf.IResolvable;
  /**
  * subscriber_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}
  */
  readonly subscriberIdentity?: SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}
  */
  readonly timeouts?: SecuritylakeSubscriberTimeouts;
}
export interface SecuritylakeSubscriberSourceAwsLogSourceResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}
  */
  readonly sourceVersion?: string;
}

export function securitylakeSubscriberSourceAwsLogSourceResourceToTerraform(struct?: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_version: cdktf.stringToTerraform(struct!.sourceVersion),
  }
}


export function securitylakeSubscriberSourceAwsLogSourceResourceToHclTerraform(struct?: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class SecuritylakeSubscriberSourceAwsLogSourceResourceList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference {
    return new SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes {
}

export function securitylakeSubscriberSourceCustomLogSourceResourceAttributesToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitylakeSubscriberSourceCustomLogSourceResourceAttributesToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_arn - computed: true, optional: false, required: false
  public get crawlerArn() {
    return this.getStringAttribute('crawler_arn');
  }

  // database_arn - computed: true, optional: false, required: false
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList extends cdktf.ComplexList {

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
  public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference {
    return new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResourceProvider {
}

export function securitylakeSubscriberSourceCustomLogSourceResourceProviderToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitylakeSubscriberSourceCustomLogSourceResourceProviderToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResourceProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList extends cdktf.ComplexList {

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
  public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference {
    return new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}
  */
  readonly sourceVersion?: string;
}

export function securitylakeSubscriberSourceCustomLogSourceResourceToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_version: cdktf.stringToTerraform(struct!.sourceVersion),
  }
}


export function securitylakeSubscriberSourceCustomLogSourceResourceToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // provider - computed: true, optional: false, required: false
  private _provider = new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(this, "provider", false);
  public get provider() {
    return this._provider;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class SecuritylakeSubscriberSourceCustomLogSourceResourceList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference {
    return new SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberSource {
  /**
  * aws_log_source_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}
  */
  readonly awsLogSourceResource?: SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable;
  /**
  * custom_log_source_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}
  */
  readonly customLogSourceResource?: SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable;
}

export function securitylakeSubscriberSourceToTerraform(struct?: SecuritylakeSubscriberSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_log_source_resource: cdktf.listMapper(securitylakeSubscriberSourceAwsLogSourceResourceToTerraform, true)(struct!.awsLogSourceResource),
    custom_log_source_resource: cdktf.listMapper(securitylakeSubscriberSourceCustomLogSourceResourceToTerraform, true)(struct!.customLogSourceResource),
  }
}


export function securitylakeSubscriberSourceToHclTerraform(struct?: SecuritylakeSubscriberSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_log_source_resource: {
      value: cdktf.listMapperHcl(securitylakeSubscriberSourceAwsLogSourceResourceToHclTerraform, true)(struct!.awsLogSourceResource),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeSubscriberSourceAwsLogSourceResourceList",
    },
    custom_log_source_resource: {
      value: cdktf.listMapperHcl(securitylakeSubscriberSourceCustomLogSourceResourceToHclTerraform, true)(struct!.customLogSourceResource),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeSubscriberSourceCustomLogSourceResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsLogSourceResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLogSourceResource = this._awsLogSourceResource?.internalValue;
    }
    if (this._customLogSourceResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLogSourceResource = this._customLogSourceResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsLogSourceResource.internalValue = undefined;
      this._customLogSourceResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsLogSourceResource.internalValue = value.awsLogSourceResource;
      this._customLogSourceResource.internalValue = value.customLogSourceResource;
    }
  }

  // aws_log_source_resource - computed: false, optional: true, required: false
  private _awsLogSourceResource = new SecuritylakeSubscriberSourceAwsLogSourceResourceList(this, "aws_log_source_resource", false);
  public get awsLogSourceResource() {
    return this._awsLogSourceResource;
  }
  public putAwsLogSourceResource(value: SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable) {
    this._awsLogSourceResource.internalValue = value;
  }
  public resetAwsLogSourceResource() {
    this._awsLogSourceResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLogSourceResourceInput() {
    return this._awsLogSourceResource.internalValue;
  }

  // custom_log_source_resource - computed: false, optional: true, required: false
  private _customLogSourceResource = new SecuritylakeSubscriberSourceCustomLogSourceResourceList(this, "custom_log_source_resource", false);
  public get customLogSourceResource() {
    return this._customLogSourceResource;
  }
  public putCustomLogSourceResource(value: SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable) {
    this._customLogSourceResource.internalValue = value;
  }
  public resetCustomLogSourceResource() {
    this._customLogSourceResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogSourceResourceInput() {
    return this._customLogSourceResource.internalValue;
  }
}

export class SecuritylakeSubscriberSourceList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberSource[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberSourceOutputReference {
    return new SecuritylakeSubscriberSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberSubscriberIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}
  */
  readonly principal: string;
}

export function securitylakeSubscriberSubscriberIdentityToTerraform(struct?: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function securitylakeSubscriberSubscriberIdentityToHclTerraform(struct?: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberSubscriberIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._principal = value.principal;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class SecuritylakeSubscriberSubscriberIdentityList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberSubscriberIdentityOutputReference {
    return new SecuritylakeSubscriberSubscriberIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}
  */
  readonly update?: string;
}

export function securitylakeSubscriberTimeoutsToTerraform(struct?: SecuritylakeSubscriberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function securitylakeSubscriberTimeoutsToHclTerraform(struct?: SecuritylakeSubscriberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecuritylakeSubscriberTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}
*/
export class SecuritylakeSubscriber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritylakeSubscriber to import
  * @param importFromId The id of the existing SecuritylakeSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritylakeSubscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritylakeSubscriberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecuritylakeSubscriberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_subscriber',
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
    this._accessType = config.accessType;
    this._subscriberDescription = config.subscriberDescription;
    this._subscriberName = config.subscriberName;
    this._tags = config.tags;
    this._source.internalValue = config.source;
    this._subscriberIdentity.internalValue = config.subscriberIdentity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_share_arn - computed: true, optional: false, required: false
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }

  // resource_share_name - computed: true, optional: false, required: false
  public get resourceShareName() {
    return this.getStringAttribute('resource_share_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }

  // subscriber_description - computed: false, optional: true, required: false
  private _subscriberDescription?: string; 
  public get subscriberDescription() {
    return this.getStringAttribute('subscriber_description');
  }
  public set subscriberDescription(value: string) {
    this._subscriberDescription = value;
  }
  public resetSubscriberDescription() {
    this._subscriberDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberDescriptionInput() {
    return this._subscriberDescription;
  }

  // subscriber_endpoint - computed: true, optional: false, required: false
  public get subscriberEndpoint() {
    return this.getStringAttribute('subscriber_endpoint');
  }

  // subscriber_name - computed: false, optional: true, required: false
  private _subscriberName?: string; 
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }
  public set subscriberName(value: string) {
    this._subscriberName = value;
  }
  public resetSubscriberName() {
    this._subscriberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberNameInput() {
    return this._subscriberName;
  }

  // subscriber_status - computed: true, optional: false, required: false
  public get subscriberStatus() {
    return this.getStringAttribute('subscriber_status');
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

  // source - computed: false, optional: true, required: false
  private _source = new SecuritylakeSubscriberSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: SecuritylakeSubscriberSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // subscriber_identity - computed: false, optional: true, required: false
  private _subscriberIdentity = new SecuritylakeSubscriberSubscriberIdentityList(this, "subscriber_identity", false);
  public get subscriberIdentity() {
    return this._subscriberIdentity;
  }
  public putSubscriberIdentity(value: SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable) {
    this._subscriberIdentity.internalValue = value;
  }
  public resetSubscriberIdentity() {
    this._subscriberIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdentityInput() {
    return this._subscriberIdentity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecuritylakeSubscriberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecuritylakeSubscriberTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      subscriber_description: cdktf.stringToTerraform(this._subscriberDescription),
      subscriber_name: cdktf.stringToTerraform(this._subscriberName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      source: cdktf.listMapper(securitylakeSubscriberSourceToTerraform, true)(this._source.internalValue),
      subscriber_identity: cdktf.listMapper(securitylakeSubscriberSubscriberIdentityToTerraform, true)(this._subscriberIdentity.internalValue),
      timeouts: securitylakeSubscriberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_description: {
        value: cdktf.stringToHclTerraform(this._subscriberDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_name: {
        value: cdktf.stringToHclTerraform(this._subscriberName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source: {
        value: cdktf.listMapperHcl(securitylakeSubscriberSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecuritylakeSubscriberSourceList",
      },
      subscriber_identity: {
        value: cdktf.listMapperHcl(securitylakeSubscriberSubscriberIdentityToHclTerraform, true)(this._subscriberIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritylakeSubscriberSubscriberIdentityList",
      },
      timeouts: {
        value: securitylakeSubscriberTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecuritylakeSubscriberTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
