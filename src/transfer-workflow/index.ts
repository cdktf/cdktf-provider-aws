/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#region TransferWorkflow#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * on_exception_steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}
  */
  readonly onExceptionSteps?: TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}
  */
  readonly steps: TransferWorkflowSteps[] | cdktf.IResolvable;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_location: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationList",
    },
    s3_file_location: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite_existing: cdktf.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    destination_file_location: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktf.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
    }
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsCustomStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function transferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCustomStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    target: cdktf.stringToTerraform(struct!.target),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function transferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCustomStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCustomStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCustomStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationList",
    },
    s3_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite_existing: cdktf.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    type: cdktf.stringToTerraform(struct!.type),
    destination_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktf.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
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
    destination_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
    }
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsDeleteStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDeleteStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDeleteStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDeleteStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDeleteStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowOnExceptionStepsTagStepDetailsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
  */
  readonly value: string;
}

export function transferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function transferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TransferWorkflowOnExceptionStepsTagStepDetailsTagsList extends cdktf.ComplexList {
  public internalValue? : TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable

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
  public get(index: number): TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference {
    return new TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowOnExceptionStepsTagStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable;
}

export function transferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference | TransferWorkflowOnExceptionStepsTagStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktf.listMapper(transferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform, true)(struct!.tags),
  }
}


export function transferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference | TransferWorkflowOnExceptionStepsTagStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(transferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsTagStepDetailsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface TransferWorkflowOnExceptionSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type: string;
  /**
  * copy_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: TransferWorkflowOnExceptionStepsCopyStepDetails;
  /**
  * custom_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
  */
  readonly customStepDetails?: TransferWorkflowOnExceptionStepsCustomStepDetails;
  /**
  * decrypt_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: TransferWorkflowOnExceptionStepsDecryptStepDetails;
  /**
  * delete_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: TransferWorkflowOnExceptionStepsDeleteStepDetails;
  /**
  * tag_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: TransferWorkflowOnExceptionStepsTagStepDetails;
}

export function transferWorkflowOnExceptionStepsToTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    copy_step_details: transferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct!.copyStepDetails),
    custom_step_details: transferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct!.customStepDetails),
    decrypt_step_details: transferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct!.decryptStepDetails),
    delete_step_details: transferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct!.deleteStepDetails),
    tag_step_details: transferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct!.tagStepDetails),
  }
}


export function transferWorkflowOnExceptionStepsToHclTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_step_details: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsList",
    },
    custom_step_details: {
      value: transferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsCustomStepDetailsList",
    },
    decrypt_step_details: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsList",
    },
    delete_step_details: {
      value: transferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsDeleteStepDetailsList",
    },
    tag_step_details: {
      value: transferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowOnExceptionStepsTagStepDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWorkflowOnExceptionSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // copy_step_details - computed: false, optional: true, required: false
  private _copyStepDetails = new TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: TransferWorkflowOnExceptionStepsCopyStepDetails) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: false, optional: true, required: false
  private _customStepDetails = new TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: TransferWorkflowOnExceptionStepsCustomStepDetails) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: false, optional: true, required: false
  private _decryptStepDetails = new TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: TransferWorkflowOnExceptionStepsDecryptStepDetails) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: false, optional: true, required: false
  private _deleteStepDetails = new TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: TransferWorkflowOnExceptionStepsDeleteStepDetails) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: false, optional: true, required: false
  private _tagStepDetails = new TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: TransferWorkflowOnExceptionStepsTagStepDetails) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }
}

export class TransferWorkflowOnExceptionStepsList extends cdktf.ComplexList {
  public internalValue? : TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable

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
  public get(index: number): TransferWorkflowOnExceptionStepsOutputReference {
    return new TransferWorkflowOnExceptionStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocation {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_location: transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationList",
    },
    s3_file_location: {
      value: transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsCopyStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
}

export function transferWorkflowStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsOutputReference | TransferWorkflowStepsCopyStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite_existing: cdktf.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    destination_file_location: transferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
  }
}


export function transferWorkflowStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsOutputReference | TransferWorkflowStepsCopyStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktf.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: transferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsDestinationFileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
    }
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsCustomStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function transferWorkflowStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowStepsCustomStepDetailsOutputReference | TransferWorkflowStepsCustomStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    target: cdktf.stringToTerraform(struct!.target),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function transferWorkflowStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCustomStepDetailsOutputReference | TransferWorkflowStepsCustomStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCustomStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsCustomStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCustomStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationList",
    },
    s3_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsDecryptStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
}

export function transferWorkflowStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsOutputReference | TransferWorkflowStepsDecryptStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite_existing: cdktf.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    type: cdktf.stringToTerraform(struct!.type),
    destination_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
  }
}


export function transferWorkflowStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsOutputReference | TransferWorkflowStepsDecryptStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktf.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
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
    destination_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
    }
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsDeleteStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowStepsDeleteStepDetailsOutputReference | TransferWorkflowStepsDeleteStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDeleteStepDetailsOutputReference | TransferWorkflowStepsDeleteStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDeleteStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsDeleteStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDeleteStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowStepsTagStepDetailsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
  */
  readonly value: string;
}

export function transferWorkflowStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function transferWorkflowStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class TransferWorkflowStepsTagStepDetailsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TransferWorkflowStepsTagStepDetailsTagsList extends cdktf.ComplexList {
  public internalValue? : TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable

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
  public get(index: number): TransferWorkflowStepsTagStepDetailsTagsOutputReference {
    return new TransferWorkflowStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowStepsTagStepDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable;
}

export function transferWorkflowStepsTagStepDetailsToTerraform(struct?: TransferWorkflowStepsTagStepDetailsOutputReference | TransferWorkflowStepsTagStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_file_location: cdktf.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktf.listMapper(transferWorkflowStepsTagStepDetailsTagsToTerraform, true)(struct!.tags),
  }
}


export function transferWorkflowStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetailsOutputReference | TransferWorkflowStepsTagStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(transferWorkflowStepsTagStepDetailsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsTagStepDetailsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsTagStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferWorkflowStepsTagStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsTagStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
    }
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new TransferWorkflowStepsTagStepDetailsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface TransferWorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type: string;
  /**
  * copy_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: TransferWorkflowStepsCopyStepDetails;
  /**
  * custom_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
  */
  readonly customStepDetails?: TransferWorkflowStepsCustomStepDetails;
  /**
  * decrypt_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: TransferWorkflowStepsDecryptStepDetails;
  /**
  * delete_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: TransferWorkflowStepsDeleteStepDetails;
  /**
  * tag_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: TransferWorkflowStepsTagStepDetails;
}

export function transferWorkflowStepsToTerraform(struct?: TransferWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    copy_step_details: transferWorkflowStepsCopyStepDetailsToTerraform(struct!.copyStepDetails),
    custom_step_details: transferWorkflowStepsCustomStepDetailsToTerraform(struct!.customStepDetails),
    decrypt_step_details: transferWorkflowStepsDecryptStepDetailsToTerraform(struct!.decryptStepDetails),
    delete_step_details: transferWorkflowStepsDeleteStepDetailsToTerraform(struct!.deleteStepDetails),
    tag_step_details: transferWorkflowStepsTagStepDetailsToTerraform(struct!.tagStepDetails),
  }
}


export function transferWorkflowStepsToHclTerraform(struct?: TransferWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_step_details: {
      value: transferWorkflowStepsCopyStepDetailsToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsList",
    },
    custom_step_details: {
      value: transferWorkflowStepsCustomStepDetailsToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsCustomStepDetailsList",
    },
    decrypt_step_details: {
      value: transferWorkflowStepsDecryptStepDetailsToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsList",
    },
    delete_step_details: {
      value: transferWorkflowStepsDeleteStepDetailsToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsDeleteStepDetailsList",
    },
    tag_step_details: {
      value: transferWorkflowStepsTagStepDetailsToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWorkflowStepsTagStepDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWorkflowSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // copy_step_details - computed: false, optional: true, required: false
  private _copyStepDetails = new TransferWorkflowStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: TransferWorkflowStepsCopyStepDetails) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: false, optional: true, required: false
  private _customStepDetails = new TransferWorkflowStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: TransferWorkflowStepsCustomStepDetails) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: false, optional: true, required: false
  private _decryptStepDetails = new TransferWorkflowStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: TransferWorkflowStepsDecryptStepDetails) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: false, optional: true, required: false
  private _deleteStepDetails = new TransferWorkflowStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: TransferWorkflowStepsDeleteStepDetails) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: false, optional: true, required: false
  private _tagStepDetails = new TransferWorkflowStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: TransferWorkflowStepsTagStepDetails) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }
}

export class TransferWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : TransferWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): TransferWorkflowStepsOutputReference {
    return new TransferWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow aws_transfer_workflow}
*/
export class TransferWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferWorkflow to import
  * @param importFromId The id of the existing TransferWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow aws_transfer_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: TransferWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_workflow',
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
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._onExceptionSteps.internalValue = config.onExceptionSteps;
    this._steps.internalValue = config.steps;
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

  // on_exception_steps - computed: false, optional: true, required: false
  private _onExceptionSteps = new TransferWorkflowOnExceptionStepsList(this, "on_exception_steps", false);
  public get onExceptionSteps() {
    return this._onExceptionSteps;
  }
  public putOnExceptionSteps(value: TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable) {
    this._onExceptionSteps.internalValue = value;
  }
  public resetOnExceptionSteps() {
    this._onExceptionSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExceptionStepsInput() {
    return this._onExceptionSteps.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new TransferWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: TransferWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      on_exception_steps: cdktf.listMapper(transferWorkflowOnExceptionStepsToTerraform, true)(this._onExceptionSteps.internalValue),
      steps: cdktf.listMapper(transferWorkflowStepsToTerraform, true)(this._steps.internalValue),
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
      on_exception_steps: {
        value: cdktf.listMapperHcl(transferWorkflowOnExceptionStepsToHclTerraform, true)(this._onExceptionSteps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWorkflowOnExceptionStepsList",
      },
      steps: {
        value: cdktf.listMapperHcl(transferWorkflowStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWorkflowStepsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
