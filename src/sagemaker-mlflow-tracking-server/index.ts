/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerMlflowTrackingServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}
  */
  readonly artifactStoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}
  */
  readonly automaticModelRegistration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#id SagemakerMlflowTrackingServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}
  */
  readonly mlflowVersion?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#region SagemakerMlflowTrackingServer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#tags_all SagemakerMlflowTrackingServer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}
  */
  readonly trackingServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}
  */
  readonly trackingServerSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server aws_sagemaker_mlflow_tracking_server}
*/
export class SagemakerMlflowTrackingServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_mlflow_tracking_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerMlflowTrackingServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerMlflowTrackingServer to import
  * @param importFromId The id of the existing SagemakerMlflowTrackingServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_mlflow_tracking_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_mlflow_tracking_server aws_sagemaker_mlflow_tracking_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerMlflowTrackingServerConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerMlflowTrackingServerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_mlflow_tracking_server',
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
    this._artifactStoreUri = config.artifactStoreUri;
    this._automaticModelRegistration = config.automaticModelRegistration;
    this._id = config.id;
    this._mlflowVersion = config.mlflowVersion;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trackingServerName = config.trackingServerName;
    this._trackingServerSize = config.trackingServerSize;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // artifact_store_uri - computed: false, optional: false, required: true
  private _artifactStoreUri?: string; 
  public get artifactStoreUri() {
    return this.getStringAttribute('artifact_store_uri');
  }
  public set artifactStoreUri(value: string) {
    this._artifactStoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreUriInput() {
    return this._artifactStoreUri;
  }

  // automatic_model_registration - computed: false, optional: true, required: false
  private _automaticModelRegistration?: boolean | cdktf.IResolvable; 
  public get automaticModelRegistration() {
    return this.getBooleanAttribute('automatic_model_registration');
  }
  public set automaticModelRegistration(value: boolean | cdktf.IResolvable) {
    this._automaticModelRegistration = value;
  }
  public resetAutomaticModelRegistration() {
    this._automaticModelRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticModelRegistrationInput() {
    return this._automaticModelRegistration;
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

  // mlflow_version - computed: true, optional: true, required: false
  private _mlflowVersion?: string; 
  public get mlflowVersion() {
    return this.getStringAttribute('mlflow_version');
  }
  public set mlflowVersion(value: string) {
    this._mlflowVersion = value;
  }
  public resetMlflowVersion() {
    this._mlflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowVersionInput() {
    return this._mlflowVersion;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // tracking_server_name - computed: false, optional: false, required: true
  private _trackingServerName?: string; 
  public get trackingServerName() {
    return this.getStringAttribute('tracking_server_name');
  }
  public set trackingServerName(value: string) {
    this._trackingServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingServerNameInput() {
    return this._trackingServerName;
  }

  // tracking_server_size - computed: false, optional: true, required: false
  private _trackingServerSize?: string; 
  public get trackingServerSize() {
    return this.getStringAttribute('tracking_server_size');
  }
  public set trackingServerSize(value: string) {
    this._trackingServerSize = value;
  }
  public resetTrackingServerSize() {
    this._trackingServerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingServerSizeInput() {
    return this._trackingServerSize;
  }

  // tracking_server_url - computed: true, optional: false, required: false
  public get trackingServerUrl() {
    return this.getStringAttribute('tracking_server_url');
  }

  // weekly_maintenance_window_start - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string; 
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_store_uri: cdktf.stringToTerraform(this._artifactStoreUri),
      automatic_model_registration: cdktf.booleanToTerraform(this._automaticModelRegistration),
      id: cdktf.stringToTerraform(this._id),
      mlflow_version: cdktf.stringToTerraform(this._mlflowVersion),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tracking_server_name: cdktf.stringToTerraform(this._trackingServerName),
      tracking_server_size: cdktf.stringToTerraform(this._trackingServerSize),
      weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_store_uri: {
        value: cdktf.stringToHclTerraform(this._artifactStoreUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_model_registration: {
        value: cdktf.booleanToHclTerraform(this._automaticModelRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mlflow_version: {
        value: cdktf.stringToHclTerraform(this._mlflowVersion),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      tracking_server_name: {
        value: cdktf.stringToHclTerraform(this._trackingServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracking_server_size: {
        value: cdktf.stringToHclTerraform(this._trackingServerSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly_maintenance_window_start: {
        value: cdktf.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
