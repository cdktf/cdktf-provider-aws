/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarconnectionsHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#id CodestarconnectionsHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#name CodestarconnectionsHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#provider_endpoint CodestarconnectionsHost#provider_endpoint}
  */
  readonly providerEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#provider_type CodestarconnectionsHost#provider_type}
  */
  readonly providerType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#region CodestarconnectionsHost#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#timeouts CodestarconnectionsHost#timeouts}
  */
  readonly timeouts?: CodestarconnectionsHostTimeouts;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#vpc_configuration CodestarconnectionsHost#vpc_configuration}
  */
  readonly vpcConfiguration?: CodestarconnectionsHostVpcConfiguration;
}
export interface CodestarconnectionsHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#create CodestarconnectionsHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#delete CodestarconnectionsHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#update CodestarconnectionsHost#update}
  */
  readonly update?: string;
}

export function codestarconnectionsHostTimeoutsToTerraform(struct?: CodestarconnectionsHostTimeouts | cdktf.IResolvable): any {
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


export function codestarconnectionsHostTimeoutsToHclTerraform(struct?: CodestarconnectionsHostTimeouts | cdktf.IResolvable): any {
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

export class CodestarconnectionsHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodestarconnectionsHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CodestarconnectionsHostTimeouts | cdktf.IResolvable | undefined) {
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
export interface CodestarconnectionsHostVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#security_group_ids CodestarconnectionsHost#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#subnet_ids CodestarconnectionsHost#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#tls_certificate CodestarconnectionsHost#tls_certificate}
  */
  readonly tlsCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#vpc_id CodestarconnectionsHost#vpc_id}
  */
  readonly vpcId: string;
}

export function codestarconnectionsHostVpcConfigurationToTerraform(struct?: CodestarconnectionsHostVpcConfigurationOutputReference | CodestarconnectionsHostVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    tls_certificate: cdktf.stringToTerraform(struct!.tlsCertificate),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function codestarconnectionsHostVpcConfigurationToHclTerraform(struct?: CodestarconnectionsHostVpcConfigurationOutputReference | CodestarconnectionsHostVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_certificate: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodestarconnectionsHostVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodestarconnectionsHostVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tlsCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificate = this._tlsCertificate;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodestarconnectionsHostVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tlsCertificate = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tlsCertificate = value.tlsCertificate;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host aws_codestarconnections_host}
*/
export class CodestarconnectionsHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codestarconnections_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodestarconnectionsHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodestarconnectionsHost to import
  * @param importFromId The id of the existing CodestarconnectionsHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodestarconnectionsHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codestarconnections_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codestarconnections_host aws_codestarconnections_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodestarconnectionsHostConfig
  */
  public constructor(scope: Construct, id: string, config: CodestarconnectionsHostConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarconnections_host',
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
    this._id = config.id;
    this._name = config.name;
    this._providerEndpoint = config.providerEndpoint;
    this._providerType = config.providerType;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // provider_endpoint - computed: false, optional: false, required: true
  private _providerEndpoint?: string; 
  public get providerEndpoint() {
    return this.getStringAttribute('provider_endpoint');
  }
  public set providerEndpoint(value: string) {
    this._providerEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerEndpointInput() {
    return this._providerEndpoint;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CodestarconnectionsHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CodestarconnectionsHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration = new CodestarconnectionsHostVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: CodestarconnectionsHostVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      provider_endpoint: cdktf.stringToTerraform(this._providerEndpoint),
      provider_type: cdktf.stringToTerraform(this._providerType),
      region: cdktf.stringToTerraform(this._region),
      timeouts: codestarconnectionsHostTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_configuration: codestarconnectionsHostVpcConfigurationToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      provider_endpoint: {
        value: cdktf.stringToHclTerraform(this._providerEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
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
      timeouts: {
        value: codestarconnectionsHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodestarconnectionsHostTimeouts",
      },
      vpc_configuration: {
        value: codestarconnectionsHostVpcConfigurationToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodestarconnectionsHostVpcConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
