// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DataSync
*/
export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}
  */
  readonly serverHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}
  */
  readonly subdirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags_all DatasyncLocationNfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * mount_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#mount_options DatasyncLocationNfs#mount_options}
  */
  readonly mountOptions?: DatasyncLocationNfsMountOptions;
  /**
  * on_prem_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
  */
  readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
}
export interface DatasyncLocationNfsMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#version DatasyncLocationNfs#version}
  */
  readonly version?: string;
}

export function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptionsOutputReference | DatasyncLocationNfsMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DatasyncLocationNfsMountOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DatasyncLocationNfsMountOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationNfsMountOptions | undefined) {
    if (value === undefined) {
      this._version = undefined;
    }
    else {
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatasyncLocationNfsOnPremConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
  */
  readonly agentArns: string[];
}

export function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfigOutputReference | DatasyncLocationNfsOnPremConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.agentArns),
  }
}

export class DatasyncLocationNfsOnPremConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DatasyncLocationNfsOnPremConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._agentArns) {
      hasAnyValues = true;
      internalValueResult.agentArns = this._agentArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationNfsOnPremConfig | undefined) {
    if (value === undefined) {
      this._agentArns = undefined;
    }
    else {
      this._agentArns = value.agentArns;
    }
  }

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns?: string[]; 
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}
*/
export class DatasyncLocationNfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_nfs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationNfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_nfs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._mountOptions.internalValue = config.mountOptions;
    this._onPremConfig.internalValue = config.onPremConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname?: string; 
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname;
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new DatasyncLocationNfsMountOptionsOutputReference(this as any, "mount_options", true);
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationNfsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // on_prem_config - computed: false, optional: false, required: true
  private _onPremConfig = new DatasyncLocationNfsOnPremConfigOutputReference(this as any, "on_prem_config", true);
  public get onPremConfig() {
    return this._onPremConfig;
  }
  public putOnPremConfig(value: DatasyncLocationNfsOnPremConfig) {
    this._onPremConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConfigInput() {
    return this._onPremConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      mount_options: datasyncLocationNfsMountOptionsToTerraform(this._mountOptions.internalValue),
      on_prem_config: datasyncLocationNfsOnPremConfigToTerraform(this._onPremConfig.internalValue),
    };
  }
}
