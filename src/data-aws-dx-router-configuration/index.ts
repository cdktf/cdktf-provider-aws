/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDxRouterConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration#id DataAwsDxRouterConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration#region DataAwsDxRouterConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}
  */
  readonly routerTypeIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}
  */
  readonly virtualInterfaceId: string;
}
export interface DataAwsDxRouterConfigurationRouter {
}

export function dataAwsDxRouterConfigurationRouterToTerraform(struct?: DataAwsDxRouterConfigurationRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDxRouterConfigurationRouterToHclTerraform(struct?: DataAwsDxRouterConfigurationRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDxRouterConfigurationRouterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDxRouterConfigurationRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDxRouterConfigurationRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // router_type_identifier - computed: true, optional: false, required: false
  public get routerTypeIdentifier() {
    return this.getStringAttribute('router_type_identifier');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getStringAttribute('software');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // xslt_template_name - computed: true, optional: false, required: false
  public get xsltTemplateName() {
    return this.getStringAttribute('xslt_template_name');
  }

  // xslt_template_name_for_mac_sec - computed: true, optional: false, required: false
  public get xsltTemplateNameForMacSec() {
    return this.getStringAttribute('xslt_template_name_for_mac_sec');
  }
}

export class DataAwsDxRouterConfigurationRouterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDxRouterConfigurationRouterOutputReference {
    return new DataAwsDxRouterConfigurationRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration aws_dx_router_configuration}
*/
export class DataAwsDxRouterConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_router_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDxRouterConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDxRouterConfiguration to import
  * @param importFromId The id of the existing DataAwsDxRouterConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDxRouterConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dx_router_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/dx_router_configuration aws_dx_router_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDxRouterConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDxRouterConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_router_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._region = config.region;
    this._routerTypeIdentifier = config.routerTypeIdentifier;
    this._virtualInterfaceId = config.virtualInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_router_config - computed: true, optional: false, required: false
  public get customerRouterConfig() {
    return this.getStringAttribute('customer_router_config');
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

  // router - computed: true, optional: false, required: false
  private _router = new DataAwsDxRouterConfigurationRouterList(this, "router", false);
  public get router() {
    return this._router;
  }

  // router_type_identifier - computed: false, optional: false, required: true
  private _routerTypeIdentifier?: string; 
  public get routerTypeIdentifier() {
    return this.getStringAttribute('router_type_identifier');
  }
  public set routerTypeIdentifier(value: string) {
    this._routerTypeIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeIdentifierInput() {
    return this._routerTypeIdentifier;
  }

  // virtual_interface_id - computed: false, optional: false, required: true
  private _virtualInterfaceId?: string; 
  public get virtualInterfaceId() {
    return this.getStringAttribute('virtual_interface_id');
  }
  public set virtualInterfaceId(value: string) {
    this._virtualInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInterfaceIdInput() {
    return this._virtualInterfaceId;
  }

  // virtual_interface_name - computed: true, optional: false, required: false
  public get virtualInterfaceName() {
    return this.getStringAttribute('virtual_interface_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      router_type_identifier: cdktf.stringToTerraform(this._routerTypeIdentifier),
      virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_type_identifier: {
        value: cdktf.stringToHclTerraform(this._routerTypeIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_interface_id: {
        value: cdktf.stringToHclTerraform(this._virtualInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
