/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}
  */
  readonly efsFileSystemArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}
  */
  readonly fileSystemAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}
  */
  readonly inTransitEncryption?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#region DatasyncLocationEfs#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ec2_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}
  */
  readonly ec2Config: DatasyncLocationEfsEc2Config;
}
export interface DatasyncLocationEfsEc2Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}
  */
  readonly subnetArn: string;
}

export function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2ConfigOutputReference | DatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupArns),
    subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
  }
}


export function datasyncLocationEfsEc2ConfigToHclTerraform(struct?: DatasyncLocationEfsEc2ConfigOutputReference | DatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_arn: {
      value: cdktf.stringToHclTerraform(struct!.subnetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationEfsEc2ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationEfsEc2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupArns = this._securityGroupArns;
    }
    if (this._subnetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetArn = this._subnetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationEfsEc2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupArns = undefined;
      this._subnetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupArns = value.securityGroupArns;
      this._subnetArn = value.subnetArn;
    }
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_arns'));
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // subnet_arn - computed: false, optional: false, required: true
  private _subnetArn?: string; 
  public get subnetArn() {
    return this.getStringAttribute('subnet_arn');
  }
  public set subnetArn(value: string) {
    this._subnetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnInput() {
    return this._subnetArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs aws_datasync_location_efs}
*/
export class DatasyncLocationEfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_efs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationEfs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationEfs to import
  * @param importFromId The id of the existing DatasyncLocationEfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationEfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_efs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_efs aws_datasync_location_efs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationEfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_efs',
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
    this._accessPointArn = config.accessPointArn;
    this._efsFileSystemArn = config.efsFileSystemArn;
    this._fileSystemAccessRoleArn = config.fileSystemAccessRoleArn;
    this._id = config.id;
    this._inTransitEncryption = config.inTransitEncryption;
    this._region = config.region;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ec2Config.internalValue = config.ec2Config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_arn - computed: false, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // efs_file_system_arn - computed: false, optional: false, required: true
  private _efsFileSystemArn?: string; 
  public get efsFileSystemArn() {
    return this.getStringAttribute('efs_file_system_arn');
  }
  public set efsFileSystemArn(value: string) {
    this._efsFileSystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemArnInput() {
    return this._efsFileSystemArn;
  }

  // file_system_access_role_arn - computed: false, optional: true, required: false
  private _fileSystemAccessRoleArn?: string; 
  public get fileSystemAccessRoleArn() {
    return this.getStringAttribute('file_system_access_role_arn');
  }
  public set fileSystemAccessRoleArn(value: string) {
    this._fileSystemAccessRoleArn = value;
  }
  public resetFileSystemAccessRoleArn() {
    this._fileSystemAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessRoleArnInput() {
    return this._fileSystemAccessRoleArn;
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

  // in_transit_encryption - computed: false, optional: true, required: false
  private _inTransitEncryption?: string; 
  public get inTransitEncryption() {
    return this.getStringAttribute('in_transit_encryption');
  }
  public set inTransitEncryption(value: string) {
    this._inTransitEncryption = value;
  }
  public resetInTransitEncryption() {
    this._inTransitEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTransitEncryptionInput() {
    return this._inTransitEncryption;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // ec2_config - computed: false, optional: false, required: true
  private _ec2Config = new DatasyncLocationEfsEc2ConfigOutputReference(this, "ec2_config");
  public get ec2Config() {
    return this._ec2Config;
  }
  public putEc2Config(value: DatasyncLocationEfsEc2Config) {
    this._ec2Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigInput() {
    return this._ec2Config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_arn: cdktf.stringToTerraform(this._accessPointArn),
      efs_file_system_arn: cdktf.stringToTerraform(this._efsFileSystemArn),
      file_system_access_role_arn: cdktf.stringToTerraform(this._fileSystemAccessRoleArn),
      id: cdktf.stringToTerraform(this._id),
      in_transit_encryption: cdktf.stringToTerraform(this._inTransitEncryption),
      region: cdktf.stringToTerraform(this._region),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      ec2_config: datasyncLocationEfsEc2ConfigToTerraform(this._ec2Config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_arn: {
        value: cdktf.stringToHclTerraform(this._accessPointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      efs_file_system_arn: {
        value: cdktf.stringToHclTerraform(this._efsFileSystemArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_access_role_arn: {
        value: cdktf.stringToHclTerraform(this._fileSystemAccessRoleArn),
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
      in_transit_encryption: {
        value: cdktf.stringToHclTerraform(this._inTransitEncryption),
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
      subdirectory: {
        value: cdktf.stringToHclTerraform(this._subdirectory),
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
      ec2_config: {
        value: datasyncLocationEfsEc2ConfigToHclTerraform(this._ec2Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationEfsEc2ConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
