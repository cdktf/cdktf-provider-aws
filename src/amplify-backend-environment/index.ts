/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyBackendEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#app_id AmplifyBackendEnvironment#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#deployment_artifacts AmplifyBackendEnvironment#deployment_artifacts}
  */
  readonly deploymentArtifacts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#environment_name AmplifyBackendEnvironment#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#id AmplifyBackendEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#region AmplifyBackendEnvironment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#stack_name AmplifyBackendEnvironment#stack_name}
  */
  readonly stackName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment aws_amplify_backend_environment}
*/
export class AmplifyBackendEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_amplify_backend_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmplifyBackendEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmplifyBackendEnvironment to import
  * @param importFromId The id of the existing AmplifyBackendEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmplifyBackendEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_amplify_backend_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/amplify_backend_environment aws_amplify_backend_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyBackendEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyBackendEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_amplify_backend_environment',
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
    this._appId = config.appId;
    this._deploymentArtifacts = config.deploymentArtifacts;
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._region = config.region;
    this._stackName = config.stackName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deployment_artifacts - computed: true, optional: true, required: false
  private _deploymentArtifacts?: string; 
  public get deploymentArtifacts() {
    return this.getStringAttribute('deployment_artifacts');
  }
  public set deploymentArtifacts(value: string) {
    this._deploymentArtifacts = value;
  }
  public resetDeploymentArtifacts() {
    this._deploymentArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentArtifactsInput() {
    return this._deploymentArtifacts;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // stack_name - computed: true, optional: true, required: false
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  public resetStackName() {
    this._stackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      deployment_artifacts: cdktf.stringToTerraform(this._deploymentArtifacts),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      stack_name: cdktf.stringToTerraform(this._stackName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_artifacts: {
        value: cdktf.stringToHclTerraform(this._deploymentArtifacts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      stack_name: {
        value: cdktf.stringToHclTerraform(this._stackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
