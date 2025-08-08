/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsguruServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#region DevopsguruServiceIntegration#region}
  */
  readonly region?: string;
  /**
  * kms_server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}
  */
  readonly kmsServerSideEncryption?: DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable;
  /**
  * logs_anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}
  */
  readonly logsAnomalyDetection?: DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable;
  /**
  * ops_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}
  */
  readonly opsCenter?: DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable;
}
export interface DevopsguruServiceIntegrationKmsServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}
  */
  readonly type?: string;
}

export function devopsguruServiceIntegrationKmsServerSideEncryptionToTerraform(struct?: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    opt_in_status: cdktf.stringToTerraform(struct!.optInStatus),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function devopsguruServiceIntegrationKmsServerSideEncryptionToHclTerraform(struct?: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opt_in_status: {
      value: cdktf.stringToHclTerraform(struct!.optInStatus),
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

export class DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._optInStatus = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._optInStatus = value.optInStatus;
      this._type = value.type;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
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

export class DevopsguruServiceIntegrationKmsServerSideEncryptionList extends cdktf.ComplexList {
  public internalValue? : DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable

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
  public get(index: number): DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference {
    return new DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsguruServiceIntegrationLogsAnomalyDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
}

export function devopsguruServiceIntegrationLogsAnomalyDetectionToTerraform(struct?: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opt_in_status: cdktf.stringToTerraform(struct!.optInStatus),
  }
}


export function devopsguruServiceIntegrationLogsAnomalyDetectionToHclTerraform(struct?: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opt_in_status: {
      value: cdktf.stringToHclTerraform(struct!.optInStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optInStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optInStatus = value.optInStatus;
    }
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }
}

export class DevopsguruServiceIntegrationLogsAnomalyDetectionList extends cdktf.ComplexList {
  public internalValue? : DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable

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
  public get(index: number): DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference {
    return new DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsguruServiceIntegrationOpsCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
  */
  readonly optInStatus?: string;
}

export function devopsguruServiceIntegrationOpsCenterToTerraform(struct?: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opt_in_status: cdktf.stringToTerraform(struct!.optInStatus),
  }
}


export function devopsguruServiceIntegrationOpsCenterToHclTerraform(struct?: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opt_in_status: {
      value: cdktf.stringToHclTerraform(struct!.optInStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsguruServiceIntegrationOpsCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optInStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.optInStatus = this._optInStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optInStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optInStatus = value.optInStatus;
    }
  }

  // opt_in_status - computed: true, optional: true, required: false
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  public resetOptInStatus() {
    this._optInStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }
}

export class DevopsguruServiceIntegrationOpsCenterList extends cdktf.ComplexList {
  public internalValue? : DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable

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
  public get(index: number): DevopsguruServiceIntegrationOpsCenterOutputReference {
    return new DevopsguruServiceIntegrationOpsCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}
*/
export class DevopsguruServiceIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsguruServiceIntegration to import
  * @param importFromId The id of the existing DevopsguruServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsguruServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsguruServiceIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DevopsguruServiceIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
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
    this._region = config.region;
    this._kmsServerSideEncryption.internalValue = config.kmsServerSideEncryption;
    this._logsAnomalyDetection.internalValue = config.logsAnomalyDetection;
    this._opsCenter.internalValue = config.opsCenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kms_server_side_encryption - computed: false, optional: true, required: false
  private _kmsServerSideEncryption = new DevopsguruServiceIntegrationKmsServerSideEncryptionList(this, "kms_server_side_encryption", false);
  public get kmsServerSideEncryption() {
    return this._kmsServerSideEncryption;
  }
  public putKmsServerSideEncryption(value: DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable) {
    this._kmsServerSideEncryption.internalValue = value;
  }
  public resetKmsServerSideEncryption() {
    this._kmsServerSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsServerSideEncryptionInput() {
    return this._kmsServerSideEncryption.internalValue;
  }

  // logs_anomaly_detection - computed: false, optional: true, required: false
  private _logsAnomalyDetection = new DevopsguruServiceIntegrationLogsAnomalyDetectionList(this, "logs_anomaly_detection", false);
  public get logsAnomalyDetection() {
    return this._logsAnomalyDetection;
  }
  public putLogsAnomalyDetection(value: DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable) {
    this._logsAnomalyDetection.internalValue = value;
  }
  public resetLogsAnomalyDetection() {
    this._logsAnomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAnomalyDetectionInput() {
    return this._logsAnomalyDetection.internalValue;
  }

  // ops_center - computed: false, optional: true, required: false
  private _opsCenter = new DevopsguruServiceIntegrationOpsCenterList(this, "ops_center", false);
  public get opsCenter() {
    return this._opsCenter;
  }
  public putOpsCenter(value: DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable) {
    this._opsCenter.internalValue = value;
  }
  public resetOpsCenter() {
    this._opsCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsCenterInput() {
    return this._opsCenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      kms_server_side_encryption: cdktf.listMapper(devopsguruServiceIntegrationKmsServerSideEncryptionToTerraform, true)(this._kmsServerSideEncryption.internalValue),
      logs_anomaly_detection: cdktf.listMapper(devopsguruServiceIntegrationLogsAnomalyDetectionToTerraform, true)(this._logsAnomalyDetection.internalValue),
      ops_center: cdktf.listMapper(devopsguruServiceIntegrationOpsCenterToTerraform, true)(this._opsCenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_server_side_encryption: {
        value: cdktf.listMapperHcl(devopsguruServiceIntegrationKmsServerSideEncryptionToHclTerraform, true)(this._kmsServerSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsguruServiceIntegrationKmsServerSideEncryptionList",
      },
      logs_anomaly_detection: {
        value: cdktf.listMapperHcl(devopsguruServiceIntegrationLogsAnomalyDetectionToHclTerraform, true)(this._logsAnomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsguruServiceIntegrationLogsAnomalyDetectionList",
      },
      ops_center: {
        value: cdktf.listMapperHcl(devopsguruServiceIntegrationOpsCenterToHclTerraform, true)(this._opsCenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsguruServiceIntegrationOpsCenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
