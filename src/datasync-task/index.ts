/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}
  */
  readonly destinationLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#id DatasyncTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#name DatasyncTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}
  */
  readonly sourceLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#tags DatasyncTask#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#tags_all DatasyncTask#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * excludes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}
  */
  readonly excludes?: DatasyncTaskExcludes;
  /**
  * includes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#includes DatasyncTask#includes}
  */
  readonly includes?: DatasyncTaskIncludes;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#options DatasyncTask#options}
  */
  readonly options?: DatasyncTaskOptions;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}
  */
  readonly schedule?: DatasyncTaskSchedule;
  /**
  * task_report_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}
  */
  readonly taskReportConfig?: DatasyncTaskTaskReportConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#timeouts DatasyncTask#timeouts}
  */
  readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#value DatasyncTask#value}
  */
  readonly value?: string;
}

export function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasyncTaskExcludesToHclTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskExcludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasyncTaskIncludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#value DatasyncTask#value}
  */
  readonly value?: string;
}

export function datasyncTaskIncludesToTerraform(struct?: DatasyncTaskIncludesOutputReference | DatasyncTaskIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datasyncTaskIncludesToHclTerraform(struct?: DatasyncTaskIncludesOutputReference | DatasyncTaskIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskIncludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DatasyncTaskOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#atime DatasyncTask#atime}
  */
  readonly atime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}
  */
  readonly bytesPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#gid DatasyncTask#gid}
  */
  readonly gid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}
  */
  readonly mtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}
  */
  readonly objectTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}
  */
  readonly overwriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}
  */
  readonly posixPermissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}
  */
  readonly preserveDeletedFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}
  */
  readonly preserveDevices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}
  */
  readonly securityDescriptorCopyFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}
  */
  readonly taskQueueing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}
  */
  readonly transferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#uid DatasyncTask#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}
  */
  readonly verifyMode?: string;
}

export function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atime: cdktf.stringToTerraform(struct!.atime),
    bytes_per_second: cdktf.numberToTerraform(struct!.bytesPerSecond),
    gid: cdktf.stringToTerraform(struct!.gid),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mtime: cdktf.stringToTerraform(struct!.mtime),
    object_tags: cdktf.stringToTerraform(struct!.objectTags),
    overwrite_mode: cdktf.stringToTerraform(struct!.overwriteMode),
    posix_permissions: cdktf.stringToTerraform(struct!.posixPermissions),
    preserve_deleted_files: cdktf.stringToTerraform(struct!.preserveDeletedFiles),
    preserve_devices: cdktf.stringToTerraform(struct!.preserveDevices),
    security_descriptor_copy_flags: cdktf.stringToTerraform(struct!.securityDescriptorCopyFlags),
    task_queueing: cdktf.stringToTerraform(struct!.taskQueueing),
    transfer_mode: cdktf.stringToTerraform(struct!.transferMode),
    uid: cdktf.stringToTerraform(struct!.uid),
    verify_mode: cdktf.stringToTerraform(struct!.verifyMode),
  }
}


export function datasyncTaskOptionsToHclTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atime: {
      value: cdktf.stringToHclTerraform(struct!.atime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_per_second: {
      value: cdktf.numberToHclTerraform(struct!.bytesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gid: {
      value: cdktf.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtime: {
      value: cdktf.stringToHclTerraform(struct!.mtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_tags: {
      value: cdktf.stringToHclTerraform(struct!.objectTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_mode: {
      value: cdktf.stringToHclTerraform(struct!.overwriteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posix_permissions: {
      value: cdktf.stringToHclTerraform(struct!.posixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_deleted_files: {
      value: cdktf.stringToHclTerraform(struct!.preserveDeletedFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_devices: {
      value: cdktf.stringToHclTerraform(struct!.preserveDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_descriptor_copy_flags: {
      value: cdktf.stringToHclTerraform(struct!.securityDescriptorCopyFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_queueing: {
      value: cdktf.stringToHclTerraform(struct!.taskQueueing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_mode: {
      value: cdktf.stringToHclTerraform(struct!.transferMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_mode: {
      value: cdktf.stringToHclTerraform(struct!.verifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atime = this._atime;
    }
    if (this._bytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesPerSecond = this._bytesPerSecond;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._mtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtime = this._mtime;
    }
    if (this._objectTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTags = this._objectTags;
    }
    if (this._overwriteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteMode = this._overwriteMode;
    }
    if (this._posixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixPermissions = this._posixPermissions;
    }
    if (this._preserveDeletedFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDeletedFiles = this._preserveDeletedFiles;
    }
    if (this._preserveDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDevices = this._preserveDevices;
    }
    if (this._securityDescriptorCopyFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDescriptorCopyFlags = this._securityDescriptorCopyFlags;
    }
    if (this._taskQueueing !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskQueueing = this._taskQueueing;
    }
    if (this._transferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferMode = this._transferMode;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._verifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyMode = this._verifyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atime = undefined;
      this._bytesPerSecond = undefined;
      this._gid = undefined;
      this._logLevel = undefined;
      this._mtime = undefined;
      this._objectTags = undefined;
      this._overwriteMode = undefined;
      this._posixPermissions = undefined;
      this._preserveDeletedFiles = undefined;
      this._preserveDevices = undefined;
      this._securityDescriptorCopyFlags = undefined;
      this._taskQueueing = undefined;
      this._transferMode = undefined;
      this._uid = undefined;
      this._verifyMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atime = value.atime;
      this._bytesPerSecond = value.bytesPerSecond;
      this._gid = value.gid;
      this._logLevel = value.logLevel;
      this._mtime = value.mtime;
      this._objectTags = value.objectTags;
      this._overwriteMode = value.overwriteMode;
      this._posixPermissions = value.posixPermissions;
      this._preserveDeletedFiles = value.preserveDeletedFiles;
      this._preserveDevices = value.preserveDevices;
      this._securityDescriptorCopyFlags = value.securityDescriptorCopyFlags;
      this._taskQueueing = value.taskQueueing;
      this._transferMode = value.transferMode;
      this._uid = value.uid;
      this._verifyMode = value.verifyMode;
    }
  }

  // atime - computed: false, optional: true, required: false
  private _atime?: string; 
  public get atime() {
    return this.getStringAttribute('atime');
  }
  public set atime(value: string) {
    this._atime = value;
  }
  public resetAtime() {
    this._atime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime;
  }

  // bytes_per_second - computed: false, optional: true, required: false
  private _bytesPerSecond?: number; 
  public get bytesPerSecond() {
    return this.getNumberAttribute('bytes_per_second');
  }
  public set bytesPerSecond(value: number) {
    this._bytesPerSecond = value;
  }
  public resetBytesPerSecond() {
    this._bytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesPerSecondInput() {
    return this._bytesPerSecond;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mtime - computed: false, optional: true, required: false
  private _mtime?: string; 
  public get mtime() {
    return this.getStringAttribute('mtime');
  }
  public set mtime(value: string) {
    this._mtime = value;
  }
  public resetMtime() {
    this._mtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime;
  }

  // object_tags - computed: false, optional: true, required: false
  private _objectTags?: string; 
  public get objectTags() {
    return this.getStringAttribute('object_tags');
  }
  public set objectTags(value: string) {
    this._objectTags = value;
  }
  public resetObjectTags() {
    this._objectTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTagsInput() {
    return this._objectTags;
  }

  // overwrite_mode - computed: false, optional: true, required: false
  private _overwriteMode?: string; 
  public get overwriteMode() {
    return this.getStringAttribute('overwrite_mode');
  }
  public set overwriteMode(value: string) {
    this._overwriteMode = value;
  }
  public resetOverwriteMode() {
    this._overwriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteModeInput() {
    return this._overwriteMode;
  }

  // posix_permissions - computed: false, optional: true, required: false
  private _posixPermissions?: string; 
  public get posixPermissions() {
    return this.getStringAttribute('posix_permissions');
  }
  public set posixPermissions(value: string) {
    this._posixPermissions = value;
  }
  public resetPosixPermissions() {
    this._posixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixPermissionsInput() {
    return this._posixPermissions;
  }

  // preserve_deleted_files - computed: false, optional: true, required: false
  private _preserveDeletedFiles?: string; 
  public get preserveDeletedFiles() {
    return this.getStringAttribute('preserve_deleted_files');
  }
  public set preserveDeletedFiles(value: string) {
    this._preserveDeletedFiles = value;
  }
  public resetPreserveDeletedFiles() {
    this._preserveDeletedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDeletedFilesInput() {
    return this._preserveDeletedFiles;
  }

  // preserve_devices - computed: false, optional: true, required: false
  private _preserveDevices?: string; 
  public get preserveDevices() {
    return this.getStringAttribute('preserve_devices');
  }
  public set preserveDevices(value: string) {
    this._preserveDevices = value;
  }
  public resetPreserveDevices() {
    this._preserveDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDevicesInput() {
    return this._preserveDevices;
  }

  // security_descriptor_copy_flags - computed: true, optional: true, required: false
  private _securityDescriptorCopyFlags?: string; 
  public get securityDescriptorCopyFlags() {
    return this.getStringAttribute('security_descriptor_copy_flags');
  }
  public set securityDescriptorCopyFlags(value: string) {
    this._securityDescriptorCopyFlags = value;
  }
  public resetSecurityDescriptorCopyFlags() {
    this._securityDescriptorCopyFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDescriptorCopyFlagsInput() {
    return this._securityDescriptorCopyFlags;
  }

  // task_queueing - computed: false, optional: true, required: false
  private _taskQueueing?: string; 
  public get taskQueueing() {
    return this.getStringAttribute('task_queueing');
  }
  public set taskQueueing(value: string) {
    this._taskQueueing = value;
  }
  public resetTaskQueueing() {
    this._taskQueueing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskQueueingInput() {
    return this._taskQueueing;
  }

  // transfer_mode - computed: false, optional: true, required: false
  private _transferMode?: string; 
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }
  public set transferMode(value: string) {
    this._transferMode = value;
  }
  public resetTransferMode() {
    this._transferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferModeInput() {
    return this._transferMode;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // verify_mode - computed: false, optional: true, required: false
  private _verifyMode?: string; 
  public get verifyMode() {
    return this.getStringAttribute('verify_mode');
  }
  public set verifyMode(value: string) {
    this._verifyMode = value;
  }
  public resetVerifyMode() {
    this._verifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyModeInput() {
    return this._verifyMode;
  }
}
export interface DatasyncTaskSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}


export function datasyncTaskScheduleToHclTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_expression: {
      value: cdktf.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduleExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface DatasyncTaskTaskReportConfigReportOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#deleted_override DatasyncTask#deleted_override}
  */
  readonly deletedOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#skipped_override DatasyncTask#skipped_override}
  */
  readonly skippedOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#transferred_override DatasyncTask#transferred_override}
  */
  readonly transferredOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#verified_override DatasyncTask#verified_override}
  */
  readonly verifiedOverride?: string;
}

export function datasyncTaskTaskReportConfigReportOverridesToTerraform(struct?: DatasyncTaskTaskReportConfigReportOverridesOutputReference | DatasyncTaskTaskReportConfigReportOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deleted_override: cdktf.stringToTerraform(struct!.deletedOverride),
    skipped_override: cdktf.stringToTerraform(struct!.skippedOverride),
    transferred_override: cdktf.stringToTerraform(struct!.transferredOverride),
    verified_override: cdktf.stringToTerraform(struct!.verifiedOverride),
  }
}


export function datasyncTaskTaskReportConfigReportOverridesToHclTerraform(struct?: DatasyncTaskTaskReportConfigReportOverridesOutputReference | DatasyncTaskTaskReportConfigReportOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deleted_override: {
      value: cdktf.stringToHclTerraform(struct!.deletedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skipped_override: {
      value: cdktf.stringToHclTerraform(struct!.skippedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transferred_override: {
      value: cdktf.stringToHclTerraform(struct!.transferredOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verified_override: {
      value: cdktf.stringToHclTerraform(struct!.verifiedOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskTaskReportConfigReportOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskTaskReportConfigReportOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedOverride = this._deletedOverride;
    }
    if (this._skippedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedOverride = this._skippedOverride;
    }
    if (this._transferredOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferredOverride = this._transferredOverride;
    }
    if (this._verifiedOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiedOverride = this._verifiedOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskTaskReportConfigReportOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deletedOverride = undefined;
      this._skippedOverride = undefined;
      this._transferredOverride = undefined;
      this._verifiedOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deletedOverride = value.deletedOverride;
      this._skippedOverride = value.skippedOverride;
      this._transferredOverride = value.transferredOverride;
      this._verifiedOverride = value.verifiedOverride;
    }
  }

  // deleted_override - computed: false, optional: true, required: false
  private _deletedOverride?: string; 
  public get deletedOverride() {
    return this.getStringAttribute('deleted_override');
  }
  public set deletedOverride(value: string) {
    this._deletedOverride = value;
  }
  public resetDeletedOverride() {
    this._deletedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedOverrideInput() {
    return this._deletedOverride;
  }

  // skipped_override - computed: false, optional: true, required: false
  private _skippedOverride?: string; 
  public get skippedOverride() {
    return this.getStringAttribute('skipped_override');
  }
  public set skippedOverride(value: string) {
    this._skippedOverride = value;
  }
  public resetSkippedOverride() {
    this._skippedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedOverrideInput() {
    return this._skippedOverride;
  }

  // transferred_override - computed: false, optional: true, required: false
  private _transferredOverride?: string; 
  public get transferredOverride() {
    return this.getStringAttribute('transferred_override');
  }
  public set transferredOverride(value: string) {
    this._transferredOverride = value;
  }
  public resetTransferredOverride() {
    this._transferredOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferredOverrideInput() {
    return this._transferredOverride;
  }

  // verified_override - computed: false, optional: true, required: false
  private _verifiedOverride?: string; 
  public get verifiedOverride() {
    return this.getStringAttribute('verified_override');
  }
  public set verifiedOverride(value: string) {
    this._verifiedOverride = value;
  }
  public resetVerifiedOverride() {
    this._verifiedOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedOverrideInput() {
    return this._verifiedOverride;
  }
}
export interface DatasyncTaskTaskReportConfigS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}
  */
  readonly bucketAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}
  */
  readonly s3BucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}
  */
  readonly subdirectory?: string;
}

export function datasyncTaskTaskReportConfigS3DestinationToTerraform(struct?: DatasyncTaskTaskReportConfigS3DestinationOutputReference | DatasyncTaskTaskReportConfigS3Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
    s3_bucket_arn: cdktf.stringToTerraform(struct!.s3BucketArn),
    subdirectory: cdktf.stringToTerraform(struct!.subdirectory),
  }
}


export function datasyncTaskTaskReportConfigS3DestinationToHclTerraform(struct?: DatasyncTaskTaskReportConfigS3DestinationOutputReference | DatasyncTaskTaskReportConfigS3Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_access_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdirectory: {
      value: cdktf.stringToHclTerraform(struct!.subdirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskTaskReportConfigS3DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskTaskReportConfigS3Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccessRoleArn = this._bucketAccessRoleArn;
    }
    if (this._s3BucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketArn = this._s3BucketArn;
    }
    if (this._subdirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdirectory = this._subdirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskTaskReportConfigS3Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketAccessRoleArn = undefined;
      this._s3BucketArn = undefined;
      this._subdirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketAccessRoleArn = value.bucketAccessRoleArn;
      this._s3BucketArn = value.s3BucketArn;
      this._subdirectory = value.subdirectory;
    }
  }

  // bucket_access_role_arn - computed: false, optional: false, required: true
  private _bucketAccessRoleArn?: string; 
  public get bucketAccessRoleArn() {
    return this.getStringAttribute('bucket_access_role_arn');
  }
  public set bucketAccessRoleArn(value: string) {
    this._bucketAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccessRoleArnInput() {
    return this._bucketAccessRoleArn;
  }

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn?: string; 
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn;
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }
}
export interface DatasyncTaskTaskReportConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}
  */
  readonly reportLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#s3_object_versioning DatasyncTask#s3_object_versioning}
  */
  readonly s3ObjectVersioning?: string;
  /**
  * report_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#report_overrides DatasyncTask#report_overrides}
  */
  readonly reportOverrides?: DatasyncTaskTaskReportConfigReportOverrides;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#s3_destination DatasyncTask#s3_destination}
  */
  readonly s3Destination: DatasyncTaskTaskReportConfigS3Destination;
}

export function datasyncTaskTaskReportConfigToTerraform(struct?: DatasyncTaskTaskReportConfigOutputReference | DatasyncTaskTaskReportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktf.stringToTerraform(struct!.outputType),
    report_level: cdktf.stringToTerraform(struct!.reportLevel),
    s3_object_versioning: cdktf.stringToTerraform(struct!.s3ObjectVersioning),
    report_overrides: datasyncTaskTaskReportConfigReportOverridesToTerraform(struct!.reportOverrides),
    s3_destination: datasyncTaskTaskReportConfigS3DestinationToTerraform(struct!.s3Destination),
  }
}


export function datasyncTaskTaskReportConfigToHclTerraform(struct?: DatasyncTaskTaskReportConfigOutputReference | DatasyncTaskTaskReportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_level: {
      value: cdktf.stringToHclTerraform(struct!.reportLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_versioning: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_overrides: {
      value: datasyncTaskTaskReportConfigReportOverridesToHclTerraform(struct!.reportOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncTaskTaskReportConfigReportOverridesList",
    },
    s3_destination: {
      value: datasyncTaskTaskReportConfigS3DestinationToHclTerraform(struct!.s3Destination),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncTaskTaskReportConfigS3DestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskTaskReportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncTaskTaskReportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._reportLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportLevel = this._reportLevel;
    }
    if (this._s3ObjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersioning = this._s3ObjectVersioning;
    }
    if (this._reportOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOverrides = this._reportOverrides?.internalValue;
    }
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskTaskReportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
      this._reportLevel = undefined;
      this._s3ObjectVersioning = undefined;
      this._reportOverrides.internalValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
      this._reportLevel = value.reportLevel;
      this._s3ObjectVersioning = value.s3ObjectVersioning;
      this._reportOverrides.internalValue = value.reportOverrides;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // report_level - computed: false, optional: true, required: false
  private _reportLevel?: string; 
  public get reportLevel() {
    return this.getStringAttribute('report_level');
  }
  public set reportLevel(value: string) {
    this._reportLevel = value;
  }
  public resetReportLevel() {
    this._reportLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportLevelInput() {
    return this._reportLevel;
  }

  // s3_object_versioning - computed: false, optional: true, required: false
  private _s3ObjectVersioning?: string; 
  public get s3ObjectVersioning() {
    return this.getStringAttribute('s3_object_versioning');
  }
  public set s3ObjectVersioning(value: string) {
    this._s3ObjectVersioning = value;
  }
  public resetS3ObjectVersioning() {
    this._s3ObjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersioningInput() {
    return this._s3ObjectVersioning;
  }

  // report_overrides - computed: false, optional: true, required: false
  private _reportOverrides = new DatasyncTaskTaskReportConfigReportOverridesOutputReference(this, "report_overrides");
  public get reportOverrides() {
    return this._reportOverrides;
  }
  public putReportOverrides(value: DatasyncTaskTaskReportConfigReportOverrides) {
    this._reportOverrides.internalValue = value;
  }
  public resetReportOverrides() {
    this._reportOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOverridesInput() {
    return this._reportOverrides.internalValue;
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination = new DatasyncTaskTaskReportConfigS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: DatasyncTaskTaskReportConfigS3Destination) {
    this._s3Destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}
export interface DatasyncTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#create DatasyncTask#create}
  */
  readonly create?: string;
}

export function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function datasyncTaskTimeoutsToHclTerraform(struct?: DatasyncTaskTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task aws_datasync_task}
*/
export class DatasyncTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncTask to import
  * @param importFromId The id of the existing DatasyncTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/datasync_task aws_datasync_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_task',
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
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._id = config.id;
    this._name = config.name;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludes.internalValue = config.excludes;
    this._includes.internalValue = config.includes;
    this._options.internalValue = config.options;
    this._schedule.internalValue = config.schedule;
    this._taskReportConfig.internalValue = config.taskReportConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string; 
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn;
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn?: string; 
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationArnInput() {
    return this._destinationLocationArn;
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

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn?: string; 
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationArnInput() {
    return this._sourceLocationArn;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new DatasyncTaskExcludesOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: DatasyncTaskExcludes) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new DatasyncTaskIncludesOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: DatasyncTaskIncludes) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DatasyncTaskOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DatasyncTaskOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DatasyncTaskScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DatasyncTaskSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // task_report_config - computed: false, optional: true, required: false
  private _taskReportConfig = new DatasyncTaskTaskReportConfigOutputReference(this, "task_report_config");
  public get taskReportConfig() {
    return this._taskReportConfig;
  }
  public putTaskReportConfig(value: DatasyncTaskTaskReportConfig) {
    this._taskReportConfig.internalValue = value;
  }
  public resetTaskReportConfig() {
    this._taskReportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskReportConfigInput() {
    return this._taskReportConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatasyncTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatasyncTaskTimeouts) {
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
      cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
      destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      excludes: datasyncTaskExcludesToTerraform(this._excludes.internalValue),
      includes: datasyncTaskIncludesToTerraform(this._includes.internalValue),
      options: datasyncTaskOptionsToTerraform(this._options.internalValue),
      schedule: datasyncTaskScheduleToTerraform(this._schedule.internalValue),
      task_report_config: datasyncTaskTaskReportConfigToTerraform(this._taskReportConfig.internalValue),
      timeouts: datasyncTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch_log_group_arn: {
        value: cdktf.stringToHclTerraform(this._cloudwatchLogGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_location_arn: {
        value: cdktf.stringToHclTerraform(this._destinationLocationArn),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_location_arn: {
        value: cdktf.stringToHclTerraform(this._sourceLocationArn),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      excludes: {
        value: datasyncTaskExcludesToHclTerraform(this._excludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncTaskExcludesList",
      },
      includes: {
        value: datasyncTaskIncludesToHclTerraform(this._includes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncTaskIncludesList",
      },
      options: {
        value: datasyncTaskOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncTaskOptionsList",
      },
      schedule: {
        value: datasyncTaskScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncTaskScheduleList",
      },
      task_report_config: {
        value: datasyncTaskTaskReportConfigToHclTerraform(this._taskReportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncTaskTaskReportConfigList",
      },
      timeouts: {
        value: datasyncTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
