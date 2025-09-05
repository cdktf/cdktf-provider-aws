/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceLogSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription#directory_id DirectoryServiceLogSubscription#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription#id DirectoryServiceLogSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription#log_group_name DirectoryServiceLogSubscription#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription#region DirectoryServiceLogSubscription#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription aws_directory_service_log_subscription}
*/
export class DirectoryServiceLogSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_log_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryServiceLogSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryServiceLogSubscription to import
  * @param importFromId The id of the existing DirectoryServiceLogSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryServiceLogSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_directory_service_log_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/directory_service_log_subscription aws_directory_service_log_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceLogSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceLogSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_log_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._logGroupName = config.logGroupName;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
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

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
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
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
