// https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallTlsInspectionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#description NetworkfirewallTlsInspectionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#encryption_configuration NetworkfirewallTlsInspectionConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#name NetworkfirewallTlsInspectionConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#tags NetworkfirewallTlsInspectionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#timeouts NetworkfirewallTlsInspectionConfiguration#timeouts}
  */
  readonly timeouts?: NetworkfirewallTlsInspectionConfigurationTimeouts;
  /**
  * tls_inspection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#tls_inspection_configuration NetworkfirewallTlsInspectionConfiguration#tls_inspection_configuration}
  */
  readonly tlsInspectionConfiguration?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable;
}
export interface NetworkfirewallTlsInspectionConfigurationCertificateAuthority {
}

export function networkfirewallTlsInspectionConfigurationCertificateAuthorityToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkfirewallTlsInspectionConfigurationCertificateAuthorityToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkfirewallTlsInspectionConfigurationCertificateAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_serial - computed: true, optional: false, required: false
  public get certificateSerial() {
    return this.getStringAttribute('certificate_serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class NetworkfirewallTlsInspectionConfigurationCertificateAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationCertificateAuthorityOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationCertificateAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationCertificates {
}

export function networkfirewallTlsInspectionConfigurationCertificatesToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkfirewallTlsInspectionConfigurationCertificatesToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkfirewallTlsInspectionConfigurationCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_serial - computed: true, optional: false, required: false
  public get certificateSerial() {
    return this.getStringAttribute('certificate_serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class NetworkfirewallTlsInspectionConfigurationCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationCertificatesOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#key_id NetworkfirewallTlsInspectionConfiguration#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#type NetworkfirewallTlsInspectionConfiguration#type}
  */
  readonly type?: string;
}

export function networkfirewallTlsInspectionConfigurationEncryptionConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkfirewallTlsInspectionConfigurationEncryptionConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._type = value.type;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#create NetworkfirewallTlsInspectionConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#delete NetworkfirewallTlsInspectionConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#update NetworkfirewallTlsInspectionConfiguration#update}
  */
  readonly update?: string;
}

export function networkfirewallTlsInspectionConfigurationTimeoutsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable): any {
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


export function networkfirewallTlsInspectionConfigurationTimeoutsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable): any {
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

export class NetworkfirewallTlsInspectionConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#revoked_status_action NetworkfirewallTlsInspectionConfiguration#revoked_status_action}
  */
  readonly revokedStatusAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#unknown_status_action NetworkfirewallTlsInspectionConfiguration#unknown_status_action}
  */
  readonly unknownStatusAction?: string;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    revoked_status_action: cdktf.stringToTerraform(struct!.revokedStatusAction),
    unknown_status_action: cdktf.stringToTerraform(struct!.unknownStatusAction),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    revoked_status_action: {
      value: cdktf.stringToHclTerraform(struct!.revokedStatusAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_status_action: {
      value: cdktf.stringToHclTerraform(struct!.unknownStatusAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revokedStatusAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedStatusAction = this._revokedStatusAction;
    }
    if (this._unknownStatusAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownStatusAction = this._unknownStatusAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revokedStatusAction = undefined;
      this._unknownStatusAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revokedStatusAction = value.revokedStatusAction;
      this._unknownStatusAction = value.unknownStatusAction;
    }
  }

  // revoked_status_action - computed: false, optional: true, required: false
  private _revokedStatusAction?: string; 
  public get revokedStatusAction() {
    return this.getStringAttribute('revoked_status_action');
  }
  public set revokedStatusAction(value: string) {
    this._revokedStatusAction = value;
  }
  public resetRevokedStatusAction() {
    this._revokedStatusAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedStatusActionInput() {
    return this._revokedStatusAction;
  }

  // unknown_status_action - computed: false, optional: true, required: false
  private _unknownStatusAction?: string; 
  public get unknownStatusAction() {
    return this.getStringAttribute('unknown_status_action');
  }
  public set unknownStatusAction(value: string) {
    this._unknownStatusAction = value;
  }
  public resetUnknownStatusAction() {
    this._unknownStatusAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownStatusActionInput() {
    return this._unknownStatusAction;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition NetworkfirewallTlsInspectionConfiguration#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_definition: {
      value: cdktf.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port NetworkfirewallTlsInspectionConfiguration#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port NetworkfirewallTlsInspectionConfiguration#to_port}
  */
  readonly toPort: number;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition NetworkfirewallTlsInspectionConfiguration#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_definition: {
      value: cdktf.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port NetworkfirewallTlsInspectionConfiguration#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port NetworkfirewallTlsInspectionConfiguration#to_port}
  */
  readonly toPort: number;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#protocols NetworkfirewallTlsInspectionConfiguration#protocols}
  */
  readonly protocols: number[];
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#destination NetworkfirewallTlsInspectionConfiguration#destination}
  */
  readonly destination?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable;
  /**
  * destination_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#destination_ports NetworkfirewallTlsInspectionConfiguration#destination_ports}
  */
  readonly destinationPorts?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#source NetworkfirewallTlsInspectionConfiguration#source}
  */
  readonly source?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable;
  /**
  * source_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#source_ports NetworkfirewallTlsInspectionConfiguration#source_ports}
  */
  readonly sourcePorts?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protocols),
    destination: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToTerraform, true)(struct!.destination),
    destination_ports: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToTerraform, true)(struct!.destinationPorts),
    source: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToTerraform, true)(struct!.source),
    source_ports: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToTerraform, true)(struct!.sourcePorts),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocols: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    destination: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationList",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsToHclTerraform, true)(struct!.destinationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsList",
    },
    source: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceList",
    },
    source_ports: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsToHclTerraform, true)(struct!.sourcePorts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._destinationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocols = undefined;
      this._destination.internalValue = undefined;
      this._destinationPorts.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sourcePorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocols = value.protocols;
      this._destination.internalValue = value.destination;
      this._destinationPorts.internalValue = value.destinationPorts;
      this._source.internalValue = value.source;
      this._sourcePorts.internalValue = value.sourcePorts;
    }
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: number[]; 
  public get protocols() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeDestinationPorts[] | cdktf.IResolvable) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSourcePorts[] | cdktf.IResolvable) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#resource_arn NetworkfirewallTlsInspectionConfiguration#resource_arn}
  */
  readonly resourceArn?: string;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_arn: {
      value: cdktf.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
  }

  // resource_arn - computed: false, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#certificate_authority_arn NetworkfirewallTlsInspectionConfiguration#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * check_certificate_revocation_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#check_certificate_revocation_status NetworkfirewallTlsInspectionConfiguration#check_certificate_revocation_status}
  */
  readonly checkCertificateRevocationStatus?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#scope NetworkfirewallTlsInspectionConfiguration#scope}
  */
  readonly scope?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable;
  /**
  * server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate NetworkfirewallTlsInspectionConfiguration#server_certificate}
  */
  readonly serverCertificate?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arn: cdktf.stringToTerraform(struct!.certificateAuthorityArn),
    check_certificate_revocation_status: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToTerraform, true)(struct!.checkCertificateRevocationStatus),
    scope: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToTerraform, true)(struct!.scope),
    server_certificate: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToTerraform, true)(struct!.serverCertificate),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_certificate_revocation_status: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusToHclTerraform, true)(struct!.checkCertificateRevocationStatus),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusList",
    },
    scope: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeList",
    },
    server_certificate: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateToHclTerraform, true)(struct!.serverCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
    }
    if (this._checkCertificateRevocationStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkCertificateRevocationStatus = this._checkCertificateRevocationStatus?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._serverCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArn = undefined;
      this._checkCertificateRevocationStatus.internalValue = undefined;
      this._scope.internalValue = undefined;
      this._serverCertificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArn = value.certificateAuthorityArn;
      this._checkCertificateRevocationStatus.internalValue = value.checkCertificateRevocationStatus;
      this._scope.internalValue = value.scope;
      this._serverCertificate.internalValue = value.serverCertificate;
    }
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // check_certificate_revocation_status - computed: false, optional: true, required: false
  private _checkCertificateRevocationStatus = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatusList(this, "check_certificate_revocation_status", false);
  public get checkCertificateRevocationStatus() {
    return this._checkCertificateRevocationStatus;
  }
  public putCheckCertificateRevocationStatus(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus[] | cdktf.IResolvable) {
    this._checkCertificateRevocationStatus.internalValue = value;
  }
  public resetCheckCertificateRevocationStatus() {
    this._checkCertificateRevocationStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCertificateRevocationStatusInput() {
    return this._checkCertificateRevocationStatus.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificateList(this, "server_certificate", false);
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate[] | cdktf.IResolvable) {
    this._serverCertificate.internalValue = value;
  }
  public resetServerCertificate() {
    this._serverCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration {
  /**
  * server_certificate_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate_configuration NetworkfirewallTlsInspectionConfiguration#server_certificate_configuration}
  */
  readonly serverCertificateConfiguration?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable;
}

export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_certificate_configuration: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToTerraform, true)(struct!.serverCertificateConfiguration),
  }
}


export function networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToHclTerraform(struct?: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_certificate_configuration: {
      value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationToHclTerraform, true)(struct!.serverCertificateConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCertificateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateConfiguration = this._serverCertificateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCertificateConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCertificateConfiguration.internalValue = value.serverCertificateConfiguration;
    }
  }

  // server_certificate_configuration - computed: false, optional: true, required: false
  private _serverCertificateConfiguration = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationList(this, "server_certificate_configuration", false);
  public get serverCertificateConfiguration() {
    return this._serverCertificateConfiguration;
  }
  public putServerCertificateConfiguration(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration[] | cdktf.IResolvable) {
    this._serverCertificateConfiguration.internalValue = value;
  }
  public resetServerCertificateConfiguration() {
    this._serverCertificateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateConfigurationInput() {
    return this._serverCertificateConfiguration.internalValue;
  }
}

export class NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference {
    return new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration}
*/
export class NetworkfirewallTlsInspectionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_tls_inspection_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkfirewallTlsInspectionConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkfirewallTlsInspectionConfiguration to import
  * @param importFromId The id of the existing NetworkfirewallTlsInspectionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkfirewallTlsInspectionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_tls_inspection_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallTlsInspectionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallTlsInspectionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_tls_inspection_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.77.0',
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
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._tlsInspectionConfiguration.internalValue = config.tlsInspectionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new NetworkfirewallTlsInspectionConfigurationCertificateAuthorityList(this, "certificate_authority", false);
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new NetworkfirewallTlsInspectionConfigurationCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
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

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: NetworkfirewallTlsInspectionConfigurationEncryptionConfiguration[] | cdktf.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
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

  // number_of_associations - computed: true, optional: false, required: false
  public get numberOfAssociations() {
    return this.getNumberAttribute('number_of_associations');
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

  // tls_inspection_configuration_id - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationId() {
    return this.getStringAttribute('tls_inspection_configuration_id');
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkfirewallTlsInspectionConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkfirewallTlsInspectionConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_inspection_configuration - computed: false, optional: true, required: false
  private _tlsInspectionConfiguration = new NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationList(this, "tls_inspection_configuration", false);
  public get tlsInspectionConfiguration() {
    return this._tlsInspectionConfiguration;
  }
  public putTlsInspectionConfiguration(value: NetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration[] | cdktf.IResolvable) {
    this._tlsInspectionConfiguration.internalValue = value;
  }
  public resetTlsInspectionConfiguration() {
    this._tlsInspectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectionConfigurationInput() {
    return this._tlsInspectionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      encryption_configuration: cdktf.listMapper(networkfirewallTlsInspectionConfigurationEncryptionConfigurationToTerraform, false)(this._encryptionConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: networkfirewallTlsInspectionConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      tls_inspection_configuration: cdktf.listMapper(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToTerraform, true)(this._tlsInspectionConfiguration.internalValue),
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
      encryption_configuration: {
        value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationEncryptionConfigurationToHclTerraform, false)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkfirewallTlsInspectionConfigurationEncryptionConfigurationList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      timeouts: {
        value: networkfirewallTlsInspectionConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkfirewallTlsInspectionConfigurationTimeouts",
      },
      tls_inspection_configuration: {
        value: cdktf.listMapperHcl(networkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToHclTerraform, true)(this._tlsInspectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
