// https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxDataRepositoryAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}
  */
  readonly batchImportMetaDataOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}
  */
  readonly dataRepositoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}
  */
  readonly deleteDataInFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}
  */
  readonly fileSystemPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}
  */
  readonly importedFileChunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}
  */
  readonly s3?: FsxDataRepositoryAssociationS3;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}
  */
  readonly timeouts?: FsxDataRepositoryAssociationTimeouts;
}
export interface FsxDataRepositoryAssociationS3AutoExportPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}
  */
  readonly events?: string[];
}

export function fsxDataRepositoryAssociationS3AutoExportPolicyToTerraform(struct?: FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
  }
}

export class FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxDataRepositoryAssociationS3AutoExportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxDataRepositoryAssociationS3AutoExportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface FsxDataRepositoryAssociationS3AutoImportPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}
  */
  readonly events?: string[];
}

export function fsxDataRepositoryAssociationS3AutoImportPolicyToTerraform(struct?: FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoImportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
  }
}

export class FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxDataRepositoryAssociationS3AutoImportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxDataRepositoryAssociationS3AutoImportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface FsxDataRepositoryAssociationS3 {
  /**
  * auto_export_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}
  */
  readonly autoExportPolicy?: FsxDataRepositoryAssociationS3AutoExportPolicy;
  /**
  * auto_import_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}
  */
  readonly autoImportPolicy?: FsxDataRepositoryAssociationS3AutoImportPolicy;
}

export function fsxDataRepositoryAssociationS3ToTerraform(struct?: FsxDataRepositoryAssociationS3OutputReference | FsxDataRepositoryAssociationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_export_policy: fsxDataRepositoryAssociationS3AutoExportPolicyToTerraform(struct!.autoExportPolicy),
    auto_import_policy: fsxDataRepositoryAssociationS3AutoImportPolicyToTerraform(struct!.autoImportPolicy),
  }
}

export class FsxDataRepositoryAssociationS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxDataRepositoryAssociationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportPolicy = this._autoExportPolicy?.internalValue;
    }
    if (this._autoImportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoImportPolicy = this._autoImportPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxDataRepositoryAssociationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoExportPolicy.internalValue = undefined;
      this._autoImportPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoExportPolicy.internalValue = value.autoExportPolicy;
      this._autoImportPolicy.internalValue = value.autoImportPolicy;
    }
  }

  // auto_export_policy - computed: false, optional: true, required: false
  private _autoExportPolicy = new FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(this, "auto_export_policy");
  public get autoExportPolicy() {
    return this._autoExportPolicy;
  }
  public putAutoExportPolicy(value: FsxDataRepositoryAssociationS3AutoExportPolicy) {
    this._autoExportPolicy.internalValue = value;
  }
  public resetAutoExportPolicy() {
    this._autoExportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportPolicyInput() {
    return this._autoExportPolicy.internalValue;
  }

  // auto_import_policy - computed: false, optional: true, required: false
  private _autoImportPolicy = new FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(this, "auto_import_policy");
  public get autoImportPolicy() {
    return this._autoImportPolicy;
  }
  public putAutoImportPolicy(value: FsxDataRepositoryAssociationS3AutoImportPolicy) {
    this._autoImportPolicy.internalValue = value;
  }
  public resetAutoImportPolicy() {
    this._autoImportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportPolicyInput() {
    return this._autoImportPolicy.internalValue;
  }
}
export interface FsxDataRepositoryAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}
  */
  readonly update?: string;
}

export function fsxDataRepositoryAssociationTimeoutsToTerraform(struct?: FsxDataRepositoryAssociationTimeoutsOutputReference | FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable): any {
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

export class FsxDataRepositoryAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association aws_fsx_data_repository_association}
*/
export class FsxDataRepositoryAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_data_repository_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association aws_fsx_data_repository_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxDataRepositoryAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: FsxDataRepositoryAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_data_repository_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._batchImportMetaDataOnCreate = config.batchImportMetaDataOnCreate;
    this._dataRepositoryPath = config.dataRepositoryPath;
    this._deleteDataInFilesystem = config.deleteDataInFilesystem;
    this._fileSystemId = config.fileSystemId;
    this._fileSystemPath = config.fileSystemPath;
    this._id = config.id;
    this._importedFileChunkSize = config.importedFileChunkSize;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3.internalValue = config.s3;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // batch_import_meta_data_on_create - computed: false, optional: true, required: false
  private _batchImportMetaDataOnCreate?: boolean | cdktf.IResolvable; 
  public get batchImportMetaDataOnCreate() {
    return this.getBooleanAttribute('batch_import_meta_data_on_create');
  }
  public set batchImportMetaDataOnCreate(value: boolean | cdktf.IResolvable) {
    this._batchImportMetaDataOnCreate = value;
  }
  public resetBatchImportMetaDataOnCreate() {
    this._batchImportMetaDataOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchImportMetaDataOnCreateInput() {
    return this._batchImportMetaDataOnCreate;
  }

  // data_repository_path - computed: false, optional: false, required: true
  private _dataRepositoryPath?: string; 
  public get dataRepositoryPath() {
    return this.getStringAttribute('data_repository_path');
  }
  public set dataRepositoryPath(value: string) {
    this._dataRepositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRepositoryPathInput() {
    return this._dataRepositoryPath;
  }

  // delete_data_in_filesystem - computed: false, optional: true, required: false
  private _deleteDataInFilesystem?: boolean | cdktf.IResolvable; 
  public get deleteDataInFilesystem() {
    return this.getBooleanAttribute('delete_data_in_filesystem');
  }
  public set deleteDataInFilesystem(value: boolean | cdktf.IResolvable) {
    this._deleteDataInFilesystem = value;
  }
  public resetDeleteDataInFilesystem() {
    this._deleteDataInFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDataInFilesystemInput() {
    return this._deleteDataInFilesystem;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
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

  // imported_file_chunk_size - computed: true, optional: true, required: false
  private _importedFileChunkSize?: number; 
  public get importedFileChunkSize() {
    return this.getNumberAttribute('imported_file_chunk_size');
  }
  public set importedFileChunkSize(value: number) {
    this._importedFileChunkSize = value;
  }
  public resetImportedFileChunkSize() {
    this._importedFileChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedFileChunkSizeInput() {
    return this._importedFileChunkSize;
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new FsxDataRepositoryAssociationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: FsxDataRepositoryAssociationS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxDataRepositoryAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxDataRepositoryAssociationTimeouts) {
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
      batch_import_meta_data_on_create: cdktf.booleanToTerraform(this._batchImportMetaDataOnCreate),
      data_repository_path: cdktf.stringToTerraform(this._dataRepositoryPath),
      delete_data_in_filesystem: cdktf.booleanToTerraform(this._deleteDataInFilesystem),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      file_system_path: cdktf.stringToTerraform(this._fileSystemPath),
      id: cdktf.stringToTerraform(this._id),
      imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      s3: fsxDataRepositoryAssociationS3ToTerraform(this._s3.internalValue),
      timeouts: fsxDataRepositoryAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
