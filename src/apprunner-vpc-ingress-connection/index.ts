/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerVpcIngressConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#region ApprunnerVpcIngressConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}
  */
  readonly serviceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ingress_vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}
  */
  readonly ingressVpcConfiguration: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
}
export interface ApprunnerVpcIngressConnectionIngressVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}
  */
  readonly vpcId?: string;
}

export function apprunnerVpcIngressConnectionIngressVpcConfigurationToTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference | ApprunnerVpcIngressConnectionIngressVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function apprunnerVpcIngressConnectionIngressVpcConfigurationToHclTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference | ApprunnerVpcIngressConnectionIngressVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
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

export class ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerVpcIngressConnectionIngressVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcEndpointId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcEndpointId = value.vpcEndpointId;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection}
*/
export class ApprunnerVpcIngressConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_vpc_ingress_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApprunnerVpcIngressConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerVpcIngressConnection to import
  * @param importFromId The id of the existing ApprunnerVpcIngressConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerVpcIngressConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_vpc_ingress_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerVpcIngressConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerVpcIngressConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_vpc_ingress_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._region = config.region;
    this._serviceArn = config.serviceArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ingressVpcConfiguration.internalValue = config.ingressVpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
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

  // ingress_vpc_configuration - computed: false, optional: false, required: true
  private _ingressVpcConfiguration = new ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference(this, "ingress_vpc_configuration");
  public get ingressVpcConfiguration() {
    return this._ingressVpcConfiguration;
  }
  public putIngressVpcConfiguration(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration) {
    this._ingressVpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVpcConfigurationInput() {
    return this._ingressVpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_arn: cdktf.stringToTerraform(this._serviceArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      ingress_vpc_configuration: apprunnerVpcIngressConnectionIngressVpcConfigurationToTerraform(this._ingressVpcConfiguration.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_arn: {
        value: cdktf.stringToHclTerraform(this._serviceArn),
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
      ingress_vpc_configuration: {
        value: apprunnerVpcIngressConnectionIngressVpcConfigurationToHclTerraform(this._ingressVpcConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApprunnerVpcIngressConnectionIngressVpcConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
